import KakaoTalkIcon from '../assets/kakaotalk.png';

const KakaoLogin = () => {
  let REST_API_KEY = import.meta.env.VITE_KAKAO_REST_KEY;
  let REDIRECT_URI = `${import.meta.env.VITE_HOST}${import.meta.env.VITE_KAKAO_REDIRECT_URI}`;

  const kakaoToken_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
  // 카카오 로그인
  const handleLogin = () => {
    window.location.href = kakaoToken_URL;
  };
  return (
    <button onClick={handleLogin}>
      <img src={KakaoTalkIcon} style={{ width: '30px', height: '30px', marginBottom: '7px' }} />
      카카오 로그인
    </button>
  );
};

export default KakaoLogin;
