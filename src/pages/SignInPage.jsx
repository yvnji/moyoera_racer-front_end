import { useState } from 'react';
import LoginContainer from '../logIn/LogInContainer';
import Headline from '../logIn/Headline';
import LoginInput from '../logIn/LogInInput';
import LoginButton from '../logIn/LogInButton';
import OrLineText from '../logIn/OrLine';
import LittleText from '../logIn/LittleText';
import SigninAccordion from '../signIn/SignInAccordion';

const Signin = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <LoginContainer>
      <Headline title='엘리스 갱스터 회원 가입' />
      <LoginButton color='white' value='구글계정으로 시작하기' />
      <OrLineText text='또는' />
      <SigninAccordion>
        <LoginInput
          title='이름'
          type='text'
          placeholder='이름 입력'
          name='userName'
          onChange={(e) => setUserName(e.target.value)}
        />
        <LoginInput
          title='이메일'
          type='text'
          placeholder='이메일 입력'
          name='userEmail'
          onChange={(e) => setEmail(e.target.value)}
        />
        <LoginInput
          title='비밀번호'
          type='text'
          placeholder='영문, 숫자 포함 8자 이상'
          name='password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton color='darkPurple' value='회원가입' />
      </SigninAccordion>

      <LittleText text='이미 회원이신가요? 로그인하기' />
    </LoginContainer>
  );
};

export default Signin;