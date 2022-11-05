import './App.css'
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
// import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer text="Hola Mundo ItemListContainer"/>
      <ItemCount />
      {/* <ItemDetailContainer /> */}
    </>
  )
}
export default App;