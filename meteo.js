
var callBackGetSuccess = function(data) {
    var element = document.getElementById("zone_meteo");
    element.innerHTML = "La temperature est de " + data.main.temp+ "\u2103";

}

function buttonClickGET() {
  var query = document.getElementById("queryLoc").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

    $.get(url, callBackGetSuccess).done(function() {
        //alert( "second success" );
      })
      .fail(function() {
        alert( "error" );
      })
      .always(function() {
        //alert( "finished" );
      });
}
