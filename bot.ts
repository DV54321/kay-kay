import { Client } from 'discord.js';

declare module 'discord.js' {

    interface Client {

        commands: Collection<String, any>

    }

}

const client: Client = new Client();

client.on("message", async message => {

if (Math.floor(Math.random() * 20) === 0) message.channel.send('k')

});

client.login('super secret token')
