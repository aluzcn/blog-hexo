// scripts/generate_all.js
hexo.extend.generator.register('all-posts', function(locals){
  const allRawPosts = locals.posts.toArray();
  // 去重，根据path过滤重复文章
  const seenPath = new Set();
  const posts = allRawPosts.filter(post => {
    if (seenPath.has(post.path)) return false;
    seenPath.add(post.path);
    return true;
  }).sort((a,b) => b.date - a.date);

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
