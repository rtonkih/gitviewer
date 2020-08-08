import React, { useEffect, useState, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { fetchRepoDetails } from 'services/api';
import { IRepoItem } from 'services/types';

const detailsStlyes = { margin: 30 };

interface IRepositoryDetailsProps {
    repo: IRepoItem;
    onCloseDetails: () => void;
}

const RepositoryDetails: React.FC<IRepositoryDetailsProps> = ({ repo, onCloseDetails }) => {
    const {
        owner: { login },
        name: projectName,
    } = repo;
    const [repoDetails, setRepoDetails] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setIsLoading(true);
        const fetchRepos = async (owner, projectName) => {
            try {
                const repoDetails = await fetchRepoDetails(owner, projectName);
                setRepoDetails(repoDetails);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        };
        fetchRepos(login, projectName);
    }, [login, projectName]);

    return (
        <div style={detailsStlyes}>
            {isLoading && <h1>Loading</h1>}
            {!isLoading && <button onClick={onCloseDetails}>Close details</button>}
            {!isLoading && <ReactMarkdown source={repoDetails} />}
            {error !== '' && <h1>{error}</h1>}
        </div>
    );
};

export default memo(RepositoryDetails);
