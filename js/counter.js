//var serverhost = "http://localhost:8080";
var count = 0;
var feteMusiqueCount = 0;
var animalzCount = 0;
var festivalParisCount = 0;
var feteMusiqueCount = 0;
var festivalJazzCount = 0;
var jungleJuiceCount = 0;
var villetteSoniqueCount = 0;
var eventList = [];
var numberOfTickets = {}; // total number of clicks; all events
var totalPrice = 0;
var ticketPrices;
var ticketPrice;
var testPrice;

var increaseButton = document.getElementsByClassName("btn-success");
var decreaseButton = document.getElementsByClassName("btn-danger");

  // Increase button
for (var i = 0; i < increaseButton.length; i++) {
      increaseButton[i].addEventListener("click", function() {
        count++;
        document.getElementById("getCount").innerHTML = count;
        var newEvent = $(this).parent().prop("id");
        console.log(newEvent);
        switch (newEvent) {
            case "animalz":
              animalzCount++;
              numberOfTickets.animalz = animalzCount;
              break;
            case "festival-paris":
              festivalParisCount++;
              numberOfTickets.festivalParis = festivalParisCount;
              break;
            case "fete-musique":
              feteMusiqueCount++;
              numberOfTickets.feteMusique = feteMusiqueCount;
              break;
            case "festival-jazz":
              festivalJazzCount++;
              numberOfTickets.festivalJazz = festivalJazzCount;
              break;
            case "jungle-juice":
              jungleJuiceCount++;
              numberOfTickets.jungleJuice = jungleJuiceCount;
              break;
            case "villette-sonique":
              villetteSoniqueCount++;
              numberOfTickets.villetteSonique = villetteSoniqueCount;
              break;
        };
 });
}
  // change of total price
function changeTotalPrice(clickedButton, value) {
  ticketPrice = clickedButton.parentElement.getElementsByClassName("ticket-price")[0].innerHTML;
  ticketPrice = parseInt(getNumber(ticketPrice));
  if (value == "decrease") {
    if (totalPrice > ticketPrice) {
    totalPrice -= ticketPrice;
    console.log("totalPrice > ticketPrice");
    } else {
    totalPrice = 0;
    console.log("totalPrice <= ticketPrice");
    }
  console.log("totalPrice after decrease: " + totalPrice);
  }
   else {
   totalPrice += ticketPrice;
   console.log("totalPrice after increase: " + totalPrice);
  }
 };


 // Convert nn€ => nn
function getNumber(ticketPrice) {
  var numb = ticketPrice.match(/\d/g);
  numb = numb.join("");
  return numb;
}

  // Decrease button
 for (var i = 0; i < decreaseButton.length; i++) {
       decreaseButton[i].addEventListener("click", function() {
         document.getElementById("getCount").innerHTML = count;
         count = decrease(count);
         var newEvent = $(this).parent().prop("id");
         console.log(newEvent);
         //pushUnique(newEvent);
         switch (newEvent) {
             case "animalz":
              animalzCount = decrease(animalzCount);
               numberOfTickets.animalz = animalzCount;
               break;
             case "festival-paris":
               festivalParisCount = decrease(festivalParisCount);
               numberOfTickets.festivalParis = festivalParisCount;
               break;
             case "fete-musique":
               feteMusiqueCount = decrease(feteMusiqueCount);
               numberOfTickets.feteMusique = feteMusiqueCount;
               break;
             case "festival-jazz":
               festivalJazzCount = decrease(festivalJazzCount);
               numberOfTickets.festivalJazz = festivalJazzCount;
               break;
             case "jungle-juice":
               jungleJuiceCount = decrease(jungleJuiceCount);
               numberOfTickets.jungleJuice = jungleJuiceCount;
               break;
             case "villette-sonique":
               villetteSoniqueCount = decrease(villetteSoniqueCount);
               numberOfTickets.villetteSonique = villetteSoniqueCount;
               break;
         };
  });
}

  // To avoid numbers < 0
  function decrease(count) {
    if (count >= 1) {
      count--;
    } else {
      count = 0;
    // also: delete key from numberOfTickets
    }
    return count;
  }

  // Panier
  document.getElementById("cart").onclick = function (e) {
          $('[data-toggle="popover"]').popover();

          var res = numberOfTickets;
          console.log(res);

          for (var i in res) {
            var popoverText = "Event: " + "\n" + i + "Number of tickets: " + res[i];
          }

          $(this).attr('data-content', 'Prix totale : ' + totalPrice + '€');
          //$(this).attr('data-original-title', popoverText);
          $(this).attr('data-original-title', JSON.stringify(numberOfTickets));

          $(this).popover('show');

       if (e.preventDefault) {
           e.preventDefault();
       }
       e.returnValue = false;
   };
