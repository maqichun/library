//引入底部
$(function(){
	$.ajax({
		type:"get",
		url:"footer.html",
		success:function(html){
			//导入footer的css文件
			var link=document.createElement("link");
			link.rel="stylesheet";
			link.href="css/footer.css";
			document.head.appendChild(link);
			//导入代码片段
			document.getElementById("footer").innerHTML=html;
		}
	});
});