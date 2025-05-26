  import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="App">
      <header className="nav">

       <Nav />
      <Landing />
      <Highlights/>
      <Featured />
      </header>
    </div>
  );
}

export default App;
