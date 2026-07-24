
// Day 7
import ProductCards from "./ProductCards";
import ProfileCard from "./ProfileCard";


function App() {


  const Products = [
    { id: 1, name: "iPhone 15", price: 250000, category: "Electronics", inStock: true },
    { id: 2, name: "Nike Shoes", price: 15000, category: "Footwear", inStock: false },
    { id: 3, name: "MacBook Pro", price: 500000, category: "Electronics", inStock: true },
    { id: 4, name: "Headphones", price: 8000, category: "Electronics", inStock: false },
  ]

  const profile = {
    name: "Keertan Gir",
    Uni: "SMIU",
    sems: 6,
    skills : ["Java", "React", "Spring boot", "Hibernate"]
  }


  return (
    <div>
      {/* Day 7 - Components & Props */}
      <h1>Day 7 - HW - Components & Props</h1>
      <h2>\--Products List--/</h2>
      {
        Products.map( prdcts => (
        
          <ProductCards 
            id = { prdcts.id }
            name= { prdcts.name }
            price= { prdcts.price }
            category={ prdcts.category }
            inStock = { prdcts.inStock }
          />
        ))}

        <h2>------------------------------------------------</h2>
        <h3>Profile Cards</h3>
        <ProfileCard name= {profile.name} university={profile.Uni} semester={profile.sems} skills = {profile.skills} />
    
    </div>
    )
}

export default App
