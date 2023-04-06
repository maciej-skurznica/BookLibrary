import styled from "styled-components";

export const Container = styled.div`
  gap: 3px;
`;

export const OuterDiv = styled.button<{ filled: boolean }>`
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => !props.disabled && `cursor: pointer`};

  path {
    stroke: #e08d3a;
  }

  ${(props) => props.filled && `path { fill: #e08d3a }`}
`;
