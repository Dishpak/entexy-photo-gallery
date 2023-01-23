import './App.css';
import AppRouter from "./components/AppRouter";
import {GalleryProvider} from "./context/GalleryContext";


function App() {

  return (
    <GalleryProvider>
      <main className={"App"}>
          <AppRouter />
      </main>
    </GalleryProvider>
  )

}

export default App;
