// import CardContainer from "./components/CardContainer";
// import Header from "./components/Header";
// import "./index.css";

// function App() {
//   return (
//     <div>
//       <Header />
//       <div className="container">
//         <CardContainer />
//       </div>
//     </div>
//   );
// }

// export default App;

import "./App.css"
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header/>
      <CardContainer/>
    </div>
  );
}

export default App;