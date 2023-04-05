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
  margin: 0 5.57% 0 0;
  width: 10.6%;
  justify-content: flex-end;

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
