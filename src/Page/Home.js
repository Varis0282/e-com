import Footer from '../components/footer';
import Header from '../components/header';
import Slider from '../components/slider';
import HomeCover from '../components/Homecover';





function Home() {
    return (
        <div className="Home">
            <Header />
            <HomeCover />
            <Slider />
            <Footer />
        </div>
    )
}

export default Home;