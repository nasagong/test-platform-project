export function moveToResult(score, navigate) {
    switch (score) {
      case 0:
        navigate("/happy");
        break;
      case 1:
        navigate("/welsh");
        break;
      case 2:
        navigate("/poodle");
        break;
      case 3:
        navigate("/maltese");
        break;
      case 4:
        navigate("/pomeranian");
        break;
      case 5:
        navigate("/bichon");
        break;
      case 6:
        navigate("/yorkie");
        break;
      case 7:
        navigate("/dacshund");
        break;
      case 8:
        navigate("/dacshund");
        break;
      default:
        // navigate to err page
        navigate("/error");
        break;
    }
}

export function shareApi(){
  try{
    navigator.share({
      title: 'WebShare API Demo',
      url: 'https://developer.mozilla.org/ko/'
    }).then(() => {
      console.log('Thanks for sharing! - Developr :D');
    })
    .catch(console.error);
  }
  catch{
    alert('err');
  }
}