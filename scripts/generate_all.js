// scripts/generate_all.js
hexo.extend.generator.register('all-posts', function(locals){
  // Collection调用toArray()转为普通数组，再合并
  const publicPosts = locals.posts.toArray();
  const hiddenPosts = locals.hidden_posts.toArray();
  const posts = publicPosts.concat(hiddenPosts).sort((a,b) => b.date - a.date);

  let listHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>全部文章列表</title>
</head>
<body>
<h1>全部文章列表</h1>
<ul>
`;
  posts.forEach(post => {
    const title = post.title;
    const url = "/" + post.path;
    const tags = post.tags ? post.tags.map(t => t.name) : [];
    const isPrivate = tags.includes("private");
    const label = isPrivate ? "🔒私密" : "";
    listHtml += `<li><a href="${url}">${title}</a> ${label}</li>\n`;
  });
  listHtml += `</ul>
</body>
</html>`;
  return {
    path: 'all/index.html',
    data: listHtml
  }
})
