$(document).ready(function(){
    $(".searchdropdown").click(function(){
        $(".searchdropdown-list ul").toggleClass("active");
    });

// show the selected category in search
    $(".searchdropdown-list ul li").click(function(){
        var icon_text = $(this).html();
        $(".searchdefault-option").html(icon_text);
    });
    // hide the category dropdown when click outside of dropdown( like in another place in body )
    $(document).on("click",function(event){
        if(!$(event.target).closest(".searchdropdown").length){
            $(".searchdropdown-list ul").removeClass("active")
        }
    });

});