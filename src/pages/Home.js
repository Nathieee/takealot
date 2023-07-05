import Nav1 from '../components/Nav1';
import HomeBanner from '../components/HomeBanner';
import HomeBody from '../components/HomeBody';
import Footer from '../components/Footer';
import Nav2 from '../components/Nav2';
import Nav3 from '../components/Nav3';
// import ".components/Nav.css";



function Home(){
    return(
        <div>
            <Nav1/>
            <Nav2 />
            <HomeBanner />
            <HomeBody />
            <Footer />
        </div>
    )
}

export default Home;