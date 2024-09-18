import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const KakaoCallback = () => {
  const KAKAO_CODE = new URL(window.location.href).searchParams.get('code');
  const [accessTokenFetching, setAccessTokenFetching] = useState(false);
  const navigate = useNavigate();
  // Access Token 받아오기
  const getAccessToken = async () => {
    if (accessTokenFetching) return; // Return early if fetching

    try {
      setAccessTokenFetching(true); // Set fetching to true

      const response = await axios.post(
        `${import.meta.env.VITE_SEVER_HOST}${import.meta.env.VITE_KAKAO_REDIRECT_URI}`,
        {
          authorizationCode: KAKAO_CODE,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'ngrok-skip-browser-warning': 'sofa',
          },
          withCredentials: true,
        }
      );
      const accessToken = response.data;
      console.log('accessToken:', accessToken);

      // setUserInfo({
      //   accessToken: accessToken,
      // });

      setAccessTokenFetching(false); // Reset fetching to false
      navigate('/kakaologin');
    } catch (error) {
      console.error('Error:', error);
      setAccessTokenFetching(false); // Reset fetching even in case of error
    }
  };

  useEffect(() => {
    if (KAKAO_CODE && !accessTokenFetching) {
      getAccessToken();
    }
  }, [KAKAO_CODE]);

  return <div>_</div>;
};

export default KakaoCallback;
