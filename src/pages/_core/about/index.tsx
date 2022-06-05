import React, {
  useState
} from 'react';
import { HorizontalSpace } from 'rrmc';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';

const About = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <HorizontalSpace size='medium' />
      About
      <HorizontalSpace size='large' />
      <Footer />
    </div>
  );
};

export default About;
