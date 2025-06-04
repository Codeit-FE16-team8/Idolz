import { Link } from 'react-router-dom';
import ListPage from './components/ListPage';

function App() {
  return (
    <div>
      <h1>리스트가는 링크</h1>
      <Link to="/list">리스트</Link>
    </div>
  );
}

export default App;
