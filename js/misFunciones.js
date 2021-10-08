//Ajax DELETE de Patineta
function borrarPatineta(idPatineta){
    let myData={
        id:idPatineta
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        datatype: "json",
       
        success: function(respuesta){
            $("#Resultado").empty();
            traerInformacionPatineta();
            console.log(respuesta);
            alert("Se ha eliminado correctamente.")
                       
            }
        }
    )

}

//Ajax DELETE de Cliente
function borrarCliente(idCliente){
    let myData={
        id:idCliente
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        datatype: "json",
       
        success: function(respuesta){
            $("#Resultado").empty();
            traerInformacionCliente();
            console.log(respuesta);
            alert("Se ha eliminado correctamente.")
                       
            }
        }
    )

}

//Ajax DELETE de Message
function borrarMensaje(idMensaje){
    let myData={
        id:idMensaje
    };

    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "DELETE",
        data:dataToSend,
        contentType:"application/json",
        datatype: "json",
       
        success: function(respuesta){
            $("#Resultado").empty();
            traerInformacionMensaje();
            console.log(respuesta);
            alert("Se ha eliminado correctamente.")
                       
            }
        }
    )

}

//Ocultar campos de introduccion para agregar mensaje.
function ocultarAdicionMensaje(){
   
    var div = document.getElementById("AdicionMensaje");

    div.style.display = "none";
    
}

//Desplegar campos de introduccion para agregar mensaje.
function mostrarAdicionMensaje(){
   // $("#Resultado").empty();
  
 
    var div = document.getElementById("AdicionMensaje");

        div.style.display = "block"; 
   
}


//Ocultar campos de introduccion para agregar Cliente.
function ocultarAdicionCliente(){
   
    var div = document.getElementById("AdicionCliente");

    div.style.display = "none";
    
}
//Desplegar campos de introduccion para agregar Cliente.
function mostrarAdicionCliente(){
    //$("#Resultado").empty();
    
 
    var div = document.getElementById("AdicionCliente");

        div.style.display = "block"; 
   
}


//Ocultar campos de introduccion para agregar Patineta.
function ocultarAdicionPatineta(){
   
    var div = document.getElementById("AdicionPatineta");

    div.style.display = "none";
    
}
//Desplegar campos de introduccion para agregar patineta.
function mostrarAdicionPatineta(){
    //$("#Resultado").empty();
   
 
    var div = document.getElementById("AdicionPatineta");

        div.style.display = "block"; 
   
}


//Creacion de tabla para el despliegue de datos de Patineta
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
        myTable+="<td>"+"<button id='borrar' onclick='borrarPatineta("+items[i].id+")'> Borrar"+"</button>"+"</td>";
        myTable+="</tr>";
        
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}

//Creacion de tabla para el despliegue de datos de Cliente
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
        myTable+="<td>"+"<button id='borrar' onclick='borrarCliente("+items[i].id+")'> Borrar"+"</button>"+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}

//Creacion de tabla para el despliegue de datos de Mensajes
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
        myTable+="<td>"+"<button id='borrar' onclick='borrarMensaje("+items[i].id+")'> Borrar"+"</button>"+"</td>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#Resultado").append(myTable);

}
//Ajax GET de Patineta
function traerInformacionPatineta(id){
    
    $("#Resultado").empty()

    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "GET",
        datatype: "json",
       
        success: function(respuesta){
            console.log(respuesta);
            createTablePatineta(respuesta.items);
            
            
            }
        }
    )

}
//Ajax GET de Cliente
function traerInformacionCliente(){
    
    $("#Resultado").empty()
    
    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "GET",
        datatype: "json",
      
        success: function(respuesta){
            console.log(respuesta);
            createTableCliente(respuesta.items);

            }
        }
    )

}
//Ajax GET de Mensaje
function traerInformacionMensaje(){

    $("#Resultado").empty()
    

    $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "GET",
        datatype: "json",
        
        success: function(respuesta){
            console.log(respuesta);
            createTableMensaje(respuesta.items);
            
            
            }
        }
    )
}
//Ajax POST de Patineta
function guardarInformacionPatinetas(){
    let myData={

    
    id:$("#idPat").val(),
    brand:$("#brand").val(),
    model:$("#model").val(),
    category_id:$("#category_id").val(),
    name:$("#namePat").val()
    };
    let dataToSend=JSON.stringify(myData);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "POST",
        data:myData,
        datatype: "json",
        
        success: function(respuesta){
        ocultarAdicionPatineta();
        $("#idPat").val(""),
        $("#brand").val(""),
        $("#model").val(""),
        $("#category_id").val(""),
        $("#namePat").val("")
            ocultarAdicionPatineta();
            alert("Se ha guardado un nueva patineta");
            traerInformacionPatineta();
            
            
            }
        }
    )

}
//Ajax POST de Cliente
function guardarInformacionClientes(){
   
    let myDataClien={

    
    id:$("#idClien").val(),
    name:$("#nameClien").val(),
    email:$("#email").val(),
    age:$("#age").val()
    
    };
    let dataToSend=JSON.stringify(myDataClien);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "POST",
        data:myDataClien,
        datatype: "json",
        
        success: function(respuesta){
            ocultarAdicionCliente();
            $("#idClien").val(""),
            $("#nameClien").val(""),
            $("#email").val(""),
            $("#age").val(""),
      
            alert("Se ha guardado un nuevo cliente");
            traerInformacionCliente();
            
            
            }
        }
    )

}
//Ajax POST de Mensaje
function guardarInformacionMensaje(){
    let myDataMessage={

    
    id:$("#idMen").val(),
    messagetext:$("#message").val()
    
    };
    let dataToSend=JSON.stringify(myDataMessage);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "POST",
        data:myDataMessage,
        datatype: "json",
        
        success: function(respuesta){
            ocultarAdicionMensaje();
            $("#idMen").val(""),
            $("#message").val(""),
         
            alert("Se ha guardado un nuevo mensaje");
            traerInformacionMensaje();
            
            
            }
        }
    )

}
//Ajax PUT de Patineta
function actualizarInformacionPatineta(){
    let myData={

    
    id:$("#idPat").val(),
    brand:$("#brand").val(),
    model:$("#model").val(),
    category_id:$("#category_id").val(),
    name:$("#namePat").val()
    };
    let dataToSend=JSON.stringify(myData);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/skate/skate",
        type: "PUT",
        data:myData,
        datatype: "json",
        
        success: function(respuesta){
            ocultarAdicionPatineta();
            $("#idPat").val(""),
            $("#brand").val(""),
            $("#model").val(""),
            $("#category_id").val(""),
            $("#namePat").val("")
            alert("Se ha actualizado la patineta");
            traerInformacionPatineta();
            
            
            }
        }
    )

}
//Ajax PUT de Cliente
function actualizarInformacionCliente(){
   
    let myDataClien={

    
    id:$("#idClien").val(),
    name:$("#nameClien").val(),
    email:$("#email").val(),
    age:$("#age").val()
    
    };
    let dataToSend=JSON.stringify(myDataClien);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
        type: "PUT",
        data:myDataClien,
        datatype: "json",
        
        success: function(respuesta){
            ocultarAdicionCliente();
            $("#idClien").val(""),
            $("#nameClien").val(""),
            $("#email").val(""),
            $("#age").val(""),
            alert("Se ha actualizado el cliente");
            traerInformacionCliente();
            
            
            }
        }
    )

}
//Ajax PUT de Mensaje
function actualizarInformacionMensaje(){
    let myDataMessage={

    
    id:$("#idMen").val(),
    messagetext:$("#message").val()
    
    };
    let dataToSend=JSON.stringify(myDataMessage);
            
        $.ajax({
        url: "https://gfe5086c8065ef9-db202109232050.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
        type: "PUT",
        data:myDataMessage,
        datatype: "json",
        
        success: function(respuesta){
            ocultarAdicionMensaje();
            $("#idMen").val(""),
            $("#message").val(""),
            alert("Se ha actualizad el mensaje");
            traerInformacionMensaje();
            
            
            }
        }
    )

}
