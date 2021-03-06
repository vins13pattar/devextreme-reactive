import React from 'react';
import PropTypes from 'prop-types';
import { combineTemplates } from '@devexpress/dx-react-core';
import { TableView as TableViewBase } from '@devexpress/dx-react-grid';
import { VirtualTable } from '../templates/virtual-table';
import { TableCell } from '../templates/table-cell';
import { TableRow } from '../templates/table-row';
import { TableNoDataCell } from '../templates/table-no-data-cell';
import { TableStubCell } from '../templates/table-stub-cell';
import { TableStubHeaderCell } from '../templates/table-stub-header-cell';

const tableLayoutTemplate = props => <VirtualTable {...props} />;
const defaultRowTemplate = props => <TableRow {...props} />;
const defaultNoDataRowTemplate = props => <TableRow {...props} />;
const defaultCellTemplate = props => <TableCell {...props} />;
const defaultStubCellTemplate = props => <TableStubCell {...props} />;
const defaultStubHeaderCellTemplate = props => <TableStubHeaderCell {...props} />;
const defaultNoDataCellTemplate = props => <TableNoDataCell {...props} />;

export class VirtualTableView extends React.PureComponent {
  render() {
    const {
      tableCellTemplate,
      tableRowTemplate,
      tableNoDataRowTemplate,
      tableStubCellTemplate,
      tableStubHeaderCellTemplate,
      tableNoDataCellTemplate,
      ...restProps
    } = this.props;

    return (
      <TableViewBase
        tableLayoutTemplate={tableLayoutTemplate}
        tableRowTemplate={combineTemplates(
          tableRowTemplate,
          defaultRowTemplate,
        )}
        tableNoDataRowTemplate={combineTemplates(
          tableNoDataRowTemplate,
          defaultNoDataRowTemplate,
        )}
        tableCellTemplate={combineTemplates(
          tableCellTemplate,
          defaultCellTemplate,
        )}
        tableStubCellTemplate={combineTemplates(
          tableStubCellTemplate,
          defaultStubCellTemplate,
        )}
        tableStubHeaderCellTemplate={combineTemplates(
          tableStubHeaderCellTemplate,
          defaultStubHeaderCellTemplate,
        )}
        tableNoDataCellTemplate={combineTemplates(
          tableNoDataCellTemplate,
          defaultNoDataCellTemplate,
        )}
        {...restProps}
      />
    );
  }
}

VirtualTableView.propTypes = {
  tableCellTemplate: PropTypes.func,
  tableRowTemplate: PropTypes.func,
  tableNoDataRowTemplate: PropTypes.func,
  tableStubCellTemplate: PropTypes.func,
  tableStubHeaderCellTemplate: PropTypes.func,
  tableNoDataCellTemplate: PropTypes.func,
};

VirtualTableView.defaultProps = {
  tableCellTemplate: undefined,
  tableRowTemplate: undefined,
  tableNoDataRowTemplate: undefined,
  tableStubCellTemplate: undefined,
  tableStubHeaderCellTemplate: undefined,
  tableNoDataCellTemplate: undefined,
};
