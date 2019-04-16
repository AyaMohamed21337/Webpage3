/*

function validate() {

var username=document.getElementById("userName").value;

var rgex =  /^[A-Z][a-zA-z]{2,8}$/

if(rgex.test(username)==true)
{

	console.log(true);
}
	
else
{
console.log(false);	
}

}

*/

var c=document.getElementById("c");
var ctx=c.getContext("2d");
var w=window.innerWidth;
var h=window.innerHeight;
var angle=0;
c.width=w;
c.height=h;
ctx.fillStyle="white";
var snowNumber=300;
var snowContainer=[];


for(var i=0;i<snowNumber;i++)
{
var s={

x:Math.random()*w-20,
y:Math.random()*h-20,
r:Math.random()*2+1,
d:Math.random()*2+1,

}

snowContainer.push(s);

}


function drawSnow()
{

ctx.clearRect(0,0,w,h);
ctx.beginPath();

	for(var i=0;i<snowContainer.length;i++)
{
var s=snowContainer[i];
ctx.moveTo(s.x,s.y);
ctx.arc(s.x,s.y,s.r,0,2*Math.PI);

}
ctx.fill();
moveSnow();
}

function moveSnow()
{

angle+=0.01;

for(var i=0;i<snowContainer.length;i++)
{

	var s=snowContainer[i];
	s.y+=Math.pow(s.d,2)+1;
	if(s.y>h)
	{
snowContainer[i]={x:Math.random()*w, y:0 , r:s.r , d:s.d}

	}
}

}
setInterval(drawSnow,30)



