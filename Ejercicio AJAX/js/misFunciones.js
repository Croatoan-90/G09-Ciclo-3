function traerInformacion(){

    $.ajax({
        url: "https://ge3e1bb39c96dbd-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "GET",
        datatype: "JSON",
        cors: false,
        crossDomain: true,
        contentType:'application/json',
        secure: false,
        headers: {
            'Access-Control-Allow-Origin': false,
        },
        success: function(respuesta){
            console.log(respuesta);
        }
    })

}