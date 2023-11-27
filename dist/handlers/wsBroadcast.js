module.exports = () => {
    return function wsBroadcast(conexiones, ws, message) {
        return new Promise((resolve) => {
            console.log('new broadcast');
            const index = conexiones.indexOf(ws);
            if (index !== -1) {
                console.log('eliminando');
                conexiones.splice(index, 1);
            }
            conexiones.forEach((client) => {
                console.log('mandando');
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(message));
                }
            });
            resolve(true);
        });
    };
};
