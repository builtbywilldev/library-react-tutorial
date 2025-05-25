  import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";

function App() {
  return (
    <div className="App">
      <header className="nav">

       <Nav />
      <Landing />
      <Highlights/>

      </header>
    </div>
  );
}

export default App;
