import { Container } from "react-bootstrap";
import Header from "../components/common/Header/Header";
import styles from "./style.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const {container , wrapper} = styles;
const MainLayouts = () => {
  return (
     
    <Container className={container}>
     <Header/>
      <div className={wrapper} >
        xxxxxxxx
      </div>
    </Container>
  )
}
export default MainLayouts
