const express = require("express");
const app = express();
const path = require("path");

// 静的ファイルを提供
app.use(express.static(path.join(__dirname, "./public")));

app.get("/file-content", (req, res) => {
  const { execute } = require("./src/model/a1/view/InitView");
  const dto = execute();
  res.send(dto.get("data"));
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
