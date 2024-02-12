const today = new Date();
const date = new Date("2062-10-19");
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0, 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleString("en-GB"));

// unix epoc

// Create a new Date object representing the current date and time
const currentDate = new Date();
console.log(currentDate);

// Create a new Date object for a specific date and time
// const specificDate = new Date("December 17, 1995 03:24:00");
console.log(specificDate);

// Get the current year
const currentYear = currentDate.getFullYear();
console.log(currentYear);

// Get the current month (0-11)
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

// Get the current day of the month (1-31)
const currentDayOfMonth = currentDate.getDate();
console.log(currentDayOfMonth);

// Get the current day of the week (0-6) where Sunday is 0
const currentDayOfWeek = currentDate.getDay();
console.log(currentDayOfWeek);

// Get the current hour (0-23)
const currentHour = currentDate.getHours();
console.log(currentHour);

// Get the current minute (0-59)
const currentMinute = currentDate.getMinutes();
console.log(currentMinute);

// Get the current second (0-59)
const currentSecond = currentDate.getSeconds();
console.log(currentSecond);

// Get the current millisecond (0-999)
const currentMillisecond = currentDate.getMilliseconds();
console.log(currentMillisecond);

// Get the number of milliseconds since January 1, 1970, 00:00:00 UTC (Unix timestamp)
const unixTimestamp = currentDate.getTime();
console.log(unixTimestamp);

// Create a new Date object representing the current UTC date and time
const currentUTCDate = new Date();

// Get the current UTC year
const currentUTCYear = currentUTCDate.getUTCFullYear();
console.log(currentUTCYear);

// Get the current UTC month (0-11)
const currentUTCMonth = currentUTCDate.getUTCMonth();
console.log(currentUTCMonth);

// Get the current UTC day of the month (1-31)
const currentUTCDayOfMonth = currentUTCDate.getUTCDate();
console.log(currentUTCDayOfMonth);

// Get the current UTC day of the week (0-6) where Sunday is 0
const currentUTCDayOfWeek = currentUTCDate.getUTCDay();
console.log(currentUTCDayOfWeek);

// Get the current UTC hour (0-23)
const currentUTCHour = currentUTCDate.getUTCHours();
console.log(currentUTCHour);

// Get the current UTC minute (0-59)
const currentUTCMinute = currentUTCDate.getUTCMinutes();
console.log(currentUTCMinute);

// Get the current UTC second (0-59)
const currentUTCSecond = currentUTCDate.getUTCSeconds();
console.log(currentUTCSecond);

// Get the current UTC millisecond (0-999)
const currentUTCMillisecond = currentUTCDate.getUTCMilliseconds();
console.log(currentUTCMillisecond);

// Get the current UTC time in milliseconds since January 1, 1970, 00:00:00 UTC (Unix timestamp)
const currentUTCTimestamp = currentUTCDate.getTime();
console.log(currentUTCTimestamp);
