const conexiones = [];

module.exports = (ws) => {
  const WebSocket = require('ws');
  const { mqttClient } = require('../env_variables');
  console.log('Nueva conexion');
  conexiones.push(ws);
  mqttClient.on('message', (topic, message) => {
    const messageObj = JSON.parse(message);
    (async () => {
      try {
        conexiones.forEach((client) => {
          console.log('mandando');
          if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(messageObj));
          }
        });
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
        const index = conexiones.indexOf(ws);
        if (index !== -1) {
          conexiones.splice(index, 1);
        }
        console.log('Conexion cerrada');
      } catch (error) {
        console.error(error);
      }
    })();
  });
};
