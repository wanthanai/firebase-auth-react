import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid #70242b;
    border-radius: 5px;
    padding: 6px 12px;
    height: 36px;
    background: #430c11;
    color: #d6a3a7;
    margin-bottom: .5rem;

    display: flex;
    align-items: center;
`

function AlertErr({ message }) {
    return (
        <Container>
            {message}
        </Container>
    )
}

export default AlertErr
