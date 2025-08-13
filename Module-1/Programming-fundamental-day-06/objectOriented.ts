let person = {
  id: 1,
  name: "Fulfu",
  age: 30,
  address: {
    street: "Jl. Sudirman",
    zip: 1234
  },
  hobbies: ["Diving", "Cycling", "Running"],
  devices: [['Smartphone', 'Samsung'],['Car', 'Agya']]
}

console.log ('Name:', person.name)
console.log ('Age:', person.age)
console.log ('Street:', person.address.street)
console.log ('Zip:', person.address.zip)
console.log ('Hobbies:', person.hobbies[1])
console.log ('Phone:', person.devices[0][1])

console.log ('------------------------------------------')

//--INTERFACE: Untuk mendeklarasikan isi dari object.

//Tanpa Interface:
let order: {id: string, items: any[], total: number} = {
  id: "",
  items: [],
  total: 0,
}

//Dengan Interface:
interface OrderProduct {
  id: string,
  items: any[],
  total: number
}

let orderProduct: OrderProduct = {
  id: '019333',
  items: [
    {product: "Laptop", price: 1000},
    {product: "Mouse", price: 50}
  ],
  total: 1050,
}

console.log (orderProduct)
console.log ('------------------------------------------')

// Case 1: Membuat object sebuah paket.
/*interface Package {
  id: string,
  type: 'Express' | 'Same-Day' | 'Regular', // Union Type.
 // items: any[],
  weight: number,
  prices: number,
  receipient: {
    street: string,
    zip: number
  }
  send: () => string
}

let productPackage2: Package = {
  id: "PKG-123",
  type: 'Express',
  items: ['Dokumen', 'Surat berharga'],
  weight: 1,
  prices: 25000,
  receipient: {
    street: 'Jl.Sudirman',
    zip: 2603
  },
  //Cara ke-1 tulis function:

  send: function () {
    return "Sending Package..."
  /*Cara ke-2 tulis function:
  send: () => {
    return "Sending Package..."
  }  
  
  }
}
console.log ("Package Status: ", productPackage2.send())*/

console.log ('------------------------------------------')
//-- USING TYPES!

type Product = {
  name: string,
  price: number
}

type Receipient = {
  street: string,
  zip: number
}

type Status = 'Pending' | 'Delivered' | 'Shipped'

interface Package {
  id: string,
  type: 'Express' | 'Same-Day' | 'Regular', // Union Type.
  items: Product[],
  status: Status,
  weight: number,
  prices: number,
  receipient: Receipient
  
  send: () => string
}

let productPackage1: Package = {
  id: "PKG-123",
  type: 'Express',
  items: [
    {
    name: "Laptop",
    price: 1000
  }, 
  {
    name: "Mouse",
    price: 1000
  }
],
  status: 'Pending',
  weight: 1,
  prices: 25000,
  receipient: {
    street: 'Jl.Sudirman',
    zip: 2603
  },
  //Cara ke-1 tulis function:

  send: function () {
    return "Sending Package..."
  /*Cara ke-2 tulis function:
  send: () => {
    return "Sending Package..."
  }  */
  
  }
}
console.log ("Package Status: ", productPackage1.send())

//-- ADD & DELETE PROPERTY
// Jika mau melakukan add & delete, maka object harus jadi any.

// Add Property:

let animal: any = {}
animal.name = 'cat'
animal.age = 5
animal.food = 'royal canin'

console.log ("Animal: ", animal)

//Delete Property:

let car: any = {
  model: 'sedan',
  year: 2010
}

console.log ("Before delete year:", car)
delete car.year
console.log ("After delete year: ", car)

console.log ('------------------------------------------')

//MUTABLE -> Kondisi di mana variabel bisa dimodifikasi
// IMMUTABLE -> Kebalikan dari IMMUTABLE

interface People {
  name: string,
  age: number
}

let people: People = {
  name: 'John Doe',
  age: 30
}

people.age = 47
people.name = 'Rumi alabala'
console.log (people)

let score: number[] = [10, 20]
score.push(30) // Menambah data agar konsisinya mutable
console.log (score)

//Contoh Immutable:
/*const age: number = 50
age = 20 // Jika tidak bisa dimodifikasi, maka menjadi immutable.*/

//contoh lain:

/*const book = {
  id: 1,
  title: 'Harry Potter'
} as const

book.title = 'lord of the rings' //Non-Primitive juga bisa menjadi immutable jika menggunakan variabel const.*/
console.log ('------------------------------------------')
//-- FOR IN OBJECT

let smartphone: any = {
  id: "11ook",
  name: "Oppo Reno",
  processor: "Snapdragon"
}

for (let key in smartphone) {
  console.log (`${key}: ${smartphone[key]}`)
}
console.log ('------------------------------------------')

//-- DESTRUCTURING ASSIGNMENT:

interface User  {
  nickName: string,
  personAge: number,
  addressPerson: {
    city: string,
    country: string
  }
}
let user: User = {
  nickName: "alice",
  personAge: 240,
  addressPerson: {
    city: "kkokn",
    country: "Lumina"
  }
}

//ACCESSING VALUE TANPA DESTRUCTURING:
console.log ('Accessing name without destructuring: ', user.nickName)
console.log ('Accessing Age without destructuring: ', user.personAge)
console.log ('Accessing address without destructuring: ', user.addressPerson.city
)
console.log ('------------------------------------------')
//ACCESSING VALUE WITH DESTRUCTURING:

let {nickName, personAge, addressPerson: {city, country}} = user
console.log ('Accessing name with destructuring: ', nickName)
console.log ('Accessing Age with destructuring: ', personAge)
console.log ('Accessing address with destructuring: ', city)
console.log ('Accessing address with destructuring: ', country)
console.log ('------------------------------------------')

//-- SPREAD OPERATOR
// CLONING ATAU DUPLIKAT DATA

interface Vehicle {
  id: string,
  type: 'Sedan' | 'SUV' | 'Bus',
  year: number
}

let vehicle : Vehicle = {
  id: "VHM - 12aaa",
  type: 'SUV',
  year: 2015
}

let newVehicle =  {...vehicle, isSold: false}
console.log (newVehicle)

console.log ('------------------------------------------')

let scoring1: number[] = [9, 10, 11, 12]
let scoring2: number [] = [7, 6, 8]

let newScoring = [...scoring1, ...scoring2]
let sortingScoring = newScoring.sort((x,y) => x - y)
console.log (newScoring)