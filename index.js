import { isSameDay } from "date-fns";
import { getDays, getBotToken, getBotId } from "./utils.mjs";
import Discord from "discord.js";
import "dotenv/config";

(async () => {
  const currentDay = new Date();
  const dayList = getDays();

  const holiday = dayList.filter((day) => isSameDay(currentDay, day.date));
  
  // TODO: stack holiday
  const isHoliday = holiday.length === 1;

  if (!isHoliday) return;

  //   connect to discord
  const hook = new Discord.WebhookClient(getBotId(), getBotToken());

  // embed things
  const embed = new Discord.MessageEmbed()
    .setTimestamp(new Date())
    .setTitle("วันหยุด")
    .setColor("#2ecc71")
    .addFields({
      name: "📍",
      value: holiday[0].name,
    });

  // notify
  await hook.send("แจ้งเตือน", { embeds: [embed] });

  process.exit();
})();
