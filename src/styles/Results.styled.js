import styled from "styled-components"

export const Container = styled.div`
    width:300px;
    margin:auto auto;
`
export const Title = styled.div`
    text-align: center;
    font-family: 'Pretendard-thin';
    font-size: 3rem;
    margin-bottom: 1rem;
`
export const Image = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 2rem;
    object-fit: cover;
`
export const Description = styled.div`
    margin-top: 1.5rem;
    ul {
        padding-left:0;
        list-style-type: '💘    ';
    }
    li {
        margin-top: 1rem;
        margin-left: 1rem;
    }
`
export const Snapshot = styled.div`
    background-color:white;
`
export const BtnContainer = styled.div`
    width:300px;
    display:flex;
    flex-direction:column;
    margin-top:3rem;
`
export const DownloadBtn = styled.button`
    padding:1rem;
    margin-top:0.5rem;
    border:none;
    border-radius:3rem;
    background-color:#DDA0DD;
    color: #F8F8FF;
    font-weight:bold;
`
export const BackToHome = styled.button`
    padding:1rem;
    margin-top:0.5rem;
    border:none;
    border-radius:3rem;
    background-color:#FA8072;
    color: #F8F8FF;
    font-weight:bold;
`
export const ShareBtn = styled.button`
    padding:1rem;
    margin-top:0.5rem;
    border:none;
    border-radius:3rem;
    background-color:#DC143C;
    color: #F8F8FF;
    font-weight:bold;
`