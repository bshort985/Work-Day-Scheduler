




// Add currenmt date and time and keep time without refeshing the browser

var updateTime = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(updateTime, 1000);

// Create function to 

// moment().hours();


// Create a function to compare hour block with current hour

function checkHour() {
    const currentHour = 14
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



