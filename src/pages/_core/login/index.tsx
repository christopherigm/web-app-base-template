import React, {
  useState
} from 'react';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';
import LoginUser from './login-component';

const Login = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <LoginUser />
      <Footer />
    </div>
  );
};

export default Login;

