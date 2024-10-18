import type * as Types from "../types";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
const defaultOptions = {} as const;

const AddCategoryDocument = gql`
  mutation AddCategory($data: CreateCategoryDto!) {
    addCategory(data: $data) {
      id
      name
      image
      creationAt
      updatedAt
      products {
        id
        title
        price
        description
        images
        creationAt
        updatedAt
      }
    }
  }
`;
export type AddCategoryMutationFn = Apollo.MutationFunction<
  Types.AddCategoryMutation,
  Types.AddCategoryMutationVariables
>;

/**
 * __useAddCategoryMutation__
 *
 * To run a mutation, you first call `useAddCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCategoryMutation, { data, loading, error }] = useAddCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddCategoryMutation(
  baseOptions?: Apollo.MutationHookOptions<
    Types.AddCategoryMutation,
    Types.AddCategoryMutationVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    Types.AddCategoryMutation,
    Types.AddCategoryMutationVariables
  >(AddCategoryDocument, options);
}
export type AddCategoryMutationHookResult = ReturnType<
  typeof useAddCategoryMutation
>;
export type AddCategoryMutationResult =
  Apollo.MutationResult<Types.AddCategoryMutation>;
export type AddCategoryMutationOptions = Apollo.BaseMutationOptions<
  Types.AddCategoryMutation,
  Types.AddCategoryMutationVariables
>;
