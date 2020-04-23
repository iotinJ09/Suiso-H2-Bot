const discord = require('discord.js');
const client = new discord.Client();

// バージョン・ステータス情報
var ver = '1.35';
var st = 'on';

var noiu = `水槽？水素だよ！ 間違えないでよね？ | h2!help | SUISO.js | Ver.` + ver;
var id;

TOKEN = 'ここにトークンを入れる';

client.on('ready', message =>
{
  id = setInterval(function()
         {
             client.user.setPresence({ game: {name:`${noiu}`}, status: 'online' })
         }, 5000)
  console.log('bot is ready!');
});

//内容
client.on('message', message =>
          {
  if(message.author.bot){
        return;
   　}
          if (message.content === "h2!ping") {
                const embed = new discord.RichEmbed()
                    .setTitle('Ping')
                    .setDescription(`**${Date.now() - message.createdTimestamp} ms**`)
                    .setColor(0x00ffff)
                    .setFooter('SUISO!  Ver.' + ver)
                    .setTimestamp()
          message.channel.send(embed);
            return;
          }
          if (message.content === "h2!help") {
                const embed = new discord.RichEmbed()
                    .setTitle('反応語句一覧')
                    .setDescription('**水素BOTは、荒れ防止のため、水素の音部に入っているユーザーのみ利用可能となっております。**\n\n> **完全一致（その言葉で反応）**\n・水素\n・suiso\n・水槽\n・suisou\n・彗星\n・suisei\n> **部分一致（その言葉を含む文で反応）**\n・水素の音\n・プシュー\n\n> **コマンド**\n・「あぁ～！水素の音ォ～！！」の歌詞表示\n　**__h2!kasi__**\n・Pingの確認\n　**__h2!ping__**')
                    .setColor(0x00ffff)
                    .setFooter('SUISO!  Ver.' + ver)
                    .setTimestamp()
          message.channel.send(embed);
            return;
          }
  if (st === 'off')
    {
      return;
    }
 if (message.member.roles.get('685417894817169423'))
   {
  if (message.content.match('プシュ'))
    {
        message.channel.send('プシュー')
        return;
    }
  if (message.content.match('水素の音'))
    {
        message.channel.send('あ～あぁぁぁぁぁぁ～～水素の音ぉ～')
        return;
    }
  if (message.content === 'h2!kasi')
    {
        const embed = new discord.RichEmbed()
              .setTitle('水素の音　歌詞')
              .setDescription(`ｻｲｷﾝ ﾃﾞｷﾔｽ… \nなんか健康のために 気遣ってなんかやってることあります？\nあっ！水素水飲んでます 水素水！\nこっち見て。ジャジャン！\nえ！\nほらこれ！\nえ！ \nすごいでしょ！ \nなんですかこれ！\nパンパンでしょ！パンパン \nすごい全然違うほら！\n開けてみたいでしょ～？ \nうん、みたーい！\n行きますよー！ \nせーのっ！ \nあぁ～！水素の音ォ～！！`)
              .setColor(0x66ffff)
              .setFooter('水素は命！  Ver.' + ver)
              .setTimestamp()
        message.channel.send(embed)
      return;
    }
  if (message.content === '水素')
    {
      message.channel.send('水素はすごいんだよ！！！')
      return;
    }
  if (message.content === 'suiso')
    {
      message.channel.send('Suiso is amazing!!!')
      return;
    }
  if (message.content === '水槽')
    {
      message.channel.send('水槽？ちがうちがう！**水素**だからね？')
      return;
    }
  if (message.content === 'suisou')
    {
      message.channel.send('Suisou? No different! Because it’s Suiso, right?')
      return;
    }
  if (message.content === '彗星')
    {
      message.channel.send('彗星？ちゃんと聞いてた？す・い・そ　だってば！')
      return;
    }
  if (message.content === 'suisei')
    {
      message.channel.send('Suisei? Did you hear properly? Su I So!')
      return;
    }
 }
});


if(TOKEN == undefined)
{
	console.log('please set TOKEN');
	process.exit(0);
}
  
client.login( TOKEN );
