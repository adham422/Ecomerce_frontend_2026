import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import AppRouter from "../src/routes/AppRouter";


createRoot(document.getElementById("root")!).render(<AppRouter />);
