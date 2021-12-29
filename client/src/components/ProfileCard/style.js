import styled from "styled-components";
import colors from "../../styles/colors";

export const SCardBottom = styled.div`
    border: 1px solid #D6D8E7;
    width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  button{
    width: 50%;
    padding: 7px 0;
    cursor: pointer;
    border-bottom-right-radius: 14px;
    &:hover {
      background: ${colors.RED};
      color: ${colors.WHITE};
    }
  }
  button:first-child{
    border-right: 1px solid #D6D8E7;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 0;
    &:hover {
      background:${colors.PURPLE};
      color: ${colors.WHITE};
    }
  }
`