import { useParams } from "react-router-dom"
import ImageGallery from "react-image-gallery";
import './style.scss'
import { Container } from "@components";
import { Button, Rate, Select } from "antd";
import { useEffect, useState } from "react";
import { CheckCircleOutlined, CheckOutlined, MinusOutlined, PlusOutlined, SlidersOutlined } from "@ant-design/icons";
import { useProductStore } from "@store";
import '../../components/ui/swiper/style.scss'
import '../home/style.scss'
import { Card } from "@ui";

function SinglePage() {
  const {getDatabyId, getData} = useProductStore()
  const [images, setImages] = useState([])
  const [product, setProduct]:any = useState([])
  const [check, setCheck] = useState('color1')
  const [size, setSize] = useState('small')
  const [count, setCount] = useState(1)
  const {id}:any = useParams()
  const [rating, setRating] = useState(3)
  const [coments, setComents] = useState('Product Details')
  const [open, setOpen] = useState(false)
  const [datas, setDatas] = useState([])
  const [limit, setLimit] = useState(4)
  const [numItems, setNumItems] = useState(window.innerWidth <= 375 ? 3 : 6);



  async function getProduct(){
    const response = await getDatabyId(id)
    setProduct(response)
    setRating(response?.rating)
    if (response?.urls?.length) {
      let arr = response?.urls?.map((e:any) => ({
        original: e,
        thumbnail: e
      }));
      setImages(arr);
    }
  }

  async function getDatas(){
    const payload = {
      limit: limit,
      skip: 1
    }
    const response = await getData(payload)
    console.log(response);
    setDatas(response)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  useEffect(() => {
    getDatas()
  }, [limit])

  const renderCustomImage = (item:any) => {
    return (
      <div className="image-gallery-image">
        <img src={item.original} style={{ maxWidth: '400px', maxHeight: '560px', width: '100%', height: 'auto', margin: '0 auto' }} />
      </div>
    );
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 375) {
        setNumItems(open ? 6 : 3);
      } else {
        setNumItems(open ? 10 : 6);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, [open]);
  
  return (
    <>
        <div>
        <Container>
            <div className="gallery-wrapper">
                <div className="gallery-left">
                  <ImageGallery
                              renderItem={renderCustomImage}
                              items={images}
                              infinite={true}
                              showFullscreenButton={false}
                              showPlayButton={false}
                              autoPlay={true}
                              showNav={true}
                              
                  />
                </div>
                <div className="gallery-right">
                    <h3>{product?.title}</h3>
                    <div className='rating'>
                      <Rate className='rate' value={rating} onChange={(e) => setRating(e)}/>
                      <p>{rating}/<span style={{color: '#00000099'}}>5</span></p>
                    </div>
                    <div className='prices'>
                      <h4 className='price'>${product?.price}</h4>
                      {/* <h4 className='old-price'>${product?.oldPrice}</h4> */}
                      <h4 className='sale'>-2%</h4>
                    </div>
                    <p className="p-title">{product?.desc}</p>
                    
                    <p className="p-title2">Select Colors</p>
                    <div className="colors">
                        <div onClick={() => setCheck('color1')}>
                            {check == 'color1' && <CheckOutlined/>}
                        </div>
                        <div onClick={() => setCheck('color2')}>
                        {check == 'color2' && <CheckOutlined/>}
                        </div>
                        <div onClick={() => setCheck('color3')}>
                        {check == 'color3' && <CheckOutlined/>}
                        </div>
                    </div>

                    <p className="p-title2">Choose Size</p>
                    <div className="sizes">
                        <p onClick={() => setSize('small')} className={size == 'small' ? 'size-active' : ''}>Small</p>
                        <p onClick={() => setSize('medium')} className={size == 'medium' ? 'size-active' : ''}>Medium</p>
                        <p onClick={() => setSize('large')} className={size == 'large' ? 'size-active' : ''}>Large</p>
                        <p onClick={() => setSize('x-large')} className={size == 'x-large' ? 'size-active' : ""}>X-Large</p>
                    </div>

                    <div className="count_btn">
                        <div>
                          <button onClick={() => setCount(count-1)} disabled={count == 1 && true}><MinusOutlined/></button>
                          <h1>{count}</h1>
                          <button onClick={() => setCount(count+1)}><PlusOutlined/></button>
                        </div>
                        <button className="add-card">Add to Cart</button>
                    </div>

              
                </div>
            </div>
         </Container>
        </div>

        <div>
          <Container>
             <div className="single-coments-wrapper">
                <div className="coments-header">
                    <p className={coments == 'Product Details' ? 'coments-header-active' : ''} onClick={() => setComents('Product Details')}>Product Details</p>
                    <p className={coments == 'Rating & Reviews' ? 'coments-header-active' : ''} onClick={() => setComents('Rating & Reviews')}>Rating & Reviews</p>
                    <p  className={coments == 'FAQs' ? 'coments-header-active' : ''} onClick={() => setComents('FAQs')}>FAQs</p>
                </div>
                <div className="coments-middle">
                  <h2>All Reviews <span style={{fontSize: 14}}>(451)</span></h2>
                  <div>
                    <button><SlidersOutlined /></button>
                    <Select className="coments-select" defaultValue={'latest'}>
                      <option value="latest">Latest</option>
                      <option value="old">Old</option>
                    </Select>
                    <button>Write a Review</button>
                  </div>
                </div>
                <div className="coments-bottom">
                  {
                    new Array(numItems).fill(null).map((_, index) => {
                      return (
                        <div key={index} className="customers-swiper">
                        <Rate value={5} disabled />
                        <div>
                          <h5>Sarah M.</h5>
                          <CheckCircleOutlined style={{color: '#01AB31'}}/>
                        </div>
                        <p>
                          "I'm blown away by the quality and style of the clothes I
                          received from Shop.co. From casual wear to elegant dresses,
                          every piece I've bought has exceeded my expectations.”
                        </p>

                        <p style={{marginTop: 20}}>Posted on August 14, 2023</p>
                      </div>
                      )
                    })
                  }

                  <button onClick={() => setOpen(!open)}>
                    {open ? 'Back to default' : 'Load More Reviews'}
                  </button>
                    
                </div>
             </div>
          </Container>
        </div>

        <section>
          <Container>
             <h2 style={{marginTop: 72}} className='card-title'>NEW ARRIVALS</h2>
             
             <div className='card-wrapper'>
                  {
                     datas.map((e, index) => (
                        <Card key={index} data={e} />
                     ))
                  }
             </div>

             <Button onClick={() => limit == 99 ? setLimit(4) : setLimit(99)} style={{display: 'block', margin: '0 auto', marginTop: 51, height: 52, width: 218, borderRadius: 62}}>
                  {limit == 4 ? 'View All' : 'Back to before'}
             </Button>
          </Container>
      </section>

    </>
  )
}

export default SinglePage