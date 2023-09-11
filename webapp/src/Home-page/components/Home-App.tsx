import Footer from "./Footer"
import HomePage from "./Home-Page"
import NavObject from "./Nav-Object"





const HomeApp = () => {
    return (
        <>
            <HomePage />
            <Footer footerItems={NavObject} />


        </>
    )
}
export default HomeApp