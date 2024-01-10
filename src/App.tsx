import './App.css';
import { ContextAuthProvider } from './contexts/_contex_auth';
import { Routes } from './routes';

function App() {
  return (
    <div className='container mx-auto'>
      <ContextAuthProvider>
        <Routes />
      </ContextAuthProvider>
    </div>
  );
}

export default App;
