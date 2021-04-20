import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const StyledLink = styled.div`
  font-size: 2rem;
  color: ${({ active }) => (active ? "black" : "gray")};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "")};
`;
