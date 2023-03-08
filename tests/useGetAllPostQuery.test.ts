import { baseURL } from './../lib/baseURL';
import mockAxios from 'jest-mock-axios';
import { rest } from 'msw'
import * as React from 'react'
import { renderHook, waitFor } from '@testing-library/react'
// import { server } from '../setupTests'
import { createWrapper } from './utils'
import useGetAllPostQuery from '../queries/useGetAllPostQuery'
import axios from "axios";
import { get_all_posts } from '../apis/posts';
import { getAllPostSuccess } from '../mocks/posts';
jest.mock("./../lib/baseURL");

describe('query hook', () => {
    afterEach(() => {
        mockAxios.reset();
      });
    test('successful get all post query hook', async () => {
        
        
    
        (baseURL.get as jest.Mock).mockResolvedValueOnce(getAllPostSuccess);
        const { result } = renderHook(() => useGetAllPostQuery(), {
            wrapper: createWrapper()
        })
        
        await waitFor(() => expect(result.current.isSuccess).toBe(true))

        expect(result?.current?.data ? result?.current?.data[result?.current?.data.length -1].id : 0).toBe(1)
        expect(result?.current?.data ? result?.current?.data[result?.current?.data.length -1].name : "").toBe("Banana Man")
    })
})