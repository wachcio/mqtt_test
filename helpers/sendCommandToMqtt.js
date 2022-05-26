import { connectAsync } from './async-mqtt.js';
import { getData } from './mqttGetData.js';

export async function sendCommandToMqtt([
    publishTopic,
    publishCmd,
    answareTopic,
]) {
    // console.log('Starting');

    try {
        const client = await connectAsync('mqtt://192.168.2.171');
        await client.publish(publishTopic, publishCmd);
        const answare = await getData(answareTopic, client);

        await client.end();
        // This line doesn't run until the client has disconnected without error
        // console.log('Done');
        return answare;
    } catch (e) {
        // Do something about it!
        console.log(e.stack);
        process.exit();
    }
}
