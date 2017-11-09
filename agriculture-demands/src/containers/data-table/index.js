import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-flexbox-grid';
import { FormattedNumber } from 'react-intl';

import { Card } from 'material-ui/Card';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

import monthsOfYear from '../../core/enums/months-of-year.enum';
import './data-table.css';

this.state = {
  quantity: 0,
  price: 0
}

const DataTable = props => (
  <div>
    <Row className="custom-container">
      <Col xs={12}>
        <h1 className="data-table--title">O que o mercado precisa?</h1>
      </Col>
      <Col xs={12}>
        <Card>
        <Table selectable={false} style={{ fontFamily: 'Barlow' }}>
          <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
            <TableRow selectable={false}>
            <TableHeaderColumn style={{textAlign: 'center'}}>

            </TableHeaderColumn>
            {monthsOfYear.map((month, key) =>(
              <TableHeaderColumn key={key} style={{textAlign: 'center'}}>
                {month.name}
              </TableHeaderColumn>
            ))}
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false} >
            <TableRow selectable={false}>
              <TableHeaderColumn colSpan="13" style={{textAlign: 'center'}}>
                {props.products[0].name}
              </TableHeaderColumn>
            </TableRow>
            {props.data.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.buyer}</TableRowColumn>
                {row.demands.map((demand, index) => (
                  <TableRowColumn key={index}>
                    <Row>
                      <Col xs={6}>{demand.total}</Col>
                      <Col xs={6}>({demand.inactive})</Col>
                      <Col xs={12}><FormattedNumber value={demand.price} format="BRL" /></Col>
                    </Row>
                  </TableRowColumn>
                ))}
              </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </Col>
    </Row>
  </div>
);

const mapStateToProps = state => ({
  data: state.buyerDemand.data,
  products: state.products.data,
});

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataTable);
