

var Width = 1020 ,moved=0 ,offset = 4;
// check();
$(".span-1").click(function () {
    moved++;
    $(".handler").css('left',-Width*moved-offset);
    check();
});
$(".span-2").click(function () {
    moved--;
    $(".handler").css('left',-Width*moved-offset);
    check();
});
function check() {
    if(moved==0){
        $(".span-2").css('display','none');
    }else{
        $(".span-2").css('display','block');
    }
    if(moved==4){
        $(".span-1").css('display','none')
    }else{
        $(".span-1").css('display','block')
    }
}
