import poodle from "../../images/poodle.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { useNavigate } from "react-router-dom";
import { shareApi } from "../../utils/utilityFunctions";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

const Poodle = () => {
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
          {" "}
          Tu eres <br /> Poodle !{" "}
        </Styled.Title>
        <Styled.Image src={poodle} />
        <Styled.Description>
          <ul>
            <li>
              Soy muy relajada, y tomo suficiente tiempo antes de decidir.
            </li>
            <li>
              Para mí, necesitas empatizar emocionalmente en lugar de dar
              consejos.
            </li>
            <li>
              No me gusta que no lo hagamos como hemos planeado antes. El plan
              es importante!
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

export default Poodle;
