export function GenerateComments(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const nameList = [
  "Imran",
  "Time",
  "Past",
  "Bhaskar",
  "Amusha",
  "Srivalika",
  "Flying",
  "Kanakam",
  "Bhuvaneswari",
  "Power",
  "Falling",
  "Sandeep",
  "Jump",
  "Cliff",
  "Mountain",
  "Model",
  "Red",
  "Prasad",
  "Green",
  "Bharath",
  "Gold",
  "Demon",
  "Bhanu",
  "Panda",
  "Bhavana",
  "Kitty",
  "Pravallika",
  "Salar",
  "Satya",
  "Tarun",
  "Meri",
  "Divya",
  "Fear",
  "Alekhya",
  "Glow",
  "Rajendra",
  "Deepti",
  "Sai",
  "Venkatesh",
  "Mine",
  "Your",
  "Worst",
  "Pradeep",
  "Pavani",
  "Force",
  "Video",
  "Kavita",
  "Mallesh",
  "Mule",
  "Jagadeesh",
  "Cult",
  "Cultist",
  "Ram Charan",
  "Gun",
  "Tarak",
  "Recon",
  "Dhoni",
  "Kohli",
  "Ronalado",
  "Messi",
  "Neymar",
  "Mbappe",
  "Near",
  "Haaland",
  "Sunil chetarji",
  "Ishan kisan",
  "Rohit",
  "Geo",
  "Roman Reigns",
  "Goldberg",
  "Spaz",
  "Nani",
  "Brock lesnar",
  "Guruvulu",
  "Alpha",
  "Ramu",
  "Pawankalyan",
  "Dinesh",
  "Squid",
  "Money",
  "Allu arjun",
  "Lord",
  "King",
  "Sowmya",
  "Mohan babu",
  "Ganga",
  "Flame",
  "Yesu",
  "Suresh",
  "Breaker",
  "Numb",
  "Ice",
  "Cold",
  "Rajesh",
  "Sick",
  "Sickly",
  "Janitor",
  "Camel",
  "Rooster",
  "Sand",
  "Sundari",
  "Gabbar",
  "Hurdle",
  "Racer",
  "Eraser",
  "Erase",
  "Big",
  "Small",
  "Short",
  "Banter Bucket",
  "Sith",
  "Phani Kumar",
  "Hunter",
  "Cracked",
  "Broken",
  "Sad",
  "Happy",
  "Basha",
  "Joyful",
  "Crimson",
  "Destiny",
  "Deceit",
  "Lies",
  "Salman",
  "Honest",
  "Destined",
  "Bloxxer",
  "Hawk",
  "Eagle",
  "Hawker",
  "Walker",
  "Prakash",
  "Sarge",
  "Capt",
  "Captain",
  "Punch",
  "Mahesh",
  "Suresh",
  "Uno",
  "Rama krishna",
  "Slash",
  "Praveen",
  "Sivani",
  "Raj kumar",
  "Fell",
  "Wolf",
  "Hound",
  "Aditya",
  "Sharp",
  "Dead",
  "Mew",
  "Bhargav Ram",
  "Bubba",
  "Jyothi",
  "Simran",
  "Wrench",
  "Grease",
  "Head",
  "Preeti",
  "Raghu",
  "Naveen",
  "Ravi Teja",
  "Raghavendra",
  "Indupalli",
  "Vortex",
  "Paradox",
  "Saikumar",
  "Azhar",
  "Padmakar",
  "Srikanth",
  "Rajeswari",
  "Harshita",
  "Afsar",
  "Rajkumar",
  "Jaswanth",
  "Reshma",
  "Jennifer",
  "Priyanka",
  "Siva",
  "Suribabu",
  "Lakshmi",
  "Durgarao",
  "Revathi",
  "Dhana",
  "Padma",
];
export function GenerateUsernames() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}
