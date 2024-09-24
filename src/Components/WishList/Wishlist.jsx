import { FaHeart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
const Wishlist = () => {

  const wishinfo = useSelector((state) => state.product.wishitem)
    console.log(wishinfo);
    
  return (
    <>
      <Link to={'/wishlist'}>
        <div className="whishlist">
          <FaHeart className='text-[30px]' />
          {wishinfo.length > 0 ? <div className='flex items-center justify-center w-[20px] h-[20px] absolute top-[3px] right-[-7px] bg-[white] rounded-full'>
            {wishinfo.length}
          </div> : ""}

        </div>
      </Link>

    </>
  )
}

export default Wishlist