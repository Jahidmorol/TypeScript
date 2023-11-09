{
// object destructuring 

const user = {
    id: 345,
    name: {
        firstName: "john",
        middleName: "rises",
        lastName: "uddin"
    },
    contact: "0187334524",
    address: "Uganda",
}

const {
    id,
    contact: phoneNumber,
    name: { middleName },
} = user;


// Array destructuring 
const friends = ["soshim", "joshim", "kamal", "risen", "mijan"]

const [, , bestFriend, ...rest] = friends




}