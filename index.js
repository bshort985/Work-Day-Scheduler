




// Add currenmt date and time and keep time without refeshing the browser

var updateTime = function() {
    document.getElementById("currentTime")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(updateTime, 1000);

// Create function to 




// Create a function to add the different colors

function checkHour() {
    const currentHour = moment().hours();
    // Read the hourBlock hour in the HTML 
    $(".time-block").each(function() {
        const hourBlock = parsInt(
            $(this) 
            .attr("id")
            .split("-")[1],
            
        );
       

    });
    // if (hour > hourBlock ) {
    //     .addClass("past";)
    // } else if (hour === hourBlock) {
    //     .removeClass("past");
    //     .removeClass("future");
    //     .addClass("present");
    // } else if (hour < hourBlock){
    //     .removeClass("past");
    //     .removeClass("present");
    //     .addClass("future");
    // }
};


checkHour();


