//countdown for seminar
  const countDownDate = new Date("June 15, 2024 23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownFunction = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDate - now;

        // If the countdown is over, clear countdown
        if (distance < 0) {
            clearInterval(countdownFunction);
            return;
        }

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown elements
      document.getElementById("days1").innerHTML = Math.floor(days / 10);
      document.getElementById("days2").innerHTML = days % 10;
      document.getElementById("hours1").innerHTML = Math.floor(hours / 10);
      document.getElementById("hours2").innerHTML = hours % 10;
      document.getElementById("minutes1").innerHTML = Math.floor(minutes / 10);
      document.getElementById("minutes2").innerHTML = minutes % 10;
      document.getElementById("seconds1").innerHTML = Math.floor(seconds / 10);
      document.getElementById("seconds2").innerHTML = seconds % 10;
  }, 1000);

 //countdown for 1st workshop
    const countDownDateCEH = new Date("July 24, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    const countdownFunctionCEH = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDateCEH - now;

         // If the countdown is over, clear countdown
            if (distance < 0) {
                clearInterval(countdownFunctionCEH);
                return;
            }

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the countdown elements
        document.getElementById("daysCEH").innerHTML = Math.floor(days / 10);
        document.getElementById("daysCEH2").innerHTML = days % 10;
        document.getElementById("hoursCEH").innerHTML = Math.floor(hours / 10);
        document.getElementById("hoursCEH2").innerHTML = hours % 10;
        document.getElementById("minutesCEH").innerHTML = Math.floor(minutes / 10);
        document.getElementById("minutesCEH2").innerHTML = minutes % 10;
        document.getElementById("secondsCEH").innerHTML = Math.floor(seconds / 10);
        document.getElementById("secondsCEH2").innerHTML = seconds % 10;

    }, 1000);

    //countdown for 2nd workshop
      const countDownDateWorkshop2 = new Date("July 30, 2024 23:59:59").getTime();

      // Update the countdown every 1 second
      const countdownFunctionWorkshop2 = setInterval(function() {
          // Get today's date and time
          const now = new Date().getTime();

          // Find the distance between now and the countdown date
          const distance = countDownDateWorkshop2  - now;

           // If the countdown is over, clear countdown
            if (distance < 0) {
                clearInterval(countdownFunctionWorkshop2);
                return;
            }

          // Time calculations for days, hours, minutes and seconds
          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          // Update the countdown elements
          document.getElementById("days-2ndworkshop").innerHTML = Math.floor(days / 10);
          document.getElementById("days-2ndworkshopp").innerHTML = days % 10;
          document.getElementById("hours-2ndworkshop").innerHTML = Math.floor(hours / 10);
          document.getElementById("hours-2ndworkshopp").innerHTML = hours % 10;
          document.getElementById("minutes-2ndworkshop").innerHTML = Math.floor(minutes / 10);
          document.getElementById("minutes-2ndworkshopp").innerHTML = minutes % 10;
          document.getElementById("seconds-2ndworkshop").innerHTML = Math.floor(seconds / 10);
          document.getElementById("seconds-2ndworkshopp").innerHTML = seconds % 10;
      }, 1000);

//Countdown for Domestic Study Tour
  const countDownDateDST = new Date("May 19, 2024 23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownFunctionDST = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDateDST - now;

       // If the countdown is over, clear countdown
      if (distance < 0) {
          clearInterval(countDownDateDST);
          return; 
      }


      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown elements
      document.getElementById("days-DST").innerHTML = Math.floor(days / 10);
      document.getElementById("days-DST2").innerHTML = days % 10;
      document.getElementById("hours-DST").innerHTML = Math.floor(hours / 10);
      document.getElementById("hours-DST2").innerHTML = hours % 10;
      document.getElementById("minutes-DST").innerHTML = Math.floor(minutes / 10);
      document.getElementById("minutes-DST2").innerHTML = minutes % 10;
      document.getElementById("seconds-DST").innerHTML = Math.floor(seconds / 10);
      document.getElementById("seconds-DST2").innerHTML = seconds % 10;

  }, 1000);

  //Countdown for International Study Tour
  const countDownDateIST = new Date("May 19, 2024 23:59:59").getTime();

  // Update the countdown every 1 second
  const countdownFunctionIST = setInterval(function() {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countDownDateIST - now;

        // If the countdown is over, clear countdown
        if (distance < 0) {
            clearInterval(countdownFunctionIST);
            return;
        }

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the countdown elements
      document.getElementById("days-IST").innerHTML = Math.floor(days / 10);
      document.getElementById("days-IST2").innerHTML = days % 10;
      document.getElementById("hours-IST").innerHTML = Math.floor(hours / 10);
      document.getElementById("hours-IST2").innerHTML = hours % 10;
      document.getElementById("minutes-IST").innerHTML = Math.floor(minutes / 10);
      document.getElementById("minutes-IST2").innerHTML = minutes % 10;
      document.getElementById("seconds-IST").innerHTML = Math.floor(seconds / 10);
      document.getElementById("seconds-IST2").innerHTML = seconds % 10;
  }, 1000);

// for event navbar buttons
  function showEvent(eventType) {
    const events = document.querySelectorAll('.event-content');
    events.forEach(event => {
        event.style.display = 'none';
    });

    document.getElementById(eventType).style.display = 'block';

    const buttons = document.querySelectorAll('.event-button');
    buttons.forEach(button => {
        button.classList.remove('event-active');
    });

    document.querySelector(`.event-button[onclick="showEvent('${eventType}')"]`).classList.add('event-active');
}
