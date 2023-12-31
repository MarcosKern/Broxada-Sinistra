export default function getTimeRemaining(endTime) {
  let totalSeconds = Math.floor((endTime - Date.now()) / 1000)

  let days = Math.floor(totalSeconds / (60 * 60 * 24))
  let hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60))
  let minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  let seconds = Math.floor(totalSeconds % 60);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  }
}