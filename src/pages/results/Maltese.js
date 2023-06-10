import maltese from "../../images/maltese.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { shareApi } from "../../utils/utilityFunctions";
import { useRef } from "react";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const Maltese = () => {
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
          Tu eres <br /> Maltese !
        </Styled.Title>
        <Styled.Image src={maltese} />
        <Styled.Description>
          <ul>
            <li>
              Soy muy independiente, necesito que respetes mi tiempo a solas.
            </li>
            <li>
              Me gustan las conversaciones y discusiones sobre mis intereses,
              así que tienes que escucharme poner atención
            </li>
            <li>
              Por favor, no hagas comentarios ignorantes o groseras cuando
              hables conmigo.
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

export default Maltese;
