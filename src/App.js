import { useEffect, useState } from 'react';
import './App.css';
import Cards from './Cards';
import Loader from './Loader';
import Navbar from './Navbar';

function App() {

  const [items, setItems] = useState(null);
  const [clicked, setClicked] = useState(false);

  console.log(items)

  return (
    <div className="app">
      <Navbar setItems={setItems} setClicked={setClicked} />

      {items ?
        <div>
          <Cards obj={items?.data?.slice(0, 3)} />
          <Cards obj={items?.data?.slice(3, 6)} />
        </div>
        : <></>}

      {clicked && !items ?
        <Loader /> : <></>
      }
    </div>
  );
}

export default App;
