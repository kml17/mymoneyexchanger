import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';


class CurrencyListing extends Component {

  convertValue = (x) => {
    var value = this.props.currValue[x];
    var newAmount = (this.props.amount / 1.1406) * value;
    var newAmount2 = newAmount.toLocaleString(x);
    return newAmount2
  }

  render() {
    return (
      <div>
        {
          this.props.name.map((nama, index) =>
            <Card style={styles.cardStyle}>
              <CardContent>
                <Grid container style={styles.cardContentStyle} key={index}>
                  <Grid item xs={5}>
                    <strong>{nama}</strong>
                    <div>
                      1 USD = {nama} {this.props.currValue[nama]}
                    </div>
                  </Grid>
                  <Grid item xs={4}
                        style={styles.textInside}
                  ><strong>{nama} {this.convertValue(nama)}</strong>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>)
        }
      </div>
    )}
};

const styles = {
  cardStyle: {
    height: 80,
    marginBottom: 5
  },
  cardContentStyle: {
    justify: 'space-between',
    height: 30,
    marginTop: 10,
    marginBottom: 10,
  },
  textInside: {
    marginLeft: 40
  },
};

export default CurrencyListing;
