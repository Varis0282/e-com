import Logo from '../assests/logo.png';
import Homebg from '../assests/homebg.jpg';
import './Home.css';


function HomeCover(){
    return(
        <div className="HomeCover">
             <img src={Homebg} alt="Homepage" id="homepagebg" />
            <img src={Logo} alt="logo of website" id="logohomepage" />
            <div className="text-center"><span id="brandmoto">Top brands at lowest prices,Around the market</span></div>
        </div>
    )
}

export default HomeCover;