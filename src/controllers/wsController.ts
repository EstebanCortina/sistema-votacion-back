const wsBroadcast = require('../handlers/wsBroadcast');

const conexiones = [];

module.exports = (ws) => {
  const { mqttClient } = require('../env_variables');
  console.log('Nueva conexion');
  conexiones.push(ws);
  mqttClient.on('message', (topic, message) => {
    const messageObj = JSON.parse(message);
    (async () => {
      try {
        await wsBroadcast(conexiones, ws, messageObj);
      } catch (error) {
        console.error(error);
      }
    })();
  });

  ws.on('message', (message) => {
    const publish = JSON.parse(message);
    if (publish.type === 1) {
      client.publish('focoEsli/api/foco1', 'Mensaje desde front');
    } else if (publish.type === 2) {
      client.publish('focoEsli/api/foco2', 'Mensaje desde front');
    } else if (publish.type === 3) {
      client.publish('focoEsli/api/foco3', 'Mensaje desde front');
    } else {
      client.publish('focoEsli/api/foco4', 'Mensaje desde front');
    }
  });

  ws.on('close', () => {
    (async () => {
      try {
        await wsBroadcast(conexiones, ws);
        console.log('cerrado');
      } catch (error) {
        console.error(error);
      }
    })();
  });
};
