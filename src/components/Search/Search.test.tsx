import React from 'react';
import { render } from '@testing-library/react';
import Search from './index';

test('render Search component', () => {
    const { getByText } = render(<Search setRepos={() => null} />);
    const linkElement = getByText(/Search/i);
    expect(linkElement).toBeInTheDocument();
});
