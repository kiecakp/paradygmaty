// ---------- zadanie 1 ----------

const currentUser = {
    name: "Pati",
    surname: "Kiecak",
    email: "jsjsjsjs@gmail",
    www: "...",
    userType: "user",
    isActive: false,

    show() {
        return this.name + " " + this.surname;
    },
    setActive(active) {
        this.isActive = active;
    }
}

// console.log(currentUser.show());
// console.log(currentUser.isActive);
// currentUser.setActive(true);
// console.log(currentUser.isActive);

// ---------- zadanie 2 ----------

class Book{
    constructor(){
        this.users = [];
    }

    addUser(name, age, phone){
        this.users.push({name, age, phone});
    }

    showUsers(){
        console.log("Wszyscy uzytkowanicy w ksiazce: ");
        for (let user of this.users){
            console.log(user)
        }
    }

    findByName(name){
        for (let user of this.users){
            if (user.name == name){
                return user;
            }
        }
        return false;
    }

    findByPhone(phone){
        for (let user of this.users){
            if (user.phone == phone){
                return user;
            }
        }
        return false;
    }

    getCount(){
        return this.users.length;
    }
}

function zad2(){
    let book = new Book();
    console.log(book.users);
    book.addUser("pati", 22, 123456789);
    console.log(book.users);

    book.showUsers();

    console.log(book.findByName("pati"));
    console.log(book.findByName("damian"));

    console.log(book.findByPhone(123456789));
    console.log(book.findByPhone(654789065));

    console.log(book.getCount());
}

// zad2();

// ---------- zadanie 3 ----------

const text = {
    check(txt, word){
        return txt.includes(word);
    },

    getCount(txt){
        return txt.length;
    },

    getWordsCount(txt){
        return txt.trim().split(" ").length;
    },

    setCapitalize(txt){
        let arr = txt.trim().split(" ");
        let result = "";

        for (let word of arr){
            result += word[0].toUpperCase();
            result += word.slice(1) + " ";
        }

        return result.trim();
    },

    setMix(txt){
        let arr = txt.trim().split("");
        for(let i = 0; i < arr.length; i++){
            if(i % 2 != 0){
                arr[i] = arr[i].toUpperCase();
            }
        }
        
        return arr.join("");
    },

    generateRandom(lng){
        let result = "";
        let min = 97;
        let max = 122;

        for(let i = 0; i < lng; i++){
            let x = Math.floor(Math.random()*(max-min+1)+min);
            result += String.fromCharCode(x);
        }
        return result;
    }
}

function zad3(){
    console.log(text.check("ala ma kota", "kota"));
    console.log(text.check("ala ma kota", "mysz"));

    console.log(text.getCount("ala ma kota"));

    console.log(text.getWordsCount("Ala ma kota"));

    console.log(text.setCapitalize("ala ma kota"));

    console.log(text.setMix("ala ma kota"));

    console.log(text.generateRandom(10));
}

// zad3();

// ---------- zadanie 4 ----------

String.prototype.mirror = function(){
    return this.split("").reverse().join("");
}

// console.log("Ala ma kota".mirror());

// ---------- zadanie 5 ----------

function createCounter(){
    let counter = 0;

    return function(){
        counter++;
        return counter;
    }
}

// const counter1 = createCounter();
// console.log(counter1()); // 1
// console.log(counter1()); // 2
// console.log(counter1()); // 3

// const counter2 = createCounter();
// console.log(counter2()); // 1
// console.log(counter2()); // 2