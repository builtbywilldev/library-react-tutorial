  import Landing from "./components/Landing";
import Nav from "./components/Nav";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discoutned from "./components/Discoutned";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="nav">
      <Nav />
      <Landing />
      <Highlights/>
      <Featured />
      <Discoutned />
      <Explore />
      <Footer />
      </header>
    </div>
  );
}

export default App;
