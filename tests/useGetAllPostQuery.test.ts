import { rest } from 'msw'
import * as React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
// import { server } from '../setupTests'
import { createWrapper } from './utils'
import useGetAllPostQuery from '../queries/useGetAllPostQuery'

describe('query hook', () => {
    test('successful query hook', async () => {
        const { result } = renderHook(() => useGetAllPostQuery(), {
            wrapper: createWrapper()
        })

        console.log(result.current);
        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result?.current?.data ? result?.current?.data[result?.current?.data.length -1].id : 0).toBe(1)
    })
})