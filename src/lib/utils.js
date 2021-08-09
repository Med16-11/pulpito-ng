import { format } from "date-fns";

function formatDate(orig) {
  if (!orig) return;
  return format(new Date(orig), "yy-MM-dd HH:mm:ss");
}

function pad(num) {
  return `${num}`.padStart(2, "0");
}

function getDuration(seconds) {
  const result = {};
  let seconds_ = seconds;
  result.days = Math.floor(seconds_ / (60 * 60 * 24));
  seconds_ %= 60 * 60 * 24;
  result.hours = Math.floor(seconds_ / (60 * 60));
  seconds_ %= 60 * 60;
  result.minutes = Math.floor(seconds_ / 60);
  seconds_ %= 60;
  result.seconds = seconds_;
  return result;
}

function formatDuration(seconds) {
  let result = seconds;
  const hours = Math.floor(result / 3600);
  result %= 3600;
  const minutes = Math.floor(result / 60);
  result %= 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(result)}`;
}

export { formatDate, getDuration, formatDuration };
