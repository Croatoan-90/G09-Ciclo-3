function createTablePatineta(items){
    let myTable="<table>";
    myTable+="<th>";
    myTable+="<tr>";
    myTable+="<td>"+"<h3>"+"Id"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Marca"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Modelo"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Categoría"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Nombre"+"</h3>"+"</td>";
    myTable+="</tr>";
    myTable+="</th>";


    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].brand+"</td>";
        myTable+="<td>"+items[i].model+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}
function createTableCliente(items){
    let myTable="<table>";

    myTable+="<th>";
    myTable+="<tr>";
    myTable+="<td>"+"<h3>"+"Id"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Nombre"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Correo"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Edad"+"</h3>"+"</td>";
    myTable+="</tr>";
    myTable+="</th>";


    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td>"+items[i].email+"</td>";
        myTable+="<td>"+items[i].age+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}

function createTableMensaje(items){
    let myTable="<table>";

    myTable+="<th>";
    myTable+="<tr>";
    myTable+="<td>"+"<h3>"+"Id"+"</h3>"+"</td>";
    myTable+="<td>"+"<h3>"+"Mensaje"+"</h3>"+"</td>";
    myTable+="</tr>";
    myTable+="</th>";


    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].messagetext+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}
function traerInformacionPatineta(){
    
    $("#Resultado").empty()

    $.ajax({
        url: "https://ge3e1bb39c96dbd-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "GET",
        datatype: "json",
        cors: false,
        crossDomain: true,
        contentType:'application/json',
        secure: false,
        headers: {
            
           "Access-Control-Allow-Origin": "*",

        },
        success: function(respuesta){
            console.log(respuesta);
            createTablePatineta(respuesta.items);
            
            
            }
        }
    )

}
function traerInformacionCliente(){
    
    $("#Resultado").empty()
    
    $.ajax({
        url: "https://ge3e1bb39c96dbd-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "json",
        cors: false,
        crossDomain: true,
        contentType:'application/json',
        secure: false,
        headers: {
            
           "Access-Control-Allow-Origin": "*",

        },
        success: function(respuesta){
            console.log(respuesta);
            createTableCliente(respuesta.items);

            }
        }
    )

}

function traerInformacionMensaje(){

    $("#Resultado").empty()
    

    $.ajax({
        url: "https://ge3e1bb39c96dbd-db202109231828.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/message",
        type: "GET",
        datatype: "json",
        cors: false,
        crossDomain: true,
        contentType:'application/json',
        secure: false,
        headers: {
            
           "Access-Control-Allow-Origin": "*",

        },
        success: function(respuesta){
            console.log(respuesta);
            createTableMensaje(respuesta.items);
            
            
            }
        }
    )
}




