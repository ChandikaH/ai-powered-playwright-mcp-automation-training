var personName: string = "John";
var personAge: number = 30;
var studentStatus: boolean = true;
var hobbies: string[] = ["reading", "traveling", "coding"];
var address: { street: string; city: string; zipCode: number } = {
    street: "123 Main St",
    city: "Anytown",
    zipCode: 12345,
};

console.log("Name: " + personName);
console.log("Age: " + personAge);
console.log("Student Status: " + studentStatus);
console.log("Hobbies: " + hobbies.join(", "));
console.log("Address: " + address.street + ", " + address.city + ", " + address.zipCode);