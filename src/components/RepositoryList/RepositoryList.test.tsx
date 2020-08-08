import React from 'react';
import { render } from '@testing-library/react';
import RepositoryList from './index';

const mockData = {
    '66375756': {
        id: 66375756,
        name: 'Item #1',
        owner: {
            login: 'rtonkih',
        },
    },
    '68169474': {
        id: 68169474,
        name: 'Item #2',
        owner: {
            login: 'rtonkih',
        },
    },
    '68430731': {
        id: 68430731,
        name: 'Item #3',
        owner: {
            login: 'rtonkih',
        },
    },
};

test('render RepositoryList component', async () => {
    const { findAllByText } = render(<RepositoryList repos={mockData} setShowRepoById={() => null} />);

    const items = await findAllByText(/Item #[0-9]/);
    expect(items).toHaveLength(3);
});
