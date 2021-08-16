import data from "./day.json";

export function getDays() {
  return normalizeData(data.days);
}

export function normalizeData(days) {
  return days.map((day) => ({ ...day, date: new Date(day.date) }));
}

export function getEnv(name) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`env ${name} is required`);
  }

  return value;
}

export function getBotId() {
  return getEnv("BOT_ID");
}

export function getBotToken() {
  return getEnv("BOT_TOKEN");
}
