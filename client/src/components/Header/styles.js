import styled from "styled-components";
import colors from "../../styles/colors";

export const SHeader = styled.header`
  width: 100%;
  background: ${colors.BACKGROUND};
  margin-bottom: 60px;
  padding: 16px 0;
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav,.nav,.logo {
    display: flex;
    align-items: center;
  }
  .nav{
    margin-right: 100px;
  }
  & a, .logout span{
    color: ${colors.TITLE};
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.75px;
  }
  .navList{
    margin-right: 45px;
    span{
      margin-right: 10px;
    }
  }
  .navList:last-child{
    margin-right: 0;
  }
  .logo img{
    margin-right: 25px;
  }
  .logoTitle{
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.75px;
  }
`