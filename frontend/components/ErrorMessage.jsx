import React from "react";
import propTypes from "prop-types";

import { Text } from "@components/Typography";
import Card from "@components/Card";

const hasNetworkError = ({ networkError } = {}) =>
  networkError && networkError.result && networkError.result.errors.length;

const removeErrorPrefix = str => str.replace("GraphQL error: ", "");

const ErrorMessage = ({ error = "" }) => (
  <Card
    px={3}
    py={2}
    bg="red.0"
    borderWidth={1}
    borderColor="red.4"
    borderStyle="solid"
    role="alert"
  >
    <Text as="strong" color="red.7" display={{ _: "block", sm: "inline" }}>
      Shoot!{" "}
    </Text>
    <Text as="span" color="red.7">
      {error}
    </Text>
  </Card>
);
ErrorMessage.propTypes = {
  error: propTypes.string
};

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;

  if (hasNetworkError(error)) {
    const { errors } = error.networkError.result;

    return errors.map((error, i) => (
      <ErrorMessage key={i} error={removeErrorPrefix(error.message)} />
    ));
  }

  return <ErrorMessage error={removeErrorPrefix(error.message)} />;
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: propTypes.object
};

export default DisplayError;
