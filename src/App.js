import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { updateTables } from './redux/tableRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableRedux';
import Home from './components/Home/Home';
import TableForm from './components/TableForm/TableForm';

const App = () => {
  const dispatch = useDispatch(); 

  useEffect(() => dispatch(fetchTables()), [dispatch]); // fetchTables to teraz (dzięki redux-thunk) jest funkcja 
  // pośrednik, uruchamia updateTables(tables) w store dopiero jak będą dane 

  return (
    <Container>
         <h1>Hey, waiter app again!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:id" element={<TableForm />} />
      </Routes>
      
    </Container>
  );
}

export default App;
