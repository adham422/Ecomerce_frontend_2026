import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayouts from './layouts/MainLayouts'
import { Container } from 'react-bootstrap'
createRoot(document.getElementById('root')!).render(<Container>< MainLayouts /></Container>)
  