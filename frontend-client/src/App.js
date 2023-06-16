import { Container } from 'react-bootstrap';
import './App.css';
import Header from './pages/header/Header';
import Workout from './pages/workout/Workout';
function App() {
  return (
    <div className="bg-dark text-light h-[100vh]">
      <Header/>
      
      <Container>
          <Workout />
      </Container>
    </div>
  );
}

export default App;
