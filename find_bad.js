const fs = require('fs');
const path = require('path');

function scan(dir, keyword){
  const list = fs.readdirSync(dir);
  for(const name of list){
    const fp = path.join(dir,name);
    const stat = fs.statSync(fp);
    if(stat.isDirectory()) scan(fp,keyword);
    else if(name.endsWith('.md')){
      const txt = fs.readFileSync(fp,'utf8');
      if(txt.includes(keyword)){
        //提取front‑matter里的title
        const fm = txt.match(/^---\r?\n([\s\S]*?)^---/m);
        let title = '(无title)';
        if(fm){
          const t = fm[1].match(/^title:\s*(.+)/m);
          if(t) title = t[1].trim().replace(/^["']|["']$/g,'');
        }
        console.log('✅找到问题文件：');
        console.log('文件路径：', fp);
        console.log('文章标题：', title);
      }
    }
  }
}
scan('./source/_posts', 'cyoy.cn:9091');
