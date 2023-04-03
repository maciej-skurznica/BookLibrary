import styled from "styled-components";

const Div = styled.div<{
  direction?: string;
  justify?: string;
  align?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justify || "center"};
  align-items: ${(props) => props.align || "center"};
`;

export default Div;
