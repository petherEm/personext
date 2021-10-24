import React from 'react'
import styled from 'styled-components'
import Layout from "../components/Layout";

const Container = styled.div`
    height: calc(100vh - 50px);
    background-color: beige;
`

const Intro = () => {
    return (
        <Layout>
            <Container>
            <h1>Test</h1>
            </Container>
        </Layout>
        
    )
}

export default Intro
