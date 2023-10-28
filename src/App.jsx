import styled from "styled-components";
// import "./App.css";
import Input from "./components/input";
import CheckedInput from "./components/CheckedInput";
import Button from "./components/button";

function App() {
  return (
    <MainContainer>
      <ImageContainer></ImageContainer>
      <LoginContainer>
        <LoginText>LOGIN</LoginText>
        <InputContainer>
          <SubTitleText>Login ID</SubTitleText>
          <Input type={"text"} placeholder={"Email"}></Input>
          <SubTitleText>Password</SubTitleText>
          <Input type={"password"} placeholder={"Password"}></Input>
          <SubTitleText>
            <LinkedText>Change Password</LinkedText>
          </SubTitleText>
        </InputContainer>

        <CheckboxContainer>
          <CheckedInput type={"checkbox"}></CheckedInput>
          Remember Me
        </CheckboxContainer>
        <CheckboxContainer>
          <CheckedInput type={"checkbox"}></CheckedInput>
          Agree to <LinkedText>Terms and Conditions</LinkedText>
        </CheckboxContainer>

        <ButtonContainer>
          <Button content={"Login"}></Button>
        </ButtonContainer>
        <SubTitleText>
          Don't Have an Account? <LinkedText>Register Here</LinkedText>
        </SubTitleText>
      </LoginContainer>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  border: 2px solid red;
  padding: 10px 0;
  @media only screen and (max-width: 820px) {
    flex-direction: column-reverse;
  }
`;

const ImageContainer = styled.div`
  background-image: url("loginImage.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20vw;
  border-radius: 10px;
 
  @media only screen and (max-width: 820px) {
    width: 100vw;
    height: 50vh;
    border-radius: 0;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  background-filter: blur(8.5px);
  border-radius: 10px;
  color: black;
  letter-spacing: 0.1rem;
  height: 100%;
  padding: 40px;
  @media only screen and (max-width: 820px) {
    margin: 10px;
    
  }
`;

const LoginText = styled.h2`
  margin: 3red 0 2rem 0;
  height: 90px;
  text-align: center;
`;

const SubTitleText = styled.h4`
  text-align: start;
`;

const LinkedText = styled.span`
  color: orange;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 30%;
  width: 100%;
  margin: 40px 0;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0 2rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
