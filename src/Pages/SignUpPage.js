import SignUp from "../components/Signup";

import Img1 from "../Images/autum_home.jpg";
import Img2 from "../Images/Mapple_Leaf.jpg";

import styled from "styled-components";
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
const Sec_wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  //border: 1px solid red;
`;
const ImgTemp = styled.div`
  width: 350px;
  height: 400px;
  background-image: url(${Img2});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    width: 45vw;
    height: 45vw;
  }
  @media (max-width: 425px) {
    width: 0px;
    height:0px;
  }
`;



function SignUpPage(props) {
  return (
    <Fir_wrap>
      <Sec_wrap>
        <ImgTemp></ImgTemp>
        <SignUp passChildData={props.passChildData} users={props.users}></SignUp>
      </Sec_wrap>
    </Fir_wrap>
  );
}
export default SignUpPage;
