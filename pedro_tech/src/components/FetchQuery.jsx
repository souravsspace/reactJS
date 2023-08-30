import React from 'react'
import FetchDataQuery from './FetchDataQuery'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export default function FetchQuery() {
  const forClient = new QueryClient()
  return (
    <QueryClientProvider client={forClient}>
        <FetchDataQuery />
    </QueryClientProvider>
  )
}


