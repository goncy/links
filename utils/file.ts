import fs from "fs";
import path from "path";

export function getContentFiles(folder: string) {
  return fs.readdirSync(path.join(process.cwd(), "content", folder));
}

export function readContentFile(folder: string, file: string) {
  const filePath = path.join(path.join(process.cwd(), "content", folder), file);

  return fs.readFileSync(filePath);
}
