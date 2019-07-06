import styled from 'styled-components';
import afterFiring from './images/afterFiring.jpg';
import table from './images/table.jpg';


export const HomeContainer = styled.div`
    text-align: center;
    background: linear-gradient(to top right, rgb(167, 173, 186, 0.6), rgb(167, 173, 186, 0.5)), url(${ afterFiring });
    /* background: linear-gradient(to top right, rgb(167, 173, 186, 0.6), rgb(167, 173, 186, 0.5)), url("https://previews.dropbox.com/p/thumb/AAfobnNba14u4vZPZJvmU6cV4tAsDC9QanafzHiDGsLG79Fgguv7eUjkaDvDCUUjIKwWLDXAiXvMaODny3_r29TRc5AjdYe9_uWpl_dfNxOIpw-PoM2_S_Zmi_g2eLin3GrbgBdDxNVclc1Qez2qH_TIrUgcvJIdRbgdr12dDrH5emXIjrhg42HlKmb9-HL-R2C2uzR4pJ5Dv32co40RU2h-EASbR7ES9NuBjzcbAYG2kU54D_sW3JU4ho_f-vOKL8AQgGAhTyrEXr9glIm34BJjIb2TQ1g3r8B_v_aQPe6Pic6I9ITL-tC8m449YfKi7_shfOLnji1yvPPw_AuoEfz8HNjcGBf8i7IUYhvj6IIgIAnXmpYPiVLYZUJdAKaKzgqSIiK21SmRQY699DaRj2aqsY2WgCXOQCP_3FOWKHyWIoBXW8BxAnY7iZWuwF1Ht0DmKLtnFT_XKTqxwvV8IwkwmPUnFXomgnIaeYfS_bgnplge6TDZK9wDiy5dBuzDD2H4bKSnnoatZKwumCinsze7IQREncYcmQuNK_DFh8dwersFzDpyLs9WbMlcQOA483l1v46o4uNHXeAhyawxNYmOf4F3j40itboj0-59EQo53A-yZomOGz-N-zYtGOziffaDjeuC_Otwqv9yMtURtzRk7qfiVVkfo1xHkmh27ckmqvVZBWYp0DmUIhj7j9OSAMBDmNkL2Av9eTL2i9v5-oee0Bu5SJ3o8bfc2DCWNrwb3HAwRAuFXwqKSH2HSe5VGMm289dAjHubmzZdRcwZzYNwJv_si-ueCeqFR2xec-_FWw/p?size=2048x1536&size_mode=3"); */
    position: fixed;
    background-size: contain;
    /* background-repeat: no-repeat; */
    /* margin: auto; */
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