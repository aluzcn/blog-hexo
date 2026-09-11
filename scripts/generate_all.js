// scripts/generate_all.js
hexo.extend.generator.register('all-posts', function(locals){
  const posts = locals.all_posts.sort('-date');
  let listHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>全部文章</title>
</head>
<body>
<h1>全部文章列表</h1>
<ul>
`;
  posts.forEach(post => {
    const title = post.title;
    // 加前置 /，从网站根目录开始，避免all页面内路径拼接错误
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
