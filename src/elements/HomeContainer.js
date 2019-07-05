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