/* SYNCHRONOUS -> Kode dijalankan berdasarkan urutan.

function greeting() {
  return "Hello, Good Morning!"
}

function saySomething () {
  return "How are you today?"
}

//Kode akan berjalan secara sinkronus sesuai urutan pemanggilan fungsi.
console.log (saySomething())
console.log (greeting())*/

/*ASYNCHRONOUS -> Kode dijalankan berdasarkan processing time.

function boilWater () {
  setTimeout(() => {
    //console.log ("sedang merebus air...")
  }, 3000) // 3000 milisecond = delay 3 detik.
}

function finalResult() {
  console.log ("Air sudah matang")
}
boilWater() // Akan terkena delay sesuai command, yaitu 3000 milisecond atau 3 detik.
finalResult() // Akan dijalankan duluan karena memiliki processing time yang lebih cepat.*/

/*Case 1: Simulasi Driver Ojol
function orderOjol (pickup: string, destination: string, callback: () => void) {
  console.log (`Mencari driver dari ${pickup} ke ${destination}...`)
  setTimeout (() => {
    console.log (`Driver ditemukan dan sedang menuju ke lokasi penjemputan.`)
    callback() //Callback = function onDriverArrived. function onDriverArrived jadi callback karena diinput ke argumen orderOjol.
  }, 4000)
}

function onDriverArrived() { //Ini adalah value dari callback
  console.log ("Driver sudah tiba, silahkan naik!")
}

orderOjol ("Rumah", "Kantor", onDriverArrived)*/

/* Case 2: Mengelola jadwal meeting

function scheduleMeeting (time: string, callback: (confirmed: boolean) => void) {
  console.log (`Mengatur jadwal meeting pada jam ${time}...`)
  setTimeout(() => {
    const isConfirmed = time === "10.00"
    callback (isConfirmed)
  }, 5000)
}

function confirmMeeting(confirmed: boolean) {
  if (confirmed) {
    console.log ("Meeting dikonfirmasi!")
  } else {
    console.log ("Unavailable.")
  }
}

scheduleMeeting("10.00", confirmMeeting)*/

/*Case 3: Proses Cuci Mobil...
Pseudocode:
1. Mobil datang ke tempat cuci
2. Proses cuci dimulai
3. Setelah selsai dicuci, proses pengeringan dimulai
4. Setelah dikeringkan, ada notifikasi bahwa mobil siap diberikan ke pemilik*/

function washCar (carName: string, callback: (car: string) => void) {
  console.log (`Mobil ${carName} datang ke tempat cuci...`)
  setTimeout(() => {
    console.log (`Mobil ${carName} sedang dicuci...`)
    callback (carName)
  }, 3000)
}

function dryCar (carName: string, callback: (car: string) => void) {
  setTimeout (() => {
  console.log (`Mobil ${carName} sedang dikeringkan...`)
  callback (carName)
  }, 1500)
}

function finishProcess(carName: string) {
  console.log (`Mobil ${carName} sudah selesai dicuci dan dikeringkan! Silahkan diambil...`)
}

  // washCar ("Avanza", function(car){
  //   dryCar(car, function (car){
  //     finishProcess(car)
  //   })
  // })

// PROMISE -> Untuk menghandle kejadian sukses / gagal.
//CASE 1: Undian berhadiah.
interface Lottery {
  status: string,
  message: string
}

function lotteryDraw(): Promise<Lottery> {
  return new Promise ((resolve, reject) => {
    console.log ("Undian dimulai...")
    const win: boolean = Math.random() > 0.7
    setTimeout(() => {
      if (win) {
        resolve ({
          status: "Success!",
          message: "Selamat! Kamu menang undian"
        })
      } else {
        reject ({
          status: "Failed!",
          message: "Maaf, belum beruntung."
        })
      }
    }, 3500)
  })

}

// lotteryDraw ()
// .then ((response) => {
//   console.log (response)
// })
// .catch((error) => {
//   console.log (error)
// })
// .finally (()=> {
//   setTimeout (() =>{
//     console.log ("Undian telah berakhir!")
//   }, 500)  
// })

//Case 2: Pembayaran Tagihan Online.

function payBill(amount: number): Promise<string> {
  return new Promise ((resolve, reject) => {
    console.log (`Memproses pembayaran sebesar Rp.${amount}...`)
    setTimeout(() => {
      if (amount >= 100000) {
        console.log ("Pembayaran berhasil!")
      } else {
        console.log ("Pembayaran gagal, Saldo tidak cukup.")
      }
    }, 4000)
  })
}

// payBill (90000)
//   .then((response) => { //Resolve pasangannya .then
//     console.log (response)
//   })
//   .catch((error) => { //Reject pasangannya .catch
//     console.log (error)
//   })

/* -- ASYNC AWAIT -> memprioritaskan fungsi yang terdapat promise.
Perbedaan antara ASYNC & ASYNC AWAIT:
1. Tanpa ASYNC AWAIT:*/

function enrollCourse (course: string): Promise <string> {
  let courseList: string [] = ["Typescript", "PHP", "Phyton"]  
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (courseList.includes(course)) {
      resolve(`Berhasil mendaftar kursus: ${course}`) 
    } else {
      reject ("Kurus tidak tersedia")
    }
    }, 2500)
  })
}

// enrollCourse ("Typescript")
//   .then((response) => {
//     console.log (response)
//   })

//2. DENGAN ASYNC AWAIT:

async function enrollCourseAsync (course: string) {
  try {
  const result = await enrollCourse (course)
  console.log(result) }
  catch (error) {
    console.log (error)
  } finally {
    ("Done...")
  }
  setTimeout (() => {
    console.log ("Done...")
  }, 1000)
}

// enrollCourseAsync("Typescript")

//-- THROW ERROR -> Melempar error lagnsung sebelum masuk catch
function validateAge(age: number ) {
  if (age < 18) {
    throw new Error ("Usia minimal adalah 18 tahun!")
  } 
  console.log ("pendaftaran berhasil")
  
}

async function confirmation() {
  try {
    const result = await validateAge(17)
    console.log (result)
  } catch (error) {
    console.log ("Gagal", (error as Error).message)
  }
}
confirmation()

console.log ('hello')