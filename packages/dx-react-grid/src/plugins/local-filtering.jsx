import React from 'react';
import PropTypes from 'prop-types';
import { Getter, PluginContainer } from '@devexpress/dx-react-core';
import { filteredRows } from '@devexpress/dx-grid-core';

const pluginDependencies = [
  { pluginName: 'FilteringState' },
];

export class LocalFiltering extends React.PureComponent {
  render() {
    const { getColumnPredicate } = this.props;

    const rowsComputed = ({ rows, filters, getCellValue }) =>
      filteredRows(rows, filters, getCellValue, getColumnPredicate);

    return (
      <PluginContainer
        pluginName="LocalFiltering"
        dependencies={pluginDependencies}
      >
        <Getter name="rows" computed={rowsComputed} />
      </PluginContainer>
    );
  }
}

LocalFiltering.propTypes = {
  getColumnPredicate: PropTypes.func,
};

LocalFiltering.defaultProps = {
  getColumnPredicate: undefined,
};

