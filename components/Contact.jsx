import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import emailjs from 'emailjs-com'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;

    
`
const Wrapper = styled.div`
    height: 100%;
    width: 80%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        padding-top: 0px;
        width: 90%;
        flex-direction: column;

    }
`

const FormContainer = styled.div`
    width: 70%;
    @media only screen and (max-width: 480px) {
        width: 100%;
        display: flex;
        flex-direction: column;

    }
`

const Title = styled.h1`
    margin: 50px;
    margin-top: 0;
    @media only screen and (max-width: 480px) {
        margin-left: 0px;
        width: 100%;
        font-size: 30px;

    }
`

const Form = styled.form`
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 100%;
        
        flex-direction: column;

    }
`

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        

    }
`
const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;
    @media only screen and (max-width: 480px) {
        width: 100%;
        flex-direction: column;
        justify-content: center;
        
        

    }
`

const Input = styled.input`
    width: 200px;
    padding: 20px;
    @media only screen and (max-width: 480px) {
        width: 90%;
        margin-top: 10px;
        
    }
`
const TextArea = styled.textarea`
    width: 300px;
    height: 70%;
    padding: 20px;

    @media only screen and (max-width: 480px) {
        width: 90%;
        margin-top: 10px;
        
        
    }
`
const Button = styled.button`
    border: none;
    padding: 15px;
    background-color: darkblue;
    color: white;
    font-size: 20px;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;

    @media only screen and (max-width: 480px) {
        font-size: 15px;

    }
`

const Contact = () => {

    const { register, handleSubmit, errors, reset } = useForm();

   
    const formRef = useRef()
    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail_peter', 'template_5o5istf', formRef.current, 'user_rGCw9OX0IbaWZvJa5GX5U')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            }
            );
    }


    return (
        <Container id="contact">
            <Wrapper>
                <FormContainer>
                    <Title>Coffee? <br /> Let's Get in Touch</Title>
                    <Form ref={formRef} onSubmit={sendEmail}>
                        <LeftForm>
                            <Input {...register('fullname', { required: true })} type="text" name="user_name" placeholder="Your Name" />
                            <Input {...register('email', { required: true }, { minLength: 8 })} type="email" name="user_email" placeholder="Your Email" />
                            <Input {...register('subject', { required: true })} type="text" name="user_subject" placeholder="Your subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea {...register('textarea', { required: true })} type="text" name="message" placeholder="Your message"/>
                            <Button type="submit" value="Send">Submit</Button>
                            {done && <h4 style={{color: "green"}}>Thank you for your message</h4> }
                        </RightForm>
                        
                    </Form>
                </FormContainer>
            </Wrapper>
            
        </Container>
    )
}

export default Contact
