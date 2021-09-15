import './index.scss'

function Footer(){
    return (
        <div className='footer py-3 px-5'>
           <div className="subscribe d-flex  px-5">
                <p  className='text-light mx-4 fs-5'>Subscribe to our newsletter and
                receive exclusive offers every week</p>
                <input type="email " placeholder='Enter Your Email ' className='sub-input mx-4 ' />

                <button className='btn btn-orange mx-4'>subscribe</button>
           </div>
        </div>
    )
}


export default Footer