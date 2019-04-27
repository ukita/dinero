import styled from 'styled-components'

const StyledNav = styled.nav`
  display: flex;
  justify-self: end;
  font-size: 1.5rem;

  a,
  button {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.gray};
    margin: 0;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    font-size: 1em;
    line-height: 2;
    background: none;
    border: 0;
    border-bottom: 0.2rem solid transparent;
    cursor: pointer;
    font-weight: bolder;

    &:hover,
    &:focus {
      outline: none;
      color: ${({ theme }) => theme.colors.darkGray};
      background-color: ${({ theme }) => theme.colors.lightGray};
    }

    &.active {
      color: ${({ theme }) => theme.colors.darkerGray};
      border-bottom-color: ${({ theme }) => theme.colors.primary};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    justify-content: center;
  }
`

export default StyledNav
