{
//1. spread operator 
//2. rest operator
//3. destructuring

// 1.
const names1: string[] = ["jahid", "nadim", "adnan", "foysal"]
const names2: string[] = ["Abrar", "imam", "abid", "samit"]
names1.push(...names2)
// console.log(names1);

const mentor1 = {
    typeScript: "Mezba",
    redux: "Mir",
    dbms: "Mizan"
}

const mentor2 = {
    prisma: "Firoz",
    next: "Tonmoy",
    cloud: "Nahid"
}

const mentorList = {
    ...mentor1,
    ...mentor2
}

// 2. rest operators 
const greedFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Hi ${friend}`);  
    });
}
console.log(greedFriends("abol", "kabol", "babul", "tabol"));


}