import moment from "moment";
import "moment/locale/ru";

moment.locale("ru");

export const generateFakeTimes = () => {
  const minutesAgo = Math.floor(Math.random() * 6) + 3; // 3 to 8 minutes ago
  const todayTime = moment().subtract(minutesAgo, "minutes").format("HH:mm");
  
  const numPastDays = Math.floor(Math.random() * 4) + 3; // 3 to 6 different past days
  const pastOffsets = new Set();
  
  // 80% probability to include 'Вчера' (1) and/or 'Позавчера' (2)
  if (Math.random() < 0.8) {
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0) pastOffsets.add(1);
    else if (choice === 1) pastOffsets.add(2);
    else { pastOffsets.add(1); pastOffsets.add(2); }
  }
  
  // Fill the rest with random days between 1 and 30
  while (pastOffsets.size < numPastDays) {
    pastOffsets.add(Math.floor(Math.random() * 30) + 1);
  }
  
  const sortedPastOffsets = Array.from(pastOffsets).sort((a, b) => b - a);
  
  const randomPastFakeTimes = [];
  sortedPastOffsets.forEach(offsetDays => {
     // 1 to 2 messages per group (day)
     const numMessages = Math.floor(Math.random() * 2) + 1; 
     const timesInDay = [];
     
     if (numMessages === 1) {
         // Any time between 07:00 and 22:59
         const h = Math.floor(Math.random() * 16) + 7; // 7 to 22
         const m = Math.floor(Math.random() * 60);
         timesInDay.push({ h, m });
     } else {
         // 2 messages with at least 4 hours gap
         // First message between 07:00 and 18:00
         const h1 = Math.floor(Math.random() * 12) + 7; // 7 to 18
         const m1 = Math.floor(Math.random() * 60);
         timesInDay.push({ h: h1, m: m1 });
         
         // Second message between (h1 + 4) and 22:00
         const h2Min = h1 + 4;
         const h2 = Math.floor(Math.random() * (22 - h2Min + 1)) + h2Min;
         const m2 = Math.floor(Math.random() * 60);
         timesInDay.push({ h: h2, m: m2 });
     }

     timesInDay.forEach(({h, m}) => {
         const startTime = `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
         randomPastFakeTimes.push({ offsetDays, startTime });
     });
  });

  return randomPastFakeTimes
    .concat([
      {
        offsetDays: 0,
        startTime: todayTime,
      },
    ])
    .map(({ offsetDays, startTime }) => {
      const time = moment(startTime, "HH:mm").subtract(offsetDays, "days");
      let divisorDateText = "";
      
      const timeStr = time.clone().format("HH:mm");
      if (offsetDays === 0) {
          divisorDateText = `Сегодня ${timeStr}`;
      } else if (offsetDays === 1) {
          divisorDateText = `Вчера ${timeStr}`;
      } else if (offsetDays === 2) {
          divisorDateText = `Позавчера ${timeStr}`;
      } else {
          // Чт, 5 дек., 19:43
          divisorDateText = time.clone().format("dd, D MMM, HH:mm");
          divisorDateText = divisorDateText.charAt(0).toUpperCase() + divisorDateText.slice(1);
      }
      
      return {
        offsetDays,
        date: time.clone().format("DD.MM.YYYY"),
        divisorDate: divisorDateText,
        endTime: time.clone().add(1, "hour").format("HH:mm"),
        receivedTime: time.clone().add(1, "minute").format("ddd HH:mm"),
        startTime: timeStr,
      };
    });
};
