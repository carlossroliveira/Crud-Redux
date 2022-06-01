// -------------------------------------------------
// Packages
// -------------------------------------------------
import React from 'react';

import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
// -------------------------------------------------
// Components
// -------------------------------------------------
import { Layout } from '../../components/Layout';

describe('Footer Testing', () => {
  it('should render the component correctly.', () => {
    render(<Layout />);
    screen.debug();
  });
});
