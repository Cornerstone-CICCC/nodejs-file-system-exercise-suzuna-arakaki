// Check the README.md file for instructions to the exercise
import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer(
  (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/view-image") {
      const imagePath = path.join(__dirname, "veryhappydog.jpg");

      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(500);
          res.end("Error loading image");
          return;
        }

        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
      });
      // res.writeHead(200, { "content-type": "image/jpeg" });
      // res.end(data);
    }
  },
);

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
