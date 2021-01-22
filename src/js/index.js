class Index{
    constructor(){
        // 获取大盒子
        this.o_box = document.querySelector(".banner");
        // 获取放图片的盒子
        this.o_ul = document.querySelector("#top-ul");
        // 获取所有图片
        this.o_img = this.o_ul.children;
        // 图片的数量
        this.o_num = this.o_img.length;
        //获取小图标盒子
        this.o_ol = $(".banner-list-content");
        //获取小圆点
        this.o_ol_li = $(".banner-list-content").get(0).children;
        // 设置一个当前下标
        this.cur_index = 0;
        // 设置计时器的名字
        this.timer = null;
        // 添加事件
        this.addEvent();
        // 自动轮播
        this.auto()
    }
    addEvent(){
        let that = this;
        

        for(let j = 0 ; j < this.o_num ; j ++){
            this.o_ol_li[j].onmouseenter = function(){
                // console.log(j);
                that.cur_index = j;
                if(j == 0){
                    $(".pic1").css("top",40);
                    $(".pic2").css("top",80);
                    $(".pic3").css("top",204);
                    $(".pic4").css("opacity",1);
                }else{
                    $(".pic1").css("top",80);
                    $(".pic2").css("top",50);
                    $(".pic3").css("top",264);
                    $(".pic4").css("opacity",0);
                }
                if(j == 1){
                    $(".banner_2_pic1").css("top",150);
                    $(".banner_2_pic2").css("top",213);
                    setTimeout(() => {
                        $(".banner_2_pic3").css("opacity",1);
                    }, 1000);
                }else{
                    $(".banner_2_pic1").css("top",120);
                    $(".banner_2_pic2").css("top",240);
                    $(".banner_2_pic3").css("opacity",0);
                }
                if(j == 2){
                    $(".banner_4").css("top",40);
                    $(".banner_4_pic2").css("top",180);
                }else{
                    $(".banner_4").css("top",60);
                    $(".banner_4_pic2").css("top",160);
                }
                if(j == 3){
                    $(".banner_5_pic1").css("top",0);
                    $(".banner_5_pic2").css("top",40);
                }else{
                    $(".banner_5_pic1").css("top",-20);
                    $(".banner_5_pic2").css("top",60);
                }
                that.lb();
            }
        }

    }
    lb(){
        for(let i = 0 ; i < this.o_num ; i ++){
            sport(this.o_img[i],{opacity : 0})
            this.o_ol_li[i].style.background = "rgba(0,0,0,.4)";
            this.o_ol_li[i].style.opacity = "0.6";
        }
        sport(this.o_img[this.cur_index],{opacity : 100})
        this.o_ol_li[this.cur_index].style.background = "rgba(224, 223, 223, 0.9)";
        this.o_ol_li[this.cur_index].style.opacity = "1";
    }
    // 自动轮播
    auto(){
        let that = this;
        this.timer = setInterval(() => {
            this.cur_index ++;
            if(this.cur_index == this.o_num){
                this.cur_index = 0;
            }
            if(this.cur_index == 0){
                $(".pic1").css("top",40);
                $(".pic2").css("top",80);
                $(".pic3").css("top",204);
                $(".pic4").css("opacity",1);
            }else{
                $(".pic1").css("top",80);
                $(".pic2").css("top",50);
                $(".pic3").css("top",264);
                $(".pic4").css("opacity",0);
            }
            if(this.cur_index == 1){
                $(".banner_2_pic1").css("top",150);
                $(".banner_2_pic2").css("top",213);
                setTimeout(() => {
                    $(".banner_2_pic3").css("opacity",1);
                }, 1000);
            }else{
                $(".banner_2_pic1").css("top",120);
                $(".banner_2_pic2").css("top",240);
                $(".banner_2_pic3").css("opacity",0);
            }
            if(this.cur_index == 2){
                $(".banner_4").css("top",40);
                $(".banner_4_pic2").css("top",180);
            }else{
                $(".banner_4").css("top",60);
                $(".banner_4_pic2").css("top",160);
            }
            if(this.cur_index == 3){
                $(".banner_5_pic1").css("top",0);
                $(".banner_5_pic2").css("top",40);
            }else{
                $(".banner_5_pic1").css("top",-20);
                $(".banner_5_pic2").css("top",60);
            }
            // 轮播
            this.lb()
            this.o_box.onmouseover = function(){
                clearInterval(that.timer);
            }
            this.o_box.onmouseout = function(){
                that.auto();
            }
        },3000)
    }
}

window.onload = function(){
    new Index();
}