const endDate = new Date("03 april, 2025 21:59:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();
    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // calculate days min hour and sec;
    // 1 day = 24*60*60*1000
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinuteInMillis = (60*1000);
    const oneSecInMillis = (1000);

    const days = Math.floor(distancePending/(oneDayInMillis));
    const hrs = Math.floor((distancePending%(oneDayInMillis))/(oneHourInMillis));
    const min = Math.floor((distancePending%(oneHourInMillis))/(oneMinuteInMillis));
    const sec = Math.floor((distancePending%(oneMinuteInMillis))/(oneSecInMillis))

    //populate in ui
    // ("html id") = (js id)
    document.getElementById("days").innerHTML = days;
    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;

    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("prog-bar").style.width = percentageDistance + "%";

    if(distancePending <= 0){
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "<h2>expired</h2>";
        document.getElementById("prog-bar").style.width = "100%";
    }
}
, 1000)
