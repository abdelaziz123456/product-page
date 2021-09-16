import { HomeOutlined } from '@material-ui/icons'
import React from 'react';
import './index.scss'
import '../../../node_modules/bootstrap/js/dist/collapse';
import $ from 'jquery'
import slider from '../../../node_modules/jquery-ui/ui/widgets/slider'
import { Slide, Slider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

function FilterSide(){
   const value=[0,500]

    return(
        <div className="filter-side ">
            <div className="text-muted d-flex align-items-center mb-3">
                <HomeOutlined style={{ fontSize: 'medium' }}/>  <span>&nbsp; / &nbsp; All products</span>
            </div>
            <div className="filter-param">
                <div className="param-header ">
                    <p className='mt-1 small-text'>product type</p>
                    
                    <a className='text-decoration-none drop-icon'  data-bs-toggle="collapse" href="#typeCollapse" role="button"  
                    aria-expanded="false"
                    aria-controls="typeCollapse">
                    &circ;
                    </a>

                </div>


                <div id="typeCollapse"  className=" collapse param-content ">
                <div className="form-check">
                    <input class="form-check-input" type="checkbox" value="tshirts" id="tshirts"/>
                    <label class="form-check-label  text-capitalize ms-2" for="tshirts">
                     T-shirts
                    </label>

                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="sweatshirts" id="sweatshirts" />
                    <label className="form-check-label ms-2 text-capitalize" for="sweatshirts">
                    sweatshirts
                    </label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="tanktops" id="tanktops" />
                    <label className="form-check-label ms-2 text-capitalize" for="tanktops">
                    tank tops
                    </label>
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="dressshirts" id="flexCheckChecked" />
                    <label className="form-check-label ms-2 text-capitalize" for="flexCheckChecked">
                    dress shirts
                    </label>
                    </div>
                </div>
            </div>

            <div className="filter-param">
                <div className="param-header">
                <p className='mt-1 small-text'>price</p>
                <a className='text-decoration-none drop-icon'  data-bs-toggle="collapse" href="#priceCollapse" role="button"  
                    aria-expanded="false"
                    aria-controls="priceCollapse">
                    &circ;
                    </a>
                </div>
                <div id="priceCollapse"  className=" collapse  px-3 param-content">
                    <div className="d-flex justify-content-between">
                        <div className="price-text  text-muted">
                            0 USD
                        </div>
                        <div className="price-text text-muted">
                        500 USD
                            
                        </div>
                    </div>

                
                
            
            <Slider  style={{color:'black'}}
             value={value}
             max='500'
             min='0'
             valueLabelDisplay="auto"
             aria-labelledby="range-slider"
             
            />
                </div>
            </div>

            <div className="filter-param">
                <div className="param-header ">
                    <p className='mt-1 small-text'>collection</p>
                    
                    <a className='text-decoration-none drop-icon'  data-bs-toggle="collapse" href="#collectionCollapse" role="button"  
                    aria-expanded="false"
                    aria-controls="collectionCollapse">
                    &circ;
                    </a>

                </div>


                <div id="collectionCollapse"  className=" collapse param-content ">
                <div className="form-check">
                    <input class="form-check-input" type="checkbox" value="men" id="men"/>
                    <label class="form-check-label  text-capitalize ms-2" for="men">
                     Men
                    </label>

                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="women" id="women" />
                    <label className="form-check-label ms-2 text-capitalize" for="women">
                    women
                    </label>
                    </div>

                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="kids" id="kids" />
                    <label className="form-check-label ms-2 text-capitalize" for="kids">
                    Kids
                    </label>
                    </div>
                   
                </div>
            </div>


            <div className="filter-param">
                <div className="param-header">
                <p className='mt-1 small-text'>size</p>
                <a className='text-decoration-none drop-icon'  data-bs-toggle="collapse" href="#sizeCollapse" role="button"  
                    aria-expanded="false"
                    aria-controls="sizeCollapse">
                    &circ;
                    </a>
                </div>
                <div className="param-content collapse"   id="sizeCollapse"  >
                    <div className="d-flex justify-content-center">
                    <div className='size'>xs</div>
                    <div className='size'>s</div>
                    <div className='size'>m</div>
                    <div className='size'>l</div>
                    <div className='size'>xl</div>
                    <div className='size'>xxl</div>
                    </div>
                    

                </div>
            </div>


            <div className="filter-param">
                <div className="param-header">
                <p className='mt-1 small-text'>color</p>
                <a className='text-decoration-none drop-icon'  data-bs-toggle="collapse" href="#colorCollapse" role="button"  
                    aria-expanded="false"
                    aria-controls="colorCollapse">
                    &circ;
                    </a>
                </div>
                <div className="param-content collapse"   id="colorCollapse">

                    <div className="d-flex justify-content-center">

                    
                    <div className='non-colored' >
                        <div className='colored' style={{backgroundColor:'black'}}>

                        </div>
                    </div>
                    <div className='non-colored'>
                    <div className='colored' style={{backgroundColor:'#6F3E18'}}>

                    </div>
                    </div>
                    <div className='non-colored'>

                    <div className='colored' style={{backgroundColor:'#D4BE8D'}}>

                    </div>
                    </div>
                    <div className='non-colored'>

                    <div className='colored' style={{backgroundColor:'#838383'}}>

                        </div>
                    </div>
                    <div className='non-colored'>
                    <div className='colored' style={{backgroundColor:'#FFFFFF'}}>

                    </div>
                    </div>
                    <div className='non-colored'>
                    <div 
                     className='colored' style={{backgroundColor:'#0F73AD'}}>
                    

                    </div>
                    </div>
                    </div>

                </div>
            </div>

           
  
  

        </div>
    )
}

export default FilterSide