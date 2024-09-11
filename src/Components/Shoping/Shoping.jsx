import React, { useContext, useEffect, useState } from 'react'
import { ApiData } from '../ContextApi'
import Cart from '../Cart/Cart';
import Pagination from '../Cart/Pagination/Pagination';
import Container from '../Container';
import { FaPlus,FaMinus  } from "react-icons/fa";

const Shoping = () => {
  const data = useContext(ApiData)
  const [catagorys , setcatagorys]=useState(false);
  const [categorys , setcategorys]=useState([]);
  const [cateFilter , setcateFilter]=useState([])
  const [brand , setbrand]=useState(false);
  const [catebarnd ,setcatebarnd]=useState([]);
  const [brnadFilters , setbrnadFilters]=useState([])
  const [currentpage, setcurrentpage]=useState(1);
  const [perpage ,setperpage]=useState(6);
  const lastpage = currentpage *perpage
  const firstpage = lastpage - perpage
  const allpage = data.slice(firstpage , lastpage)

  const pageNumber = [];
  for(let i = 0; i < data.length/perpage; i++){
     pageNumber.push(i)
  }
  const pagehandel =(pageNumber)=>{
    setcurrentpage(pageNumber + 1);
  }
  const next =()=>{
    if(currentpage < pageNumber.length){
      setcurrentpage((state)=> state + 1)
    }
  }  
  const prev =()=>{
    if(currentpage > 1){
      setcurrentpage((state)=> state - 1)
    }
  }
  useEffect(()=>{
    setcategorys([...new Set(data.map((items)=> items.category))])
    setcatebarnd([...new Set(data.map((items)=> items.brand))])
  },[data])

  

  const handlecategory = (bitem) =>{
    const categoryFilte = data.filter((itemss)=> itemss.category == bitem)
  setcateFilter(categoryFilte);
}
const handelbrand = (citem) =>{
  const brandeFilte = data.filter((itemss)=> itemss.brand == citem)
  setbrnadFilters(brandeFilte);
}


const handleallproduct = () =>{
  setcateFilter("")
  
 }


  console.log(brnadFilters);
  
 
  return (
    <>
    <Container>
    <div className='flex '>
        <div className='w-[20%]'>
          <div className=''>
          <div className='flex items-center justify-between cursor-pointer' onClick={()=>setcatagorys(!catagorys)}>
            <h3 className='text-[18px] font-bold'>All Catagory</h3>
            {catagorys== true ?  <FaMinus />:<FaPlus />}
          </div>
          {catagorys &&  <ul>
            <li className='cursor-pointer' onClick={handleallproduct}>All Prodact</li>
            {categorys.map((citem)=>(
                <li className='cursor-pointer' onClick={()=>handlecategory(citem)}>{citem}</li>
            ))}
           
           
          </ul>}
         
          </div>
          <div className='mt-5'>
              <div className='flex items-center justify-between cursor-pointer' onClick={()=>setbrand(!brand)}>
                <h3 className='text-[18px] font-bold'>Brand</h3>
                {brand == true ? <FaMinus />: <FaPlus />}
          
               
              </div>
              {brand &&    <ul>
                {catebarnd.map((pitem)=>(
                     <li className='cursor-pointer'  onClick={()=>handelbrand(pitem)}>{pitem}</li>
                ))}
           
              </ul>}
           
          </div>
         
          
        </div>
        <div className='w-[80%]'>
          <div className='flex justify-between flex-wrap'>
            <Cart allpage={allpage} cateFilter={cateFilter} brnadFilters={brnadFilters}/>
          </div>
          <Pagination pageNumber={pageNumber} pagehandel={pagehandel} next={next} prev={prev}/>
        </div>
      </div>
    </Container>
   

    </>
  )
}

export default Shoping