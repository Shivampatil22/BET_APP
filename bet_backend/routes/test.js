const getISTFromUTC = (inputDateString)=>{
    const dateObj = new Date(inputDateString);
    // Extract the individual components
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // Months are zero-based, so add 1
    const day = dateObj.getDate();
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();
    const seconds = dateObj.getSeconds();


    const utcDate = new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));

    // Calculate the date and time 5 hours and 30 minutes behind
    utcDate.setUTCHours(utcDate.getUTCHours() - 5);
    utcDate.setUTCMinutes(utcDate.getUTCMinutes() - 30);
  
    // Extract the year, month, day, hours, minutes, and seconds in UTC
    const utcYear = utcDate.getUTCFullYear();
    const utcMonth = utcDate.getUTCMonth() + 1; // Months are 0-based
    const utcDay = utcDate.getUTCDate();
    const utcHours = utcDate.getUTCHours();
    const utcMinutes = utcDate.getUTCMinutes();
    const utcSeconds = utcDate.getUTCSeconds();
    
    return {
      year: utcYear,
      month: utcMonth,
      day: utcDay,
      hours: utcHours,
      minutes: utcMinutes,
      seconds: utcSeconds,
    };
  };
console.log(getISTFromUTC("2023-10-28T01:00"));