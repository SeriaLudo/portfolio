import fs from "fs";
import path from "path";
import matter from "gray-matter";

const settingsDir = path.join(process.cwd(), "_settings");

export function getLatestSettings() {
  // Get all Markdown files from the settings directory
  const files = fs
    .readdirSync(settingsDir)
    .filter((file) => file.endsWith(".md"))
    .sort((a, b) => b.localeCompare(a)); // Sort in descending order (latest first)

  if (files.length === 0) {
    throw new Error("No settings file found in _settings/");
  }

  const latestFile = files[0]; // Get the latest file
  const filePath = path.join(settingsDir, latestFile);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);

  return data;
}
