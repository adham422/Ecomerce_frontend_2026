import { Container } from "react-bootstrap";
import Header from "../components/common/Header/Header";
import styles from "./style.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/common/Footer/Footer";
import { Outlet } from "react-router-dom";
const { container, wrapper } = styles;
const MainLayouts = () => {
  return (
      <Container className={container}>
        <Header />
        <div className={wrapper}>
          {/*out let to render all component in AppRouter*/}
          <Outlet />
        </div>
        <Footer />
      </Container>
  );
};
export default MainLayouts;
