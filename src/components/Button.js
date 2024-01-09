import styled from "styled-components";
const Buttons = styled.button`
  background: ${(props) =>
    props.Background ? props.Background : "transparent"};
  border-radius: ${(props) => (props.br ? props.br : "15px")};
  border: 2px solid #22092C;
  color: #22092C;
  margin: 10px 1em;
  //padding: 0.25em 1em;
  width: ${(props) => (props.width ? props.width : "100px")};
  height: 30px;
`;

function Button(props) {
  return (
    <>
      <Buttons Background={props.background} br={props.br} width={props.width}>
        {props.value}
      </Buttons>
    </>
  );
}
export default Button;
