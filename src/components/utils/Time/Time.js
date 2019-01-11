const getTimePhase = (currentHour) => {
  let TimePhase;

  if(currentHour < 12){
    TimePhase = "AM";
  } else {
    TimePhase = "PM";
  }

  return TimePhase;
}

const getTimeGreeting = (currentHour) => {
  let timeGreeting;

  if(currentHour < 12) {
    timeGreeting = "Good morning";
  } else if (currentHour > 12 && currentHour < 17){
    timeGreeting = "Good afternoon";
  } else if (currentHour > 17){
    timeGreeting = "Good evening";
  } else {
    timeGreeting = "Hello";
  }

  return timeGreeting;
}

const currentDate = new Date();
const currentHour = currentDate.getHours();

export const TimeStamp = currentDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
export const TimePhase = getTimePhase(currentHour);
export const TimeGreeting = getTimeGreeting(currentHour);
