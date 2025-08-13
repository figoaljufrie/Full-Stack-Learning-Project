/*-- DATA STRUCTURE:
Outline:
1. Data Structure
2. Stack
3. Queue
4. Set
5. Hash Table / Map
6. Linked list

<--------------------------------------------------->
//-- DATA STRUCTURE:
Techniques for storing & organizing data that make it easier to:
- Modify
- Navigate
- Access

It determines how data is collected, the functions we can use to access it, and the relationship between data.

Data structures are used in almost all areas of computer science & programming, from operating systems to AI.

//-- USE OF DATA STRUCTURE:
1. Manage & utiliza lare data-sets
2. Search for particular data from database
3. Design algorithms that are tailored towards particular programs
4. Handle multiple requests from users at once
5. Simplify & speed up data processing.

//-- PRIMITIVE & NON-PRIMITIVE DATA STRUCTURE:

JavaScript has primitive & non-primitive data structures. Primitive data & data types are NATIVE to the programming language. These include:
- Booleans
- Null
- Numbers
- Strings
- etc

Non-Primitice Data are NOT DEIFNED by the programming language but rather by the programmer. These include:
- Linear data structures
- Static data structures
- Dynamic data structures, like queue & linked lists
- These include array & object.

//-- STACK:
A data structure that holds a list of elements. A stack allows operations at one & only. This features makes it LIFO data structures. LIFO stands for Last-In-First-Out.

The element which is placed (inserted or added) last, is accessed first. In stack terminology, insertioin operation is called PUSH operation, and removal operation is called POP operation.

Stack in real life:
- An undo mechanism in text editors
- Back / forward stacks on browsers
- Reserve a string
- Recursive function
- Etc

EXAMPLE BELOW:

class PlateStack {
private plates; string[] = []

public addPlate(plate: string) {
this .plates.push(plate) // tambahkan piring ke atas tumpukan
  }

public removePlate(){
return this.plate.pop() // Ambil piring paling atas

//Tanpa built-in.pop
if (this.plates.length === 0) {
  return undefined
}
//Mengambil plate terakhir
const lastPlate = this.plate[this.plate.length - 1]
this.plate.length = this.plate.length - 1
return lastPlate


  }

public peek() {
return this.plates[this.plates.length-1] // Untuk melihat piring paling atas setelah diremove.
  }

public viewPlates() {
return.this.plates
  }

}

const plateStack = new PlateStack()
plateStack.addPlate ("Piring A")
plateStack.addPlate ("Piring B")
plateStack.addPlate ("Piring C")
plateStack.addPlate ("Piring D")

console.log ("Piring Paling Atas: ", plateStack.peek())
plateStack.removePlate()
console.log ("Setelah tumpukan piring berkurang: ", plateStack.peek())
plateStack.addPlate ("Piring E")
console.log ("Setelah tumpukan piring ditambah: ", plateStack.peek())
console.log ("Semua piring: ", plateStack.viewPlates())

<--------------------------------------------------->
//-- QUEUE
An abstract data structure, somewhat similiar to Stacks. But, a queue is open at both it's ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue).

Queue follows First-In-First-Out (FIFO) methodology. In Example:
- The data item stored first will be accessed first.

//--USE OF QUEUE IN REAL LIFE:
- Serving requests on a single shared resource, like a printer, and CPU task scheduling.
- Applied on WhatsApp when we send messages to our friends and they don't have an internet connection. The messages are queued on the server of WhatsApp.
- Queues in routers / switches.
- Email queues.

EXAMPLE BELOW: Antrian tiket bioskop.

class TicketQueue {
private queue: string [] = []

pubic enter(name: string) {
//-- Jika menggunakan push built.in
this.queue.push(name) //masuk ke dalam antrian

//Jika tanpa built-in
this.queue[this.queue.length] = name

}

public call() {
//-- Jika menggunakan shift built-in
return this.queue.shift() // panggil dari depan antrian

// -- jika tanpa shift built.in
if (this.queue.length === 0) {
return "Tidak ada antrian lagi..."
}

// Simpan elemen pertama yang dikeluarkan
const firstInQueue = this.queue[0]

//Geser semua elemen ke kiri
for (let i = 0;i < this.queue.length - 1; i++) {
this.queue[i] = this.queue[i+1]
}

//Kurangi Panjang Array
this.queue.length = this.queue.length - 1
return firstInQueue

}
public view() {
return.this.queue // melihat antrian saat ini
}

}
<--------------------------------------------------->
//-- HASH TABLE
//Case: daftar nomoor telepon beserta namanya

type Contact = {
  [name: string]: string
}

const contact: Contact = {
  "Rina": "0987654",
  "Budi": "0878987",
  "Joko": "0987389"
}

//Cari nomor telepon Joko
console.log (contact["Joko"])

//Menambahkan kontak baru bernama Dewi
contact["Dewi"] = "0898981"
console.log ("Daftar kontak setelah ditambahkan: ", contact)

//Mengupdate nomor baru Budi
contact["Budi"] = "08919182"
console.log ("Daftar kontak setelah nomor Budi diupdate: ", contact)

//Menghapus kontak rina
delete contact ["Rina"]
console.log ("Setelah Rina dihapus: ", contact)

//Cek apakahnada kontak beranam Joko:
console.log ("Joko" in contact)

*/

