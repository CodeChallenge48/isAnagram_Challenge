function isAnagram (string_a, string_b){
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

    let letter = {
        
    }
    
    for(let counter = 0; counter < string_a.length; counter++){
        if(letter[string_a[counter]] !== undefined){
            letter[string_a[counter]] = letter[string_a[counter]] + 1; 
        }else{
            letter[string_a[counter]] = 1;
        }
    }
    console.log("String a: ", letter)

    for(let counter2 = 0; counter2 < string_b.length; counter2++){
        if(letter[string_b[counter2]] !== undefined){
            letter[string_b[counter2]] = letter[string_b[counter2]] + 1; 
        }else{
            letter[string_b[counter2]] = 1;
        }
    }
    console.log("Total strings: ", letter)

    for(let counter3 = 0; counter3 < string_b.length; counter3++){
        let isEven = letter[string_b[counter3]] % 2;
        if(isEven !== 0){
            return "Not anagram";
        }
    }

    return 'Anagram';
}

console.log(isAnagram("margana", "anagram"));