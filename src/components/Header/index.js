import './index.scss'
function Header(){
    return (
        <div className='header'>
           
            <div className="container d-flex justify-content-between">
               <div className="logo"><span className='text-orange'>E</span>-shop</div>
               <div >
                 <span className='px-4'>Men</span>
                 <span className='px-4'>Women</span>
                 <span className='px-4'> Kids</span>  
               </div>
               <div className="right">right</div>
            </div>
        </div>
    )
}
export default Header
