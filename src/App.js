import './App.css';
import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"


function App(props) {

  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      img={item.img}
      rating={item.rating}
      reviews={item.reviews}
      headline={item.headline}
      price={item.price}
      openSpots={item.openSpots}
      location={item.location}
    />
    )
  })

  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <div className='cards'>
        {cards}
      </div>
    </div>
  );
}

export default App;
