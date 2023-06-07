import dacs from "../../images/dacs.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import saveAs from "file-saver";
import result from "../../images/dacs_result.jpg"


const Dachshund = () => {
  const handle = () => {
    if (navigator.share) {
        navigator.share({
            title: 'RESULT',
            files: [
              new File(['dacs_result.jpg'],'../../images/dacs_result.jpg',{ type: 'image/jpg'})
            ]
        });
    }else{
        alert("공유하기가 지원되지 않는 환경 입니다.")
    }
  }
  const onSave = () =>{
    saveAs(result,"dacs.png");
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingFinished(true);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout if the component unmounts
  }, []);
  const [loadingFinished, setLoadingFinished] = useState(false);
  if (!loadingFinished) {
    return <Loading />;
  }
  return (
    <Styled.Container>
      <Styled.Title>
        Tu eres <br /> Dachshund !
      </Styled.Title>
      <Styled.Image src={dacs} />
      <Styled.Description>
        <ul>
          <li>
          No me gusta pelear demasiado, pero si lo haces, no pierdo. así que ten cuidado.
          </li>
          <li>
          Enséñame muchas cosas!
          </li>
          <li>
          Es muy inconveniente para mí inventar una historia que solo yo no sé.
          </li>
        </ul>
      </Styled.Description>
      <button onClick={()=>handle()}>share share share</button>
      <button onClick={()=>onSave()}>on save</button>
      <button > Back to HOME </button>
    </Styled.Container>
  );
};

export default Dachshund;
