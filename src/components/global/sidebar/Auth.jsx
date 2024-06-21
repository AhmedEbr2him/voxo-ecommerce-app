import './style.css';
import { useContext, useEffect, useState } from 'react';
import { ForgetPassword, LoginSidebar, Scrim, SidebarTitle, SigninSidebar } from '../../index';
import { MainContext } from '../../../context/MainContext';
import { useStopDocScroll } from '../../../hooks/useStopDocScroll';

const Auth = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [isSignupActive, setIsSignupActive] = useState(false);
  const [isPassSlideActive, setIsPassSlideActive] = useState(false);
  const { isAuthActive, handleIsAuthActive } = useContext(MainContext);
  const { stopScroll, startScroll } = useStopDocScroll();
  useEffect(() => {
    isAuthActive ? stopScroll() : startScroll();

    return () => startScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthActive]);

  const handleLoginActive = () => {
    setIsLoginActive(true);
    setIsSignupActive(false);
    setIsPassSlideActive(false);
  };
  const handleSignupActive = () => {
    setIsLoginActive(false);
    setIsSignupActive(true);
    setIsPassSlideActive(false);
  };
  const handleForgetPassActive = () => {
    setIsLoginActive(false);
    setIsPassSlideActive(true);
  };
  return (
    <div>
      <div className={`sidebar auth-sidebar ${isAuthActive ? 'active' : ''}`}>
        <SidebarTitle
          title={
            (isLoginActive && 'LOGIN') ||
            (isSignupActive && 'SIGN IN') ||
            (isPassSlideActive && 'PASSWORD RESET')
          }
          onClick={handleIsAuthActive}
        />
        <div className='sidebar-body'>
          <LoginSidebar
            isLoginActive={isLoginActive}
            handleSignupActive={handleSignupActive}
            handleForgetPassActive={handleForgetPassActive}
          />

          <SigninSidebar
            isSignupActive={isSignupActive}
            handleSignupActive={handleSignupActive}
            handleLoginActive={handleLoginActive}
          />
          <ForgetPassword
            isPassSlideActive={isPassSlideActive}
            handleForgetPassActive={handleForgetPassActive}
            handleLoginActive={handleLoginActive}
          />
        </div>
      </div>
      <Scrim isActive={isAuthActive} onClick={handleIsAuthActive} />
    </div>
  );
};
export default Auth;
