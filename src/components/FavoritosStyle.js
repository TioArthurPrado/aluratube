import styled from "styled-components";

export const FavoritosStyle = styled.div`
  padding: 0px 32px;

  div {
    display: flex;
    flex-direction: row;
    gap: 40px;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
  h2 {
    text-transform: uppercase;
    padding: 15px 10px;
    font-size: 20px;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
  span{
    font-weight: bold;
  }
`;
