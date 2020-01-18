import {compose} from 'ramda';
import initializeStore from './initialize-store';

const loadPlugins = compose(initializeStore); // here we can load more plugins

export default loadPlugins;
