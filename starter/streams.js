const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  // Solution 1 -> problem is that node have to load all file in order to process it!
  // fs.readFile("test-file.txt", (err, data) => {
  //   if (err) console.log("ERROR ", err);
  //   res.end(data);

  // });

  // Solution 2: Streams
  // const readable = fs.createReadStream("test-file.txt");
  // readable.on("data", (chunck) => {
  //   res.write(chunck);
  // });

  // readable.on("end", () => {
  //   res.end();
  // });

  // readable.on("error", (err) => {
  //   console.log("ERROR ", err);
  //   res.statusCode = 500;
  //   res.end("File not found!");
  // });

  // Solution 3
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res);
  // readableSource.pipe(writeableDest)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening .... ");
});
