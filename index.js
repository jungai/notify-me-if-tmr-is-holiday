import { isSameDay } from "date-fns";
import { getDays, getBotToken, getBotId } from "./utils.mjs";
import Discord from "discord.js";
import "dotenv/config";

(async () => {
  const currentDay = new Date();
  const dayList = getDays();

  const holiday = dayList.filter((day) => isSameDay(currentDay, day.date));
  const isHoliday = holiday.length === 1;

  if (!isHoliday) return;

  //   connect to discord
  const hook = new Discord.WebhookClient(getBotId(), getBotToken());

  // embed things
  const embed = new Discord.MessageEmbed()
    .setTitle("พรุ่งนี้วันหยุด")
    .setColor("#2ecc71")
    .addFields({
      name: "ชื่อวัน",
      value: holiday[0].name,
    });

  // notify
  await hook.send("แจ้งเตือน", { embeds: [embed] });

  process.exit();
})();
