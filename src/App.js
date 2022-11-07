import './App.css'
import NavBar from "./components/NavBar";
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      {/* <ItemListContainer text="Hola Mundo ItemListContainer"/> */}
    </>
  )
}
export default App;