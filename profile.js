//the big one
function startweb()
{
  jq_ani();
  
  function jq_ani()
  {
    $('#avatar').animate({
      opacity: 1},300,function(){
      $('#icon_one').animate({
        opacity: 1},300,function(){
        $('#icon_two').animate({
          opacity: 1},300,function(){
          $('#icon_three').animate({
            opacity: 1},300,function(){
            $('#icon_four').animate({
              opacity: 1},300,function(){
              $('#middle_frame_back').animate({
                height: '300px'},300,function(){
                $('#middle_frame').animate({
                  height: '300px'},300,function(){
                  typeWriter("MY Frist Web",0,"p", function(){
                    $('.icon_in_middle_frame').animate({opacity: 1},400);
                    $('#middle_frame_input').animate({opacity: 1},400);
                    $('#left_section_input').animate({opacity: 1},300);
                    $('.right_section').animate({opacity: 1},300);
                    $('#bottom_section_input').animate({opacity: 1},300,function(){
                      $('#left_section_span').animate({opacity: 1},300);
                      $('#bottom_section_span').animate({opacity: 1},300);  
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  function typeWriter(text, i, select, fnCallback) {
    if (i < (text.length)) {
      document.querySelector(select).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        typeWriter(text, i + 1, select, fnCallback)
      }, 50);
    }
    else if (typeof fnCallback == 'function') {
      setTimeout(fnCallback,10);
    }
  }
}
//four animation for '=' icon 
var num=0;
function dis_middle_frame()
{
  switch(num%4){
    case 0:
      $('#middle_frame_p').animate({opacity:0},400);
      $('.icon_in_middle_frame').animate({opacity: 0},400);
      $('#middle_frame_input').animate({opacity: 0},400,function(){
        $('#middle_frame').animate({
          height: '0px'},300,function(){
            $('#middle_frame_back').animate({height: '0px'},300)
          });
      });
      num+=1;
      break;
    case 1:
      $('#middle_frame_back').animate({
        height: '300px'},300,function(){
          $('#middle_frame').animate({height: '300px'},300,function(){
            $('#middle_frame_p').animate({opacity:1},400);
            $('.icon_in_middle_frame').animate({opacity: 1},400);
            $('#middle_frame_input').animate({opacity: 1},400) 
          });
        });
      num+=1;
      break;
    case 2:
      $('#middle_frame_p').animate({opacity:0},400);
      $('.icon_in_middle_frame').animate({opacity: 0},400);
      $('#middle_frame_input').animate({opacity: 0},400,function(){
        $('#middle_frame').animate({
          width: '0px'},300,function(){
            $('#middle_frame_back').animate({width: '0px'},300)
          });
      });
      num+=1;
      break;
    case 3:
      $('#middle_frame_back').animate({
        width: '600px'},300,function(){
          $('#middle_frame').animate({width: '600px'},300,function(){
            $('#middle_frame_p').animate({opacity:1},400);
            $('.icon_in_middle_frame').animate({opacity: 1},400);
            $('#middle_frame_input').animate({opacity: 1},400) 
          });
        });
      num+=1;
      break;
  }
}
//clear the p in middle_frame and output ner text in the parameter
function dis_typeWriter_ini(new_text)
{
  var text_ini = $("#middle_frame_p").text();
  console.log(text_ini);
  console.log(text_ini.length);
  dis_typeWriter(text_ini,text_ini.length,"p");
  function dis_typeWriter(text, i, select) {
    if (i >= -1) {
      document.querySelector(select).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      setTimeout(function() {
        dis_typeWriter(text, i - 1, select)
      }, 50);
    }
    else{
      $('#middle_frame_p').css("font-size","35pt");
      setTimeout(typeWriter(new_text,0,"p"),10);
    }
    function typeWriter(text, i, select) {
      if (i < (text.length)) {
        document.querySelector(select).innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
        setTimeout(function() {
          typeWriter(text, i + 1, select)
        }, 50);
      }
    }
  }
}
//press question mark icon
function question()
{
  alert("No more question!!");
}
//the bottom scoll bar control func
$(document).on('input', '#bottom_section_input', function(){
  var co = $('#bottom_section_input').val();
  op=co/100;
  co=(100-co)*2.55;
  document.body.style.background = "rgb(" + co + "," + co + "," + co + ")";
  document.getElementsByClassName("top").opacity = 1-op;
});
//the middle_frame_input enter func
$(document).on("keypress",function (e) {  
  if($('#middle_frame_input').css("opacity")==1 && $('#middle_frame_input').val()!='')
  {
    var input_text = $('#middle_frame_input').val();
    input_text="What you input is : " + input_text;
    if (e.which == 13) {
      alert(input_text);
      $('#middle_frame_input').val('');
    }
  }
});
//the avatar func
function openInNewTab() {
  var win = window.open('https://paper.dropbox.com/doc/WP2018-Collaborative-Writing-ArblqhREnFgbDobFtVktu');
  win.focus();
}
