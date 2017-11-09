import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-flexbox-grid';

import { Card, CardTitle, CardText } from 'material-ui/Card';

const DemandList = props => {
  console.log(props)
  return <Row className='custom-container'>
    {props.demands.length === 0 &&
    <Col xs={12}>
      <p style={{ textAlign: 'center' }}>Não há demandas salvas.</p>
    </Col>}

    {props.demands.length > 0 &&
    <Col xs={12}>
      <Card style={{ fontFamily: 'Barlow' }}>
        <CardTitle title='Minhas demandas' titleStyle={{ fontWeight: 'bold', fontFamily: 'Barlow' }} />
        <CardText>
          {props.demands.map((demand, index) => (
            <Row key={index}>
              <Col xs={4}>
                <p>Produto: {demand.product}</p>
              </Col>
              <Col xs={4}>
                <p>Quantidade: {demand.quantity}</p>
              </Col>
              <Col xs={4}>
                <p>Preço: {demand.price}</p>
              </Col>
            </Row>
          ))}
        </CardText>
      </Card>
    </Col>}
  </Row>
}

const mapStateToProps = state => ({
  demands: state.farmerDemand.demands,
});

export default connect(
  mapStateToProps,
)(DemandList);
