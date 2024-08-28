import { Container } from '@components'
import './style.scss'
import Logo from '@images/shop.png'
import { FacebookOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons'
import Visa from '@images/visa.svg'
import Mastercard from '@images/mastercard.svg'
import Paypal from '@images/paypal.svg'
import Pay from '@images/pay.svg'
import Gpay from '@images/gpay.svg'
// import facebook from '../../../public/facebook.svg'
function Footer() {
  return (
    <footer className='footer-edit'>
      <Container>
        <div className='footer-wrapper'>
            <div className="footer-left">
                <img src={Logo} alt="LOGO" />
                <p>We have clothes that suits your style and which you're proud to wear. From women to men.</p>
                <ul>
                  <li><p><TwitterOutlined/></p></li>
                  <li><p><FacebookOutlined/></p></li>
                  <li><p><InstagramOutlined/></p></li>
                  <li><p><GithubOutlined/></p></li>
                </ul>
            </div>
            <div className="footer-right">
              <div className="f-right">
                  <h4>Company</h4>
                  <ul>
                    <li>About</li>
                    <li>Features</li>
                    <li>Works</li>
                    <li>Career</li>
                  </ul>
              </div>
              <div className="f-right">
                  <h4>Help</h4>
                  <ul>
                    <li>Customer Support</li>
                    <li>Delivery Details</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
              </div>
              <div className="f-right">
                  <h4>FAQ</h4>
                  <ul>
                    <li>Account</li>
                    <li>Manage Deliveries</li>
                    <li>Orders</li>
                    <li>Payments</li>
                  </ul>
              </div>
              <div className="f-right">
                <h4>Resources</h4>
                <ul>
                  <li>Free eBooks</li>
                  <li>Development Tutorial</li>
                  <li>How to - Blog</li>
                  <li>Youtube Playlist</li>
                </ul>
            </div>
            </div>
        </div>
        
        <div className="footer-bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>
          <div>
            <img src={Visa} alt="logo" />
            <img src={Mastercard} alt="logo" />
            <img src={Paypal} alt="logo" />
            <img src={Pay} alt="logo" />
            <img src={Gpay} alt="logo" />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer