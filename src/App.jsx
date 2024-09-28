import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// import Login from './pages/Login';
import NotFound from './components/NotFound';
import KakaoCallback from './components/KakaoCallback';
import KakaoLogin from './components/KakaoLogin';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/auth/kakao/callback" element={<KakaoCallback />} />
        <Route path="/kakaologin" element={<KakaoLogin />} />
        <Route path="*" element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </Router>
  );
}

export default App;
