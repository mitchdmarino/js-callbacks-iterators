let forecast = [
    {
        day: 'Monday',
        high: 55,
        low: 53,
    },
    {
        day: 'Tuesday',
        high: 65,
        low: 60,
    },
    {
        day: 'Wednesday',
        high: 63,
        low: 58,
    },
    {
        day: 'Thursday',
        high: 61,
        low: 57,
    },
    {
        day: 'Friday',
        high: 60,
        low: 53,
    },
    {
        day: 'Saturday',
        high: 61,
        low: 58,
    },
    {
        day: 'Sunday',
        high: 57,
        low: 54,
    },
]
const weather = function(today) {
    let dayOfWeek = today.day
    let high = today.high
    let low = today.low
    return `${dayOfWeek} will have a high of ${high}F and a low of ${low}F.`
}
// Build an array of strings using the forecast objects above with the following pattern:
// "Monday will have a high of 55F and a low of 53F."
console.log(forecast.map(weather))
//Your code here
