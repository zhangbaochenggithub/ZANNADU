$(window).scroll(function(){
    var scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
    var stair=$('.stair');
    var stair_a=$('.stair>a');
    var floors=$('.floor');
    if(scrollTop>1000){
        stair.css("height","480px");
    }else{
        stair.css("height","0px");
    }
    floors.each((i,el)=>{
        var floor=$(el);
        var offsetTop=floor.offset().top;
        if(offsetTop<=scrollTop+innerHeight/2.5){
            stair.children(':eq('+i+')').addClass('highlight').siblings().removeClass('highlight');
        }
    });
});
$('.stair').children().click(function(e){
    e.preventDefault();
    var i=$(this).index();
    var floors=$('.floor');
    var oTop=floors.children(':eq('+i+')').offset().top;
    //window.scrollTo(0,oTop);
    console.log(oTop);
    $('html,body').animate({scrollTop:oTop},500);
});