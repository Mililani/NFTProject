import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Subs from "./components/Subs";


function App() {
  return (
    <div className=" main text-white">
      <div className="container mx-auto xl:px 32 px-2 pt-10">
        <Navbar/>
        <Landing/>
        <About/>
        <Subs/>
      </div>
    </div>
  );
}

export default App;
