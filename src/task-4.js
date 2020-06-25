
export default function formatTime(seconds) {
  const date = new Date();
  date.setMinutes(0);
  date.setHours(0)
  date.setSeconds(seconds);
  return date.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
}
