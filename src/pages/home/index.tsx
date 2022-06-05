import React, {
  useState
} from 'react';
import {
  SubTitle
} from 'rrmc';
import { Link } from 'react-router-dom';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';

const Home = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <div className='container'>
        <SubTitle text='iCV' fullWidth={true} Link={Link} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
