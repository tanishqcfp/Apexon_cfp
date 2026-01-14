const Str = "hello my name is tanishq";
function charFrequency(Str){
    let freq = {};
    Str = Str.split(" ").join("");

    for(let s of Str){
        freq[s] = (freq[s] || 0) + 1;   
    }

    return freq;
}

console.log(charFrequency(Str));
