export async function getData(path, client) {
    client.subscribe(path);
    return new Promise((resolve, reject) => {
        client.on('message', function (topic, message) {
            return resolve(JSON.parse(message.toString()));
        });
    });
}
