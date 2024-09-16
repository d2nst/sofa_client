import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './components/NotFound';
import KakaoCallback from './components/KakaoCallback';
import KakaoLogin from './components/KakaoLogin';
function App() {
  return (
    <Router>
      <Navbar />
      <Login />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
