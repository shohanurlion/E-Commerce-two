import React from 'react'
import bgImage from '../../assets/Ad_1.png'
import bgImage2 from '../../assets/Ad_2.png'
import bgImage3 from '../../assets/Ad_3.png'
import Container from '../Container'
const Offerproduct = () => {
  return (
   <>
   <div className='py-8'>
        <Container>
        <div className='px-2 md:px-0 md:flex justify-between'>
        <div className='w-[100%] pb-3 md:pb-0 md:w-[48%]'>
            <img src={bgImage} alt='img1'/>
        </div>
        <div className='w-[100%] md:w-[48%]'>
            <div className='pb-3 md:pb-[35px]'>
            <img src={bgImage2} alt='img2'/>
            </div>
            <div className=''>
            <img src={bgImage3} alt='img2'/>
            </div>
       
        </div>
    </div>
        </Container>
   </div>
   </>
  )
}

export default Offerproduct