import React, { useState, useCallback } from 'react';
import Search from 'components/Search';
import RepositoryList from 'components/RepositoryList';
import RepositoryDetails from 'components/RepositoryDetails';
import { IRepoStore } from 'services/types';

const initialValue = {};
const wrapperStyle = { width: '80%', margin: '0 auto' };

const App = () => {
    const [repos, setRepos] = useState<IRepoStore>(initialValue);
    const [showRepoById, setShowRepoById] = useState<string | null>(null);
    const isShowList = showRepoById === null;

    const handleCloseDetails = useCallback((): void => {
        setShowRepoById(null);
    }, [setShowRepoById]);

    return (
        <div style={wrapperStyle}>
            {isShowList ? (
                <>
                    <Search setRepos={setRepos} />
                    <RepositoryList repos={repos} setShowRepoById={setShowRepoById} />
                </>
            ) : (
                <RepositoryDetails repo={repos[showRepoById]} onCloseDetails={handleCloseDetails} />
            )}
        </div>
    );
};

export default App;
