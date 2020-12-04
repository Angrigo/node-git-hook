import config from "./config";
import mkdirp from "mkdirp";
import express from "express";
import cors from "cors";

mkdirp(config.PATH);

const app = express();
app.use(cors());

app.all('/', (req, res) => {
  console.log("hello git hooks")
  //TODO: read git hook and write/update local repo
})



console.log(`GitHook running on port ${config.PORT}`)
app.listen(config.PORT || 3000);