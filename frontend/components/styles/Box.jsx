import styled from 'styled-components'

const Box = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
`

export default Box
