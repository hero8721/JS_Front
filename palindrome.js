const prom = prompt('Write a word: ');
const prom_1 = prom.split("").reverse();

let i = 0;

while(i<prom.length){
    if(prom[i] === prom_1[i]){
        i++;
    }
    else{
        console.log('Not palindrome');
        break;
    }  
}
if(i === prom.length){
    console.log(`This word is palindrome: ${prom}`);
}
