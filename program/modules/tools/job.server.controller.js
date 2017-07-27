var http = require('http');
var cheerio = require('cheerio');

let jobObj = (function(){
  let jobSet = new Set();
  let callBackFunc = function(){};

  return {
    add(data){
      if (data.indexOf('tj.58.com') < 0) return;
      jobSet.add(data);
      callBackFunc && callBackFunc(data);
    },
    register(func){
      callBackFunc = func;
    },
    unRegister(){
      callBackFunc = function(){};
    }
  }
})();

/*url读取解析对象*/
let jobInfoObj = (function(){
  let jobInfoMap = new Map();
  let szUrlPipe = []; //管道数组，将URL压入，由定时器按照定时读取访问解析
  let iNum = 0;
  (function func(){
    iNum++;
    if (iNum > 8) {
      setTimeout(func, 10000 * (1+Math.random()));
      if (iNum === 40) {
        iNum = 0;
      };
    } else {
      if (szUrlPipe.length) {
        analysis(szUrlPipe.shift());
      };
      setTimeout(func, 10000 * Math.random());
    }
  })
})();

//根据URL访问并解析返回值
function analysis(url){
  let html = '';
  http.get(url, function(res){
    res.on('data', function(chuck){
      html += chuck;
    })
    res.on('end', function(){
      let $ = cheerio.load(html);
      try{
        $()
      }
    })
  })
}