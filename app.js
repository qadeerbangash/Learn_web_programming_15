// for(var a=0;a<=3;a++){
//     document.write(a+"<br>")
// }


// var i = 0; 
//  while (i <= 3) { 
//     document.write(i+"<br>"); 
//     i++; 
//  }


// var i = 0; 
//  do { 
//      document.write(i+"<br>"); 
//      i++; 
//  } while (i <= 3);


//Chapter 49
// function getName(){
//     var name=document.getElementById("abc")
//     alert(name.value)
//     name.value=" "
// }

//Chapter 50
function setName(){
    var name=document.getElementById('abc')
    name.value="Qadeer"
    var para=document.getElementById('para')
    para.innerHTML="Hello This is chrome browser"
}
setName()

