import ClassForm from './Component/ClassForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <ClassForm
        firstname={'Prince'}
        lastname={'Antwi'}
        email={'example@gmail.com'}
        phonenumber={'0572211378'}
      />
    </div>
  );
}

export default App;
