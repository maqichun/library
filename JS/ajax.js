//异步请求
function ajax({type,url,data,dataType}){
	//用promise来接受处理函数
	return new Promise(success=>{
		//异步的四个步骤
		let xhr = null;//创建异步对象
		if(window.XMLHttpRequest)
			xhr=new XMLHttpRequest();
		else
			xhr=new ActiveXObject("Microsoft.XMLHttp");
		//设置监听事件
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4 && xhr.status==200){
				let res=xhr.responseText;
				if(dataType === "json")
					res=JSON.parse(res);
				success(res);
			}
		}
		//打开连接
		if(data!==undefined && type==="get")
			url=url+"?"+data;
		xhr.open(type,url,true);
		if(type==="post"){//设置请求头
			xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		}
		//发送请求
		if(type==="get")
			xhr.send(null);
		else if(data!==undefined)
			xhr.send(data);
	});
}