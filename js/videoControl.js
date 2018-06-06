var v1=document.getElementById("mymp4");
        var img=document.querySelector("#mp4>img");
        var div=document.getElementById("mp4");
        $(".video").click(function(){
            div.style.display="block";
            v1.play();
        });
        $(div).mouseover(function(){
            img.style.display="block";
        });
        $(div).mouseleave(function(){
            img.style.display="none";
        });
        img.onclick=function(){
            if(v1.paused){
                div.style.display="none";
            }else{
                v1.pause();
                div.style.display="none";
            }
        };