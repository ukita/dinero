import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    wallets: <T = Wallet[]>(args: { where?: WalletWhereInput, orderBy?: WalletOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    transactions: <T = Transaction[]>(args: { where?: TransactionWhereInput, orderBy?: TransactionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    wallet: <T = Wallet>(args: { where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    transaction: <T = Transaction>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    walletsConnection: <T = WalletConnection>(args: { where?: WalletWhereInput, orderBy?: WalletOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    transactionsConnection: <T = TransactionConnection>(args: { where?: TransactionWhereInput, orderBy?: TransactionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createWallet: <T = Wallet>(args: { data: WalletCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createTransaction: <T = Transaction>(args: { data: TransactionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateWallet: <T = Wallet>(args: { data: WalletUpdateInput, where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateTransaction: <T = Transaction>(args: { data: TransactionUpdateInput, where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteWallet: <T = Wallet>(args: { where: WalletWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteTransaction: <T = Transaction>(args: { where: TransactionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertWallet: <T = Wallet>(args: { where: WalletWhereUniqueInput, create: WalletCreateInput, update: WalletUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertTransaction: <T = Transaction>(args: { where: TransactionWhereUniqueInput, create: TransactionCreateInput, update: TransactionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyWallets: <T = BatchPayload>(args: { data: WalletUpdateManyMutationInput, where?: WalletWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyTransactions: <T = BatchPayload>(args: { data: TransactionUpdateManyMutationInput, where?: TransactionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyWallets: <T = BatchPayload>(args: { where?: WalletWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyTransactions: <T = BatchPayload>(args: { where?: TransactionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    wallet: <T = WalletSubscriptionPayload>(args: { where?: WalletSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    transaction: <T = TransactionSubscriptionPayload>(args: { where?: TransactionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Wallet: (where?: WalletWhereInput) => Promise<boolean>
  Transaction: (where?: TransactionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateTransaction {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateWallet {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createWallet(data: WalletCreateInput!): Wallet!
  createTransaction(data: TransactionCreateInput!): Transaction!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateWallet(data: WalletUpdateInput!, where: WalletWhereUniqueInput!): Wallet
  updateTransaction(data: TransactionUpdateInput!, where: TransactionWhereUniqueInput!): Transaction
  deleteUser(where: UserWhereUniqueInput!): User
  deleteWallet(where: WalletWhereUniqueInput!): Wallet
  deleteTransaction(where: TransactionWhereUniqueInput!): Transaction
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertWallet(where: WalletWhereUniqueInput!, create: WalletCreateInput!, update: WalletUpdateInput!): Wallet!
  upsertTransaction(where: TransactionWhereUniqueInput!, create: TransactionCreateInput!, update: TransactionUpdateInput!): Transaction!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyWallets(data: WalletUpdateManyMutationInput!, where: WalletWhereInput): BatchPayload!
  updateManyTransactions(data: TransactionUpdateManyMutationInput!, where: TransactionWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyWallets(where: WalletWhereInput): BatchPayload!
  deleteManyTransactions(where: TransactionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  wallets(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallet]!
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction]!
  user(where: UserWhereUniqueInput!): User
  wallet(where: WalletWhereUniqueInput!): Wallet
  transaction(where: TransactionWhereUniqueInput!): Transaction
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  walletsConnection(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): WalletConnection!
  transactionsConnection(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TransactionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  wallet(where: WalletSubscriptionWhereInput): WalletSubscriptionPayload
  transaction(where: TransactionSubscriptionWhereInput): TransactionSubscriptionPayload
}

type Transaction implements Node {
  id: ID!
  wallet: Wallet!
  value: Int!
  type: TRANSACTION_TYPE!
  performedAt: DateTime!
  description: String
  tags: [String!]!
}

enum TRANSACTION_TYPE {
  EXPENSE
  INCOME
}

"""A connection to a list of items."""
type TransactionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [TransactionEdge]!
  aggregate: AggregateTransaction!
}

input TransactionCreateInput {
  value: Int!
  type: TRANSACTION_TYPE!
  performedAt: DateTime!
  description: String
  tags: TransactionCreatetagsInput
  wallet: WalletCreateOneWithoutTransactionsInput!
}

input TransactionCreateManyWithoutWalletInput {
  create: [TransactionCreateWithoutWalletInput!]
  connect: [TransactionWhereUniqueInput!]
}

input TransactionCreatetagsInput {
  set: [String!]
}

input TransactionCreateWithoutWalletInput {
  value: Int!
  type: TRANSACTION_TYPE!
  performedAt: DateTime!
  description: String
  tags: TransactionCreatetagsInput
}

"""An edge in a connection."""
type TransactionEdge {
  """The item at the end of the edge."""
  node: Transaction!

  """A cursor for use in pagination."""
  cursor: String!
}

enum TransactionOrderByInput {
  id_ASC
  id_DESC
  value_ASC
  value_DESC
  type_ASC
  type_DESC
  performedAt_ASC
  performedAt_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type TransactionPreviousValues {
  id: ID!
  value: Int!
  type: TRANSACTION_TYPE!
  performedAt: DateTime!
  description: String
  tags: [String!]!
}

input TransactionScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  type: TRANSACTION_TYPE

  """All values that are not equal to given value."""
  type_not: TRANSACTION_TYPE

  """All values that are contained in given list."""
  type_in: [TRANSACTION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [TRANSACTION_TYPE!]
  performedAt: DateTime

  """All values that are not equal to given value."""
  performedAt_not: DateTime

  """All values that are contained in given list."""
  performedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  performedAt_not_in: [DateTime!]

  """All values less than the given value."""
  performedAt_lt: DateTime

  """All values less than or equal the given value."""
  performedAt_lte: DateTime

  """All values greater than the given value."""
  performedAt_gt: DateTime

  """All values greater than or equal the given value."""
  performedAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type TransactionSubscriptionPayload {
  mutation: MutationType!
  node: Transaction
  updatedFields: [String!]
  previousValues: TransactionPreviousValues
}

input TransactionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: TransactionWhereInput
}

input TransactionUpdateInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description: String
  tags: TransactionUpdatetagsInput
  wallet: WalletUpdateOneRequiredWithoutTransactionsInput
}

input TransactionUpdateManyDataInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description: String
  tags: TransactionUpdatetagsInput
}

input TransactionUpdateManyMutationInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description: String
  tags: TransactionUpdatetagsInput
}

input TransactionUpdateManyWithoutWalletInput {
  create: [TransactionCreateWithoutWalletInput!]
  connect: [TransactionWhereUniqueInput!]
  disconnect: [TransactionWhereUniqueInput!]
  delete: [TransactionWhereUniqueInput!]
  update: [TransactionUpdateWithWhereUniqueWithoutWalletInput!]
  updateMany: [TransactionUpdateManyWithWhereNestedInput!]
  deleteMany: [TransactionScalarWhereInput!]
  upsert: [TransactionUpsertWithWhereUniqueWithoutWalletInput!]
}

input TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput!
  data: TransactionUpdateManyDataInput!
}

input TransactionUpdatetagsInput {
  set: [String!]
}

input TransactionUpdateWithoutWalletDataInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description: String
  tags: TransactionUpdatetagsInput
}

input TransactionUpdateWithWhereUniqueWithoutWalletInput {
  where: TransactionWhereUniqueInput!
  data: TransactionUpdateWithoutWalletDataInput!
}

input TransactionUpsertWithWhereUniqueWithoutWalletInput {
  where: TransactionWhereUniqueInput!
  update: TransactionUpdateWithoutWalletDataInput!
  create: TransactionCreateWithoutWalletInput!
}

input TransactionWhereInput {
  """Logical AND on all given filters."""
  AND: [TransactionWhereInput!]

  """Logical OR on all given filters."""
  OR: [TransactionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [TransactionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  value: Int

  """All values that are not equal to given value."""
  value_not: Int

  """All values that are contained in given list."""
  value_in: [Int!]

  """All values that are not contained in given list."""
  value_not_in: [Int!]

  """All values less than the given value."""
  value_lt: Int

  """All values less than or equal the given value."""
  value_lte: Int

  """All values greater than the given value."""
  value_gt: Int

  """All values greater than or equal the given value."""
  value_gte: Int
  type: TRANSACTION_TYPE

  """All values that are not equal to given value."""
  type_not: TRANSACTION_TYPE

  """All values that are contained in given list."""
  type_in: [TRANSACTION_TYPE!]

  """All values that are not contained in given list."""
  type_not_in: [TRANSACTION_TYPE!]
  performedAt: DateTime

  """All values that are not equal to given value."""
  performedAt_not: DateTime

  """All values that are contained in given list."""
  performedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  performedAt_not_in: [DateTime!]

  """All values less than the given value."""
  performedAt_lt: DateTime

  """All values less than or equal the given value."""
  performedAt_lte: DateTime

  """All values greater than the given value."""
  performedAt_gt: DateTime

  """All values greater than or equal the given value."""
  performedAt_gte: DateTime
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  wallet: WalletWhereInput
}

input TransactionWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  wallets(where: WalletWhereInput, orderBy: WalletOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Wallet!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  password: String!
  wallets: WalletCreateManyWithoutUserInput
}

input UserCreateOneWithoutWalletsInput {
  create: UserCreateWithoutWalletsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutWalletsInput {
  name: String!
  email: String!
  password: String!
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  wallets: WalletUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutWalletsInput {
  create: UserCreateWithoutWalletsInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutWalletsDataInput
  upsert: UserUpsertWithoutWalletsInput
}

input UserUpdateWithoutWalletsDataInput {
  name: String
  email: String
  password: String
}

input UserUpsertWithoutWalletsInput {
  update: UserUpdateWithoutWalletsDataInput!
  create: UserCreateWithoutWalletsInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  wallets_every: WalletWhereInput
  wallets_some: WalletWhereInput
  wallets_none: WalletWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Wallet implements Node {
  id: ID!
  user: User!
  name: String!
  description: String
  transactions(where: TransactionWhereInput, orderBy: TransactionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Transaction!]
}

"""A connection to a list of items."""
type WalletConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [WalletEdge]!
  aggregate: AggregateWallet!
}

input WalletCreateInput {
  name: String!
  description: String
  user: UserCreateOneWithoutWalletsInput!
  transactions: TransactionCreateManyWithoutWalletInput
}

input WalletCreateManyWithoutUserInput {
  create: [WalletCreateWithoutUserInput!]
  connect: [WalletWhereUniqueInput!]
}

input WalletCreateOneWithoutTransactionsInput {
  create: WalletCreateWithoutTransactionsInput
  connect: WalletWhereUniqueInput
}

input WalletCreateWithoutTransactionsInput {
  name: String!
  description: String
  user: UserCreateOneWithoutWalletsInput!
}

input WalletCreateWithoutUserInput {
  name: String!
  description: String
  transactions: TransactionCreateManyWithoutWalletInput
}

"""An edge in a connection."""
type WalletEdge {
  """The item at the end of the edge."""
  node: Wallet!

  """A cursor for use in pagination."""
  cursor: String!
}

enum WalletOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type WalletPreviousValues {
  id: ID!
  name: String!
  description: String
}

input WalletScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [WalletScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [WalletScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WalletScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type WalletSubscriptionPayload {
  mutation: MutationType!
  node: Wallet
  updatedFields: [String!]
  previousValues: WalletPreviousValues
}

input WalletSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [WalletSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [WalletSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WalletSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: WalletWhereInput
}

input WalletUpdateInput {
  name: String
  description: String
  user: UserUpdateOneRequiredWithoutWalletsInput
  transactions: TransactionUpdateManyWithoutWalletInput
}

input WalletUpdateManyDataInput {
  name: String
  description: String
}

input WalletUpdateManyMutationInput {
  name: String
  description: String
}

input WalletUpdateManyWithoutUserInput {
  create: [WalletCreateWithoutUserInput!]
  connect: [WalletWhereUniqueInput!]
  disconnect: [WalletWhereUniqueInput!]
  delete: [WalletWhereUniqueInput!]
  update: [WalletUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [WalletUpdateManyWithWhereNestedInput!]
  deleteMany: [WalletScalarWhereInput!]
  upsert: [WalletUpsertWithWhereUniqueWithoutUserInput!]
}

input WalletUpdateManyWithWhereNestedInput {
  where: WalletScalarWhereInput!
  data: WalletUpdateManyDataInput!
}

input WalletUpdateOneRequiredWithoutTransactionsInput {
  create: WalletCreateWithoutTransactionsInput
  connect: WalletWhereUniqueInput
  update: WalletUpdateWithoutTransactionsDataInput
  upsert: WalletUpsertWithoutTransactionsInput
}

input WalletUpdateWithoutTransactionsDataInput {
  name: String
  description: String
  user: UserUpdateOneRequiredWithoutWalletsInput
}

input WalletUpdateWithoutUserDataInput {
  name: String
  description: String
  transactions: TransactionUpdateManyWithoutWalletInput
}

input WalletUpdateWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput!
  data: WalletUpdateWithoutUserDataInput!
}

input WalletUpsertWithoutTransactionsInput {
  update: WalletUpdateWithoutTransactionsDataInput!
  create: WalletCreateWithoutTransactionsInput!
}

input WalletUpsertWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput!
  update: WalletUpdateWithoutUserDataInput!
  create: WalletCreateWithoutUserInput!
}

input WalletWhereInput {
  """Logical AND on all given filters."""
  AND: [WalletWhereInput!]

  """Logical OR on all given filters."""
  OR: [WalletWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [WalletWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  user: UserWhereInput
  transactions_every: TransactionWhereInput
  transactions_some: TransactionWhereInput
  transactions_none: TransactionWhereInput
}

input WalletWhereUniqueInput {
  id: ID
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type TRANSACTION_TYPE =   'EXPENSE' |
  'INCOME'

export type TransactionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'value_ASC' |
  'value_DESC' |
  'type_ASC' |
  'type_DESC' |
  'performedAt_ASC' |
  'performedAt_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type WalletOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC' |
  'description_ASC' |
  'description_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export interface TransactionCreateInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description?: String
  tags?: TransactionCreatetagsInput
  wallet: WalletCreateOneWithoutTransactionsInput
}

export interface TransactionCreateManyWithoutWalletInput {
  create?: TransactionCreateWithoutWalletInput[] | TransactionCreateWithoutWalletInput
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput
}

export interface TransactionCreatetagsInput {
  set?: String[] | String
}

export interface TransactionCreateWithoutWalletInput {
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description?: String
  tags?: TransactionCreatetagsInput
}

export interface TransactionScalarWhereInput {
  AND?: TransactionScalarWhereInput[] | TransactionScalarWhereInput
  OR?: TransactionScalarWhereInput[] | TransactionScalarWhereInput
  NOT?: TransactionScalarWhereInput[] | TransactionScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  value?: Int
  value_not?: Int
  value_in?: Int[] | Int
  value_not_in?: Int[] | Int
  value_lt?: Int
  value_lte?: Int
  value_gt?: Int
  value_gte?: Int
  type?: TRANSACTION_TYPE
  type_not?: TRANSACTION_TYPE
  type_in?: TRANSACTION_TYPE[] | TRANSACTION_TYPE
  type_not_in?: TRANSACTION_TYPE[] | TRANSACTION_TYPE
  performedAt?: DateTime
  performedAt_not?: DateTime
  performedAt_in?: DateTime[] | DateTime
  performedAt_not_in?: DateTime[] | DateTime
  performedAt_lt?: DateTime
  performedAt_lte?: DateTime
  performedAt_gt?: DateTime
  performedAt_gte?: DateTime
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface TransactionSubscriptionWhereInput {
  AND?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  OR?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  NOT?: TransactionSubscriptionWhereInput[] | TransactionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: TransactionWhereInput
}

export interface TransactionUpdateInput {
  value?: Int
  type?: TRANSACTION_TYPE
  performedAt?: DateTime
  description?: String
  tags?: TransactionUpdatetagsInput
  wallet?: WalletUpdateOneRequiredWithoutTransactionsInput
}

export interface TransactionUpdateManyDataInput {
  value?: Int
  type?: TRANSACTION_TYPE
  performedAt?: DateTime
  description?: String
  tags?: TransactionUpdatetagsInput
}

export interface TransactionUpdateManyMutationInput {
  value?: Int
  type?: TRANSACTION_TYPE
  performedAt?: DateTime
  description?: String
  tags?: TransactionUpdatetagsInput
}

export interface TransactionUpdateManyWithoutWalletInput {
  create?: TransactionCreateWithoutWalletInput[] | TransactionCreateWithoutWalletInput
  connect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput
  disconnect?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput
  delete?: TransactionWhereUniqueInput[] | TransactionWhereUniqueInput
  update?: TransactionUpdateWithWhereUniqueWithoutWalletInput[] | TransactionUpdateWithWhereUniqueWithoutWalletInput
  updateMany?: TransactionUpdateManyWithWhereNestedInput[] | TransactionUpdateManyWithWhereNestedInput
  deleteMany?: TransactionScalarWhereInput[] | TransactionScalarWhereInput
  upsert?: TransactionUpsertWithWhereUniqueWithoutWalletInput[] | TransactionUpsertWithWhereUniqueWithoutWalletInput
}

export interface TransactionUpdateManyWithWhereNestedInput {
  where: TransactionScalarWhereInput
  data: TransactionUpdateManyDataInput
}

export interface TransactionUpdatetagsInput {
  set?: String[] | String
}

export interface TransactionUpdateWithoutWalletDataInput {
  value?: Int
  type?: TRANSACTION_TYPE
  performedAt?: DateTime
  description?: String
  tags?: TransactionUpdatetagsInput
}

export interface TransactionUpdateWithWhereUniqueWithoutWalletInput {
  where: TransactionWhereUniqueInput
  data: TransactionUpdateWithoutWalletDataInput
}

export interface TransactionUpsertWithWhereUniqueWithoutWalletInput {
  where: TransactionWhereUniqueInput
  update: TransactionUpdateWithoutWalletDataInput
  create: TransactionCreateWithoutWalletInput
}

export interface TransactionWhereInput {
  AND?: TransactionWhereInput[] | TransactionWhereInput
  OR?: TransactionWhereInput[] | TransactionWhereInput
  NOT?: TransactionWhereInput[] | TransactionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  value?: Int
  value_not?: Int
  value_in?: Int[] | Int
  value_not_in?: Int[] | Int
  value_lt?: Int
  value_lte?: Int
  value_gt?: Int
  value_gte?: Int
  type?: TRANSACTION_TYPE
  type_not?: TRANSACTION_TYPE
  type_in?: TRANSACTION_TYPE[] | TRANSACTION_TYPE
  type_not_in?: TRANSACTION_TYPE[] | TRANSACTION_TYPE
  performedAt?: DateTime
  performedAt_not?: DateTime
  performedAt_in?: DateTime[] | DateTime
  performedAt_not_in?: DateTime[] | DateTime
  performedAt_lt?: DateTime
  performedAt_lte?: DateTime
  performedAt_gt?: DateTime
  performedAt_gte?: DateTime
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  wallet?: WalletWhereInput
}

export interface TransactionWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  name: String
  email: String
  password: String
  wallets?: WalletCreateManyWithoutUserInput
}

export interface UserCreateOneWithoutWalletsInput {
  create?: UserCreateWithoutWalletsInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutWalletsInput {
  name: String
  email: String
  password: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserUpdateInput {
  name?: String
  email?: String
  password?: String
  wallets?: WalletUpdateManyWithoutUserInput
}

export interface UserUpdateManyMutationInput {
  name?: String
  email?: String
  password?: String
}

export interface UserUpdateOneRequiredWithoutWalletsInput {
  create?: UserCreateWithoutWalletsInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutWalletsDataInput
  upsert?: UserUpsertWithoutWalletsInput
}

export interface UserUpdateWithoutWalletsDataInput {
  name?: String
  email?: String
  password?: String
}

export interface UserUpsertWithoutWalletsInput {
  update: UserUpdateWithoutWalletsDataInput
  create: UserCreateWithoutWalletsInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  wallets_every?: WalletWhereInput
  wallets_some?: WalletWhereInput
  wallets_none?: WalletWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface WalletCreateInput {
  name: String
  description?: String
  user: UserCreateOneWithoutWalletsInput
  transactions?: TransactionCreateManyWithoutWalletInput
}

export interface WalletCreateManyWithoutUserInput {
  create?: WalletCreateWithoutUserInput[] | WalletCreateWithoutUserInput
  connect?: WalletWhereUniqueInput[] | WalletWhereUniqueInput
}

export interface WalletCreateOneWithoutTransactionsInput {
  create?: WalletCreateWithoutTransactionsInput
  connect?: WalletWhereUniqueInput
}

export interface WalletCreateWithoutTransactionsInput {
  name: String
  description?: String
  user: UserCreateOneWithoutWalletsInput
}

export interface WalletCreateWithoutUserInput {
  name: String
  description?: String
  transactions?: TransactionCreateManyWithoutWalletInput
}

export interface WalletScalarWhereInput {
  AND?: WalletScalarWhereInput[] | WalletScalarWhereInput
  OR?: WalletScalarWhereInput[] | WalletScalarWhereInput
  NOT?: WalletScalarWhereInput[] | WalletScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
}

export interface WalletSubscriptionWhereInput {
  AND?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput
  OR?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput
  NOT?: WalletSubscriptionWhereInput[] | WalletSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: WalletWhereInput
}

export interface WalletUpdateInput {
  name?: String
  description?: String
  user?: UserUpdateOneRequiredWithoutWalletsInput
  transactions?: TransactionUpdateManyWithoutWalletInput
}

export interface WalletUpdateManyDataInput {
  name?: String
  description?: String
}

export interface WalletUpdateManyMutationInput {
  name?: String
  description?: String
}

export interface WalletUpdateManyWithoutUserInput {
  create?: WalletCreateWithoutUserInput[] | WalletCreateWithoutUserInput
  connect?: WalletWhereUniqueInput[] | WalletWhereUniqueInput
  disconnect?: WalletWhereUniqueInput[] | WalletWhereUniqueInput
  delete?: WalletWhereUniqueInput[] | WalletWhereUniqueInput
  update?: WalletUpdateWithWhereUniqueWithoutUserInput[] | WalletUpdateWithWhereUniqueWithoutUserInput
  updateMany?: WalletUpdateManyWithWhereNestedInput[] | WalletUpdateManyWithWhereNestedInput
  deleteMany?: WalletScalarWhereInput[] | WalletScalarWhereInput
  upsert?: WalletUpsertWithWhereUniqueWithoutUserInput[] | WalletUpsertWithWhereUniqueWithoutUserInput
}

export interface WalletUpdateManyWithWhereNestedInput {
  where: WalletScalarWhereInput
  data: WalletUpdateManyDataInput
}

export interface WalletUpdateOneRequiredWithoutTransactionsInput {
  create?: WalletCreateWithoutTransactionsInput
  connect?: WalletWhereUniqueInput
  update?: WalletUpdateWithoutTransactionsDataInput
  upsert?: WalletUpsertWithoutTransactionsInput
}

export interface WalletUpdateWithoutTransactionsDataInput {
  name?: String
  description?: String
  user?: UserUpdateOneRequiredWithoutWalletsInput
}

export interface WalletUpdateWithoutUserDataInput {
  name?: String
  description?: String
  transactions?: TransactionUpdateManyWithoutWalletInput
}

export interface WalletUpdateWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput
  data: WalletUpdateWithoutUserDataInput
}

export interface WalletUpsertWithoutTransactionsInput {
  update: WalletUpdateWithoutTransactionsDataInput
  create: WalletCreateWithoutTransactionsInput
}

export interface WalletUpsertWithWhereUniqueWithoutUserInput {
  where: WalletWhereUniqueInput
  update: WalletUpdateWithoutUserDataInput
  create: WalletCreateWithoutUserInput
}

export interface WalletWhereInput {
  AND?: WalletWhereInput[] | WalletWhereInput
  OR?: WalletWhereInput[] | WalletWhereInput
  NOT?: WalletWhereInput[] | WalletWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  description?: String
  description_not?: String
  description_in?: String[] | String
  description_not_in?: String[] | String
  description_lt?: String
  description_lte?: String
  description_gt?: String
  description_gte?: String
  description_contains?: String
  description_not_contains?: String
  description_starts_with?: String
  description_not_starts_with?: String
  description_ends_with?: String
  description_not_ends_with?: String
  user?: UserWhereInput
  transactions_every?: TransactionWhereInput
  transactions_some?: TransactionWhereInput
  transactions_none?: TransactionWhereInput
}

export interface WalletWhereUniqueInput {
  id?: ID_Input
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateTransaction {
  count: Int
}

export interface AggregateUser {
  count: Int
}

export interface AggregateWallet {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface Transaction extends Node {
  id: ID_Output
  wallet: Wallet
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description?: String
  tags: String[]
}

/*
 * A connection to a list of items.

 */
export interface TransactionConnection {
  pageInfo: PageInfo
  edges: TransactionEdge[]
  aggregate: AggregateTransaction
}

/*
 * An edge in a connection.

 */
export interface TransactionEdge {
  node: Transaction
  cursor: String
}

export interface TransactionPreviousValues {
  id: ID_Output
  value: Int
  type: TRANSACTION_TYPE
  performedAt: DateTime
  description?: String
  tags: String[]
}

export interface TransactionSubscriptionPayload {
  mutation: MutationType
  node?: Transaction
  updatedFields?: String[]
  previousValues?: TransactionPreviousValues
}

export interface User extends Node {
  id: ID_Output
  name: String
  email: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
  wallets?: Wallet[]
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  name: String
  email: String
  password: String
  createdAt: DateTime
  updatedAt: DateTime
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface Wallet extends Node {
  id: ID_Output
  user: User
  name: String
  description?: String
  transactions?: Transaction[]
}

/*
 * A connection to a list of items.

 */
export interface WalletConnection {
  pageInfo: PageInfo
  edges: WalletEdge[]
  aggregate: AggregateWallet
}

/*
 * An edge in a connection.

 */
export interface WalletEdge {
  node: Wallet
  cursor: String
}

export interface WalletPreviousValues {
  id: ID_Output
  name: String
  description?: String
}

export interface WalletSubscriptionPayload {
  mutation: MutationType
  node?: Wallet
  updatedFields?: String[]
  previousValues?: WalletPreviousValues
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string