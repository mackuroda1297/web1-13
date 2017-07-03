//カウントダウン
var separate_time = function(time){
  var sec   = time.getSeconds();
  var min   = time.getMinutes();
  var hours = time.getHours();
  var days  = time.getDate();
  var month = time.getMonth();
  var year  = time.getFullYear();
  return [sec, min, hours, days, month, year];
}

var now = new DAte();
var counter = separate_time(now);
document.getElementById('countdown').textContent =
  countent[5] + '年' +
  countent[4] + '月' +
  countent[3] + '日' +
  countent[2] + '時' +
  countent[1] + '分' +
  countent[0] + '秒';


//遷移
function getFileName(){
  return window.location.href.split('/').pop();
}

var filename = getFileName();
var opt;
if(filename === 'other.html'){
  opt = document.querySelector('option[value="other.html"]');
}else{
  opt = document.querySelector('option[value="index.html"]');
}
opt.selected = true;

document.getElementById('from').select.onchange = function(){
  location.href = document.getElementById('form').select.value;
}


//cookie
function setCookie(c_name,value,expiredays){
  var extime = new Date().getTime();
  var cltime = new Date(extime + (60*60*24*1000*expiredays));
  var exdate = cltime.toUTCString();
  var s="";
  s += c_name +"="+ escape(value);
  s += "; path="+ location.pathname;
  if(expiredays){
    s += "; expires=" +exdate+"; ";
  }else{
    s += "; ";
  }
  doucument.cookie=s;
}

function getCookie(c_name){
  var st="";
  var ed="";
  if(0 < document.cookie.length){
    st=document.cookie.indexof(c_name + "=");
    if(st!=-1){
      st=st+c_name.length+1;
      ed=document.cookie.indexof(";",st);
      if(ed==-1) ed=document.cookie.length;
      return unescape(document.cookie.substring(st,ed));
    }
  }
  return "";
}
      
//クッキーの消去
document.getELementById('remove_cookie'.onsubmit = function(){
  setCookie('lastDate',"",0);
};
