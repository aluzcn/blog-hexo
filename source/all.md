---
title: 全部文章
layout: page
---
<ul id="post-list"></ul>
<script>
const rawPosts = [
{% for post in site.posts %}
{"title":"{{ post.title | escape }}","url":"{{ post.permalink }}","private":{{ post.tags.includes('private') | lower }}},
{% endfor %}
];

// 去重
const seen = new Set();
const listEl = document.getElementById('post-list');
rawPosts.forEach(p=>{
  if (!seen.has(p.url)){
    seen.add(p.url);
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = p.url;
    a.textContent = p.title;
    li.appendChild(a);
    if(p.private === true){
      li.append(" 🔒私密");
    }
    listEl.appendChild(li);
  }
})
</script>
