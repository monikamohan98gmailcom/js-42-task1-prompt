/*
----------------------------------------
*/
//task1
var userName=prompt('Enter the name','monika')
console.log(userName)
var start=prompt('enter the start slice value')
var end=prompt('enter the end slice value')
if(parseInt(start)!=NaN && parseInt(end)!=NaN)
{
  
  var result=userName.slice(parseInt(start),parseInt(end))
  alert('the resulted slice value is '+result)
 
}   
else{
   alert('Please enter the correct value')
}  