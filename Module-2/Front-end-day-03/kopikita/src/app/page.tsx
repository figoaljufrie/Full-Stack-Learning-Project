import Link from "next/link"
import "./styles/landing.css"
export default function LandingPage() {
  return (
    <main className="container">
      <section className="hero">
        <h1> Welcome to KopiKita</h1>
        <p>Discover the authentic taste of Indonesian Coffee - Brewed with tradition and love.</p>
        <Link href="/home">
        <button>
          Let's Explore.
          </button>
          </Link>
        </section> 

    </main>
    
  )
}
