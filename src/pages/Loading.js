import styled from "styled-components";
import Font from "react-font";

const Container = styled.div`
  width: 300px;
  margin: auto auto;
  display: flex;
  margin: auto auto;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  margin-top:50%;
  width: 40px;
  height: 40px;
  --c: linear-gradient(#ED0086 0 0);
  --r1: radial-gradient(farthest-side at bottom,#ED0086 93%,#0000);
  --r2: radial-gradient(farthest-side at top   ,#ED0086 93%,#0000);
  background: 
    var(--c) ,
    var(--r1),
    var(--r2),
    var(--c) ,  
    var(--r1),
    var(--r2),
    var(--c) ,
    var(--r1),
    var(--r2);
  background-repeat: no-repeat;
  animation: db2 1s infinite alternate;
}

@keyframes db2 {
  0%,25% {
    background-size: 8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
    background-position: 0 50%,0 calc(50% - 2px),0 calc(50% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
 }
 50% {
    background-size: 8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
    background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(50% - 2px),50% calc(50% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
 }
 75% {
    background-size: 8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px,8px 0,8px 4px,8px 4px;
    background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(50% - 2px),100% calc(50% + 2px);
 }
 95%,100% {
    background-size: 8px 100%,8px 4px, 8px 4px,8px 100%,8px 4px,8px 4px,8px 100%,8px 4px,8px 4px;
    background-position: 0 50%,0 calc(0% - 2px),0 calc(100% + 2px),50% 50%,50% calc(0% - 2px),50% calc(100% + 2px),100% 50%,100% calc(0% - 2px),100% calc(100% + 2px);
 }
`

const Loading = () => {
  return (
    <Container>
      <Loader/>
    </Container>
  );
};

export default Loading;
