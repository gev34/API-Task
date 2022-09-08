import './App.css';
import BrandPage from "./pages/BrandPage";
import { UserDataProvider } from "./context/getData";

function App() {
  return (
    <div className="App">
      <UserDataProvider>
      <BrandPage />
      </UserDataProvider>
    </div>
  );
}

export default App;
