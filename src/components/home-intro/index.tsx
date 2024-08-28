import { Container } from '@components'
import './style.scss'
import StarSvg from '@images/star.svg'
import IntroFoto from '@images/intro.png'
import IntroFoto2 from '@images/intro2.png'
import { Button } from 'antd'
import Versace from '@images/versace.png'
import Zara from '@images/zara.png'
import Gucci from '@images/gucci.png'
import Prada from '@images/prada.png'
import Calvin from '@images/calvin.png'


function Intro() {
  return (
    <>
      <section className='intro'>
        <img className='intro1' src={IntroFoto} alt="" />
        <img className='intro2' src={IntroFoto2} alt="" />
          <Container>
              <div className='intro-wrapper'>
                  <img className='star1' src={StarSvg} alt="STARS" />
                  <img className='star2' src={StarSvg} alt="STARS" />

                  <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                  <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                  <Button type='primary'>
                     <a href="#">Shop Now</a>
                  </Button>

                  <ul>
                    <li>
                      <h2>200+</h2>
                      <p>International Brands</p>
                    </li>
                    <li>
                      <h2>2,000+</h2>
                      <p>International Brands</p>
                    </li>
                    <li>
                      <h2>30,000+</h2>
                      <p>Happy Customers</p>
                    </li>
                  </ul>

                 


              </div>
          </Container>
        <div className='logos-wrapper'>
          <Container>
            <div className='logos'>
                      <img src={Versace} alt="LOGO" />
                      <img src={Zara} alt="LOGO" />
                      <img src={Gucci} alt="LOGO" />
                      <img src={Prada} alt="LOGO" />
                      <img src={Calvin} alt="LOGO" />
            </div>
          </Container>
        </div>
        
      </section>
    </>
  )
}

export default Intro