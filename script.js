function updateOutput(){
    $("#outputPanel").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() +"</style></head><body>" + $("#htmlPanel").val() + "</body></html>"); 
    var str = $("#jsPanel").val();
};

$(".btns").hover(function(){
    $(this).addClass("hover");
},function(){
    $(this).removeClass("hover");
});
$(".btns").click(function(){
    $(this).toggleClass("active");
    $(this).removeClass("hover");
    var panelId = $(this).attr("id").replace('Btn','');
    panelId += "Panel";
    $("#" + panelId).toggleClass("hidden");

    var panelsNumber = 4 - $('.hidden').length;
    $(".panel").width($(Window).width()/panelsNumber - 5);
})

$(".panel").height($(Window).height()-$(".top").height()-9)
$(".panel").width($(Window).width()/2 - 5);

updateOutput();

$("textarea").on('change keyup paste', function(){
    updateOutput();
});