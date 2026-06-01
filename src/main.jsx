import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { hydrateAuth } from "./store/slices/authSlice";
import { GlobalStyles } from "./styles/GlobalStyles";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import App from "./App";

const rootEl = document.getElementById("root");

if (!rootEl) {
  throw new Error("Element #root not found");
}

store.dispatch(hydrateAuth());

ReactDOM.createRoot(rootEl).render(
  <ErrorBoundary>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <App />
      </BrowserRouter>
    </Provider>
  </ErrorBoundary>
);
