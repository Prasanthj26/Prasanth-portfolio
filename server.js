const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const startPort = Number(process.env.PORT) || 4174;
let currentPort = startPort;

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
};

const server = http.createServer((request, response) => {
  if (request.method === "POST" && request.url === "/upload-photo") {
    // 1. Origin / Host check to prevent cross-site CSRF file overwrites
    const origin = request.headers.origin;
    if (origin) {
      try {
        const originUrl = new URL(origin);
        if (originUrl.hostname !== "localhost" && originUrl.hostname !== "127.0.0.1") {
          response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Forbidden: Cross-origin request rejected");
          return;
        }
      } catch {
        response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Bad Request: Invalid origin header");
        return;
      }
    }

    // 2. Optional authorization token check
    const requiredToken = process.env.PORTFOLIO_SECRET || process.env.ADMIN_TOKEN;
    if (requiredToken) {
      const authHeader = request.headers.authorization;
      if (authHeader !== `Bearer ${requiredToken}`) {
        response.writeHead(401, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Unauthorized: Invalid authorization token");
        return;
      }
    }

    const chunks = [];
    let totalBytes = 0;
    const maxBytes = 8 * 1024 * 1024;

    request.on("data", (chunk) => {
      totalBytes += chunk.length;
      if (totalBytes > maxBytes) {
        response.writeHead(413, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Image is too large (max 8MB)");
        request.destroy();
        return;
      }

      chunks.push(chunk);
    });

    request.on("end", () => {
      const image = Buffer.concat(chunks);

      // 3. Verify magic bytes for valid image format (JPEG or PNG)
      const isJpeg = image.length > 3 && image[0] === 0xff && image[1] === 0xd8 && image[2] === 0xff;
      const isPng = image.length > 8 && image[0] === 0x89 && image[1] === 0x50 && image[2] === 0x4e && image[3] === 0x47;

      if (!isJpeg && !isPng) {
        response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Invalid image payload: only JPEG and PNG are allowed");
        return;
      }

      fs.mkdir(path.join(root, "assets"), { recursive: true }, (mkdirError) => {
        if (mkdirError) {
          response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Could not create assets folder");
          return;
        }

        // Save to profile-photo.jpg and sync to prasanth-portrait.jpg
        fs.writeFile(path.join(root, "assets", "profile-photo.jpg"), image, (writeError) => {
          if (writeError) {
            response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Could not save photo");
            return;
          }

          // Also update prasanth-portrait.jpg so git commits immediately capture the new portrait
          fs.writeFile(path.join(root, "assets", "prasanth-portrait.jpg"), image, (portraitError) => {
            if (portraitError) {
              console.warn("Could not sync prasanth-portrait.jpg:", portraitError);
            }
            response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            response.end(JSON.stringify({ saved: true, path: "assets/prasanth-portrait.jpg" }));
          });
        });
      });
    });

    return;
  }

  const host = request.headers.host || `localhost:${server.address()?.port || startPort}`;
  const urlPath = decodeURIComponent(new URL(request.url, `http://${host}`).pathname);
  const requestedPath = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const safePath = path.normalize(requestedPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, { "Content-Type": types[path.extname(filePath).toLowerCase()] || "application/octet-stream" });
    response.end(data);
  });
});

function listen(port) {
  currentPort = port;
  server.listen(port, () => {
    console.log(`Portfolio running at http://localhost:${port}`);
    console.log("Keep this window open while viewing the site.");
  });
}

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    const nextPort = currentPort + 1;
    console.log(`Port ${currentPort} is busy. Trying ${nextPort}...`);
    listen(nextPort);
    return;
  }

  throw error;
});

listen(startPort);
