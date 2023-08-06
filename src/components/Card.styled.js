import styled from 'styled-components'

export const StyledCard = styled.div`

  display: flex;
  align-items: center;
  background-color: black;
  border-radius: 15px;
  color: white;
  font-size: 13px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.20);
  margin: 30px 0;
  padding: 65px;
  text-align: center;
  flex-direction: ${({ layout }) => layout || 'row'};
  img {
    width: 75%;

  }
  & > div {
    flex: 1;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }

  h3 {
      color: white;
      font-family:'Lora', serif; 
      font-size: 18px;
      text-align: center;
      padding: 10px;
      margin-top: -30px;
      text-shadow: 1px 3px #0D0D55
 }`