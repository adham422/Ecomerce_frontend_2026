import { Container } from "react-bootstrap";
import Header from "../components/common/Header/Header";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/common/Footer/Footer";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../routes/AppRouter";

const { container, wrapper } = styles;
const MainLayouts = () => {
  return (
    <BrowserRouter>
      <Container className={container}>
        <Header />
        <div className={wrapper}>
          {/* make external componetnt for Router page called AppRouter */}
          <AppRouter /> 
        </div>
        <Footer />
      </Container>
    </BrowserRouter>
  );
};
export default MainLayouts;
