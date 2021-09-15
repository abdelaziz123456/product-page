import './index.scss'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

function Footer(){
    return (
        <div className='footer py-3 px-5'>
           <div className="subscribe d-flex  px-5">
                <p  className='text-light mx-4 fs-5'>Subscribe to our newsletter and
                receive exclusive offers every week</p>
                <input type="email " placeholder='Enter Your Email ' className='sub-input mx-4 ' />

                <button className='btn btn-orange mx-4'>subscribe</button>
           </div>
           <div className="footer-links d-flex mt-5">
               <div className='px-3 w-50'>
                   <div className="logo"><span className='text-orange'>E</span>-shop</div>

                   <div>
                   <p className='small-text'>
                   House My Brand designs clothing for the young, the old  everyone in between  but most importantly, for the fashionable
                       
                       </p>

                       <div className='text-muted mt-4 footer-icons'> 
                       <i className="fa fa-facebook mx-2 fa-sm" aria-hidden="true"></i>
                       <i className="fa fa-twitter mx-2 fa-sm"  aria-hidden="true"></i>
                       <i className="fa fa-linkedin fa-sm mx-2" aria-hidden="true"></i>
                       <i className="fa fa-instagram mx-2 fa-sm" aria-hidden="true"></i>
                       <i className="fa fa-youtube-play mx-2 fa-sm" aria-hidden="true"></i>

                       </div>

                   </div>
                   </div>
                   
                   
               <div className='mx-3'>
                   <p className='small-text text-dark mb-3'>shopping online</p>
                   <p className='small-text  '>order status</p>
                   <p className='small-text  '>shipping and delivery</p>
                   <p className='small-text  '>returns</p>
                   <p className='small-text  '>payment options</p>
                   <p className='small-text  '>Contact Us</p>
               </div>
               <div className='mx-3'>
                   <p className='small-text text-dark mb-3'>information</p>
                   <p className='small-text  '>order status</p>
                   <p className='small-text  '>shipping and delivery</p>
                   <p className='small-text  '>returns</p>
                   <p className='small-text  '>payment options</p>
                   <p className='small-text  '>Contact Us</p>
               </div>
               <div className='mx-3'>
                   <p className='small-text text-dark mb-3'>information</p>
                   <p className='small-text  '>store@uikit.com</p>
                   <p className='small-text  '>Hotline: +1 131 138 138</p>
                   
               </div>

           </div>
        </div>
    )
}


export default Footer