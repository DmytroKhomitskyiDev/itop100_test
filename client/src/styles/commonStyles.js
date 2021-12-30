import styled from "styled-components";
import colors from "./colors";

export const SCard = styled.div`
  background: ${colors.WHITE};
  max-width: ${(props) => (props.userCard ? "396px" : "320px")};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: ${(props) => (props.userCard ? "30px": "35px")};
  padding-bottom: ${(props) => (props.userCard ? "30px": "0")};
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;

  .cardTop{
    text-align: center;
    width: 256px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-bottom: ${(props) => (props.userCard ? "0": "30px")};
  }
  .cardInfo,.cardTitle{
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
  }

`