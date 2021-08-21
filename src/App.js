import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";

//importing components
import Todo from './Components/Todo';
import TodoForm from './Components/TodoForm';

//redux
import {Provider} from "react-redux";
import store from "./store"

const App = () => {
  return (
    <Provider store={store} >
      <Container fluid>
        <Todo />
        <TodoForm />
      </Container>
    </Provider>
  );
};

export default App;
