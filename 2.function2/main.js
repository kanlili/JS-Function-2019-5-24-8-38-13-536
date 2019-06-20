     function palindrome(message){
   var l=message.length;
   var pal="";
   for(var i=l-1;i>=0;i--){
	   pal+=message.charAt(i);
   }
   document.writeln(pal==message);
 }
  // JavaScript Document