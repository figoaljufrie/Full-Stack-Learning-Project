// -- CLASS DECLARATION
// Merupakan sebuah object yang dapat menampung property / function.

class Cat {
  name: string = "Whiskers"
  sound: string = "Meow"

  makeSound() {
    console.log (this.sound)
  }
}
const myCat = new Cat ()
myCat.makeSound()
console.log (myCat)

console.log ("------------------------------------------")

class BankAccount {
  balance: number = 1000
  currency: string = "USD"

  deposit (amount: number){
    this.balance += amount
  }

  withdraw (amount: number) {
    if (this.balance >= amount) {
      this.balance -= amount
    }
  }
}
const account = new BankAccount ()
account.deposit (5000)
console.log ('After Deposit: ', account.balance)
account.withdraw(500)
console.log ('After Withdraw: ', account.balance)

console.log ("------------------------------------------")

class HeroCharacter {
  id: number = 0
  name: string = ""
  role: 'Mage' | 'Tank' | 'Assassin' | 'default' = 'default'
  listCharacter: any[] = []

  createCharacter (id: number, name: string, role: 'Mage' | 'Tank' | 'Assassin' | 'default') {
    this.id = id
    this.name = name
    this.role = role

    let char = {
      id: this.id,
      name: this.name,
      role: this.role
    }
    return this.listCharacter.push(char)
  }
}

const character = new HeroCharacter()
character.createCharacter(1, 'Mage-001', 'Mage')
character.createCharacter(2, 'Mage-002', 'Mage')
console.log (character.listCharacter)

console.log ("------------------------------------------")

class Employee {
  public name: string
  public position: string
  private salary: number
  //protected id: number // hanya bisa diakses di class utama dan sub class.

  constructor(name: string, position: string, salary: number) {
    this.name = name
    this.position = position
    this.salary = salary
  }
  public promote (newPosition: string, increase: number) {
    this.position = newPosition
    this.salary += increase
  }
}

const employee = new Employee ("John Doe", "Junior Dev", 5000)
employee.promote ("Senior Dev", 2000)
console.log (employee)