hexo.extend.filter.register('after_render:html', function(html){
const injectJs = `
<script>
(function(){
try{
  const GLOBAL_AUTH_KEY = "private_global_all";
  const GLOBAL_EXPIRE = 12 * 60 * 60 * 1000;
  function setGlobalPass(pwd){
    localStorage.setItem(GLOBAL_AUTH_KEY, JSON.stringify({
      pass: pwd,
      expire: Date.now() + GLOBAL_EXPIRE
    }));
  }
  function getGlobalPass(){
    const raw = localStorage.getItem(GLOBAL_AUTH_KEY);
    if(!raw) return null;
    const data = JSON.parse(raw);
    if(Date.now() > data.expire){
      localStorage.removeItem(GLOBAL_AUTH_KEY);
      return null;
    }
    return data.pass;
  }
  function autoFill(){
    const pwd = getGlobalPass();
    if(!pwd) return;
    const input = document.querySelector('input[type="password"]');
    const btn = document.querySelector('button[type="submit"]');
    if(input && btn){
      input.value = pwd;
      btn.click();
    }
  }
  function bindAuth(){
    const timer = setInterval(()=>{
      const input = document.querySelector('input[type="password"]');
      const btn = document.querySelector('button[type="submit"]');
      if(input && btn){
        btn.onclick = function(){
          const pwdVal = input.value.trim();
          if(pwdVal){
            setTimeout(()=>{
              if(!document.querySelector('input[type="password"]')){
                setGlobalPass(pwdVal);
              }
            },600)
          }
        }
        autoFill();
        clearInterval(timer);
      }
    },300);
  }
  // 首次页面加载
  window.addEventListener('load', bindAuth);
  // pjax翻页完成后重新绑定
  document.addEventListener('pjax:complete', bindAuth);
}catch(err){
  console.log("全局授权脚本异常",err);
}
})();
</script>
`;
return html.replace('</body>', injectJs + '</body>');
})
