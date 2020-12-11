$(function(){
  //버튼 No 클릭 했을때,
  $("#intro .policy_box .button_box .txtNo").click(function(){
    $(this).parent().prev().css("display","block");
    $("#intro .policy_box .introText").css("display","none");
    $(".button_box").css("display","none")
    return false;
  });
});
