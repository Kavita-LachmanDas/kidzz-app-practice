

var user_input = prompt("Welcome to KIdzz Webpagee what do you want ? \n Forward Counting \n Backward Counting \n table")

if(user_input.toLowerCase() === "forward counting"){
    var startNum = prompt("enter start number");
    var endNum = prompt("enter end number");
   for(var i = startNum; i <= endNum ; i += 10){
    // document.write("</br>")

    for(var j = i; j <= i + 10 ; j++){
        document.write( "  " + j + "  " )
        
    }
    document.write("</br>")
   }
}


if(user_input.toLowerCase() === "backward counting"){
    var startNum = prompt("enter start number");
   var endNum = prompt("enter end number");

for(var i = startNum; i >= endNum; i -= 10){

for(var j= i; j > i - 10 && j >= endNum; j-- ){
    document.write(" " +  j + " " );

}
document.write("</br>")
}

}

//table

if(user_input.toLowerCase() === "table"){
    var table = prompt("what table you want")
    var startNum = prompt("enter start number");
    var endNum = prompt("enter end number");

    for(var i = startNum;i<=endNum;i++){
       document.write(`${table} X ${i} = ${i*table} </br>`)
    }
    
}














// for(var i = 1; i <= 100; i += 10){

// for(var j= i; j < i + 10; j++ ){
//     document.write(" " +  j + " " );

// }
// document.write("</br>")
// }

           
