export {}
import React from 'react'
import { render } from '@testing-library/react'
import { FilterBar } from './FilterBar.component'

describe('FilterBar component', () => {
  it('renders without crashing', () => {
    render(<FilterBar />)
  })
})
