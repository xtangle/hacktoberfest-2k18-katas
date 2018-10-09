export const timeConversion = (time) => { //time is in minuites remaining
    const hoursLeft = Math.floor(time/60);
    const minutesLeft = time % 60;
    return (time === 0) ? "0:00" : (minutesLeft < 10) ? `${hoursLeft}:0${minutesLeft}` : `${hoursLeft}:${minutesLeft}`
};