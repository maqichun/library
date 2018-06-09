//书籍的加载
$(function(){
    var url= location.href;
    var i = url.indexOf("?");
    var did = parseInt(url.slice(i+1).split("=")[1]);
    var reg = /^[0-9]+$/;
    if(reg.test(did)){
        $.ajax({
            type: "GET",
            url: "data/bookDetails.php",
            data:{did:did},
            dataType:"json",
            success:function (data) {
                var {did,dname,dathor,dpress,dtype,dimpower,dprogress,dtotil,dDouble,dred,dshang,img,date} = data[0];
                dimpower = dimpower == 1 ? "签约":"驻站";
                dprogress = dprogress == 1 ? "连载中":"已完结";
                //时间转换
                var date = new Date(parseInt(date));
                //位置导航
                $("#nav").html(`当前位置:
               <a href="javascript:;">首页</a>
               &gt;
               <a href="javascript:;">${dtype}</a>
               &gt;
               <a href="javascript:;">${dname}</a>`);
                //书籍具体内容
                $(".leftbox>.title").html(`<h1>${dname}</h1>
                <p>
                  <span>(共0人评价)</span>
                  <span>作者：<a href="javascript:;">${dathor}</a></span>
                </p>`
                );
                $("#content>.content_left>img").attr("src",img);
                $("#tabmenu").next().html(`更新时间：${date.toLocaleDateString()}`);
                //作品介绍
                $("#tab_content .intro").html(`${dpress}`);
                //作品信息
                $("#tab_content .message").html(`<ul class="clear">
                       <li>
                         作品分类:
                         <span class="org">${dtype}</span>
                       </li>
                       <li>
                         授权状态:
                         <span class="org">${dimpower}</span>
                       </li>
                       <li>
                         写作进程:
                         <span class="org">${dprogress}</span>
                       </li>
                       <li>
                         总 字 数:
                         <span class="org">${dtotil}万</span>
                       </li>
                       <li>
                         总 点 击:
                         <span class="org">${dDouble}万</span>
                       </li>
                       <li>
                          总 红 花:
                          <span class="org">${dred}</span>
                       </li>
                       <li>
                          总 打 赏:
                          <span class="org">${dshang}</span>
                       </li>
            </ul>`);
            },
            error:function () {
                console.log("连接错误");
            }
        })
    }else{
        alert("书籍编号出错!");
        location.href = "index.html";
    }
})

//书籍详情
$("#tabmenu>li").mouseover(function (){
    var $li = $(this);
    $li.addClass("hover").siblings().removeClass("hover");
    var index = $li.index();
    $("#tab_content").children(":eq("+index+")")
        .addClass("block").show()
        .siblings().removeClass("block").hide();
})
