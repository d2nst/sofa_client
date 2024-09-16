import React from 'react';

const KakaoLogin = () => {
  return (
    <div>
      <div className="inputwrap">
        <label htmlFor="kakaoname">이름:</label>
        <input type="text" id="kakaoname" />
      </div>
      <div className="inputwrap">
        <label htmlFor="kakaonickname">별명:</label>
        <input type="text" id="kakaonickname" />
      </div>
      <div className="inputwrap">
        <label htmlFor="kakaoaddress">주소:</label>
        <input type="text" id="kakaoaddress" name="kakaoaddress" />
      </div>
      <div>
        <button>확인</button>
        <button>취소</button>
      </div>
    </div>
  );
};

export default KakaoLogin;
