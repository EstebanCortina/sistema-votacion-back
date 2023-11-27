module.exports = (() => {
    function getDate() {
        const fechaActual = new Date();
        const offsetHorario = -6 * 60 * 60 * 1000;
        fechaActual.setTime(fechaActual.getTime() + offsetHorario);
        const fechaISO = fechaActual.toISOString();
        return fechaISO;
    }
    return getDate;
})();
