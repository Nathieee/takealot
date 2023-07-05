import Nav1 from '../components/Nav1';
import Footer from '../components/Footer';
import Nav3 from '../components/Nav3';
import ShopBanner from '../components/ShopBanner';
import ShopBody from '../components/ShopBody';


function ShopPage(){
    return(
        <div>
            <Nav1/>
            <Nav3 />            
            <ShopBanner />
            <ShopBody />
            <Footer />
        </div>
    )
}

export default ShopPage;