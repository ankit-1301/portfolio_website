import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { BeyondDataPage } from './components/BeyondDataPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beyond-data" element={<BeyondDataPage />} />
      </Routes>
    </Router>
  );
}
