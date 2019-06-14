import styled from "styled-components";

const SessionForm = styled.section`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  max-width: 900px;
  width: 100%;
  min-height: 550px;
  align-items: stretch;
  overflow: hidden;

  .img {
    position: relative;
    width: 100%;
    height: 100%;

    :after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${({ theme }) => theme.colors.primary};
      mix-blend-mode: multiply;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 0;
      filter: contrast(0.3) brightness(1.4) saturate(0.5);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;

    .img {
      display: none;
    }
  }
`;

export default SessionForm;
