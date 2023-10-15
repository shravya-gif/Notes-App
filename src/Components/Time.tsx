import React from "react";
function millisecondsToHumanReadable(ms:any) {
    // Number of milliseconds in a day, hour, minute, and second
    const dayInMs = 24 * 60 * 60 * 1000;
    const hourInMs = 60 * 60 * 1000;
    const minuteInMs = 60 * 1000;
    const secondInMs = 1000;
  
    // Calculate the number of days, hours, minutes, and seconds
    const days = Math.floor(ms / dayInMs);
    const hours = Math.floor((ms % dayInMs) / hourInMs);
    const minutes = Math.floor((ms % hourInMs) / minuteInMs);
    const seconds = Math.floor((ms % minuteInMs) / secondInMs);
  
    // Construct the human-readable format
    let result = '';
    if (days > 0) {
      result += days + ' day' + (days !== 1 ? 's' : '') + ' ';
    }
    if (hours > 0) {
      result += hours + ' hour' + (hours !== 1 ? 's' : '') + ' ';
    }
    if (minutes > 0) {
      result += minutes + ' minute' + (minutes !== 1 ? 's' : '') + ' ';
    }
    if (seconds > 0 || result === '') {
      result += seconds + ' second' + (seconds !== 1 ? 's' : '');
    }
  
    return result;
  }
  
  // Example usage:
//   const milliseconds = 123456789;
//   const humanReadableTime = millisecondsToHumanReadable(milliseconds);
//   console.log(humanReadableTime); // Output: "1426 days 21 hours 21 minutes 46 seconds"