import { useState, useCallback } from 'react';

const useDataMutator = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const mutateData = useCallback(async (fetcher: any, param: any) => {
        try {
            setLoading(true);
            const response = await fetcher(param);
            if (!response.status) {
                throw new Error('Network response was not ok.');
            }
            setData(response);
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    }, []);

    return { data, loading, error, mutateData };
};

export default useDataMutator;