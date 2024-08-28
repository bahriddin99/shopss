import { MinusOutlined, PlusOutlined, RightOutlined, SlidersOutlined } from "@ant-design/icons"
import { Container } from "@components"
import { Slider } from "antd"
import { useEffect, useState } from "react"
import './style.scss'
import '../single-page/style.scss'
import { useProductStore } from "@store"
import { Card, Category_Drawer } from "@ui"

function Categories() {
  const [size, setSize] = useState('small')
  const {getData} = useProductStore()
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)
 
  async function getProduct(){
    const payload = {
      limit: 9,
      skip: page
    }
    const response = await getData(payload)
    setData(response)
  }
  
  useEffect(() => {
    getProduct()
  }, [page])
  
  
  
  return (
    <div className="filter-wrapper">
        <Container>
            <div className="filter">
                <div className="filter-left">
                    <div className="filter-icon">
                       <h3>Filters</h3>
                       <p><SlidersOutlined /></p>
                    </div>
                    <div className="filter-category">
                        <ul>
                          <li>
                            <p>T-shirts</p>
                            <p><RightOutlined /></p>
                          </li>
                          <li>
                            <p>Shorts</p>
                            <p><RightOutlined /></p>
                          </li>
                          <li>
                            <p>Trousers</p>
                            <p><RightOutlined /></p>
                          </li>
                          <li>
                            <p>Jackets</p>
                            <p><RightOutlined /></p>
                          </li>
                          <li>
                            <p>Hoodies</p>
                            <p><RightOutlined /></p>
                          </li>
                        </ul>
                    </div>
                    <h4>Summa</h4>
                    <Slider
                      className="slider"
                      range
                      step={1}
                      tooltipVisible={false} // Disable tooltip
                    />

                    <div className="colors-wrapper">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>

                    <div className="sizes">
                        <p onClick={() => setSize('small')} className={size == 'small' ? 'size-active' : ''}>Small</p>
                        <p onClick={() => setSize('medium')} className={size == 'medium' ? 'size-active' : ''}>Medium</p>
                        <p onClick={() => setSize('large')} className={size == 'large' ? 'size-active' : ''}>Large</p>
                        <p onClick={() => setSize('x-large')} className={size == 'x-large' ? 'size-active' : ""}>X-Large</p>
                    </div>

                    <div className="dress">
                      <h3>Dress Style</h3>
                      <ul>
                        <li>Casual</li>
                        <li>Formal</li>
                        <li>GymParty</li>
                        <li></li>
                      </ul>
                    </div>

                    <button>Apply Filter</button>
                </div>
                <div className="filter-right">
                    <div className="right-title">
                        <h3>Casual</h3>
                        <Category_Drawer/>
                    </div>
                    <div className="casual-wrapper">
                        {
                          data?.map((item:any) => (
                            <Card data={item}/>
                          ))
                        }
                    </div>
                    <div className="pogination">
                        <a href="#">
                          <button disabled={page == 1} onClick={() => setPage(page-1)}>
                            <MinusOutlined/>
                          </button>
                        </a>
                        <h4>{page}</h4>
                       <a href="#"> <button disabled={data.length != 9} onClick={() => setPage(page+1)}>
                          <PlusOutlined/>
                        </button></a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Categories