import React from 'react';
import { IRepoStore } from 'services/types';
import RepositoryItem from './RepositoryItem';

const styles = { width: '80%', margin: '0 auto' };

interface IRepositoryList {
    repos: IRepoStore;
    setShowRepoById: (id: string) => void;
}

const RepositoryList: React.FC<IRepositoryList> = ({ repos, setShowRepoById }) => {
    return (
        <div style={styles}>
            {Object.values(repos).map((repo) => {
                return <RepositoryItem key={repo.id} repo={repo} setShowRepoById={setShowRepoById} />;
            })}
        </div>
    );
};

export default RepositoryList;
