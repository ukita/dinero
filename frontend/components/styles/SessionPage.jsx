import styled from "styled-components";

import Container from "./Container";

const SessionPage = styled.div`
  width: 100%;
  height: 100vmin;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${Container} {
    width: auto;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    align-items: center;

    ${Container} {
      height: 100%;
    }
  }
`;

export default SessionPage;
