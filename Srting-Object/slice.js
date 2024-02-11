const address = "Dhaka";

const part = address.slice(1, 4); //slice(start, end before)

console.log(part);

const sentence = "I am a good hardworking student";
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friendsStr = "Rahim,kahim,dahim,lahim,fahim,sahim";
const friends = friendsStr.split(",");
console.log(friends);
const realFriend = ["Rahim", "kahim", "dahim", "lahim", "fahim", "sahim"];
console.log(realFriend.join());
console.log(realFriend.join("|"));
console.log(realFriend.join("-"));
