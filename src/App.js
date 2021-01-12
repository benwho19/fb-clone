
import './App.css';
import { Header, Sidebar, Feed } from './components';

function App() {
  return (
    <div className="app">

        <Header/>

        <div className='app__body'>
            <Sidebar/>
            <Feed/>
        </div>

    </div>
    );
}

export default App;
