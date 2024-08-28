import { HeartOutlined, SearchOutlined, ShoppingOutlined, DownOutlined, UserOutlined } from '@ant-design/icons';
import './style.scss';
import { Container } from '@components';
import Logo from '@images/shop.png';
import { Badge, Button, Input } from 'antd';
import { HeaderDrawer } from '@ui';
import { Link, useNavigate } from 'react-router-dom';
import { useCartStore, useLikeStore } from '@store';

function Header() {
  const navigate = useNavigate();
  const { carts }: any = useCartStore();
  const { likes }: any = useLikeStore();

  return (
    <header>
      <div className='header-top'>
        <p>
          Sign up and get 20% off your first order. 
          <Link className='link' to={'login'}>Sign Up Now</Link>
        </p>
      </div>
      <Container>
        <nav>
          <HeaderDrawer />
          <div className='nav-left'>
            <img style={{ cursor: 'pointer' }} onClick={() => navigate('/')} src={Logo} alt="IMG LOGO" />
            <ul>
              <li>
                <a href="#">
                  Shop <DownOutlined />
                </a>
              </li>
              <li><a href="#">On Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>

          <div className='nav-right'>
            <p onClick={() => navigate('/category')} style={{ cursor: 'pointer' }}>Brands</p>
            <Button><SearchOutlined /></Button>
            <div className='input-div'>
              <Input className='header-search' placeholder='Search for products...' />
              
              <div className='cart-img-profile'>
                <Badge className='badge' count={likes?.length}>
                  <HeartOutlined onClick={() => navigate('/like')} />
                </Badge>
                <Badge className='badge' count={carts?.length}>
                  <ShoppingOutlined onClick={() => navigate('/cart')} />
                </Badge>
                <Badge className='badge'>
                  <Link to="/login">
                    <UserOutlined />
                  </Link>
                </Badge>
              </div>
            </div>
          </div>
          
        </nav>
      </Container>
    </header>
  );
}

export default Header;
