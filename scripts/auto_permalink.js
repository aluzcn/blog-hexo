// auto_permalink.js
hexo.extend.filter.register('before_post_render', function(post){
  if(!post.permalink && post.slug){
    post.permalink = hexo.config.url + '/' + post.slug + '/';
  }
  return post;
});
