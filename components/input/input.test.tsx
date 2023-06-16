import { render, screen } from '@testing-library/react';

import Input from './';
import { describe } from 'node:test';

describe('Input', () => {
  const aria_label: string = 'search';
  const placeholder: string = 'enter your search';

  it ('renders correctly', () => {
    render(<Input aria-label={aria_label} placeholder={placeholder} />);

    const inputElement = screen.getByPlaceholderText(placeholder);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('aria-label', aria_label);
    expect(inputElement).toHaveClass(
       'w-full form-input dark:bg-gray-900  rounded-md border-none'
    );
    expect(inputElement.parentElement).toHaveClass(
        'bg-gradient-to-r from-blue-600 to-teal-400 rounded-md p-[2px]'
    )
  })
})