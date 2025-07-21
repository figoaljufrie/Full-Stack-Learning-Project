import "./CoffeeCard.css"

interface ICoffee {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function CoffeeCard({id, name, description, price, image}: ICoffee) {
  return (
    <div id={id}className="card">
      <img src={image} alt={name}/>
      <div className="info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Rp.{price}</span> 
      </div>
    </div>
  )
}