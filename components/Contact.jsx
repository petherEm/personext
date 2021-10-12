import React from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Container = styled.div`
    height: 90vh;

    
`
const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 480px) {
        width: 90%;
        flex-direction: column;

    }
`

const FormContainer = styled.div`
    width: 50%;
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

const AddressContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
        display: none;
        
    }
`

const Contact = () => {

    const { register, handleSubmit, errors, reset } = useForm();

    // function onSubmitForm(values) {
    //     let config = {
    //         method: 'post',
    //         url: `${process.env.NEXT_PUBLIC_API_URL}`
    //     }
    // }

    // NEXT_PUBLIC_API_URL = http://localhost:3000

    return (
        <Container>
            <Wrapper>
                <FormContainer>
                    <Title>Coffee? <br /> Let's Get in Touch</Title>
                    <Form >
                        <LeftForm>
                            <Input {...register('fullname', { required: true })} type="text" name="fullname" placeholder="Your Name" />
                            <Input {...register('email', { required: true }, { minLength: 8 })} type="email" name="email" placeholder="Your Email" />
                            <Input {...register('subject', { required: true })} type="text" name="subject" placeholder="Your subject" />
                        </LeftForm>
                        <RightForm>
                            <TextArea {...register('textarea', { required: true })} type="text" name="textarea" placeholder="Your message"/>
                            <Button>Submit</Button>
                        </RightForm>
                        
                    </Form>
                </FormContainer>
                <AddressContainer>This is a placehodler for something meaningful</AddressContainer>

            </Wrapper>
            
        </Container>
    )
}

export default Contact
