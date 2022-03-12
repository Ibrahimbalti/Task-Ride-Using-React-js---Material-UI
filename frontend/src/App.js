import Navbar from "./components/layout/Navbar";
import { Filters } from './components/filter/Filters'
import { Rides } from "./components/Rides/Rides";
function App() {
  return (
    <div >
      <Navbar />
      <Filters />
      <Rides />
    </div>
  );
}

export default App;
