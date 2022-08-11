var black=document.getElementById('black');
var red=document.getElementById('red');
var blue=document.getElementById('blue');
var pink=document.getElementById('pink');
var purple=document.getElementById('purple');
var images=document.getElementById('main-pic');

var icons=document.getElementsByClassName('icon');

black.addEventListener('click',function(){
    images.src='image/black.png';
});

red.addEventListener('click',function(){
    images.src='image/red.png';
});

blue.addEventListener('click',function(){
    images.src='image/blue.png';
});

pink.addEventListener('click',function(){
    images.src='image/pink.png';
});

purple.addEventListener('click',function(){
    images.src='image/purple.png';
});

var timebtn=document.getElementById('time-btn');
var heartRate=document.getElementById('heartrate-btn');
var txt=document.getElementById('text');
heartRate.addEventListener('click',function(){
    txt.classList.add('hide');
    txt.classList.remove('show');
    pulsediv.classList.add('show');
    pulsediv.classList.remove('hide');

})


var today,h,s,m,H,M,S;
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
timebtn.addEventListener('click',function(){
    
    txt.classList.add('show');
    txt.classList.remove('hide');
    pulsediv.classList.add('hide');
    pulsediv.classList.remove('show');
})

setInterval(function(){
   s=s+1; 
   if(s==60)
   {
     s=0;
     m=m+1;
   }
   if(m==60)
   {
       m=0;
       h=h+1;
   }
   if(h==24)
   {
       h=0;
   }
   H=check(h);
   M=check(m);
   S=check(s);
   txt.innerHTML =  H + ":" + M + ":" + S;
},1000)

function check(i)
{
  if(i<10)
  return '0'+i;
  else
  return i;
}

