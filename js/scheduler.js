var date = new Date();

function displayDate() {
    $("#currentDay").html(moment(date).format('MMMM Do YYYY, h:mm a'));
}
setInterval(displayDate(), 60*1000);


//create and load local storage for tasks
$("#7 .task").val(localStorage.getItem("7"));
$("#8 .task").val(localStorage.getItem("8"));
$("#9 .task").val(localStorage.getItem("9"));
$("#10 .task").val(localStorage.getItem("10"));
$("#11 .task").val(localStorage.getItem("11"));
$("#12 .task").val(localStorage.getItem("12"));
$("#1 .task").val(localStorage.getItem("1"));
$("#2 .task").val(localStorage.getItem("2"));
$("#3 .task").val(localStorage.getItem("3"));
$("#4 .task").val(localStorage.getItem("4"));
$("#5 .task").val(localStorage.getItem("5"));
$("#6 .task").val(localStorage.getItem("6"));

//save task
$(".saveBtn").on("click", function () {
    var task = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    //set items in local storage.
    localStorage.setItem(time, task);
});