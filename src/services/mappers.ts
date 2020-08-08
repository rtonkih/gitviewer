import { IRepoStore } from './types';

export const userRepositoriesMapper = (data): IRepoStore => {
    const { data: repos = [] } = data;
    return repos.reduce((acc, { id, name, owner: { login } }: any) => {
        return {
            ...acc,
            [id]: {
                id,
                name,
                owner: { login },
            },
        };
    }, []);
};
