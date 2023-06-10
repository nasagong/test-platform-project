import yorkie from "../../images/yorkie.png";
import * as Styled from "../../styles/Results.styled";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import { shareApi } from "../../utils/utilityFunctions";
import { useNavigate } from "react-router-dom";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import { useRef } from "react";

const Yorkie = () => {
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
          Tu eres <br /> Yorkshire Terrier !
        </Styled.Title>
        <Styled.Image src={yorkie} />
        <Styled.Description>
          <ul>
            <li>Soy muy directo. Espero que me entiendas!</li>
            <li>Es tan difícil y agobiante tratar conmigo emocionalmente.</li>
            <li>
              No me gusta la gente que miente, así que necesito que seas
              honestos conmigo.
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

export default Yorkie;
