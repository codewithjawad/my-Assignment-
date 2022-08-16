// javascript function that reverse a number?


function  stringreverse(string){
    
    return string.split("").reverse().join("");
   }
   
   document.write("<h1>Check Reverse String</h1> <br>");
   document.write (stringreverse("12345"));
   
   
   
   // javascript function that checks whether a passed string is palindrome or not?
   
   
   var instr = "madam";
    function checkPalindrome(){
     instr = instr.toLowerCase();
     for (let i = 0; i < instr.length ; i++) {
       if (instr[i] !== instr[instr.length - 1 - i]) {
           return  false;
       }
       else{
           return true;
       }
     }
   
    }
    document.write("<h1>Check palindrome String</h1> <br>");
    document.writeln(checkPalindrome(instr));
   
    
    
    //  javascript function that generates all combinations of a string?
   
   function generateCombinations(str) {
   var text = [];
   for(var i = 0 ; i <str.length ; i++){
       for (let j = i +1; j <= str.length; j++) {
          text.push(str.slice(i ,j));
       }
   }
       return text;
    }
    document.write("<h1>generates all combinations of a string</h1> <br>");
    document.write(generateCombinations("dog"));
   
   
    
    
    // javascript function that returns a passed string letter in alphabatical order?
   
    function alphabaticalorder(word) {
   
       return word.split('').sort().join('') ;
    }
   document.write("<h1>Sort In Alphabetical Order</h1> <br>");
   document.write(alphabaticalorder("jawwad"));
   
   
   
   
   // javascript function that accepts a string as a parameter and convert first letter of each word of the string in upper case?
   
   function capFirstLetter(sentence) {
       var word ;
       word = sentence.split(" ");
       for (let  i= 0;  i< word.length; i++) {
           word[i] = word[i][0].toUpperCase() + word[i].substr(1);
       }
       var sent = word.join(" ");
       return sent;
   }
   document.write("<h1>Captilize First Letter Of Each Word </h1> <br>");
   document.write(capFirstLetter("the quick brown fox"));
   
   
   
   // javascript function that accepts a string as a parameter and find a longest word within the string?
   
   
   function FindLongestWord(str){ 
       var words= str.split(" ");
       var LongestWord = " ";
       for(var i = 0; i< words.length; i++){
           var individualWord = words[i] ;
           if(individualWord.length > LongestWord.length){
               LongestWord = individualWord;
           }
   
       }
   return LongestWord;
   }
   document.write("<h1>Longest Word in string</h1> <br>");
   document.write(FindLongestWord("Web Development Tutorial"));
   
   
   
   // javascript function that accepts a string as a parameter and counts the number of vowels within the string?
   
   
   function getvowels(string){
      var vowels = "aAeEiIoOuU"
      var vowelsCount = 0;
      for(i = 0; i<string.length; i++){
   if(vowels.indexOf(string[i] )!== -1){
       vowelsCount += 1;
   }
      }
   return vowelsCount;
   }
   document.write("<h1>Count Vowels in String </h1> <br>");
   document.write(getvowels("jawad ahmed"));
   
   
   
   //javascript function that accepts a number as a parameter and check the number is prime or not?
   
   function findPrimeNumbers(checkNum){
     var findPrime = true;
     if(checkNum ===1){
       document.write("1 is neither prime nor composite number.");
     }
     else if(checkNum > 1){
   for(i = 2; i<checkNum; i++){
       if(checkNum % i === 0){
       findPrime = false;
       break;
       }
   
   }
   if(findPrime){
       document.write("is a prime number  :");
   
   }
   else{
       document.write("is not a prime number  :");
   }
   
     }                       
   return checkNum;
   }
   document.write("<h1>Check Prime Number </h1> <br>");
   document.write(findPrimeNumbers(7));
   
   
   // javascript function that accepts an argument and returns the data type?
   
   
   function detectDataType(value)
   {
   var dtypes = [Function, undefined, Number, String, Boolean, Object], x, len;
       
   if (typeof value === "object" || typeof value === "function") 
       {
        for (x = 0, len = dtypes.length; x < len; x++) 
        {
               if (value instanceof dtypes[x])
               {
                   return dtypes[x];
               }
         }
       }
       
       return typeof value;
   }
   document.write("<h1>Check data type </h1> <br>");
   document.write(detectDataType(true));
   
   
   //  javascript function which will take an array of numbers stored and find the second lowest and largest numbers? 
   
   
   function findLowestGreatest(arrNum){
       var num = [arrNum[0]];
       var result = [];
       for(var i=1; i<arrNum.length; i++){
           if(arrNum[i-1] !== arrNum[i]){
               num.push(arrNum[i]);
           }
   
       }
       result.push(num[1],num[num.length-2]);
       return result.join(",");
   }
   document.write("<h1>find second lowest and greatest number</h1> <br>");
   document.write(findLowestGreatest([1,2,,4,5]));
   
   
   
   
   
   
                                        // THE END
   
   
   
   
   
   
   
   
   
   