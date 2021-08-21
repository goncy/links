import fs from "fs";
import path from "path";

export function getFiles(folder: string) {
  return fs.readdirSync(path.join(process.cwd(), "content", folder));
}

export function getFilePath(folder: string, file: string) {
  return path.join(path.join(process.cwd(), "content", folder), file);
}

export function readFile(folder: string, file: string) {
  const postFilePath = path.join(path.join(process.cwd(), "content", folder), file);
  const source = fs.readFileSync(postFilePath);

  return fs.readFileSync(source);
}
