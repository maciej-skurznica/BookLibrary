import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  height: 100%;
  display: flex;
  background-color: ${({ theme }) => theme.lightNavy};
`;

export const SidebarContainer = styled.div`
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
  padding: 19px 0 19px 43px;
`;

export const StyledLink = styled(Link)`
  font-weight: 800;
  font-size: 23px;
  line-height: 150%;
  text-decoration: none;
  color: ${({ theme }) => theme.navy};

  span {
    color: #8b201d;
  }
`;

export const Child = styled.div`
  max-width: calc(1440px - 81px);
  width: calc(100vw - 81px);
  height: calc(100% - 74px);
  padding-left: 12.29%;
  padding-top: 55px;
`;
