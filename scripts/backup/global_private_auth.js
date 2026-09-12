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

  // 监听提交按钮点击：用户手动提交密码的时候，保存密码到全局
  window.addEventListener('load', ()=>{
    const timer = setInterval(()=>{
      const input = document.querySelector('input[type="password"]');
      const btn = document.querySelector('button[type="submit"]');
      if(input && btn){
        btn.onclick = function(){
          const pwdVal = input.value.trim();
          if(pwdVal){
            // 等一小会，判断解密成功后再保存
            setTimeout(()=>{
              // 页面密码框消失=解密成功
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
  })
}catch(err){
  console.log("全局授权脚本异常",err);
}
})();
</script>
`;
return html.replace('</body>', injectJs + '</body>');
})
