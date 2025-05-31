// ---------- zadanie 3 ----------

function printNumbers(nr){
    let result = "";
    let array = Array.from(String(nr));
    for(let x of array){
        result += x;
    }
    return result;
}

// console.log(printNumbers(56728));

// ---------- zadanie 4 ----------

function generateRandom(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
function zad4(){
    let counter = 0;
    for(let i = 0; i < 10; i++){
        let random = generateRandom(1, 20);
        if (random > 10){
            counter++;
        }
    }

    if (counter > 5){
        console.log("udalo sie");
    }else{
        console.log("niestety nie");
    }
}

// zad4();

// ---------- zadanie 5 ----------

function checkPalindrom(txt){
    let reversed = txt.trim().split("").reverse().join("");
    if (txt === reversed){
        return true;
    }else{
        return false;
    }
}

// console.log(checkPalindrom("kajak"));   // true
// console.log(checkPalindrom("siema"));   // false

// ---------- zadanie 6 ----------

function random(max){
    return Math.floor(Math.random() * max);
}

function zad6(){
    let array = [];
    let sum = 0;
    for (let i = 0; i < 20; i++){
        array[i] = random(10);
        sum += array[i];
    }

    array.sort();
    console.log(array);
    console.log(sum + ", " + (sum/20));
}

// zad6();

// ---------- zadanie 7 ----------

function deleteDuplikats(nums){
    let counter = 1;
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
            counter++;
        }
    }

    for (let i = k; i < nums.length; i++) {
        nums[i] = "_";
    }

    console.log(counter + ", [" + nums + "]");
}

// let nums = [1, 1, 2, 3, 3, 3, 4, 4, 4, 5];
// deleteDuplikats(nums);

// ---------- zadanie 8 ----------

function longestCommonPrefix(strs){
    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
            if (prefix === ""){
                return "";
            }
        }
    }

    return prefix;
}

// console.log(longestCommonPrefix(["flower","flow","flight"]));
// console.log(longestCommonPrefix("dog","racecar","car"));

// ---------- zadanie 9 ----------

function romanToArab(str){
    const roman = new Map();
    roman.set("I", 1);
    roman.set("V", 5);
    roman.set("X", 10);
    roman.set("L", 50);
    roman.set("C", 100);
    roman.set("D", 500);
    roman.set("M", 1000);

    let result = 0;

    for (let i = 0; i < str.length; i++) {
        const current = roman.get(str[i]);
        const next = roman.get(str[i + 1]);

        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

// console.log(romanToArab("III"));
// console.log(romanToArab("LVIII"));
// console.log(romanToArab("MCMXCIV"));

// ---------- zadanie 10 ----------

function zad10(){
    const arr = [
        [ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
        [ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
        [  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
        [ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
        [  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
        [ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
        [ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
        [ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
    ]

    const str = "rrrdddllddrrruuuurrddrruurddddlld";

    let i = 0;
    let j = 0;
    let result = "";
    result += String.fromCharCode(arr[i][j]);

    for (let letter of str){
        if (letter == 'r'){
            j++;
            result += String.fromCharCode(arr[i][j]);
        }else if(letter == 'd'){
            i++;
            result += String.fromCharCode(arr[i][j]);
        }else if(letter == 'l'){
            j--;
            result += String.fromCharCode(arr[i][j]);
        }else if(letter == 'u'){
            i--;
            result += String.fromCharCode(arr[i][j]);
        }
    }

    return result;
}

// console.log(zad10());

// ---------- zadanie 11 ----------

function lastWordLen(s){
    let arr = s.trim().split(" ");
    let last = arr[arr.length - 1];
    return last.length;
}

// console.log(lastWordLen("Hello World"));
// console.log(lastWordLen("    fly me   to    the moon     "));

// ---------- zadanie 12 ----------

function climb_stairs(n) {
    if (n <= 2) return n;
  
    let prev = 1;
    let current = 2;
  
    for (let i = 3; i <= n; i++) {
      let next = prev + current;
      prev = current;
      current = next;
    }
  
    return current;
}

// console.log(climb_stairs(2));
// console.log(climb_stairs(3));