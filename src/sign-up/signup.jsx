import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { LoginUser } from './action'
import styled from 'styled-components'
const Container = styled.div`
width: 100%;
height: 700px;
display: flex;
justify-content: center;
align-items: center;
`;
const SubContainer = styled.div`
background-color: rgba(255, 255, 255, 0.04);
border-radius: 30px;  
padding: 54px;
height: 400px;
width: 360px;
`;
const Heading = styled.div`
font-size: 35px;
color: white;
font-weight: bold;
`;
const InputField = styled(Field)`
width: 340px;
height: 50px;
border-radius: 5px;
background-color: rgb(105,105,105);
font-size: 18px;
margin-bottom: 20px;
padding: 0 10px;
::placeholder {
    color: white;
}
color: white;
outline: none;
`;

const InputSection = styled.div`
padding: 40px 0px;
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
const SignUpButton = styled.p`
color: red;
font-size: 20px;
text-align:end;
cursor: pointer;
`;
class SignUp extends Component {
    constructor(props){
        super(props);
    }
    handleOnSubmit = value => {
        this.props.LoginUser(value, this.props.history)
    }
    render(){
        const { history, handleSubmit } = this.props
        return (
            <Container>
            <SubContainer>
                <Heading>SIGNUP</Heading>
                <form onSubmit={handleSubmit(this.handleOnSubmit)}>
                <InputSection>
                <InputField name="email" type="text" component="input" placeholder="Email or phone number"/>
                <InputField name="password" type="password" component="input" placeholder="Password"/>
                <InputField name="password" type="password" component="input" placeholder="Confirm Password"/>
                </InputSection>
                <SignButton type='submit'>Sign In</SignButton>
                </form>
                <SignUpButton onClick={() => history.push('/Login')}>Login.</SignUpButton>
            </SubContainer>
            </Container>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    LoginUser: (value, history) => dispatch(LoginUser(value,history))
})
export default reduxForm({
    form: 'sign-in' // a unique identifier for this form
  })(withRouter(connect(null, mapDispatchToProps)(SignUp)))
