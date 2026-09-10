// hbe_expire.js 24小时缓存过期
hexo.extend.filter.register('after_render:html', function(html){
  const injectScript = `
<script>
// 24小时 86400000毫秒
const EXPIRE = 86400000;
const origSetItem = Storage.prototype.setItem;
Storage.prototype.setItem = function(key, val){
  if(key.startsWith("hbe.v4")){
    const storeData = JSON.stringify({
      value:val,
      timestamp: Date.now()
    })
    return origSetItem.call(this, key, storeData);
  }
  return origSetItem.call(this,key,val);
}
const origGetItem = Storage.prototype.getItem;
Storage.prototype.getItem = function(key){
  const raw = origGetItem.call(this,key);
  if(!raw || !key.startsWith("hbe.v4")) return raw;
  try{
    const data = JSON.parse(raw);
    if(Date.now() - data.timestamp > EXPIRE){
      localStorage.removeItem(key);
      return null;
    }
    return data.value;
  }catch(e){
    return raw;
  }
}
</script>
`
  return html.replace('</head>', injectScript + '</head>')
})
