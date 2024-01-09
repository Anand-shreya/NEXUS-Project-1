import Login from "../components/Login";

import Img1 from "../Images/autum_home.jpg";
import Img2 from "../Images/Mapple_Leaf.jpg";

import styled from "styled-components";

const Sec_wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid red;
`;
const ImgTemp = styled.div`
  width: 300px;
  height: 300px;
  background-image: url(${Img2});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    width: 35vw;
    height: 35vw;
  }
  @media (max-width: 425px) {
    width: 0px;
    height:0px;
  }
`;

const Fir_wrap = styled.div`
  background-image: url(${Img1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;

function LoginPage(props) {
  return (
    <Fir_wrap>
      <Sec_wrap>
        <ImgTemp></ImgTemp>
        <Login users={props.users}></Login>
      </Sec_wrap>
    </Fir_wrap>
  );
}
export default LoginPage;
