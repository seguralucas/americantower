export const getFechaNotificacion=function():Date{
    var fechaNotificacionCambio = new Date();
    fechaNotificacionCambio.setDate(fechaNotificacionCambio.getDate()-7);
    return fechaNotificacionCambio

}