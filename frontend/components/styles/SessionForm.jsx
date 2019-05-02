import styled from 'styled-components'

const SessionForm = styled.section`
  display: grid;
  grid-template-columns: 0.75fr 1fr;
  max-width: 900px;
  width: 100%;
  min-height: 550px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  align-items: stretch;
  overflow: hidden;

  .img {
    position: relative;
    width: 100%;
    height: 100%;

    :after {
      content: '';
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

  .logo {
    font-size: 4rem;
    text-align: center;
    margin: 0;
  }

  .form {
    padding: 2rem 3rem;

    .title {
      text-align: center;
      h1 {
        font-size: 3.6rem;
        line-height: 1.25;
        margin-top: 0;
      }

      p {
        margin: 1em auto;
        line-height: 1.45;
      }
    }

    .links {
      margin-top: 1.5rem;
      a {
        font-size: 1.4rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    max-width: 500px;

    .img {
      display: none;
    }
  }
`

export default SessionForm
