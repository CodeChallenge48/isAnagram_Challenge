/* This is a lesser complex way of solving the same problem. It has lesser lines of code 
and a simpler logic.
It also has only one loop which greatly reduces its time complexity.
The only downside is that it utilizes some inbuilt JS functions which may or may
not be present in other languages.
*/
const isAnagram = (string_a, string_b) =>{

    if(string_a.length < 1){
        return "'String a' is empty";
    }else if(string_b.length >= 50){
        return "'String b' is too long";
    }


    if(string_a.length !== string_b.length){
        return "Not anagram";
    }else if(string_a === string_b){
        return "Anagram";
    }
    string_a = string_a.toLowerCase();
    string_b = string_b.toLowerCase();

    let currentLetter = '';
    for(let counter1 = 0; counter1 < string_a.length; counter1++){
        currentLetter = string_a[counter1];
        if(!(string_b.includes(currentLetter))){
            return "Not anagram 1";

        }else{
            string_b.replace(currentLetter, "");   
        }
    }

    return "Anagram";
}

console.log(isAnagram("m", ""));