import React, {
  useState
} from 'react';
import {
  HorizontalSpace,
  SubTitle
} from 'rrmc';
import NavBar from 'src/components/_core/nav-bar';
import Footer from 'src/components/_core/footer';
import { useDispatch } from 'react-redux';
import { OpenGlobalAlertDialog } from 'src/redux/actions/set-global-alert-dialog';

const Examples = (): React.ReactElement => {
  const [sectionMenu, setSectionMenu]: any = useState([]);
  const dispatch = useDispatch();

  return (
    <div className='page'>
      <NavBar
        setSectionMenu={setSectionMenu}
        sectionMenu={sectionMenu} />
      <div className='container'>
        <HorizontalSpace size='small' />
        <SubTitle
          text='Examples'
          fullWidth={true}
          align='left' />
        <HorizontalSpace size='small' />
        <a
          className='waves-effect waves-light btn'
          onClick={() => dispatch(OpenGlobalAlertDialog('global-alert-sample-ok'))}>
          Global alert OK
        </a>
        <HorizontalSpace size='x-small' />
        <a
          className='waves-effect waves-light btn'
          onClick={() => dispatch(OpenGlobalAlertDialog('global-alert-sample-fail'))}>
          Global alert Fail
        </a>
      </div>
      <Footer />
    </div>
  );
};

export default Examples;
