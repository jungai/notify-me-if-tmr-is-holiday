import data from "./day.json";

export function getDays() {
  return normalizeData(data.days);
}

export function normalizeData(days) {
  return days.map((day) => ({ ...day, date: new Date(day.date) }));
}

export function getBotId() {
  return process.env.BOT_ID;
}

export function getBotToken() {
  return process.env.BOT_TOKEN;
}
