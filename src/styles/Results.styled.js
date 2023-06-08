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
        list-style-type: '💘    ';
    }
    li {
        margin-top: 1rem;
        margin-left: 1rem;
    }
`
export const BtnContainer = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin-top:3rem;
`
export const BackToHome = styled.button`
    padding:1rem;
    border:none;
    border-radius:3rem;
    background-color:#FA8072;
    color: #F8F8FF;
`
export const ShareBtn = styled.button`
    padding:1rem;
    margin-top:0.5rem;
    border:none;
    border-radius:3rem;
    background-color:#DC143C;
    color: #F8F8FF;
`