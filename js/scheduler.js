var date = new Date();

function displayDate() {
    $("#currentDay").html(moment(date).format('MMMM Do YYYY, h:mm a'));
}
setInterval(displayDate(), 60*1000);
