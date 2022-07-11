import * as React from 'react'
import {
  SendTransactionArgs,
  SendTransactionPreparedRequest,
  SendTransactionResult,
  SendTransactionUnpreparedRequest,
  sendTransaction,
} from '@wagmi/core'
import { useMutation } from 'react-query'

import { MutationConfig } from '../../types'

export type UseSendTransactionArgs = Omit<
  SendTransactionArgs,
  'request' | 'type'
> &
  (
    | {
        type: 'prepared'
        request: SendTransactionPreparedRequest | undefined
      }
    | {
        type: 'dangerouslyUnprepared'
        request?: SendTransactionUnpreparedRequest
      }
  )
export type UseSendTransactionMutationArgs = {
  dangerouslySet: {
    request: SendTransactionUnpreparedRequest
  }
}
export type UseSendTransactionConfig = MutationConfig<
  SendTransactionResult,
  Error,
  SendTransactionArgs
>

type SendTransactionFn = (
  overrideConfig?: UseSendTransactionMutationArgs,
) => void
type SendTransactionAsyncFn = (
  overrideConfig?: UseSendTransactionMutationArgs,
) => Promise<SendTransactionResult>
type MutateFnReturnValue<Args, Fn> = Args extends {
  type: 'dangerouslyUnprepared'
}
  ? Fn
  : Fn | undefined

export const mutationKey = (args: UseSendTransactionArgs) =>
  [{ entity: 'sendTransaction', ...args }] as const

const mutationFn = ({ chainId, request, type }: SendTransactionArgs) => {
  return sendTransaction({
    chainId,
    request,
    type,
  } as SendTransactionArgs)
}

export function useSendTransaction<
  Args extends UseSendTransactionArgs = UseSendTransactionArgs,
>({
  chainId,
  request,
  type,
  onError,
  onMutate,
  onSettled,
  onSuccess,
}: Args & UseSendTransactionConfig) {
  const {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    mutate,
    mutateAsync,
    reset,
    status,
    variables,
  } = useMutation(
    mutationKey({
      chainId,
      request,
      type,
    } as SendTransactionArgs),
    mutationFn,
    {
      onError,
      onMutate,
      onSettled,
      onSuccess,
    },
  )

  const sendTransaction = React.useCallback(
    (args?: UseSendTransactionMutationArgs) =>
      mutate({
        chainId,
        request,
        type,
        ...args?.dangerouslySet,
      } as SendTransactionArgs),
    [chainId, mutate, request, type],
  )

  const sendTransactionAsync = React.useCallback(
    (args?: UseSendTransactionMutationArgs) =>
      mutateAsync({
        chainId,
        request,
        type,
        ...args?.dangerouslySet,
      } as SendTransactionArgs),
    [chainId, mutateAsync, request, type],
  )

  return {
    data,
    error,
    isError,
    isIdle,
    isLoading,
    isSuccess,
    reset,
    sendTransaction: (type === 'prepared' && !request
      ? undefined
      : sendTransaction) as MutateFnReturnValue<Args, SendTransactionFn>,
    sendTransactionAsync: (type === 'prepared' && !request
      ? undefined
      : sendTransactionAsync) as MutateFnReturnValue<
      Args,
      SendTransactionAsyncFn
    >,
    status,
    variables,
  }
}
