import React, {
  useState
} from 'react';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';
import RegisterUser from './register-user-component';

const CreateAccount = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <RegisterUser />
      <Footer />
    </div>
  );
};

export default CreateAccount;

