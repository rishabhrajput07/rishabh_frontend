import React, { Component, useState } from 'react'
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { userLogin, removeError } from "./action";

import styled from 'styled-components'
import { devices } from '../helper/device';


const { mobile, tablet } = devices;

const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
// @media ${mobile} {
//     width: 100%;
// }
`;
const SubContainer = styled.div`
background-color: rgba(255, 255, 255, 0.04);
border-radius: 30px;  
padding: 54px;
height: 400px;
width: 400px;
// @media ${mobile} {
//     width: 100%;
// }
`;
const Heading = styled.div`
font-size: 35px;
color: white;
font-weight: bold;
`;
const InputField = styled(Field)`
width: 300px;
height: 50px;
border-radius: 5px;
background-color: rgb(105,105,105);
font-size: 18px;
margin-bottom: 20px;
padding: 0 30px;
::placeholder {
    color: white;
}
color: white;
outline: none;
// @media ${mobile} {
//     width: 100%;
// }
`;
const InputSection = styled.div`
padding: 40px 0px;
}

`;
const SignButton = styled.button`
background-color: #007cc0;
width: 365px;
height: 50px;
color: black;
border-radius: 5px;
font-size: 18px;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
`;
const SignUp = styled.p`
color: red;
font-size: 15px;
text-align:end;
cursor: pointer;
`;
const ForgotPassword = styled.p`
color: red;
font-size: 15px;
cursor: pointer;
`;
const ForgotPasswordButton = styled .div`
display:flex;
justify-content: space-between;

`;
const IconSection = styled.span`
position: absolute;
color: white;
margin: 18px 11px;
`;
const IconSectionPassword = styled.div`
position: absolute;
color: white;
margin:91px 11px;
`;


function Login(props){
    const { history} = props
    const [state , setState] = useState({
        email : "",
        password : ""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    return (
            <Container>
                <SubContainer>
                    <Heading>LOGIN</Heading>
                    <form>
                        <InputSection>
                            <IconSection className="fa fa-user" />
                            <IconSectionPassword className="fa fa-lock" />
                            <InputField name="email" type="text" component="input" placeholder="Email or phone number" />
                            <InputField  name="password" type="password" component="input" placeholder="Password" />
                        </InputSection>
                        <SignButton type='submit'>LOG IN</SignButton>
                    </form>
                    <ForgotPasswordButton>
                    <ForgotPassword>FORGOT PASSWORD?</ForgotPassword>
                    <SignUp onClick={() => history.push('/sign-up')}>NEW USER? REGISTER</SignUp>
                    </ForgotPasswordButton>
                </SubContainer>
            </Container>
        )
    }


const mapStateToProps = (state) => ({
    loggedInUser: state.login.loggedInUser
  })
  
  const mapDispatchToProps = (dispatch) => ({
    userLogin: (data, history) => dispatch(userLogin(data, history)),
  });
  
 
  Login =  reduxForm({
      form: 'log-in',
      enableReinitialize: true 
    })(Login);
    
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))

