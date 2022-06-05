/* eslint-disable max-lines-per-function */
import React, {
  useRef
} from 'react';
import { Link } from 'react-router-dom';
import * as M from 'materialize-css';
import { useSelector } from 'react-redux';
import { SetUserData } from 'src/redux/actions/user';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavSearchBox from 'src/components/_core/nav-search-box/nav-search-box';
import DefaultNavButtons from 'src/components/_core/nav-bar/default-nav-buttons';
import SystemValues from 'src/constants/SystemValues';
import SideMenu from './side-menu';
import MenuItems from './menu-items';
import './nav-bar.scss';

const logoFile = '/assets/logo.png';

const NavBar = (props: any): React.ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const system = useSelector((state: any) => state.system);
  const systemValues = SystemValues.getInstance();
  const prefix = system.platform.prefix;
  // const logoURL = system && system.configurations &&
  //   system.configurations.id ?
  //   system.configurations.attributes.img_logo : `${prefix}${logoFile}`;
  const logoURL = `${prefix}${logoFile}`;
  const sideNavRef: any = useRef(null);
  const sectionMenu = props.sectionMenu || [];

  const closeSideNav = () => {
    const sideNav = M.Sidenav.getInstance(sideNavRef.current);
    sideNav.close();
  };

  const logout = (e: any) => {
    e.preventDefault();
    dispatch(SetUserData({
      jwt: null,
      user: null,
      userProfile: null,
      favoriteStands: [],
      favoriteItems: [],
      cart: [],
      userStands: []
    }));
    return navigate('/');
  };

  return (
    <>
      <DefaultNavButtons setSectionMenu={props.setSectionMenu} />
      <div className='navbar-fixed'>
        <nav className='NavBar white black-text'>
          <div className='nav-wrapper container'>
            <Link to='/' className='brand-logo left Logo'
              style={{
                backgroundImage: `url(${logoURL})`
              }}>
            </Link>
            {
              systemValues.searchAvailable ? <NavSearchBox updateQuery={props.updateQuery} /> : null
            }
            <a href='#'
              data-target='mobile-demo'
              className={`sidenav-trigger ${systemValues.primaryColorName}-text right`}>
              <i className='material-icons'>menu</i>
            </a>
            <ul
              id='nav-mobile'
              className='right hide-on-med-and-down Menu'>
              <MenuItems
                logout={logout}
                sectionMenu={sectionMenu} />
            </ul>
          </div>
        </nav>
      </div>
      <SideMenu
        sideNavRef={sideNavRef}
        closeSideNav={closeSideNav}
        logout={logout}
        sectionMenu={sectionMenu}
        logo={logoURL} />
    </>
  );
};

export default NavBar;
