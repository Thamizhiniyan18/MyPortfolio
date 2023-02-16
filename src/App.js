import { Suspense } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import Container from "./components/container/Container";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Provider store={store}>
      <Suspense fallback={<p>Loading ...</p>}>
        <div className="App">
          <Container />
          <Footer />
        </div>
      </Suspense>
    </Provider>
  );
}

export default App;
