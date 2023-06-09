import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  justify-content: space-between;
  align-items: center;
  height: 52px;
  background: ${({ theme }) => theme.white};
`;

export const IconDiv = styled.div`
  height: 52px;
  width: 52px;
  justify-content: center;
  align-items: center;

  path {
    stroke: ${({ theme }) => theme.teal};
  }
`;

export const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.navy};
  width: 16.17%;
  justify-content: center;

  span {
    font-weight: 400;
    margin-left: 4px;
  }
`;

export const TitleText = styled(Text)`
  flex-grow: 1;
  justify-content: flex-start;
  margin: 0;

  a {
    color: ${({ theme }) => theme.navy};
    text-decoration: none;
  }
`;

export const Price = styled(Text)`
  width: 12.5%;
  justify-content: flex-start;
`;

export const Button = styled.button`
  font-weight: 400;
  font-size: 16px;
  color: #5b5b5b;
  border: none;
  background: none;
  padding: 0 3%;
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  font-weight: 400;
  font-size: 16px;
  color: #5b5b5b;
  padding-left: 3%;
  text-decoration: none;
  line-height: 18px;
`;

export const FavButton = styled(IconDiv)<{ isFav: boolean }>`
  height: 32px;
  width: 32px;
  margin-right: 16px;
  cursor: pointer;
  border-radius: 50%;

  path {
    fill: ${(props) => (props.isFav ? props.theme.teal : props.theme.white)};
  }
`;
