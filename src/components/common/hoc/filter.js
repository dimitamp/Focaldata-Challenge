import React, {useState} from 'react';
import {InputGroup} from '@blueprintjs/core';
import useWindowSize from '@rehooks/window-size';
import {sanitize} from '../../../lib/utilities';


export const Component = ({children}) => {
  const [filter, setFilter] = useState('');
  const {innerWidth} = useWindowSize();
  const large = innerWidth > 600;
  return (
    <React.Fragment>
      <InputGroup
        large={large}
        type="text"
        name="filter"
        leftIcon="filter"
        placeholder="Filter surveys..."
        onChange={(e) => setFilter(sanitize(e.target.value))}
        value={filter}
        fill
        style={{borderRadius: '20px', color: '#244948'}}
      />
      {children(filter)}
    </React.Fragment>
  );
};

export default Component;
