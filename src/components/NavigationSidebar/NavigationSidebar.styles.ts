import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  background: ${({ theme }) => theme.navy};
  height: calc(100% - 74px);
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Links = styled.div`
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 85px;
  position: relative;
`;

export const LinkTile = styled.div`
  width: 81px;
  height: 70px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

export const OuterDiv = styled.div<{ isActive?: boolean }>`
  width: 100%;
  height: calc(100% - 1px);
  position: absolute;

  ${({ isActive }) =>
    isActive &&
    `
    width: calc(100% + 10px);
    height: calc(100% + 1px);
    padding-right: 10px;
    margin-left: 10px;
    padding-top: 1px;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
    box-shadow: 3px 5px 10px #3D4C6C;

    path {
      fill: #FFFFFF;
      stroke: #FFFFFF;
    }
  `};
`;

export const StyledLink = styled(Link)`
  width: 61px;
  height: 49px;
  margin: 10px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  :hover {
    path {
      fill: #ffffff;
      stroke: #ffffff;
    }
  }
`;
