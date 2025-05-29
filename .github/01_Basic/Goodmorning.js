//Make a "Good day" greeting if the hour is less than 18:00:
let hour = new Date().getHours();
if(hour < 18){
  greeting = "Good day";
}
// Otherwise, make it "Good evening":
else {
  greeting = "Good evening";
}
// Display the greeting:
console.log(greeting);

