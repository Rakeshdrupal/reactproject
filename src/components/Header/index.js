import React from 'react';
import { Link, useLocation  } from 'react-router-dom';
import Nav from './nav';
// import { useSelector, useDispatch } from 'react-redux';
// import { signOutUserStart } from './../../redux/User/user.actions';
// import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';


// import Logo from './../../assets/logo.png';

// const mapState = (state) => ({
//   currentUser: state.user.currentUser,
//   totalNumCartItems: selectCartItemsCount(state)
// });

const Header = props => {
  // const location = useLocation();
  // const [activeMenu, setActiveMenu] = useState(false);
  // const dispatch = useDispatch();
  // const { currentUser, totalNumCartItems } = useSelector(mapState);

  // const signOut = () => {
  //   dispatch(signOutUserStart());
  // };

  // useEffect(() => {
  //   setActiveMenu(false);
  // }, [location]);

  return (
   
     <Nav></Nav>
    
    
    
   
  );
};

// Header.defaultProps = {
//   currentUser: null
// };

export default Header;
