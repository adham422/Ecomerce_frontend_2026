import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "../src/routes/AppRouter";
//redux provide and store
import { Provider } from "react-redux";
import  store  from "./store/index";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
