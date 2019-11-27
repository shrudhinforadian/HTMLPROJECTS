/*(function () {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }
        var date = new Date();
        obj["date"] = date;
        var myJSON = JSON.stringify(obj)


        return myJSON;

    }

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("test");
        var output = document.getElementById("output");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var json = toJSONString(this);

            document.getElementById("output").innerHTML = json+output.innerHTML;

        }, false);

    });

})();*/
var output = '<hr class="blackline">';

function send() {
  var message = document.getElementById("message").value;
  date = new Date();
  var out = '<h4>' + "Message:" + '</h4>' + message + '<h4>' + "Date:" + '</h4>' + date;
  output = '<hr class="blackline">' + out + output;
  document.getElementById("output").innerHTML = output;
  document.getElementById("message").value = "";
  return true;
}
