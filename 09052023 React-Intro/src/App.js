import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Content from "./component/Content";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <Content itemName="Kursi Gaming" />
      <Content itemName="Meja Gaming" />
      <Content />
    </main>
    <Footer />
  </div>
);

export default App;
