import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin: 0 8.75% 0 12.29%;
  padding-top: 55px;
`;

export const MainContainer = styled.div`
  flex-direction: column;
  margin-top: 70px;
  margin-bottom: 47px;
  gap: 47px;
`;

export const Section = styled.div`
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: ${({ theme }) => theme.navy};
  text-decoration: none;
  margin-bottom: 17px;

  :hover {
    text-decoration-line: underline;
  }
`;

export const PhotoTiles = styled.div`
  gap: 43px;
`;

export const StyledImg = styled.img`
  width: calc((100% - (43px * 2)) / 3);
  aspect-ratio: 1.61 / 1;
`;

export const SkeletonBox = styled.div`
  width: calc((100% - (43px * 2)) / 3);
  aspect-ratio: 1.61 / 1;
  display: block;
  line-height: 0;
`;
