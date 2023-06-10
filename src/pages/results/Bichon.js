import bichon from "../../images/bichon.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { shareApi } from "../../utils/utilityFunctions";
import { useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

const Bichon = () => {
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
    <Styled.Container>
      <Styled.Snapshot ref={domRef}>
        <Styled.Title>
          Tu eres <br /> Bichon !
        </Styled.Title>
        <Styled.Image src={bichon} />
        <Styled.Description>
          <ul>
            <li>
              Tengo una personalidad relajada y tranquila, así que aunque sea un
              poco lento, debes entender
            </li>
            <li>
              Me gusta relajarme en casa, por eso lo paso mal con demasiadas
              citas.
            </li>
            <li>
              Tengo un fuerte sentido de independencia, por lo que necesito
              respetar mi tiempo a solas.
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

export default Bichon;
