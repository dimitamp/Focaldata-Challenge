import React, {useEffect} from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {path} from 'ramda';
import {ToasterBottom} from '../common/ui';
import actions from '../../actions';

const haveNewError = (t, errors) => t.getToasts().length < errors.length;


export const Component = ({errors, children, removeError}) => {
    useEffect(() => {
        if (errors && haveNewError(ToasterBottom, errors)) {
            const error = errors[errors.length - 1];
            if (error) {
                ToasterBottom.show({
                    intent: 'danger',
                    message: error.message || 'An error has occured!',
                    onDismiss: () => {
                        removeError(error.id);
                    }
                });
            }
        }
    }, [errors]);
    return <React.Fragment>{children}</React.Fragment>;
};

Component.propTypes = {
    errors: propTypes.arrayOf(propTypes.object),
    children: propTypes.node.isRequired,
    removeError: propTypes.func.isRequired
};

Component.defaultProps = {errors: []};

const mapState = state => ({errors: path(['ui', 'errors'], state)});

const mapDispatch = dispatch => ({
    removeError: (id) => {
        dispatch(actions.ui.removeError(id));
    }
});

export default connect(
    mapState,
    mapDispatch
)(Component);
