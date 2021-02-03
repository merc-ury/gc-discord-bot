import env from 'dotenv';
import discord from 'discord.js';
import { CommandParser } from './components/CommandParser';
import { CommandOptions } from './data/globalTypes';

// loads the dotenv file to process.env
env.config();
const client = new discord.Client();
const prefix = '!';

// client events
client.on('ready', () => {
    console.log('✅ connected to server');
})

client.on('message', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(prefix))
        return;

    console.log(`◀ incoming cmd: ${msg.content}`);

    // parsing incoming commands
    const [command, args] = CommandParser.parseCommand(msg.content);

    switch (command) {
        case CommandOptions.argsTest:
            const embeddedMsg = new discord.MessageEmbed({
                title: args[0] || 'Default Title',
                description: args[1] || 'Default Description',
                color: args[2] || 0xff0000
            });

            msg.channel.send(embeddedMsg);
            break;
    }
});

client.login(process.env.BOT_TOKEN);