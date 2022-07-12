//KUIS KODING OBJECT

/**
 * TODO
 * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
 *    - Memiliki properti bernama "name"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti bernama "city"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite drink"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "favorite food"
 *       - Bertipe data string
 *       - Bernilai apa pun, asalkan tidak string kosong atau null.
 *    - Memiliki properti "isVegan"
 *       - Bertipe data boolean
 *       - Bernilai boolean apa pun.
 *
 * 2. Buatlah variabel bernama name.
 *    Kemudian isi dengan nilai name dari properti object restaurant
 * 3. Buatlah variabel bernama favoriteDrink.
 *    Kemudian isi dengan nilai "favorite drink" dari properti object restaurant
 */


// TODO
// Make a variabel
const restaurant = {
	name:"zidan",
  	city:"jakarta",
  	"favorite drink":"cola",
  	"favorite food":"nasi",
  	"isVegan": true
}

// make a variabel name with kurawal to get property from name in object restaurant
const {name} = restaurant;

// make a variabel favorite drink with kurawal to get property from favoriteDrink in object restaurant
const {'favorite drink': favoriteDrink } = restaurant;

console.log(name);
console.log(favoriteDrink);


// KUIS KODING ARRAY
/**
 * TODO:
 * Buatlah sebuah variabel dengan nama evenNumber yang merupakan sebuah array dengan ketentuan:
 *   - Array tersebut menampung bilangan genap dari 1 hingga 100
 *
 * Catatan:
 *   - Agar lebih mudah, gunakanlah for loop dan logika if untuk mengisi bilangan genap pada array.
 */

// TODO
// Make inisialisasi for var evenNumber 
const evenNumber = []
let number;

// Make a logic loop for to get a even number
for (let number = 1; number <= 100; number++){
	if ((number%2)==0){
    	evenNumber.push(number);
    }
}
console.log(evenNumber)
/**
 * Jangan hapus kode di bawah ini
 */

module.exports = evenNumber;


// KUIS CODING MAP
/**
 * TODO:
 * 1. Buatlah variabel currency yang merupakan Map dengan kriteria:
 *   - key "USD", value 14000
 *   - key "JPY", value 131
 *   - key "SGD", value 11000
 *   - key "MYR", value 3500
 * 2. Buatlah variabel priceInIDR yang bernilai dari hasil perkalian:
 *     - priceInJPY dengan nilai currency JPY
 */

const priceInJPY = 5000;

 // TODO
 // make a variabel for cureency
const currency = new Map([
    ["USD", 14000],
      ["JPY", 131],
      ["SGD", 11000],
      ["MYR", 3500],
]);

//  make a const for priceInIDR and use get to take a value from key "JPY" anda use *(multiple) to multiply it with priceInJPY
const priceInIDR = currency.get("JPY") * priceInJPY;
console.log(priceInIDR)
 
 /**
  * Jangan hapus kode di bawah ini
  */
//  module.exports = { currency, priceInJPY, priceInIDR };