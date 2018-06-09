(function(){
	//回到顶部
	var toTop=document.getElementById("to_top");
	toTop.firstElementChild.onclick=function(e){
		e.preventDefault();//阻止默认事件,在地址栏中加字符
		window.scrollTo(0,0);
	}
})();
/*简介内容的显示隐藏*/
$("#recommend").on("click",".intro",function(){
	$(this).next().toggleClass("intro-in");
});
//主内容左侧分类效果
var $typesImg = $(".contentBox>.types>.typesList");
$typesImg.on("mouseover","a",function(){
    var img = $(this).find("img");
    var url = img.prop("src");
    var i = url.lastIndexOf(".");
	url = url.slice(0,i);
	var newUrl = url+"_active.png";
	img.prop("src",newUrl);
});
$typesImg.on("mouseout","a",function(){
    var img = $(this).find("img");
    var url = img.prop("src");
    var i = url.lastIndexOf("_");
    url = url.slice(0,i);
    var newUrl = url+".png";
    img.prop("src",newUrl);
});
//跳转详情页
function bookDetails(did) {
	location.href = "bookDetails.html?did="+did;
}
//轮播图
$.ajax({
	type:"GET",
	url:"data/index/banner.php",
	dataType:"json",
	success:function (data) {
        var $ul = $(".banner>.banner_pic>ul");
        var $ulPage = $(".banner>.banner_pic>.page_num>ul");
        var html="";
        for(var elem of data){
            var {img,did} = elem;
            html += `<li class="lf">
                <a href="javascript:;" data-did="${did}">
                    <img src="${img}">
                </a>
            </li>`;
        }
        html += `<li class="lf">
            <a href="javascript:;" data-did="${data[0].did}">
                <img src="${data[0].img}">
            </a>
        </li>`;
        $ul.html(html);
        //定义4个变量
        var LIWIDTH=700,interval=500,wait=3000,moved=0;
		//定时器
        function autoMove() {
            timer = setInterval(function(){
                move();
            },wait);
        }
        autoMove();
		//图片移动
        function move(){
            moved++;
            $ul.animate({
                left: -moved * LIWIDTH
            },interval,function () {
                if(moved == $ul.children().length-1){
                    $ul.css("left",0);
                    moved = 0;
                }
                //页码
                $ulPage.children(":eq("+moved+")").addClass("show_on")
                    .siblings().removeClass("show_on");
            });
        }
		//鼠标移入时停止轮播，移出开始
        $(".banner>.banner_pic").mouseenter(function(){
            clearInterval(timer);
            timer = null;
        }).mouseleave(function(){
            autoMove();
        });
		//点击页码换图
        $ulPage.on("click","li",function(){
            var $li = $(this);
            var i = $li.index();
            moved = i;
            $ul.stop(true).animate({
                left: -moved * LIWIDTH
            },interval,function(){
                $ulPage.children(":eq("+moved+")").addClass("show_on")
                    .siblings().removeClass("show_on");
            });
        });
		//轮播图下男女生的切换
        $(".banner>.sex_box>a").mouseover(function(){
            var $a = $(this);
            $a.addClass("sex_show").siblings("a").removeClass("sex_show");
            if($a.is(".man")){
                $("#boy").show().siblings(".man_recom").hide();
            }else{
                $("#girl").show().siblings(".man_recom").hide();
            }
        });
    },
	error:function () {
		console.log("连接错误");
    }
});
//男女生推荐
$.ajax({
    type:"GET",
    url:"data/index/m_w.php",
    dataType:"json",
    success:function (data) {
        var $boy = $("#boy");
        var $girl = $("#girl");
        var html="";
        for(var elem of data.m){
            var {did,dname,img,dpress} = elem;
            var random = parseInt(Math.random()*8901+100);
            html += `<div class="sex_info clear" data-did="${did}">
                <a href="javascript:;">
                    <div class="book_box lf">
                        <img src="${img}">
                    </div>
                </a>
                <div class="book_detail lf">
                    <p class="bd_name">
                        <a href="javascript:;" target="_blank">${dname}</a>
                    </p>
                    <p class="bd_detail">${dpress}</p>
                    <p class="bd_read">
                        <span>${random}人追读</span>
                        <a href="javascript:;" class="brown" target="_blank">免费试读</a>
                    </p>
                </div>
            </div>`;
        };
        $boy.html(html);
        var html ="";
        for(var elem of data.w){
            var {did,dname,img,dpress} = elem;
            var random = parseInt(Math.random()*8901+100);
            html += `<div class="sex_info clear" data-did="${did}">
                <a href="javascript:;">
                    <div class="book_box lf">
                        <img src="${img}">
                    </div>
                </a>
                <div class="book_detail lf">
                    <p class="bd_name">
                        <a href="javascript:;" target="_blank">${dname}</a>
                    </p>
                    <p class="bd_detail">${dpress}</p>
                    <p class="bd_read">
                        <span>${random}人追读</span>
                        <a href="javascript:;" class="brown" target="_blank">免费试读</a>
                    </p>
                </div>
            </div>`;
        };
        $girl.html(html);
        //绑定事件
        $(".sex_box").on("click","[data-did]",function(){
            var d = $(this);
            var did = d.attr("data-did");
            bookDetails(did);
        })
    },
    error:function () {
        console.log("连接错误");
    }
})
//给轮播图添加点击事件
$(".banner>.banner_pic>ul").on("click","img",function(){
   var $img = $(this);
   var did = $img.parent().attr("data-did");
   bookDetails(did);
});
//大神专区数据导入
$.ajax({
	type:"GET",
	url:"data/index/dsqu_book.php",
	dataType:"json",
	success:function(data){
		var $ul = $("#dsqu");
        var html = "";
        $.each(data,function(i,elem){
			var {did,bname,athor,img} = elem;
			html += `<li class="lf">
				<a href="javascript:;" data-did="${did}">
					<div class="book_img">
					<img src="${img}">
					</div>
					<div class="book_name">${bname}</div>
					<div class="anthor">${athor}</div>
				</a>
			</li>`;
		});
        $ul.html(html);
        $ul.on("click","a",function(e){
        	e.preventDefault();
        	var $a = $(this);
        	var did = $a.attr("data-did");
        	bookDetails(did);
		})
	},
	error:function () {
		console.log("连接错误");
    }
});


