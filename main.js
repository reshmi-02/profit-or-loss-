var a=parseInt(prompt("Enter the debited amount"));
document.write("Debited amount= "+a+"<br><br>");

var b=parseInt(prompt("Enter the credited amount"));
document.write("Debited amount= "+b+"<br><br>");

var total;

if(a<b){
    total=b-a;
    document.write("you have a profit amount "+total);
}
else if(a>b){
  total=a-b;
  document.write("you loss a amount "+total);
}
else{
  document.write("you have no profit and loss ");
}