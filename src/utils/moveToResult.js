export function moveToResult(score, navigate) {
    switch (score) {
      case 0:
      case 1:
      case 2:
        navigate("/welsh");
        break;
      case 3:
        navigate("/poodle");
        break;
      case 4:
        navigate("/maltese");
        break;
      case 5:
        navigate("/pomeranian");
        break;
      case 6:
        navigate("/bichon");
        break;
      case 7:
        navigate("/yorkie");
        break;
      case 8:
        navigate("/dacshund");
        break;
    }
  }