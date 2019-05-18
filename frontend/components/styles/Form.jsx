import styled from 'styled-components'

const Form = styled.form`
  font-size: 1.5rem;
  line-height: 2;

  label {
    font-weight: 600;
    display: block;
    margin-bottom: 1rem;

    &:last-of-type {
      margin-bottom: 3rem;
    }
  }

  input,
  textarea,
  select {
    display: block;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background-color: ${({ theme }) => theme.colors.lightGray};
    border-radius: 0.4rem;
    border: solid 0.2rem transparent;
    font-size: 1.5rem;
    line-height: 1.75;

    &:focus {
      outline: 0;
      background-color: ${({ theme }) => theme.colors.white};
      border-color: ${({ theme }) => theme.colors.primary};
    }
  }

  fieldset {
    border: 0;
    padding: 0;
    &[disabled] {
      opacity: 0.5;
    }
  }
`

export default Form
