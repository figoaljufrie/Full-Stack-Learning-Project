import CoffeeCard from "@/component/card/CoffeeCard"
import data from '@/app/data/coffee.json'
import "@/app/styles/home.css"

export default function home() {
  return (
    <main className="conatiner">
      <header className="hero">
        <h1>Our Menu</h1>
        <p> Explore Our Signature Indonesian Coffee selections</p>
      </header>
      <section className="grid">
      {
        data.map((coffee)=> {
          return (
            <CoffeeCard
              id={String(coffee.id)}
              name={coffee.name}
              description={coffee.description}
              image={coffee.image}
              price={String(coffee.price)}/>

          )
        })
      }
    </section>
    </main>
  )
}

// <div>
    //   <CoffeeCard
    //   id="1"
    //   name="Classic Black"
    //   description="Black Coffee"
    //   price= "30000"
    //   image=
    //   >
    
    //   </ReusableComponent>

    // </div>