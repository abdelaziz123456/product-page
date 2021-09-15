import './index.scss'
import image1 from '../../images/1.png'
import image2 from '../../images/2.png'
import image3 from '../../images/3.png'
import image4 from '../../images/4.png'
import image5 from '../../images/5.png'
import image6 from '../../images/6.png'
import { FavoriteBorder } from '@material-ui/icons'
function ProductSide (){
    return(
        <div className="product-side m-4">
            <div className="d-flex justify-content-between">
                <div>
                <h6 className='fw-normal'>Men's Top <span className='fw-light'>(133)</span></h6>

                </div>
                <div className='small-text text-uppercase d-flex justify-content-center align-items-center'>
                    show products 
                    <div className="bordered-select">
                        30 <span className='fs-6 ms-2 mt-1'>&#711;</span>
                    </div>

                    sort 
                    <div className="bordered-select">
                        popular <span className='fs-6 ms-2 mt-1'>&#711;</span>
                    </div>
                </div>
                
            </div>

            <div className="products-container row">


                <div className="col-4 mt-5">


                    <div className="img-div  img-fluid" >
                        <img src={image1} width='200' alt="" />

                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>T-Shirt Summer Vibes</p>
                        <p className='text-danger'>$89.99 <span className='text-muted ms-2'>$119.99</span> </p>
                        
                    </div>


                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image2} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Loose Knit 3/4 Sleeve </p>
                        <p >$119.99  </p>
                        
                    </div>
                    
                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image3} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Basic Slim Fit T-Shirt </p>
                        <p >$79.99  </p>
                        
                    </div>
                    
                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image4} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Oxford Shirt </p>
                        <p >$79.99  </p>
                        
                    </div>

                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image5} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Premium Dress Shirt </p>
                        <p >$119.99  </p>
                        
                    </div>

                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image6} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Patterned Dress Shirt </p>
                        <p >$79.99  </p>
                        
                    </div>

                </div>

                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image4} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Oxford Shirt </p>
                        <p >$79.99  </p>
                        
                    </div>

                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image5} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder />
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Premium Dress Shirt </p>
                        <p >$119.99  </p>
                        
                    </div>

                </div>
                <div className="col-4 mt-5">

                <div className="img-div  img-fluid" >
                        <img src={image6} width='200' alt="" />
                        <div className="favorite-icon">
                            <FavoriteBorder/>
                        </div>

                    </div>
                    <div className="text-div   small-text">
                        <p>Patterned Dress Shirt </p>
                        <p >$79.99  </p>
                        
                    </div>

                </div>
                
            </div>

            <div className="navigation my-4 d-flex justify-content-center align-items-center  ">
              
               <p className="small-text mx-2">
               page  </p> 
                 
               <p className='mx-2 page-num'>
                   1
               </p>
                   
               
               <p className='mx-2'>z<sup>3</sup></p>

               <p className="small-text   text-decoration-underline  ms-5">
               Next </p> 

               

            </div>
            
        </div>
    )
}

export default ProductSide
