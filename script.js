function updateClock() {
    // Get the current date and time
    const now = new Date();
  
    // Extract hours, minutes, and seconds
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    // Determine if it's AM or PM
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convert hours to 12-hour format
    hours = hours % 12 || 12;
  
    // Format the time
    const time = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')} ${period}`;
  
    // Update the clock element
    document.getElementById('clock').textContent = time;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  