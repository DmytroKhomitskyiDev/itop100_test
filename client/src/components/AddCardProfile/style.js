import styled from "styled-components";
import Colors from "../../styles/colors";

export const SAddCard = styled.div `
  max-width: 320px;
  width: 100%;
  padding: 75px 0;
  border: 1px solid #D6D8E7;
  box-sizing: border-box;
  box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.04);
  border-radius: 16px;
  margin-bottom: 60px;
  background: rgba(255, 255, 255, 0.5);
  .add{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    margin-bottom: 30px;
  }
  span{
    font-size: 20px;
    line-height: 30px;
    color: ${Colors.ADD_PROFILE};
    letter-spacing: 0.75px;
  }
`