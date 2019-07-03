import React, { useState } from "react";
import PropTypes from "prop-types";
import { CreditCard } from "react-feather";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

import Dialog from "@components/Dialog";
import Button from "@components/Button";
import { Fieldset, Label, Input, Textarea } from "@components/Form";
import { Flex, Box } from "@components/Layout";
import { Heading } from "@components/Typography";
import { WALLETS_QUERY, WalletsPage } from "@components/Wallets";
import { useInput } from "@lib/hooks";

export const CREATE_WALLET_MUTATION = gql`
  ${WalletsPage.fragments.partial}

  mutation CreateWalletMutation($name: String!, $description: String) {
    addWallet(name: $name, description: $description) {
      ...WalletsPagePartial
    }
  }
`;

function CreateWalletDialog({ isShown = false, onRequestClose = () => {} }) {
  const [name, setName, resetName] = useInput("");
  const [description, setDescription, resetDescription] = useInput("");

  const resetForm = () => {
    resetName();
    resetDescription();
  };

  const updateCache = (proxy, { data: { addWallet } }) => {
    const data = proxy.readQuery({ query: WALLETS_QUERY });

    data.viewer.me.wallets = [...data.viewer.me.wallets, addWallet];

    proxy.writeQuery({
      query: WALLETS_QUERY,
      data
    });
  };

  return (
    <Mutation
      mutation={CREATE_WALLET_MUTATION}
      variables={{ name, description }}
      update={updateCache}
    >
      {(createWallet, { loading }) => {
        return (
          <Dialog
            isShown={isShown}
            onRequestClose={onRequestClose}
            p={2}
            width={{ _: 1, sm: 500 }}
          >
            {({ close }) => (
              <Box>
                <Flex alignItems="center" mb={2} flexDirection="column">
                  <Flex
                    size={60}
                    mt={"-5rem"}
                    alignItems="center"
                    justifyContent="center"
                    bg="primary.5"
                    color="primary.9"
                    css={{
                      borderRadius: "100%"
                    }}
                  >
                    <CreditCard width="50%" height="50%" />
                  </Flex>
                  <Heading fontSize={{ _: 5, sm: 6 }} textAlign="center">
                    New wallet
                  </Heading>
                </Flex>
                <Box
                  as="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    await createWallet();

                    resetForm();
                    close();
                  }}
                >
                  <Fieldset disabled={loading}>
                    <Label id="name" htmlFor="name" my={3}>
                      Wallet
                      <Input
                        mt={2}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={setName}
                        required
                      />
                    </Label>

                    <Label id="description" htmlFor="description" my={3}>
                      Description
                      <Textarea
                        mt={2}
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={description}
                        onChange={setDescription}
                      />
                    </Label>

                    <Flex mt={4} justifyContent="flex-end" flexWrap="wrap">
                      <Button
                        type="button"
                        variant="secondary"
                        mr={{ _: 0, sm: 2 }}
                        mb={{ _: 2, sm: 0 }}
                        width={{ _: 1, sm: "auto" }}
                        onClick={close}
                      >
                        Close
                      </Button>
                      <Button type="submit" width={{ _: 1, sm: "auto" }}>
                        Add wallet
                      </Button>
                    </Flex>
                  </Fieldset>
                </Box>
              </Box>
            )}
          </Dialog>
        );
      }}
    </Mutation>
  );
}
CreateWalletDialog.propTypes = {
  isShown: PropTypes.bool,
  onRequestClose: PropTypes.func
};

export function useCreateWalletDialog(initialState = false) {
  const [isShown, setIsShown] = useState(initialState);

  const toggle = () => setIsShown(prev => !prev);
  const onRequestClose = () => setIsShown(false);

  return [{ isShown, onRequestClose }, toggle];
}

export default CreateWalletDialog;
