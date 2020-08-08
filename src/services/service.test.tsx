import { userRepositoriesMapper } from './mappers';

const mockData = {
    data: [
        {
            id: 66375756,
            name: 'Item 123',
            owner: {
                login: 'rtonkih',
            },
        },
        {
            id: 68169474,
            name: 'Item 333',
            owner: {
                login: 'rtonkih',
            },
        },
        {
            id: 68430731,
            name: 'Item 444',
            owner: {
                login: 'rtonkih',
            },
        },
    ],
};

test('It test mapped user repositories', () => {
    const mappedData = userRepositoriesMapper(mockData);
    expect(mappedData).toHaveProperty('68169474');
    expect(mappedData).toHaveProperty('66375756');
    expect(mappedData).toHaveProperty('68430731');
});
