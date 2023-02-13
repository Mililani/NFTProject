import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Subs from "./components/Subs";
import Minting from "./components/Minting";

function App() {
  return (
    <div className=" main text-white">
      <div className="container mx-auto xl:px 32 px-2 pt-10">
        <Navbar/>
        <Landing/>
        <About/>
        <Process/>
        <Minting/>
        <Subs/>
      </div>
    </div>
  );
}

export default App;
