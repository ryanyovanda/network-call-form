import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UsersPage from './pages/UserPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-teal-500 p-4">
          <h1 className="text-white text-3xl font-bold">Network Call Practice</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/users" className="text-white">Users</Link>
            </li>
            <li>
              <Link to="/register" className="text-white">Register</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<UsersPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
