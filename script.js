function bookTicket(){

    let name = document.getElementById("name").value;
    let movie = document.getElementById("movie").value;
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let tickets = Number(document.getElementById("tickets").value);

    let ticketPrice = 200;
    let totalAmount = tickets * ticketPrice;

    if(name == "" || movie == "" || date == "" || time == "" || tickets <= 0){

        document.getElementById("result").innerHTML =
        "<h3 style='color:red;'>Please fill all details!</h3>";

    }
    else{

        document.getElementById("result").innerHTML =

        "<h3 style='color:green;'>🎉 Booking Successful</h3>" +

        "<b>Name :</b> " + name + "<br><br>" +

        "<b>Movie :</b> " + movie + "<br><br>" +

        "<b>Show Date :</b> " + date + "<br><br>" +

        "<b>Show Time :</b> " + time + "<br><br>" +

        "<b>Tickets :</b> " + tickets + "<br><br>" +

        "<b>Ticket Price :</b> ₹" + ticketPrice + "<br><br>" +

        "<b>Total Amount :</b> ₹" + totalAmount;

    }

}