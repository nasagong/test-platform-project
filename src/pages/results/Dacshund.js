import dacs from "../../images/dacs.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import saveAs from "file-saver";
import result from "../../images/dacs_result.jpg";
import domtoimage from "dom-to-image";
import { useNavigate } from "react-router-dom";
import { shareApi } from "../../utils/utilityFunctions";
import { useRef } from "react";

const Dachshund = () => {
  const domRef = useRef();
  const navigate = useNavigate();
  const onDownload = () => {
    const dom = domRef.current;
    domtoimage.toBlob(dom).then((blob) => {
      const saveConfirm = window.confirm("download?");
      if (saveConfirm === true) {
        saveAs(blob, "result.png");
      }
    });
  };
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
    <Styled.Container className="resultPage">
      <Styled.Snapshot ref={domRef}>
        <Styled.Title>
          Tu eres <br /> Dachshund !
        </Styled.Title>
        <Styled.Image src={dacs} />
        <Styled.Description>
          <ul>
            <li>
              No me gusta pelear demasiado, pero si lo haces, no pierdo. así que
              ten cuidado.
            </li>
            <li>Enséñame muchas cosas!</li>
            <li>
              Es muy inconveniente para mí inventar una historia que solo yo no
              sé.
            </li>
          </ul>
        </Styled.Description>
      </Styled.Snapshot>
      <Styled.BtnContainer>
        <Styled.DownloadBtn onClick={onDownload}>
          Download result
        </Styled.DownloadBtn>
        <Styled.BackToHome onClick={() => navigate("/test")}>
          RETRY
        </Styled.BackToHome>
        <Styled.ShareBtn onClick={() => shareApi()}>Share</Styled.ShareBtn>
      </Styled.BtnContainer>
    </Styled.Container>
  );
};

export default Dachshund;
