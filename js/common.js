$(function(){
  //모바일 open 버튼
  $("#wrap .m_upper .btn_box").click(function(){
    $("#wrap #m_header .sidebar").css("display","block").css("left","0");
  });
  //모바일 close 버튼
  $("#wrap #m_header .sidebar .sidebar_close_btn").click(function(){
    $(this).parent().css("left","-100%");
  });

  //모바일 드롭 메뉴
  $(".sidebar_list li a").click(function(){
    $(this).next().toggle();
    return false;
  });
  //메뉴 활성화 css
  $(".main_menu > li > a").mouseenter(function(){
    if( $(this).find("span").hasClass("on") == false ){
      $(this).css("color","#00b8ff");
    }
  }).mouseleave(function(){
    if( $(this).find("span").hasClass("on") == false ){
      $(this).css("color","#000000");
    }
  });
});
