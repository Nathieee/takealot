import Nav1 from '../components/Nav1';
import Nav3 from "../components/Nav3";
import Footer from '../components/Footer';
import CartBody from '../components/CartBody';



function CartPage(){
    return(
        <div>
            <Nav1 />
            <Nav3 />
            <CartBody />
            <Footer />
        </div>
    )
}

export default CartPage;