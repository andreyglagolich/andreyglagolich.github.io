$(document).ready(function () {
    let position = 2;
    let slider = [];
    let slider_selector = [];
    let slideSize = [300,585,383,300];
    let slideLeft = [-500,-160,205,850,1300,1600];
    slider.push($(".slide1"),$(".slide2"),$(".slide3"),$(".slide4"));
    slider_selector.push($("#slider_selector1"),$("#slider_selector2"), $("#slider_selector3"),$("#slider_selector4"));
    slideMove();
    
    $(".back_btn").on("click",function () {
        if(position<3){
            position+=1;
            slideMove();
            return false;
        };
    });
    
    $(".next_btn").on("click",function () {
        if(position>0){
            position-=1;
            slideMove();
            return false;
        };
    });
    
    function slideMove(){
        slider.forEach(function(element, index){
            slider[index].animate({
                left: slideLeft[index+position-1],
                top:  320-(slideSize[index+position-2]/2),
                height: slideSize[index+position-2],
                width: slideSize[index+position-2]},
                {duration:400, queue: false})
        });
        slider_selector.forEach(function(element, index){
            if(index===(3-position)) slider_selector[index].css("background-color","black");
            else slider_selector[index].css("background-color","transparent");
        });
    };
});