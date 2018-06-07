            window.onload=function(){
            var ocav=document.getElementById("canvas");
			var ctx=ocav.getContext("2d");
			var W=ocav.offsetWidth;
			var H=ocav.offsetHeight;
			//创建球模型的基本参数
			var ball={
				num:10,
				ballarr:[]
			}
			//创建单个求模型
			var Par=function(x,y,r){
				fx=createnum(0);
				fy=createnum(0);
				this.x=x+fx;
				this.y=y+fy;
				this.r=r;
				this.vx=createnum(6);
				this.vy=createnum(6);
				this.alpha=1;
				this.cr=Math.ceil(Math.random()*255);
				this.cg=Math.ceil(Math.random()*255);
				this.cb=Math.ceil(Math.random()*255);
				this.color="rgba("+this.cr+","+this.cg+","+this.cb+","+this.alpha+")";
			}
			//画球
			Par.prototype={
				drow:function(){
				ctx.beginPath();
				ctx.fillStyle=this.color;
				ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
				ctx.fill();
				this.fly();
				ctx.closePath();
				},
				fly:function(){
					this.x+=this.vx;
					this.y+=this.vy;
					this.alpha*=0.9;
				}
			
			}
			var n=0;
			//鼠标移动
			ocav.onmousemove=function(ev){
				var ev=ev||event;
				var x1=ev.layerX;
				var y1=ev.layerY;
				for(i=0;i<ball.num;i++){
					n++;
					ball.ballarr[n]=new Par(x1,y1,Math.random()*5+2);
				}
			}
			function createnum(a){
				return a-Math.random()*(2*a);
			}
			function move(){
				ctx.clearRect(0,0,W,H);
				for(item in ball.ballarr){
					ball.ballarr[item].drow();
					if(ball.ballarr[item].alpha<0.1){
						ball.ballarr.shift(ball.ballarr[item]);	
						n--;
					}
				}
				requestAnimationFrame(move);
			}
			move();
		}