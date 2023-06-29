import './Home.css';
import redDress from '../assests/dress1.jpg';


function Slider() {
    return (
        <div className="Slider">
            <div className="mb-5" id="carousel-container">
                <h2 className="text-center mb-3 feature-text" id="carousel-heading">Featured Products</h2>
                <div id="carouselIndicators" className="carousel slide">
                    <ol className="carousel-indicators direction-sign">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row card-row">
                                <div className="col-md-3 col-12">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-3 col-12">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                                <div className="col-md-3 col-12 card-hidden">
                                    <div className="card">
                                        <img src={redDress} alt="Red dress" className="card-img-top" />
                                        <h3 className="card-title text-center">Red dress</h3>
                                        <h3 className="card-title text-center">15$</h3>
                                        <p className="card-body">This dress is made up of high quality material and comfortable fabric</p>
                                        <button id="prod-btn" className="btn mb-2" onclick="button(this)"><i className="fa-solid fa-cart-shopping"></i>Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br /><br />
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon direction-sign" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon direction-sign" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Slider;