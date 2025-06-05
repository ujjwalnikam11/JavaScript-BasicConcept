class game{
    constructor(name,year,month,day){
        this.name= name;
        this.year= year;
        this.month= month;
        this.day= day;

        this.date = new Date(year,month,day);
        this.setmonth = function(month){
            this.month = month;
            this.year = year;
            this.day = day;
        }
    }
    consolelog(){
        console.log(`The game ${this.name} was released on ${this.date.toDateString()}`);
    }
    age(){
        const currentDate = new Date();
        const ageInMilliseconds = currentDate - this.date;
        const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
        return ageInDays;
    }

};

console.log("ASDFGHGHGGHGGH");
const game1 = new game("The Legend of Zelda: Breath of the Wild", 2017, 3, 3);
game1.consolelog();
console.log(`Age of the game in days: ${game1.age()}`);