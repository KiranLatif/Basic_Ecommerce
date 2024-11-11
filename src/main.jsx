import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import store from "./reduxtoolkit/store";

//store use krny k liye app ko provider me wrap krty and store first wala ye name lazmi ho=store ye attribute ka name h jo rkha tha
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
