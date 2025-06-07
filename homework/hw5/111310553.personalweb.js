import { Application } from "https://deno.land/x/oak/mod.ts";
const app = new Application();
app.use((ctx) => {
  console.log("url =", ctx.request.url);
  const pathname = ctx.request.url.pathname;
  switch (pathname) {
    case "/":
      ctx.response.body = `
        <html>
        <body>
          <h1>自我介紹</h1>
          <ol>
            <li><a href="/name">姓名</a></li>
            <li><a href="/age">年齡</a></li>
            <li><a href="/gender">性別</a></li>
            <li><a href="/studentnumber">學號</a></li>
          </ol>
        </body>
        </html>
      `;
      break;
    case "/name":
      ctx.response.body = "王淳禧";
      break;
    case "/age":
      ctx.response.body = "19";
      break;
    case "/gender":
      ctx.response.body = "男";
      break;
    case "/studentnumber":
      ctx.response.body = "111310553";
      break;
    default:
      ctx.response.status = 404;
      ctx.response.body = "找不到頁面";
  }
});
console.log("Server running at http://127.0.0.1:8000");
await app.listen({ port: 8000 });
