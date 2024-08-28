import { Card, Swiper } from '@ui'
import './style.scss'
import { Container, HomeIntro } from '@components'
import { Button } from 'antd'
import Category1 from '@images/category1.png'
import Category2 from '@images/category2.png'
import Category3 from '@images/category3.png'
import Category4 from '@images/category4.png'
import { useEffect, useState } from 'react'
import { useProductStore } from '@store'
import { ToastContainer } from 'react-toastify'

function Home() {
   const {getData} = useProductStore()
   const [datas, setDatas] = useState([])
   const [limit, setLimit] = useState(4)
   async function getProducts(){
      const payload = {
         limit: limit,
         skip: 1
      }
     const response = await getData(payload)
     console.log(response);
     setDatas(response)
   }


   useEffect(() => {
      getProducts()
   }, [limit])



  return (
    <>
    <ToastContainer/>
      <HomeIntro/>

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
                  {limit == 4 ? 'View All' : 'back'}
             </Button>
          </Container>
      </section>


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
                  {limit == 4 ? 'View All' : 'Less Then'}
             </Button>
          </Container>
      </section>

      
      <section id='category'>
         <Container>
           <div className='category-wrapper'>
               <h1 className='card-title'>BROWSE BY dress STYLE</h1>
               <div className='category'>
                  <div>
                     <h4>Casual</h4>
                     <img src={Category1} alt="Photo1" />
                  </div>
                  <div>
                     <h4>Formal</h4>
                     <img src={Category2} alt="Photo2" />
                  </div>
               </div>
            
               <div className='category category-gym-party'>
               <div>
                     <h4>Party</h4>
                     <img className='party-img'  src={Category3} alt="Photo1" />
                  </div>
                  <div>
                     <h4>Gym</h4>
                     <img src={Category4} alt="Photo2" />
                  </div>
               </div>
           </div>
         </Container>
      </section>

      <section style={{marginTop: 40}}>
         <Container>
            <h2 style={{textAlign: 'left'}} className='card-title'>OUR HAPPY CUSTOMERS</h2>
            <Swiper/>
         </Container>
      </section>
    </>
  )
}

export default Home