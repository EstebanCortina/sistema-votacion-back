module.exports = (() => {
    const mqtt = require('mqtt');
    const client = mqtt.connect('mqtt://test.mosquitto.org');
    client.on('connect', () => {
        client.subscribe('votacionEsli/colima');
        console.log('Suscrito');
    });
    return client;
})();
