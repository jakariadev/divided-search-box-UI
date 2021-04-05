$(document).ready(function(){
    $(".dropdown").click(function(){
        $(".dropdown-list ul").toggleClass("active");
    });
// show the selected category in search
    $(".dropdown-list ul li").click(function(){
        var icon_text = $(this).html();
        $(".default-option").html(icon_text);
    });
    // hide the category dropdown when click outside of dropdown( like in another place in body )
    $(document).on("click",function(event){
        if(!$(event.target).closest(".dropdown").length){
            $(".dropdown-list ul").removeClass("active")
        }
    });

});