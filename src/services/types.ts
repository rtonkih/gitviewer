export interface IRepoItem {
    id: string;
    name: string;
    owner: { login: string };
}

export interface IRepoStore {
    [id: string]: IRepoItem;
}
