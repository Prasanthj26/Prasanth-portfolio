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
    const chunks = [];
    let totalBytes = 0;
    const maxBytes = 8 * 1024 * 1024;

    request.on("data", (chunk) => {
      totalBytes += chunk.length;
      if (totalBytes > maxBytes) {
        response.writeHead(413, { "Content-Type": "text/plain; charset=utf-8" });
        response.end("Image is too large");
        request.destroy();
        return;
      }

      chunks.push(chunk);
    });

    request.on("end", () => {
      const image = Buffer.concat(chunks);

      fs.mkdir(path.join(root, "assets"), { recursive: true }, (mkdirError) => {
        if (mkdirError) {
          response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
          response.end("Could not create assets folder");
          return;
        }

        fs.writeFile(path.join(root, "assets", "profile-photo.jpg"), image, (writeError) => {
          if (writeError) {
            response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
            response.end("Could not save photo");
            return;
          }

          response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
          response.end(JSON.stringify({ saved: true, path: "assets/profile-photo.jpg" }));
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
