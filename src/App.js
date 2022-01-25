import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Cards';
import data from './components/data';

function App() {
  const card = data.map(item => {
    return (
      <Card
        key={item.location}
        item={item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      {/* <Card /> */}
      <section>
        {card}
      </section>
    </div>
  );
}

export default App;
