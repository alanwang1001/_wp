export function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="zh-Hant">
    <head>
      <meta charset="UTF-8">
      <title>${title}</title>
    </head>
    <body>
      <section>
        <h1>${title}</h1>
        ${content}
      </section>
    </body>
    </html>
  `;
}
export function list(posts) {
  let listItems = posts.map(post => `
    <li>
      <a href="/post/${post.id}">${post.title}</a> 
      <small>${new Date(post.created_at).toLocaleString()}</small>
    </li>
  `).join('\n');

  return layout('貼文列表', `
    <a href="/post/new">新增貼文</a>
    <ul>${listItems}</ul>
  `);
}
export function newPost() {
  return layout('新增貼文', `
    <form action="/post" method="POST">
      <p><input type="text" name="title" placeholder="標題" required></p>
      <p><textarea name="body" placeholder="內文" required></textarea></p>
      <p><button type="submit">發表</button></p>
    </form>
  `);
}

export function show(post) {
  return layout(post.title, `
    <p><small>建立於：${new Date(post.created_at).toLocaleString()}</small></p>
    <p>${post.body}</p>
    <p><a href="/">← 回貼文列表</a></p>
  `);
}
