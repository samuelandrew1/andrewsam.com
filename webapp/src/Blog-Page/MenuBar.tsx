
import { Box } from "@chakra-ui/react"
const MenuBar = ()=>{
    return ( 
    <Box mt={{base:2, lg:'55px'}} w='100%'>    
    <div>
        <nav className="navbarx navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
            {/* <a href="index.html" className="navbar-brand d-block d-lg-none">
                <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
            </a> */}
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                <div className="navbar-nav mr-auto py-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="category.html" className="nav-item nav-link">Category</a>
                    <a href="single.html" className="nav-item nav-link">Single News</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                        <div className="dropdown-menu rounded-0 m-0">
                            <a href="#" className="dropdown-item">Menu item 1</a>
                            <a href="#" className="dropdown-item">Menu item 2</a>
                            <a href="#" className="dropdown-item">Menu item 3</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>               
            </div>
        </nav>
    </div>    
          <div className="row align-items-center bg-white py-3 px-lg-5">
            <div className="col-lg-4">
                <a href="#" className="navbar-brand p-0 d-noneC d-lg-block">
                    <h1 className="m-0 display-4 text-uppercase text-primary">News<span className="text-secondary font-weight-normal">Blog</span></h1>
                </a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                <a href=""><img className="img-fluid" src="../../src/assets/blog/img/ads-728x90.png" alt=""/></a>
            </div>
        </div>
        <div className="container-fluid p-0">
    </div>
    </Box>
  

    )
}

export default MenuBar