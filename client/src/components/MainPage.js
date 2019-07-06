import React from 'react';
import NavBar from './NavBar.js';
import Display from '../elements/images/displayWindow.jpg';
import { Link } from 'react-router-dom';
import { 
    MainContainer,
    AboutSquare,
    OverlayTitle,
    ASTwo,
    ASThree,
    Login,
    MainPageIMG,
    MainPageIMG2,
    ImgWrapper
} from '../elements/index.js';

const MainPage = () => {
    return (
        <MainContainer>
            <NavBar />
            <AboutSquare>
                <OverlayTitle>
                    Last Firing
                </OverlayTitle>
                {/* <ImgWrapper> */}
                    <MainPageIMG src="https://previews.dropbox.com/p/thumb/AAfJpTzUd0oWUbx0OEcYlrQHIzzIOyyAoyHqfV8Z-r94BtXo7Co_0z4YTxsVXRbWRPYn6DPNyXmipQ9qKdd4z355xF_zzMQHnXBoTejm44P-1W4sM54suCZrkCPspmuDYB7ZjbyDGaJ2hy2lEQMLlyiE9PvOMta2ugTOIUBtfQu0gsp0vpb68HB7FEG8-osd7iHJyuiFQRzNGclKrJBS83LcBkgXWdeN3K_k-kT34Bhy-jm4pM6-9FIXw3wEj83i1uID_IiXgRFd20bwLYZ1Y9PBTfGuY_0Tf9EYL_b4vB4lIS8hCAKQ_z__VQQNXQVzFm-BboX3TfslDzw8DRBaeIoI/p.jpeg?fv_content=true&size_mode=5" alt="opening the kiln" />
                {/* </ImgWrapper> */}
                {/* <ImgWrapper> */}
                    <MainPageIMG2 src="https://previews.dropbox.com/p/thumb/AAevTfNaRM6wOW65_0QnhrtKok8Hs0-UMZC9whsGyzWhborVM9ZWUc9Qdn8reRzqnNf4mxPVxe9K8yh8P9vTcJ97eBB3rjXkW-oFthibjEjsL_GtozYcyCyBcQeaGbu0lEAuHIptvrmqT45oECK1XhlAf7neZup896TXJ_5DPYiPc74y8NHQUR087lk4Mfj9uoLa8TBd4lK6QZxIVYU0QAwmVimGfhnD9KLJPP3iD2aIe65ael75ki4DfyvTjAN8wnuOO-u3QgGHkSPVc6Tl0uZMBBVkBtWcGSdUqbc8qP_LOdI_BvUYw0J_GZZDJdS1vhrmU7ljixEdUQfiaiazpb99/p.jpeg?fv_content=true&size_mode=5" alt="two mugs" />
                    <MainPageIMG src={Display} alt="NCAG display window" />
                {/* </ImgWrapper> */}
            </AboutSquare>
            {/* <ASTwo><OverlayTitle>North Coast Artists Gallery</OverlayTitle></ASTwo>
            <ASThree><OverlayTitle>More</OverlayTitle></ASThree> */}
            <Link className="linkedAuth" to="/auth"><Login>Sign In</Login></Link>
        </MainContainer>
    );
};

export default MainPage;