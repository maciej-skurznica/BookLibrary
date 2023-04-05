import styled from "styled-components";

export const Container = styled.div`
  gap: 3px;
`;

export const OuterDiv = styled.div<{ filled: boolean }>`
  path {
    stroke: #e08d3a;
  }

  ${(props) => props.filled && `path { fill: #e08d3a }`}
`;
