import { DB } from "https://deno.land/x/sqlite/mod.ts";

const db = new DB("test.db");

db.query(`
  CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    time TEXT,
    body TEXT
  )
`);

const data = [
  { title: "Tony Stark", time: "2019-04-22", body: "passed away" },
  { title: "Black Widow", time: "2019-04-22", body: "passed away" },
  { title: "Harry Potter", time: "2001-11-16", body: "no parents" },
];

for (const post of data) {
  db.query(
    "INSERT INTO posts (title, time, body) VALUES (?, ?, ?)",
    [post.title, post.time, post.body],
  );
}

for (const [id, title, time, body] of db.query(
  "SELECT id, title, time, body FROM posts"
)) {
  console.log(`ID: ${id}, Title: ${title}, Time: ${time}, Body: ${body}`);
}

db.close();
