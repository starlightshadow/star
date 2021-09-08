$(function () {
    var bannerSrc = ["images/banner0.png", "images/banner1.png", "images/banner2.png", "images/banner3.png"];
    var serverItem = [
    { itemSrc: "images/icon1.png", itmeTitle: "Python", itemText: "Python由荷兰数学和计算机科学研究学会的Guido van Rossum 于1990 年代初设计，作为一门叫做ABC语言的替代品。 [1]  Python提供了高效的高级数据结构，还能简单有效地面向对象编程。Python语法和动态类型，以及解释型语言的本质，使它成为多数平台上写脚本和快速开发应用的编程语言， [2]", itemBtn: "进入100例" },
    { itemSrc: "images/icon2.png", itmeTitle: "MySql", itemText: "MySQL是一个关系型数据库管理系统, MySQL是一种关系型数据库管理系统，关系数据库将数据保存在不同的表中，而不是将所有数据放在一个大仓库内，这样就增加了速度并提高了灵活性。MySQL所使用的 SQL 语言是用于访问数据库的最常用标准化语言。MySQL 软件采用了双授权政策，分为社区版和商业版，由于其体积小、速度快、总体拥有成本低，尤其是开放源码这一特点，一般中小型网站的开发都选择 MySQL 作为网站数据库。", itemBtn: "进入mysql" },
    { itemSrc: "images/icon3.png", itmeTitle: "进入菜鸟学习网站", itemText: "网络爬虫（又称为网页蜘蛛，网络机器人，在FOAF社区中间，更经常的称为网页追逐者），是一种按照一定的规则，自动地抓取万维网信息的程序或者脚本。另外一些不常使用的名字还有蚂蚁、自动索引、模拟程序或者蠕虫。", itemBtn: "进入学习" }];
    var recprdSrc = ["https://vd4.bdstatic.com/mda-jjiwd7250ft6x088/sc/mda-jjiwd7250ft6x088.mp4?v_from_s=hkapp-haokan-hna&amp;auth_key=1630679654-0-0-a70f9c2c68a5f1657d28a96f9b8a81f8&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1", 
    "https://vd3.bdstatic.com/mda-jisms4h2ugt8qx7c/sc/mda-jisms4h2ugt8qx7c.mp4?v_from_s=hkapp-haokan-hna&amp;auth_key=1630679752-0-0-7ef1c9706ea5f7cf05329ab254b3c337&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1", 
    "https://vd2.bdstatic.com/mda-mg9baf01btns077e/1080p/cae_h264/1625904587140635612/mda-mg9baf01btns077e.mp4?v_from_s=hkapp-haokan-hnb&amp;auth_key=1630679846-0-0-8ab53d6752b62a665e99418a6676bbb7&amp;bcevod_channel=searchbox_feed&amp;pd=1&amp;pt=3&amp;abtest=3000185_1"];
    var bannerIndex = 0;
       // 视频是暂停状态的
       var videoPlay = false;
       // 动态渲染banner图
       for (var i = 0; i < bannerSrc.length; i++) {
           // 模板字符串
           $(".banner-imgs").append(`<img src="${bannerSrc[i]}">`);
           $(".banner-btn").append(`<span>${i}</span>`);
           // 第一个的时候加上显示属性
           if (i == 0) {
               $(".banner-imgs img").addClass("select");
               $(".banner-btn span").addClass("select");
           }
       }
       // 轮播图的切换
       $(".banner-btn span").click(function () {
           // 每次点击同步显示图片的位置
           bannerIndex = $(this).index();
           console.log($(this).index());
           bannerMove();
       })
       // 自动轮播
       var bannerTime = setInterval(function () {
           // 限制 图片位置  3 0 
           bannerIndex++;
           // 到极限之后恢复到第一个位置
           if (bannerIndex > bannerSrc.length - 1) {
               bannerIndex = 0;
           }
           bannerMove();
       }, 5000)
       // 负责图片的切换
       function bannerMove() {
           // 删除所有img上面的class
           $(`.banner-imgs img`).removeClass();
           // 添加显示class
           $(`.banner-imgs img:eq(${bannerIndex})`).addClass("select");
           $(`.banner-btn span`).removeClass();
           $(`.banner-btn span:eq(${bannerIndex})`).addClass("select");
       }
       // 鼠标暂停 恢复动画
       $(".header-banner").hover(function () {
           // 放上去 清除定时器
           clearInterval(bannerTime);
       }, function () {
           // 移开 添加定时器
           bannerTime = setInterval(function () {
               // 限制 图片位置  3 0 
               bannerIndex++;
               // 到极限之后恢复到第一个位置
               if (bannerIndex > bannerSrc.length - 1) {
                   bannerIndex = 0;
               }
               bannerMove();
           }, 5000)
       })
       //左右按钮的切换
       $(".banner-btn1 img").click(function () {
           if ($(this).index() == 0) {
               console.log("点击了左边的");
               // 三元运算符 条件 ？ 成立 ：不成立 三目
               bannerIndex <= 0 ? bannerIndex = bannerSrc.length - 1 : bannerIndex--;
           } else {
               bannerIndex >= bannerSrc.length - 1 ? bannerIndex = 0 : bannerIndex++;
               console.log("点击了右边的");
           }
           bannerMove();
       })
       // 渲染服务板块
       for(var i=0;i<serverItem.length;i++){
           $(".server-item ul").append(`
           <li>
           <img src="${serverItem[i].itemSrc}" alt="">
           <h4>${serverItem[i].itmeTitle}</h4>
           <p>${serverItem[i].itemText}</p>
           <a href="https://www.runoob.com/python/python-100-examples.html">
           <button>${serverItem[i].itemBtn}</button>
           </a>
           </li>
           `)
       }
        // 渲染视频
       for(var i=0;i<recprdSrc.length;i++){
           $(".record-videos ul").append(`
           <li>
           <img src="images/suspend.png">
           <video src="${recprdSrc[i]}"></video>
           </li>
           `)
       }
       $(".record-videos ul li").click(function(){
   // 判断当前为什么状态  true 播放 
           if(videoPlay==true){
               // 暂停状态
               // 显示暂停的图片
               $(this).children("img").attr("src","images/suspend.png");
               $(this).children("img").show();
               // 视频暂停
               $(this).children("video").trigger("pause");
               // 改变状态为暂停
               videoPlay = false;
           }else{
               //开始状态
               // 变成状态为开始
               videoPlay = true;
               // 开始播放视频
               $(this).children("video").trigger("play");
               // 显示开始按钮并慢慢 隐藏
               $(this).children("img").attr("src","images/play.png");
               $(this).children("img").fadeOut();
           }
       })
   
   })