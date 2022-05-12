// Add currenmt date and time and keep time without refeshing the browser

var updateTime = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(updateTime, 1000);

// Create a function to compare hour block with current hour

function checkHour() {
    const currentHour = moment().hours()
        // Read the hourBlock hour in the HTML 
        $(".time-block").each(function() {
            const hourBlock = parseInt(
                $(this) 
                .attr("id")
                .split("-")[1]
            );
        if (currentHour > hourBlock ) {
            $(this).addClass("past")
        } else if (currentHour === hourBlock) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else if (currentHour < hourBlock){
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
   
};


checkHour();

// Create locale storage function
    $(document).ready(function() {
        $(".saveBtn").on("click", function() {
            const userInput = $(this)
            .siblings(".description")
            .val();
            console.log(userInput);
            const hour = $(this)
            .parent()
            .attr("id")
            console.log(hour);
            localStorage.setItem(hour, userInput);
            console.log(localStorage)
    });
    // Load saved data

    $('#hourBlock-9 .description').val(localStorage.getItem('hourBlock-9'));
    $('#hourBlock-10 .description').val(localStorage.getItem('hourBlock-10'));
    $('#hourBlock-11 .description').val(localStorage.getItem('hourBlock-11'));
    $('#hourBlock-12 .description').val(localStorage.getItem('hourBlock-12'));
    $('#hourBlock-13 .description').val(localStorage.getItem('hourBlock-13'));
    $('#hourBlock-14 .description').val(localStorage.getItem('hourBlock-14'));
    $('#hourBlock-15 .description').val(localStorage.getItem('hourBlock-15'));
    $('#hourBlock-16 .description').val(localStorage.getItem('hourBlock-16'));
    $('#hourBlock-17 .description').val(localStorage.getItem('hourBlock-17'));
 });





