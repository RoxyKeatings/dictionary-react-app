import "./App.css";
import Header from "./Header";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import logo from "./Images/logo.gif";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <img src={logo} alt="dictionaryappgif" className="logo img-fluid" />
        <main>
          <Dictionary defaultKeyword="autumn" />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
