$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    $("#survey").hide();
    var badArr = [];
    var goodArr = [];
    $("input:checkbox[name=unlucky-stuff]:checked").each(function(){
      var badFortune = $(this).val();
      // $("input:checkbox[name=lucky-stuff]:checked")
    });
    $("input:checkbox[name=lucky-stuff]:checked").each(function(){
      var goodFortune = $(this).val();
      // $("input:checkbox[name=lucky-stuff]:checked")
    });
    
    // var badFortune = $("input:checkbox[name=unlucky-stuff]:checked").val();  
    // var goodFortune = $("input:checkbox[name=lucky-stuff]:checked").val();
    // if(badFortune > goodFortune) {
    //   $("#bad").show();
    // }else if(badFortune < goodFortune) {
    //   $("#good").show();
    // };
  });
});