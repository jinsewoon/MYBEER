$(function(){
  var indexNum, boardClassNum;
  //게시판 페이지네이션
  $(".pagination ul li:nth-of-type(2) .pageNum").css("color","#000000")
  $(".pageNum").click(function(){
    var indexNum = $(this).parent().index();
    var boardClassNum = $(this).parents(".pagination").prev().find(".board"+ indexNum +"");
    if( boardClassNum.hasClass("on") == false ){
      $("table").find("tbody").removeClass("on");
      boardClassNum.addClass("on");
      $(".pageNum").css("color","#999999");
      $(this).css("color","#000000");
    }
    console.log($(this).parents(".pagination").prev().find(".board"+ indexNum +""))
    return false;
  });
});
