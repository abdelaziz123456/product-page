import './index.scss'

import {PersonOutlineOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";

function Header(){
    return (
        <div className='header d-flex justify-content-between px-5 py-4'>
           
            
               <div className="logo"><span className='text-orange'>E</span>-shop</div>

               <div className='center'>
                 <span className='px-4 fw-bold '>Men</span>
                 <span className='px-4 fw-bold '>Women</span>
                 <span className='px-4  fw-bold'> Kids</span>  
                 

               </div>

               <div className="right">

               <span className='px-2 '>
                 <SearchOutlined style={{ fontSize: 'large' }}/>

                 </span>
               <span className='px-2  fw-light'>
               <ShoppingCartOutlined style={{ fontSize: 'large' }}/>

               </span>

                 

                 <span className='px-2 '>
                 <PersonOutlineOutlined style={{ fontSize: 'large' }}/>
                 </span>
               </div>
            
        </div>
    )
}
export default Header
