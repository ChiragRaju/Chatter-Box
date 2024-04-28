import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
