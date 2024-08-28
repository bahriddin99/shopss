import { Container } from '@components'
import { Carts } from '@ui'
import './style.scss'
import { useCartStore } from '@store'
import { ToastContainer } from 'react-toastify'
import { Button, Input } from 'antd'
import { ArrowRightOutlined, FormOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react'

function Cart() {
  const { carts, getTotalPrice }: any = useCartStore()
  const [price, setPrice] = useState(0)

  useEffect(() => {
    const pricee = getTotalPrice()
    setPrice(pricee)
  }, [])

  return (
    <>
      <ToastContainer />
      <div>
        <Container>
          <h1 className='title'>Your cart</h1>
          <div className="card-wrapperr">
            {carts?.length > 0 ? (
              <>
                <div className="card-left">
                  {carts.map((item: any, index: number) => (
                    <Carts key={index} data={item} />
                  ))}
                </div>
                <div className="card-right">
                  <h4>Order Summary</h4>
                  <p><span>Subtotal</span>$565 </p>
                  <p><span>Discount (-20%)</span> -$113</p>
                  <p><span>Delivery Fee</span>$15 </p>
                  <p><span>Total</span> ${price}</p>

                  <div>
                    <Input
                      className='input-carts'
                      prefix={<FormOutlined />}
                    />
                    <Button>Apply</Button>
                  </div>

                  <Button>
                    Go to Checkout
                    <ArrowRightOutlined />
                  </Button>
                </div>
              </>
            ) : (
              <div className="no-data">
                {/* Replace with your desired icon or GIF */}
                <p>No Data</p>
              </div>
            )}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Cart
