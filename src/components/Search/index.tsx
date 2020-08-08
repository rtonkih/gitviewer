import React, { useState, ChangeEvent, memo } from 'react';
import { fetchUserRepos } from 'services/api';
import { IRepoStore } from 'services/types';

const styles = { display: 'flex', justifyContent: 'center', height: '40px', margin: '25px 0 25px 0' };

interface ISearchProps {
    setRepos: (repos: IRepoStore) => void;
}

const Search: React.FC<ISearchProps> = ({ setRepos }) => {
    const [searchValue, setSearchValue] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = async (): Promise<void> => {
        let repos = {};
        try {
            repos = (await fetchUserRepos(searchValue)) as IRepoStore;
        } catch (e) {
        } finally {
            setRepos(repos);
        }
    };

    return (
        <div style={styles}>
            <input placeholder="Enter username" type="text" value={searchValue} onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
};

export default memo(Search);
