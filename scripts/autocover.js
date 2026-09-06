/**
 * Hexo Butterfly autocover 构建脚本
 * scripts/autocover.js
 */
hexo.extend.filter.register('after_post_render', function(data){
  if (data.cover !== undefined) return data;
  const content = data.content;
  const reg = /<img.*?src="(.*?)"/;
  const res = content.match(reg);
  if(res && res[1]){
    data.cover = res[1];
  }
  return data;
});
