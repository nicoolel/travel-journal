import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cardElements = data.map(el => {
    return <Card
      key = {el.id}
      item = {el}
    />
  })
  return (
    <div className="container">
      <Navbar />
      {cardElements}
    </div>
  );
}

export default App;
