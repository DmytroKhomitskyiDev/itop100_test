import styled from "styled-components";
import colors from "../../styles/colors";

export const SCard = styled.div`
  background: ${colors.WHITE};
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;
  .cardTop{
    text-align: center;

  }
  p{
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.75px;
    color: ${colors.BODY};
    margin-bottom: 15px;
  }
  p:last-child{
    margin-bottom: 0;
  }
  .cardTitle{
    font-weight: 500;
    margin-bottom: 20px;
    width: 256px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .cardTop{
    padding-bottom: 30px;
  }
  .cardBottom{
    border: 1px solid #D6D8E7;
    width: 100%;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }
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

