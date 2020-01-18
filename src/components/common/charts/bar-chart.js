import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import propTypes from 'prop-types';


const Component = ({data}) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data} 
    >
      <XAxis dataKey="name" tick={false} />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#244948" />
    </BarChart>
  </ResponsiveContainer>

);

Component.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
    })
  ).isRequired,
};

export default Component;
