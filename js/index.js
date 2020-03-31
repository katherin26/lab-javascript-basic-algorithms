
// Iteration 1: Names and Input
let hacker1 = `Katherin`;
  console.log(`The driver's name is ${hacker1}`);
let navigator = `Chris`;
console.log(`The navigater name is ${navigator}`);

// Iteration 2: Conditionals
if (hacker1.length > navigator.length){
  console.log(`The driver ${hacker1}  has the longest name, it has ${hacker1.length} characters`)
}else if( hacker1.length < navigator.length){
  console.log(`It seems that the navigator ${navigator} has the longest name, it has ${navigator.length} characters. `);
}else{
  console.log(`Wow, you both have equally long names, ${navigator.length} characters!`);
}
// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));
console.log(navigator.split("").reverse().join(""));
console.log(hacker1<navigator);

if (hacker1<navigator){
  console.log(`The driver's name ${hacker1} goes first.`);
}else if (navigator<hacker1){
  console.log(`Yo, the navigator ${navigator} goes first definitely.`);
}else{
  console.log(`What?! You both have the same name ${hacker1}?`)
}

//another solution with array
let hackersArray = ['Katherin', 'Chris'];
console.log(hackersArray.sort());//because the unicode table C = decimal: 67 y K = decimal:75

//another solution with const 

let hackerss = ['Katherin', 'Chris'];
console.log(hackerss.sort()[0]);//because the unicode table C = decimal: 67 y K = decimal:75

//Another solution with localCompare

const hackerr1 = 'Katherin';
const hackerr2 = 'Chris';

let result = hackerr1.localeCompare(hackerr2);//1 positive number chris is first
 if(result > 0){
   console.log(`The first name is ${hackerr2} `); //1
 }else if (result < 0){
   console.log(`The name that come first is ${hackerr1}`);//-1
 }else{
   console.log(`Your are equal ${hackerrno1} ${hackerr2}`);//0
 }

 console.log(result);

 //Bonus 
 
let paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pulvinar fermentum velit, in eleifend urna posuere sed. Mauris imperdiet venenatis est, id tempor diam ullamcorper non. Donec vehicula eros mi, sit amet scelerisque est hendrerit ac. Morbi a quam ut urna accumsan feugiat. Duis lorem ipsum, vulputate sed molestie sit amet, molestie at leo. Maecenas auctor nisi nec nibh luctus, quis congue nisl volutpat. Nunc auctor nisi eget lacus pretium, id fringilla diam euismod.

Phasellus finibus suscipit commodo. Vestibulum sed sollicitudin odio. Suspendisse aliquet hendrerit justo id hendrerit. Maecenas volutpat ex non risus vehicula ullamcorper. Fusce elit lacus, pulvinar ut varius id, pharetra non erat. Etiam ornare, leo eu varius porta, magna dui convallis diam, non vestibulum ipsum neque in urna. Phasellus nisi lacus, blandit sit amet ante in, posuere tempor tellus. Sed nisi massa, scelerisque luctus augue fermentum, rutrum feugiat ligula. Aliquam erat volutpat. Maecenas consequat felis et felis tincidunt accumsan. Fusce sit amet fringilla dui. Phasellus sollicitudin pretium tristique. Cras lobortis, nulla eu elementum condimentum, magna ante ullamcorper lacus, non consequat ex turpis sed neque. Ut quis erat sit amet dolor maximus dapibus sed id neque. Interdum et malesuada fames ac ante ipsum primis in faucibus.`;


let count=0;
let countEt=0;
let paragraphArray = paragraph.split(" ")
console.log(paragraphArray.length);

for (let i = 0 ; i < paragraphArray.length; i++){
  if(paragraphArray[i] === "et"){
    countEt++;
  }
}

 console.log(`The total "et" words in the paragraph is ${countEt}`);




