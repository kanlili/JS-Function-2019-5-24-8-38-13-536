  function reverseString(message){
   var l=message.length;
   var rev=" ";
   for(var i=l-1;i>=0;i--){
	   rev+=message.charAt(i);
   }
  
   document.write(rev);
}
  // JavaScript Document