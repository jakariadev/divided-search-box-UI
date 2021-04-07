$(document).ready(function(){

    const li = document.querySelectorAll('li.dropdown a');
    const btn = document.querySelector('.nav-btn');
    const nav = document.querySelector('ul.nav');

    btn.addEventListener('click', e=>{
        nav.classList.toggle('toggle');
    })


    li.forEach((each)=>{
        if (each.nextElementSibling !== null) {
            each.addEventListener('click', e=>{
                if (window.innerWidth < 768) {
                e.target.parentElement.classList.toggle("active");  
                }
            })
        }
    })


















    $(".dropdown").click(function(){
        $(".searchdropdown-list ul").toggleClass("active");
    });

    $(".searchli1").click(function(){
        $(".sidedropdown ul").toggleClass("active");
    });
// show the selected category in search
    // $(".searchdropdown-list ul li").click(function(){
    //     var icon_text = $(this).html();
    //     $(".searchdefault-option").html(icon_text);
    // });
    // hide the category dropdown when click outside of dropdown( like in another place in body )
    $(document).on("click",function(event){
        if(!$(event.target).closest(".dropdown").length){
            $(".searchdropdown-list ul").removeClass("active")
        }
    });

});

