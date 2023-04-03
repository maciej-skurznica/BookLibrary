import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  /* min-width: 1440px; */
  width: 1440px;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.lightNavy};
`;

export const Navbar = styled.div`
  flex-direction: column;
  width: 81px;
  height: 100%;
`;

export const User = styled.div`
  background: ${({ theme }) => theme.teal};
  height: 74px;
  width: 100%;
  justify-content: center;
  align-items: center;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 9px;
  }
`;

export const Navigation = styled.div`
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
    height: 100%;
    padding-right: 10px;
    margin-left: 10px;
    border-radius: 0 5px 5px 0;
    background: linear-gradient(180deg, #679CF6 0%, #4072EE 100%);
    box-shadow: 3px 5px 10px #3D4C6C;

    svg path {
      fill: #FFFFFF;
    }
  `};
`;

export const StyledLink = styled(Link)`
  width: 51px;
  height: 39px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const MainCompartment = styled.div`
  height: 100%;
  width: calc(100% - 81px);
  flex-direction: column;
`;

export const TopBanner = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.white};
  height: 74px;
  justify-content: flex-start;
  padding: 19px 0 0 43px;
  font-weight: 800;
  font-size: 23px;
  line-height: 150%;

  span {
    color: #8b201d;
  }
`;
