import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";

const ErrorStyles = styled.div`
  color: ${({ theme }) => theme.colors.lighterRed};
  padding: 0.5rem 1rem;
  border: 1px solid ${({ theme }) => theme.colors.red};
  border-radius: 4px;
  margin: 1rem 0;

  strong {
    margin-right: 0.5rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    span {
      display: block;
    }
  }
`;

const hasNetworkError = ({ networkError } = {}) =>
  networkError && networkError.result && networkError.result.errors.length;

const removeErrorPrefix = str => str.replace("GraphQL error: ", "");

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;

  if (hasNetworkError(error)) {
    const { errors } = error.networkError.result;

    return errors.map((error, i) => (
      <ErrorStyles key={i}>
        <strong>Shoot!</strong>
        <span>{removeErrorPrefix(error.message)}</span>
      </ErrorStyles>
    ));
  }

  return (
    <ErrorStyles>
      <strong>Shoot!</strong>
      <span>{removeErrorPrefix(error.message)}</span>
    </ErrorStyles>
  );
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;
