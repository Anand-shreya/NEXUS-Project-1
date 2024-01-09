import styled from "styled-components";
import Img2 from "../Images/City.jpg";
const Home = styled.div`
display:flex;
align-items:center;
justify-content:center;
height:100vh;
width:100vw;
background-image: url(${Img2});
background-repeat: no-repeat;
background-size: cover;
//background-position: center;
`;

const P = styled.p`
font-family: "Oswald", sans-serif;
color:#090979; 
font-size:large;
`;

function LandingPage(props){
    return(
        <Home>
            <P>Welcome in my first Project of NEXUS Intenship</P>
            
        </Home>
    );
}
export default LandingPage;