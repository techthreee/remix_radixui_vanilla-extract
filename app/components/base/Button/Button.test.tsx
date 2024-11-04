import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BaseButton } from './'


describe('BaseButton', () => {
  it('BaseButtonがレンダリングされていること', () => {
    render(<BaseButton text={'テキスト'} />)
    expect(screen.getByText('テキスト')).toBeInTheDocument()
  })
})