import './App.css';
import NavScrollExample from './Navbar';
import GroupCard from './Cards';
import DarkVariantExample from './Carrousel';


function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <h2 style={{marginTop:'20px'}}>Example of Card </h2>
      <GroupCard />
      <DarkVariantExample />
      </div>
  );
}

export default App;
