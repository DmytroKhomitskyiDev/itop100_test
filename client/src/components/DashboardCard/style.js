import styled from "styled-components";
import {SCard} from "../../styles/commonStyles";
import colors from "../../styles/colors";

export const SDashboard = styled(SCard)`
  padding: 80px 75px;
  max-width: unset;
  width: auto;
  &:not(:last-child){
    margin-right: 80px;
  }
  .cardTop{
    width: unset;
    padding-bottom: 0;
  }
  .cardTitle{
    margin-bottom: 50px;
    font-size: 36px;
    color: ${colors.TITLE};
    letter-spacing: 1px;
    line-height: 34px;
  }
  .cardInfo{
    color: ${colors.TITLE};
    font-weight: 600;
    font-size: 48px;
    line-height: 34px;
  }
`
