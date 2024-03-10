import './App.css';
import TaskComponent from './Components/TaskComponent';

function App() {
  return (
    <>
      <h1 data-testid='main-heading' className='heading main--heading'>
        My Week
      </h1>
      <TaskComponent />
    </>
  );
}

export default App;
