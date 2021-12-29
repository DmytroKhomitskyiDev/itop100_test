import styled from "styled-components";
import colors from "./colors";

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
  .cardInfo{
    font-size: 24px;
    line-height: 36px;
    letter-spacing: 0.75px;
    color: ${colors.BODY};
    margin-bottom: 15px;
  }
  .cardInfo:last-child{
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
`