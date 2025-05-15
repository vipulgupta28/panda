import AppRoutes from "./Routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>

    <div className="min-h-screen text-white bg-black">
      <AppRoutes/>
    </div>
    </BrowserRouter>
  );
}

export default App;