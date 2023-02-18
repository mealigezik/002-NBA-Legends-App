import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import "./index.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <CardContainer />
      </div>
    </div>
  );
}

export default App;
