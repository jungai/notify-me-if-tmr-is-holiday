import "dotenv/config";
import { isTomorrow } from "date-fns";
import { getDays, getBotToken, getBotId } from "./utils.mjs";
import Discord from "discord.js";

(async () => {
  const currentDay = new Date();
  const dayList = getDays();

  const holiday = dayList.filter((day) => isTomorrow(day.date));
  
  // TODO: stack holiday
  const isHoliday = holiday.length === 1;

  if (!isHoliday) return;

  //   connect to discord
  const hook = new Discord.WebhookClient({
    id: getBotId(),
    token: getBotToken(),
  });

  // embed things
  const embed = new Discord.MessageEmbed()
    .setTimestamp(new Date())
    .setTitle("พรุ่งนี้วันหยุด")
    .setColor("#2ecc71")
    .addFields({
      name: "📍",
      value: holiday[0].name,
    });

  // notify
  await hook.send({ embeds: [embed] });
})();
