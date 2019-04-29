import styled from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.4rem;
  font-weight: 700;
  border: 0;
  border-radius: 4px;
  padding: 1.2rem 2.4rem;
  cursor: pointer;

  width: ${({ block }) => (block ? '100%' : 'auto')};

  &:hover,
  &:focus {
    outline: 0;
    background-color: ${({ theme }) => theme.colors.darkPrimary};
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.5);
  }
`

export default Button
