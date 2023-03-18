$(function(){
    let sideBar = $(".sidebar-top");
    let hamburgerIcon =  $(".hamburger");
    let xmarkIcon =  $(".x-mark");
    
    hamburgerIcon.click(function(){
        sideBar.removeClass("hide-sidebar");
        xmarkIcon.removeClass("d-none");
        xmarkIcon.css("top","5px");
        $(this).addClass("d-none");
    })

    xmarkIcon.click(function(){
        sideBar.addClass("hide-sidebar");
        $(this).addClass("d-none");
        $(this).css("top","5px");
        hamburgerIcon.removeClass("d-none");
    })


})


