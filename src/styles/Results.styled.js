import styled from "styled-components"

export const Container = styled.div`
    width:300px;
    margin:auto auto;
`
export const Title = styled.div`
    text-align: center;
    font-family: 'Pretendard-thin';
    font-size: 3rem;
    margin-bottom: 2rem;
`
export const Image = styled.img`
    width: 300px;
    height: 300px;
    object-fit: cover;
`
export const Description = styled.div`
    margin-top: 3rem;
    ul {
        padding-left:0;
        list-style-type: '💘  ';
    }
    li {
        margin-top: 1rem;
        margin-left: 1rem;
    }
`