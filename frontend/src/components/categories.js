import { Link } from 'react-router-dom';
import logo from '../logo.svg';
function Categories(){
    return(
        <section className='container mt-4'>
            {/* Categories */}
            <h4 className="mb-3">Categories</h4>
            <div className="row mb-2">
                {/* Category box */}
                <div className="col-12 col-md-3 mb-4">
                <div className="card">
                    <img className="card-img-top" src={logo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title"><Link to="/category/electronics/1">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
                    </div>
                    <div className="card-footer">
                    Products Sold: 1746
                    </div>
                </div>
                </div>
                {/* End Category box */}
            </div>
            <div className="row mb-2">
                {/* Category box */}
                <div className="col-12 col-md-3 mb-4">
                <div className="card">
                    <img className="card-img-top" src={logo} alt="Card image cap"/>
                    <div className="card-body">
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
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
                    <h5 className="card-title"><Link to="/">Category title</Link></h5>
                    </div>
                    <div className="card-footer">
                    Products Sold: 1746
                    </div>
                </div>
                </div>
                {/* End Category box */}
            </div>
            {/* End Categories */}
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
        
        );
    }

export default Categories;