import store from "./store/store";
import { Provider } from "react-redux";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
