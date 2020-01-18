import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer, Tooltip
} from 'recharts';
import propTypes from 'prop-types';


const Component = ({data, colors}) => (
  <ResponsiveContainer width="90%" height={350}>
    <PieChart>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        fill="#244948"
      >
        {
            data.map((_, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)
        }
      </Pie>
      <Tooltip />
    </PieChart>
  </ResponsiveContainer>

);

Component.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired
    })
  ).isRequired,
  colors: propTypes.arrayOf(propTypes.string).isRequired
};

export default Component;
