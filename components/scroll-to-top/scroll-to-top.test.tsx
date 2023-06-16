import React from "react";
import ScrollToTop from "./";
import {
  render,
  fireEvent,
  waitFor,
} from '@testing-library/react'

// describe('ScrollToTop', () => {
//   it('should not be visible initialy', () => {
//     const { queryByRole } = render(<ScrollToTop />);
//     const button = queryByRole('button');
//     expect(button).not.toBeInTheDocument();
//   });

//   it('should be visible when user scroll down', () => {
//     const { queryByRole } = render(<ScrollToTop/>);
//     const button = queryByRole('button');

//     expect(button).not.toBeInTheDocument();

//     window.scrollY = 150;
//     fireEvent.scroll(window);

//     setTimeout(() => {
//       waitFor(() => {
//         expect(button).toBeInTheDocument();
//       })
//     }, 500);
//   });

//   it('should scroll to top when clicked', () => {
//     const { queryByRole } = render(<ScrollToTop />);
//     const button = queryByRole('button');

//     window.scrollY = 150;
//     fireEvent.scroll(window);

//     if (button) {
//       fireEvent.click(button);
//     }

//     setTimeout(() => {
//       waitFor(() => {
//         expect(window.scrollY).toBe(0);
//       })
//     }, 500);
//   })
// })

describe('ScrollToTop', () => {
  it('should not be visible initialy', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');

    expect(button).not.toBeInTheDocument();
  });

  it('should be visible when user scroll down', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');

    expect(button).not.toBeInTheDocument();

    window.scrollY = 150;
    fireEvent.scroll(window);

    setTimeout(() => {
      waitFor(() => {
        expect(button).toBeInTheDocument();
      })
    }, 500);
  })

  it('should scroll to top when clicked', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');

    window.scrollY = 150;
    fireEvent.click(window);

    if (button) {
      fireEvent.click(button);
    }

    setTimeout(() => {
      waitFor(() => {
        expect(window.scrollY).toBe(0);
      })
    }, 500);
  })
})