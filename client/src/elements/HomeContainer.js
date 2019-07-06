import styled from 'styled-components';
import afterFiring from './images/afterFiring.jpg';
import table from './images/table.jpg';


export const HomeContainer = styled.div`
    text-align: center;
    background: linear-gradient(to top right, rgb(167, 173, 186, 0.6), rgb(167, 173, 186, 0.5)), url(${ afterFiring });
    position: fixed;
    background-size: contain;
    padding:0;
    margin:0;

    top:0;
    left:0;

    width: 100%;
    height: 100%;
`;

export const MainContainer = styled(HomeContainer)`
    background: linear-gradient(rgb(167, 173, 186, 0.4), rgb(167, 173, 186, 0.3)), url(${ table });
    background-size: cover;
    margin: auto;
    background-repeat: no-repeat;

    overflow: scroll;
`;

export const AboutContainer = styled(HomeContainer)`
    background: linear-gradient(rgb(167, 173, 186, 0.55), rgb(167, 173, 186, 0.45)), url("https://previews.dropbox.com/p/thumb/AAexD5cWeYtKTBGkGxgWxI58bJMBfr-GkVm4aA9GxtoLohXOKnxMPdGuzqeaGkCw8VkxG2JWTHNhH2KXsVcE-yDMIblWrpIhj4w84fA2JOIvDMpZoDRzEVzFDC4UYZkMiihn4l0AsCG2PB3j_TZQ6ilyqKkL8fgnLDjL3x5VSbse76qfmEl9pA9H6m5Riwyn0T5vjHTsBkq6_5cj0FsODc2pdgXt0sXs08q_X18o8GrcM4ZLaDF6coYrI8YzS37siM7ZCms3mBIjhSAMSC2cu9e2U8wEVGms84owKviAXuFx4UZfgwy1XorL-wkyJPhz2HIfI6xmtvvi0UGvJgm_XhVd/p.jpeg?fv_content=true&size_mode=5");
    background-size: cover;
    text-align: left;
    margin: auto;
    background-repeat: no-repeat;
    color: white;
    overflow: scroll;
`;