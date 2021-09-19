module.exports = function weekday() {
    let day = new Date();
    let weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    // console.log(weekday[day.getDay()+1])
    


    let month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    let d = weekday[day.getDay()];
    let dayNumber = day.getDay();
    let oneDayShipping = weekday[day.getDay()+1]
    // console.log(dayNumber)
    if (oneDayShipping === undefined){ // I thought if the current day is Friday (weekday[6]) the next day would make the variable return undefined, so if the array turns undefined, just reset the index to 0 (Sunday)
        oneDayShipping = weekday[0];
        // let newWeekday = weekday.length-1;
        // for (let i = dayNumber; i <= weekday.length-1; i++){
        //     console.log(weekday[i])
        // }
    }

    let currentNumber = day.getDate();
    let aWeekNumber = day.getDate()+7;
    

    let currentMonth = month[day.getMonth()];

    let nextMonth = month[day.getMonth()+1]
    if(nextMonth === undefined){ // If the current month is December (month[11]) the next month would make the variable return undefined, so if the array turns undefined, just reset the index to 0 (January)
        nextMonth = month[0]
    }
    return [ currentMonth, currentNumber, nextMonth, d, oneDayShipping ];
    //console.log(currentDay)
}
