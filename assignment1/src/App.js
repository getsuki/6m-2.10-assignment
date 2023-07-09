import Header from "./components/Header";
import Section from "./components/Section";
import Link from "./components/Instagram";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Section
        name="About Meow"
        content="Meow there! I am a 6 year old domestic long haired cat named Truffles. My meowmy named me when she was hungry"
      />
      <Section
        name="Find meow with meow antics here"
        content=<Link to="/Instagram">Instagram</Link>
      />
    </div>
  );
}

export default App;
