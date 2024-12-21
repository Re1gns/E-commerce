import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Home(){
return(
    <main className= 'mt-4'>
    <div className= 'container'>
    {/* Latest Products */}
    <h4 className="mb-3">Latest Products <Link to='/products' className='float-end btn btn-sm btn-dark'> View All Products <i className="fa-solid fa-arrow-right-long"></i></Link></h4>
    <div className="row mb-4">
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
    </div>
    {/* End Latest Products */}

    {/* Popular Categories */}
    <h4 className="mb-3">Popular Categories <Link to='/categories' className='float-end btn btn-sm btn-dark'> View All Categories <i className="fa-solid fa-arrow-right-long"></i></Link></h4>
    <div className="row mb-4">
        {/* Category box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Category title</h5>
            </div>
            <div className="card-footer">
            Products Sold: 3491
            </div>
        </div>
        </div>
        {/* End Category box */}
        {/* Category box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Category title</h5>
            </div>
            <div className="card-footer">
            Products Sold: 3251
            </div>
        </div>
        </div>
        {/* End Category box */}
        {/* Category box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Category title</h5>
            </div>
            <div className="card-footer">
            Products Sold: 2345
            </div>
        </div>
        </div>
        {/* End Category box */}
        {/* Category box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Category title</h5>
            </div>
            <div className="card-footer">
            Products Sold: 1746
            </div>
        </div>
        </div>
        {/* End Category box */}
    </div>
    {/* End Popular Categories */}

    {/* Popular Products */}
    <h4 className="mb-3">Popular Products <a href='#' className='float-end btn btn-sm btn-dark'> View All Products <i className="fa-solid fa-arrow-right-long"></i></a></h4>
    <div className="row mb-4">
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
        {/* Product box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Product title</h5>
            <h6 className="card-title text-muted">Price: $46.7</h6>
            </div>
            <div className="card-footer">
            <button title='Add to Cart' className='btn btn-success btn-sm'><i className="fa-solid fa-cart-plus"></i></button>
            <button title='Add to Wishlist' className='btn btn-danger btn-sm ms-1'><i className="fa-solid fa-heart"></i></button>
            </div>
        </div>
        </div>
        {/* Product box */}
    </div>
    {/* End Popular Products */}

    {/* Popular Vendors */}
    <h4 className="mb-3">Popular Vendors <a href='#' className='float-end btn btn-sm btn-dark'> View All Vendors <i className="fa-solid fa-arrow-right-long"></i></a></h4>
    <div className="row mb-4">
        {/* Vendors box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Vendor Name</h5>
            </div>
            <div className="card-footer">
            Categories: <a href="#">Home appliances</a>, <a href="#">Autos</a>
            </div>
        </div>
        </div>
        {/* End Vendors box */}
        {/* Vendors box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Vendor Name</h5>
            </div>
            <div className="card-footer">
            Categories: <a href="#">Membrane</a>, <a href="#">Laundry</a>
            </div>
        </div>
        </div>
        {/* End Vendors box */}
        {/* Vendors box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Vendor Name</h5>
            </div>
            <div className="card-footer">
            Categories: <a href="#">Woodwind</a>, <a href="#">Pipe</a>
            </div>
        </div>
        </div>
        {/* End Vendors box */}
        {/* Vendors box */}
        <div className="col-12 col-md-3 mb-4">
        <div className="card">
            <img className="card-img-top" src={logo} alt="Card image cap"/>
            <div className="card-body">
            <h5 className="card-title">Vendor Name</h5>
            </div>
            <div className="card-footer">
            Categories: <a href="#">Electronics</a>, <a href="#">Furnitures</a>
            </div>
        </div>
        </div>
        {/* End Vendors box */}
    </div>
    {/* End Popular Vendors */}

    {/* Ratings and Reviews */}
    <div id="carouselExampleIndicators" className="carousel slide my-4 border bg-dark text-white p-4">
        <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
        <div className="carousel-item active">
            <figure class="text-center">
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star-half-stroke text-warning"></i>
                <cite title="Source Title">Customer Name</cite>
            </figcaption>
            </figure>
        </div>
        <div className="carousel-item">
            <figure class="text-center">
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star-half-stroke text-warning"></i>
                <i className="fa fa-star"></i>
                <cite title="Source Title">Customer Name</cite>
            </figcaption>
            </figure>
        </div>
        <div className="carousel-item">
            <figure class="text-center">
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star text-warning"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <cite title="Source Title">Customer Name</cite>
            </figcaption>
            </figure>
        </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
        </button>
    </div>
    {/* End Ratings and Reviews */}
    
    </div>
    </main>
    );
}

export default Home;