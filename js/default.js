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
  
  
