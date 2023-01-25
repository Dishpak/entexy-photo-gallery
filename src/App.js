import './App.css';
import AppRouter from "./components/AppRouter";
import {GalleryProvider} from "./context/GalleryContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useLocation} from "react-router-dom";


function App() {
  const location = useLocation()

  return (
    <main className={"App"}>
      <GalleryProvider>
        {location.pathname !== '/login' && <Header/>}
        <AppRouter />
        {location.pathname !== '/login' ? <Footer/> : ''}
      </GalleryProvider>
    </main>
  )

}

export default App;
