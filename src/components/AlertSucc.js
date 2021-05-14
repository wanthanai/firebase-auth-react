import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid #3fbc73;
    border-radius: 5px;
    padding: 6px 12px;
    height: 36px;
    background: #1a3e29;
    color: #7bbf97;
    margin-bottom: .5rem;

    display: flex;
    align-items: center;
`

function AlertSucc({ message }) {
    return (
        <Container>
            {message}
        </Container>
    )
}

export default AlertSucc
