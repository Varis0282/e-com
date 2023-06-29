import './footer.css';


function Footer() {
    return (
        <div className="Footer">
            <div class="conatainer">
                <div class="row">
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Women</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="all_products.html" class="text-white">Dresses</a>
                            </li>
                            <li>
                                <a href="all_products.html" class="text-white">Pants</a>
                            </li>
                            <li>
                                <a href="all_products.html" class="text-white">Skirts</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Men</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="all_products.html" class="text-white">Shirts</a>
                            </li>
                            <li>
                                <a href="all_products.html" class="text-white">Pants</a>
                            </li>
                            <li>
                                <a href="all_products.html" class="text-white">Hoodies</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase"><a href="all_products.html">Kids</a></h5>
                    </div>
                    <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled mb-0">
                            <li>
                                <a href="index.html" class="text-white">Home</a>
                            </li>
                            <li>
                                <a href="login.html" class="text-white">Login</a>
                            </li>
                            <li>
                                <a href="contact_us.html" class="text-white">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <hr class="mb-4 mt-4"/>
                        <p>Copyright &copy;E-commerce 2022-23</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;