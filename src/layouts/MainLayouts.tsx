import { Container } from "react-bootstrap";
import Header from "../components/common/Header/Header";
import styles from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "../components/common/Footer/Footer";

const {container , wrapper} = styles;
const MainLayouts = () => {
  return (
     
    <Container className={container}>
     <Header/>
      <div className={wrapper} >
        xxxxxxxx
      </div>
      <Footer />
    </Container>
  )
}
export default MainLayouts
