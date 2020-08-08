import { IRepoItem } from 'services/types';
import React, { memo } from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
};

interface IRepositoryItem {
    repo: IRepoItem;
    setShowRepoById: (id: string) => void;
}

const RepositoryItem: React.FC<IRepositoryItem> = memo(({ repo, setShowRepoById }) => {
    const { id, name } = repo;
    const handleShowMore = (id) => () => {
        setShowRepoById(id);
    };
    return (
        <div style={styles}>
            <p>{name}</p>
            <button onClick={handleShowMore(id)}>Show details</button>
        </div>
    );
});

export default RepositoryItem;
