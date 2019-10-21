var obj;
var obj1;
var user;
var count = 999;
var k = 0;

function username(i, title) {

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",

    type: "GET",

    dataType: "json",
    success: function handleResponse(user) {
      name = user[i - 1].name;
      display(name, i, title);
    }
  });

  function display(name, i, title) {

    $('.list-group').append('<div class="click"><a class="namedata" href="#" onclick=show(' + k + ')><h5> Name: ' + name + '</h5>' + '<p> Title: ' + title + '</p></a></div>');
    console.log(k++);
  }
}
window.onload = function () {
  $(".fullDetail").hide();
  $(".newPost").hide();
  $.get("https://jsonplaceholder.typicode.com/posts", function (obj) {
    for (var i = 0; i < obj.length; i++) {
      username(obj[i].userId, obj[i].title);
    }
  });
}
$(document).ready(function () {
  $(".form1").submit(function () {
    count = count + 1;
    name = $("#entertitle").val();
    body = $("#enterbody").val();

    $('.list-group').prepend('<div class="click"><a class="namedata" href="#" onclick=show(' + count + ')><h5> Name: ' + name + '</h5>' + '<p> Title: ' + body + '</p></a></div>');

    $("#entertitle").val("");
    $("#enterbody").val("");

    obj1 = {
      userId: 0,
      title: name,
      id: count,
      body: body
    }
    return;
  });
});

$(document).ready(function () {
  $(".newpost").click(function () {
    $(".fullDetail").hide();
    $(".newPost").show();
  });
});

function show(i) {
  $(".click").click(function () {
    $(".click").removeClass("clickk");
    $(this).addClass("clickk");
  });
  $(".fullDetail").show();
  $(".newPost").hide();
  if (i > 998) {
    $.getJSON("https://jsonplaceholder.typicode.com/users", function (user) {
      name = user[1].name;
    });

    var out = ' Author : ' + name + '<h3>' + obj1.title + '</h3><br>' + obj1.body + '<br><h3>' + 'Comments:' + '</h3>';
    $("#details").html(out);
    $("#comments").html("nill");
    return;


  }
  $.getJSON("https://jsonplaceholder.typicode.com/posts", function (obj) {
    console.log(obj[i]);
    title=obj[i].title;
    body=obj[i].body;
    id=obj[i].userId;
    send(title,body,id);
    function send(title,body,id) {
      console.log(id,title,body);
      $.getJSON("https://jsonplaceholder.typicode.com/users", function (user) {
        name = user[id-1].name;
        print(title,name,body);
        function print(title,name,body){
          var out = ' Author : ' + name + '<h3>' + title + '</h3><br>' + body + '<br><h3>' + 'Comments:' + '</h3>';
          $("#details").html(out);
        }
      });
    }



  });
  
  var url = "https://jsonplaceholder.typicode.com/comments?postId=" + (i + 1);
  $.getJSON(url, function (commentsObj) {
    var string1 = "";
    for (var j = 0; j < commentsObj.length; j++) {
      string1 += '<div class="comments"><h5>' + commentsObj[j].email + '</h5>' + commentsObj[j].body + '</div><hr class="blackline">';
    }
    $("#comments").html(string1);
  });
}