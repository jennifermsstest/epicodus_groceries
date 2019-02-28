$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();



    var fruit = $("input#fruit").val();
    var protein = $("input#protein").val();
    var grains = $("input#grains").val();
    var toiletries = $("input#toiletries").val();

    var list = [fruit,protein,grains,toiletries]

    var list2 = []
    list.forEach(function(item) {
      if (item) {
        list2.push(item);
      }
    });

    //alert(list2)
    list2.sort()


    var uList = list2.map(function(item) {
      return item.toUpperCase()
    })

    //alert(uList)

    debugger;
    uList.forEach(function(text){
      $("ul#1").append("<li>" + text.toLowerCase() + "</li>")
      // $("ul#1").append(`<li>${text.toLowerCase()}</li>`)
    });

    // $("#name1").text(name);
    // $("#answer1").text(answer);
    // $("#choice1").text(choice);
    // $("#img").empty().append(img);
     $("#output").show();

event.preventDefault();
  });
});
