import { useState, useEffect, useCallback } from 'react';

const useFetch = (savePreviousFetchData: boolean, fetcher: any, param: any) => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = useCallback(async () => {
        try {
            const response = await fetcher(param);
            if (!response.status) {
                throw new Error('Network response was not ok.');
            }
            savePreviousFetchData ? setData([...data, ...response.data]) : setData(response.data)
            setLoading(false);
        } catch (error: any) {
            setError(error);
            setLoading(false);
        }
    }, [fetcher, param],)

    useEffect(() => {
        fetchData();
    }, [fetcher, param]);

    return { data, loading, error, fetchData };
};

export default useFetch;