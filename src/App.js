import About from "./components/About";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Banner />
      <Nav />
      <About />
      <div className='h-[4000px]'></div>
    </div>
  );
}

export default App;
