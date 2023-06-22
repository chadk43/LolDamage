import "./App.css";
import Champmenu from "./champion/champmenu.js";

function App() {
  return (
    <>
      <div class="app-header">LOL DAMAGE</div>
      <hr className="topline" />
      <div class="flex-container">
        <div class="flex-items">
          <ul>
            <li>items</li>
            <li>runes</li>
          </ul>
        </div>
        <div class="flex-items">
          <Champmenu />
        </div>
      </div>
    </>
  );
}

export default App;
