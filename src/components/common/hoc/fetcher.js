import React from 'react';
import propTypes from 'prop-types';
import {Spinner} from '@blueprintjs/core';
import {useFetcher} from '../../../hooks';
import {ErrorFallback} from '../ui';

export const Component = ({action, children, spinnerSize, spinnerClass}) => {
    const [data, loading, error, refetch, setData] = useFetcher(action);

    if (loading) return <Spinner className={spinnerClass} size={spinnerSize} />;
    if (error) return <ErrorFallback />;

    if (!data) return null;
    return children(data, {refetch, setDataState: setData});
};

Component.propTypes = {
    action: propTypes.func.isRequired,
    children: propTypes.func.isRequired,
    spinnerSize: propTypes.number,
    spinnerClass: propTypes.string
};
Component.defaultProps = {spinnerSize: 70, spinnerClass: ''};

export default Component;
