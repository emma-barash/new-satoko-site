import React from 'react';
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { GalleryTitle } from '../elements/index.js';
import './Slides.css';
 
const fadeImages = [
  'https://previews.dropbox.com/p/thumb/AAcdV552lKb-YIVr8tyYwXN8f6GODYFQDfasLiW0G6IYjKHMGChh51VZe90vBqsrGWSLToVHY9OKS3B28pkAA_KVZRSalPGBUCIPzUb8zmmJ18OyPwum85IiMuAXcnvgqnz17BpuokJnIrHvyJh8YbnTwz9d2pqOCz7nUmJGq0kOwuRujEGLZy8JfpyEEpmzttof35eJFER9D0Yx8rOWy4g01R0FARQkHhuzmJlllMykhw-c8jxBbXWb0dv8eC-L_7e3xHu27BOM8CsPEE94api7nR4C2w_kAq-ktL3Ek4Jfi2Y_T-ymaRpZrYmK2xp4EnTlO2_os52XyTiZzd2F0_H-08qsinjxZs72rvmrND7jrvtnC5fiq4e8uoFJyGdgeQj7yJDQKjbav6sE0qjDJYzjwMpVBlEE1OcoGTYvXErQ9fnV_2YxCMs_EYmlaTpJdsvTF0AUFpfNL9DJN1UIcZaOGXtaDce0qclIcD6EQbE7bhsTDbAT6QjpJYUl2tgnAyrD5qVGvczIsS9StOsiLFLmrp-AeM0Ds9gR2sdewbaaOSTwVxGKtGu3YSsBwOd5N6kmXAbz_CCweMce-GoWhVAjZr3owxojJW-pZgTBZG_hawhxORZfM1M4NsIktYQufLmeLz-6FAcvXuyzPVqlfkVTl6RSXsEghqSbuPTtocBHQpTakm2fpjgYemHzh9ICgU_qPYQwu_X4B2DQ2BdeNFNr6Tlx_BOR8uMvJEyQMYaN9l1rMHouHVsa84BdUVKLoLQG9frBL87PSs-f5HQBEOKLEkWPsQEqo8SUpNBY40GgSIx4t7aetMxNcXf4R73MVRQ1P4uLbeAEcCeAKWod2PhGwvl2_NxLNcYMwz7jTxe5O7xO4s-6lCbHWYKBW1Hg_Vpyqv_iagArHOlpEfedhM-2ePWgYXDyGP1yu9sWb7NwA_ck4SCLxCCtVAfAjyasCiM/p?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAexEm2X8ackhB39P5WdW6VPkuJWM_eryItmguoD90KmufHQl7s6rpBIu5_Y4yxmI53Zohbp6Jhf7xGCSkt1hAmGRe9y7xyUFkTJ7FtIq9Bq-_6x08xMdZZxeTx_xbVNT6uskaiUdTILklhbbAnItHzV-fmKGoiCVy0f4vtpqlmqFPOqdE0TNPUL9nQDyvCh3yzlXFp6EVGSecia2n7iVI4Adn-Zn0CsWvuTIjrXt0Xbbsk34BEJCFeyQGpvz45zyYbiqDI2e6ySu3lcU9ZasuTgVHo4oyd-OwkmU8Xga0Yywnq0S6NEVUsx7amtXgryqWPCdua9sk1KE2EMrp1xDw2IiAK2H2CrihLSAwaPAddnMGeivYkWQNYkq_bY3U45s2-jfNZ51DBWUa-JPBMLSHNt_rGw5XjSy2FGbCOr6DnBNp86zZXM8n2T7xc4btVYCOkTMv4IDx2doSD5McoowNaGThQX4pWM_FXd09yj9-yBG0guPXAlL7OrxOC2boL3uG6n2LYUqTMdFlPAivPxeuhNaxW_0Zgk9OS_Qh2oQAp8irIuhCOHmp3PrFRSjVnSGyGGHKC2ll07w-Y21pHkSvGUirqhlAHmLB2tytwnktWRnIrzuBFczsYlbBXzcB3FMK8bA5tdvq46zPTzPKyKbVUOusvf3_rgJDpaazILMvUs46UvEnluPeO5GnAvQrA2Z7gZSQc1EgkvrywGa_f3ZxInFHQR-DKTPydLHnqRHytrI054qp6Og3D5hSsAfQ0Rh5-TbqBsgspHxCbwvLMhzG62-VKyxZVqSLek3lpLkI7Ebg/p?fv_content=true&size_mode=5',
  'https://previews.dropbox.com/p/thumb/AAdZfyod7tGvp2sQolco9mAl6qHtmxKWCARM0s9v2rY1wgzi55T65bkU9sCKZ6kiGpbwQzGunoWo3RHbVtKKmQko99xtQG-zjNCQ06cywUOy3uJPEIDEa-j_wpNSVvHQlYJmjzNJnZbJDL4fVDGMdwshxUpUh74QtrU3xZOgc3yUaQP3NUELQyW9oSUTGxYMaXmqrfZkbAeMSIn4svvFG-WiFMixMgOB21DXTcaBXy2xAdtvUrCtLAeAqrlzy-fzVmvBMz0e6LV2E76aVcnyAn6VzTuaRmbDIScAi8LNDlum14Uj3EhDM3msvb1bcg9lcixFNmt-1FdF7Lc7auyA5BmkX_DnzydLnEYgMKIqmlTJJ8ue8D8qWaqva50vBCQRLsn0gHv_CvzIvJxPKyxW7xd53RmgUwriaewlCKel5h0cSPvEeyhg3_KXslsohigB3KeqZR895zWkIZF2cqg6DKCkrTMnPWwT-vRUOIXApneIOnRO8u-rFkgAMYlxOBM5pdcKmMYpWnG0ycfV2-4RxpQICbfNfVpkXEwTsqGpoq5bcCR8AHIzU3oH9eOVBfOg-DHwUZV62RlwiIuRu99fOUY4SnYl8UqaFZlCq47F1DkkyBmO-DrbngRZW0NqUzQZ7tq4eXFjNmoFufU_3uX-2yQU3vM8gBzC3-Kf6bnoa_vKs-s2VMGdmvdO1zleOkQcW0-g9gme1tlJXTKF_o98ngABrpQ0EeM8pQFI-YtsXdNvQlI5lnRXOoWArSh-ryPuc8aX3yUVXwkt8DD1024V1PdSOezcuAani0Kga_0UN1sFYQ/p?size=2048x1536&size_mode=3'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`fade transition from ${oldIndex} to ${newIndex}`);
  }
}
 
const Slideshow = () => {
  return (
    <div>
    <Link className="linkedPage linkedS" to="/main">Main</Link>
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} className="sImage"/>
        </div>
        <GalleryTitle>Gallery</GalleryTitle>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} className="sImage"/>
        </div>
        <GalleryTitle>Gallery</GalleryTitle>
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} className="sImage"/>
        </div>
        <GalleryTitle>Gallery</GalleryTitle>
      </div>
    </Fade>
    </div>
  )
}
export default Slideshow;