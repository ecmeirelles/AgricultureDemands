import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-flexbox-grid';

import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { saveDemand, changeQuantity, changePrice } from '../../core/modules/farmer-demand.module';

import DemandsList from './demands-list';

const OwnDemands = props => (
  <div>
    <Row className='custom-container'>
      <DemandsList />
      <Col xs={12}>
        <Card style={{ fontFamily: 'Barlow' }}>
          <CardTitle title='Nova demanda' titleStyle={{ fontWeight: 'bold', fontFamily: 'Barlow' }} />
          <CardText>
            <Row>
              <Col xs={4}>
                <p>Produto: Alface Embalada</p>
              </Col>
              <Col xs={4}>
                <TextField
                  floatingLabelText='Quantidade'
                  value={props.quantity}
                  onChange={(event, value) => props.changeQuantity(value)}
                />
              </Col>
              <Col xs={4}>
                <TextField
                  floatingLabelText='Preço'
                  value={props.price}
                  onChange={(event, value) => props.changePrice(value)}
                />
              </Col>
              <Col xs={12}>
                <RaisedButton
                  fullWidth
                  label='Salvar Demanda'
                  backgroundColor='#a4c639'
                  labelColor='#fff'
                  style={{ marginTop: '1em' }}
                  onClick={() => props.saveDemand()}
                />
              </Col>
            </Row>
          </CardText>
        </Card>
      </Col>
    </Row>
  </div>
);

const mapStateToProps = state => ({
  quantity: state.farmerDemand.quantity,
  price: state.farmerDemand.price,
  products: state.farmerDemand.products,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  saveDemand,
  changeQuantity,
  changePrice
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OwnDemands);
