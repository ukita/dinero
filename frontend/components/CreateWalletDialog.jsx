import React, { useState } from "react";
import PropTypes from "prop-types";
import { CreditCard } from "react-feather";
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";
import Router from "next/router";

import Dialog from "@components/Dialog";
import Button from "@components/Button";
import { Fieldset, Label, Input, Textarea } from "@components/Form";
import { Flex, Box } from "@components/Layout";
import { Heading } from "@components/Typography";
import { WALLETS_QUERY, WalletsPage } from "@components/Wallets";
import { useInput } from "@lib/hooks";
import { getProp } from "@lib/utils";

export const CREATE_WALLET_MUTATION = gql`
  ${WalletsPage.fragments.partial}

  mutation CreateWalletMutation($name: String!, $description: String) {
    addWallet(name: $name, description: $description) {
      ...WalletsPagePartial
    }
  }
`;

function CreateWalletDialog({ isShown = false, onCloseFinished = () => {} }) {
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
          <Dialog isShown={isShown} onCloseFinished={onCloseFinished} p={2}>
            {({ close }) => (
              <Box>
                <Flex alignItems="center" mb={2}>
                  <Flex
                    size="50px"
                    alignItems="center"
                    justifyContent="center"
                    bg="primary.3"
                    css={{
                      borderRadius: "100%"
                    }}
                  >
                    <CreditCard width="32px" height="32px" />
                  </Flex>
                  <Heading ml={2} textAlign="center">
                    New wallet
                  </Heading>
                </Flex>
                <Box
                  as="form"
                  method="post"
                  onSubmit={async e => {
                    e.preventDefault();
                    const res = await createWallet();

                    resetForm();
                    close();

                    Router.push({
                      pathname: "/",
                      query: { walletId: getProp(res, "data.addWallet.id", "") }
                    });
                  }}
                >
                  <Fieldset px={4} disabled={loading}>
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

                    <Flex mt={3} justifyContent="flex-end">
                      <Button
                        type="button"
                        variant="tertiary"
                        mr={2}
                        onClick={close}
                      >
                        Cancel
                      </Button>
                      <Button type="submit">Add wallet</Button>
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
  onCloseFinished: PropTypes.func
};

export function useCreateWalletDialog(initialState = false) {
  const [isShown, setIsShown] = useState(initialState);

  const toggle = () => setIsShown(prev => !prev);
  const onCloseFinished = () => setIsShown(false);

  return [{ isShown, onCloseFinished }, toggle];
}

export default CreateWalletDialog;
