var Stick=function(){var a,s,t={},e=!1,i=80;return t.setRadius=function(a){i=a},t.onMouseDown=function(){a=Laya.stage.mouseX,s=Laya.stage.mouseY,e=!0,Game2.stick.visible=!0,Game2.stick.x=a,Game2.stick.y=s,Game2.stickSign.x=100,Game2.stickSign.y=100},t.onMouseMove=function(){if(!1!==e){var t=Laya.stage.mouseX-a,n=Laya.stage.mouseY-s,o=gmath.pAngle(t,n),c=i*Math.cos(o*Math.PI/180),m=i*Math.sin(o*Math.PI/180);Game2.stickSign.x=100+(Math.abs(t)>Math.abs(c)?c:t),Game2.stickSign.y=100+(Math.abs(n)>Math.abs(m)?m:n);var M=Math.abs(t)>Math.abs(c)?t-c:0,u=Math.abs(n)>Math.abs(m)?n-m:0;a+=M,s+=u,Game2.stick.x=a,Game2.stick.y=s,Game.dir=o}},t.onMouseUp=function(){e=!1,Game2.stick.visible=!1},t}();