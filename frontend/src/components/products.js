import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Products(){
    return(
        <section className="container mt-4">
            {/* Latest Products */}
            <h4 className="mb-3"><span className='text-danger'>Electronics</span> Products</h4>
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
            </div>
            {/* End Latest Products */}
            {/* pagination */}
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
            {/* pagination */}
        </section>
    )
}

export default Products