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
var numberOfTickets = {};
var allPrices = [45, 55, 10, 5, 17, 25];
var totalPrice = 0;

var increaseButton = document.getElementsByClassName("btn-success");
var decreaseButton = document.getElementsByClassName("btn-danger");

var price = document.getElementsByClassName("ticket-price");

for (var i = 0; i < increaseButton.length; i++) {
      increaseButton[i].addEventListener("click", function() {
        // get prices dynamically from innerHTML of id=getPrice
        ticketPrice = allPrices[0];
        document.getElementById("getPrice").innerHTML = ticketPrice;
        totalPrice += ticketPrice;
        count++;
        document.getElementById("getCount").innerHTML = count;
        console.log(ticketPrice[i]);
        // take id from outer HTML; SUSPEND this value from eventList
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

 for (var i = 0; i < decreaseButton.length; i++) {
       decreaseButton[i].addEventListener("click", function() {
         count = decrease(count);
         // get prices dynamically from innerHTML of id=getPrice
         ticketPrice = allPrices[0];
         totalPrice -= ticketPrice;
         console.log(JSON.stringify(numberOfTickets));
         document.getElementById("getCount").innerHTML = count;
         var newEvent = $(this).parent().prop("id");
         // take id from outer HTML; SUSPEND this value from eventList
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


  function pushUnique(newEvent) {
    console.log("newEvent: " + newEvent);
    console.log("eventList: " + eventList);
    if (eventList.find(existingEvent)) {
      console.log("event already in list!");
    } else {
       eventList.push(newEvent);
     }
      return eventList;
}
   // To check if event already in list
   function existingEvent(newEvent) {
     for (i = 0; i < eventList.length; i++)
     return newEvent == eventList[i];
   }

  document.getElementById("cart").onclick = function (e) {
          $('[data-toggle="popover"]').popover();

          $(this).attr('data-content', 'Prix total : ' + totalPrice + '€');
          $(this).attr('data-original-title', JSON.stringify(numberOfTickets));

          $(this).popover('show');

       if (e.preventDefault) {
           e.preventDefault();
       }
       e.returnValue = false;
   };
