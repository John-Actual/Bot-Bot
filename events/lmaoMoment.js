const database = require('../database.js')
const l = database.lmaoModel
module.exports = {
    name: "messageCreate",
    async execute(message) {
        //so many gifs
        const gifs_reactions = [
            'https://tenor.com/view/skill-issue-ratio-cancelled-twitter-cringe-gif-23133228',
            'https://media.discordapp.net/attachments/824080442960642048/824157357139427338/image0.gif',
            'https://tenor.com/view/rolling-on-the-floor-laughing-emoji-gif-9682311',
            'https://tenor.com/view/cow-walking-funny-gif-14352342',
            'https://tenor.com/view/yes-hell-dance-trump-funny-gif-12414601',
            'https://tenor.com/view/nick-young-question-marks-what-excuse-me-huh-gif-4486363',
            'https://tenor.com/view/rick-astley-rick-roll-dancing-dance-moves-gif-14097983',
            'https://tenor.com/view/roasted-oh-shookt-gif-8269968',
            'https://tenor.com/view/popcat-gif-19407733',
            'https://tenor.com/view/ea-sports-e-ea-meme-gif-14922519',
            'https://tenor.com/view/microwave-gif-18671985',
            'https://tenor.com/view/technoblade-gif-19759013',
            'https://tenor.com/view/no-i-dont-think-i-will-captain-america-old-capt-gif-17162888',
            'https://tenor.com/view/guh-cat-gif-22906544',
            'https://giphy.com/gifs/cool-runnings-QRFBilZtdMstq',
            'https://tenor.com/view/undertale-napstablook-gif-13152323',
            'https://tenor.com/view/funny-animals-happy-awkward-pizza-gif-19355981',
            'https://tenor.com/view/when-the-gif-20972211',
            'https://tenor.com/view/cat-burger-eat-eaten-meme-gif-18981931',
            'https://tenor.com/view/happle-apple-h-apple-gif-18834689',
            'https://tenor.com/view/haha-funny-lol-laughing-out-loud-giggle-gif-16365278',
            'https://media.discordapp.net/attachments/723942960361767075/799509342147444736/697995591921172532.gif',
            'https://tenor.com/view/wolf-aoogah-awoogah-awooga-love-gif-19805850',
            'https://tenor.com/view/meme-cp-club-penguin-penguin-dance-gif-15754218',
            'https://tenor.com/view/meme-snowstorm-gif-20196456',
            'https://tenor.com/view/cena-meme-gif-4891236',
            'https://tenor.com/view/meme-gif-19472195',
            'https://tenor.com/view/meme-face-extrude-funny-crying-gif-13755209',
            'https://tenor.com/view/meme-triggered-skeleton-dancing-bones-gif-14026272',
            'https://tenor.com/view/coffin-meme-bottom-text-gif-16982768',
            'https://tenor.com/view/morshu-rtx-gif-20067764',
            'https://tenor.com/view/coffee-shut-up-we-dont-care-shut-up-we-dont-care-cooksux-shut-up-gif-20180655',
            'https://tenor.com/view/stupid-trump-gif-12949314',
            'https://tenor.com/view/aye-ayylmao-lmao-gif-5315191',
            'https://tenor.com/view/laughing-big-mouth-eat-screaming-crazy-gif-12904194',
            'https://tenor.com/view/the-rock-rock-gif-21708339'
        ];

        var i = Math.round(Math.random() * gifs_reactions.length);

        if(message.content.toLowerCase().includes('lmao moment')) {
            l.find({key: message.guild.id}, async function (err, data) {
                if (!data.length) {
                    const doc = new l({
                        key: message.guild.id,
                        value: false
                    });

                    await doc.save()
                    message.author.send('to activate the funny, use /toggle')
                }else if (data[0].value == false) {
                    message.author.send('to activate the funny, use /toggle')
                }else if (data[0].value == true) {
                    message.channel.send(gifs_reactions[i])
                }
            })
        }

        

    }
}