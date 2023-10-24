import { IPost } from "types";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export function GET(req: Request) {
  const id = req.url.slice(req.url.lastIndexOf("/") + 1);
  const filePath = path.join(process.cwd(), "app/api", "mockData.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const filtered = JSON.parse(jsonData).filter(
    (p: IPost) => p.id.toString() === id
  );

  return filtered.length > 0
    ? NextResponse.json(filtered[0])
    : NextResponse.json(
        {
          message: `Blog with id: ${id} not found.`,
        },
        {
          status: 404,
        }
      );
}
