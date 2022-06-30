import React, {
  useState
} from 'react';
import {
  HorizontalSpace,
  SubTitle,
  SizesEnum,
  TextAlignEnum
} from 'rrmc';
import { Link } from 'react-router-dom';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';
import SystemValues from 'src/constants/SystemValues';

const Home = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);
  const domData = SystemValues.getInstance().DOMData;
  const podName = domData && domData.hostname ? domData.hostname : null;

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <div className='container'>
        <HorizontalSpace size={SizesEnum.small} />
        <SubTitle
          text={ podName ? `Hello World from pod: ${podName}!` : 'Hello World!' }
          fullWidth={true}
          align={TextAlignEnum.left} />
        <HorizontalSpace size={SizesEnum.small} />
        <Link to='/examples'>Samples</Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
