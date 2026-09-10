// scripts/generate_all.js 【修复：读取全部文章all_posts，包含hidden私密文章】
hexo.extend.generator.register('all-posts', function(locals){
  // 重点：locals.all_posts 包含所有文章，包括 hidden:true
  const posts = locals.all_posts.sort('-date');
  let listHtml = `
<!DOCTYPE html>
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
    // 只提取简单基础字段，切断循环引用
    const title = post.title;
    const path = post.path;
    const tags = post.tags ? post.tags.map(t => t.name) : [];
    const isPrivate = tags.includes("private");
    const label = isPrivate ? "🔒私密" : "";
    listHtml += `<li><a href="${path}">${title}</a> ${label}</li>\n`;
  })

  listHtml += `
</ul>
</body>
</html>`;

  return {
    path: 'all.html',
    data: listHtml
  }
})
