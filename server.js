const telegram = require('node-telegram-bot-api');
const belitunginfo =('377554539:AAH0C3x8hOBdZncjErsA7jJ9gYknpCe7oxM');
let ourwedingfo ="373958600:AAFuS2O6YNBHeTvWc6cGQNQmkQ6dNQ8_yZI"

var bot = new telegram (ourwedingfo,{polling:true});

bot.onText(/\/start/, function(message) {
bot.sendMessage(message.chat.id,`halo ${message.from.first_name} ${message.from.last_name} selamat datang di Galuh & Ego wedding info bot:
ketik
/undangan : untuk melihat undangan,
/lokasi_galuh: untuk melihat lokasi acara mempelai wanita,
/lokasi_ego:untuk melihat lokasi acara mempelai pria,
/video : untuk melihat prewedding video,
/flight : untuk melihat jadwal penerbangan,
`);
});

bot.onText(/\/video/, function(message) {
bot.sendMessage(message.chat.id,"https://www.youtube.com/watch?v=HejQd2MSlBo&feature=youtu.be");
});

bot.onText(/\/undangan/, function(message) {
bot.sendPhoto(message.chat.id,'./photo/invitation.jpg',{caption :''});
});

bot.onText(/\/lokasi_galuh/, function(message) {
bot.sendVenue(message.chat.id,-2.7305486,107.6493247,'Rumah Galuh','Jalan Kapten Saridin no 51, RT 028/10, Tanjung Pandan, Belitung');
});

bot.onText(/\/lokasi_ego/, function(message) {
bot.sendVenue(message.chat.id,-2.5952144,107.6315703,'Rumah Ego','jln.Pantai, Desa Tanjung Binga sijuk(depan POM bensin)');
});


bot.onText(/\/flight/, function(message) {
  bot.sendMessage(message.chat.id,` jakarta - tanjung pandan :
citylik   : 05.55
Garuda    : 06.30,14.10
Lion      : 09.25
Sriwijaya : 06.20,11.35,14.50
NAM       : 08.30,15.20,

Tanjung pandan - Jakarta :
citylik   : 07.30
Garuda    : 08.30
Lion      : 11.40
Sriwijaya : 07.50,13.05,16.20
NAM       : 14.55,16.40

more info : https://www.traveloka.com/fullsearch?ap=JKTA.TJQ&dt=03-03-2017.NA&ps=1.0.0&sc=ECONOMY
`);
});

bot.message_loop(run_forever=True, source=update_queue)
