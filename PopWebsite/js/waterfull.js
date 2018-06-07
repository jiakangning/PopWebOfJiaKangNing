//			var owrap=document.getElementById("wrap");
//			var W=document.documentElement.clientWidth || document.body.clientWidth;
			window.onload=function(){
				waterfall("wrap");
			}
//			var L=Math.floor(W/getclass(owrap)[0].clientWidth)
		        function waterfall(parent,obox){
				var owrap=document.getElementById(parent);
				//取得所有的box元素
				var obox=getclass();
				var oboxW=getclass()[0].offsetWidth;
				var screenW=1220;
				var num=Math.floor(screenW/oboxW);
//				owrap.style.cssText="width:"+num*oboxW+"px; margin: 0 auto;background: red;overflow: hidden;"
			    owrap.style.cssText="width:"+num*oboxW+"px;margin:0 auto;overflow:hidden;"
			 //创建临时数组存储box高度
			   var Heightarr=[];
			   //循环寻getclass得到的所有class名为box的元素
			   for(var i=0;i<obox.length;i++){
			   	//记录所有box的高度
			   	 var boxH=obox[i].clientHeight;
			   	 //我们从第一排开始往后要计算显示位置 left、right坐标
			   	 //先把第一排的5个元素添加完成 从第二排开始坐标位置计算
			   	 if(i<num){
			   	 	Heightarr.push(boxH);
			   	 }
			   	 else{//去除临时
			   	 	var minH=Math.min.apply(null,Heightarr);
			   	 	var min_index=getmin(minH,Heightarr);
			   	 	obox[i].style.position="absolute";
			   	 	obox[i].style.top=Heightarr[min_index]+"px";
			   	 	obox[i].style.left=obox[min_index].offsetLeft+"px";
			   	 	Heightarr[min_index] += obox[i].offsetHeight;
			   	 	
			   	 }
			   }
			}  
			   			
			
			
			function getmin(minh,heightarr){
				for(item in heightarr){
					if(heightarr[item]==minh){
						return item;
					}
				}
			}
			
			
			function getclass(){
				var arr=[];
				var otag=document.getElementsByTagName("*");
				for(var i=0;i<otag.length;i++){
					if(otag[i].className=="box"){
						arr.push(otag[i]);
											
					}
				}
				        return arr;
				       
			}
			