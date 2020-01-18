import {useState, useEffect} from 'react';

const useFetcher = (action) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    const loadData = async ({silently} = {silently: false}) => {
        try {
            if (!silently) {
                setLoading(true);
            }
            const actionData = await action();
            setData(actionData);
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            setError(e);
        } finally {
            if (!silently) {
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        loadData();
    }, [action]);

    return [data, loading, error, loadData, setData];
};

export default useFetcher;
