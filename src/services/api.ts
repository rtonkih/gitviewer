import request from './requests';
import { userRepositoriesMapper } from './mappers';
import { IRepoStore } from './types';

export const fetchUserRepos = async (username: string): Promise<IRepoStore> => {
    const data = await request.get(`users/${username}/repos`);
    return userRepositoriesMapper(data);
};

export const fetchRepoDetails = async (owner: string, repo: string) => {
    const {
        data: { content },
    } = await request.get(`/repos/${owner}/${repo}/readme`);
    return atob(content);
};
