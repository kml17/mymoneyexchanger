import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid'
import {InputData} from './InputData.js';
import axios from 'axios';
import CurrencyListing from './CurrencyListing.js';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Card from '@material-ui/core/Card';


class Main extends Component {
  state = ({
    base: null,
    currency: [],
    date: null,
    amount: 1.00,
    currencyList: [],
    currNameList: [],
    inputCurrName: '',
  });

  componentDidMount() {
    axios.get('http://api.exchangeratesapi.io/latest?base=USD')
      .then(response => this.setState({
        currency: response.data.rates,
        date: response.data.date,
        currNameList: Object.keys(response.data.rates)
      }));
  }

  amountInputed(value) {
    this.setState({ amount: this.nilai })
  }

  onChangeNameInputed(newValue) {
    this.setState({
      amount: newValue
    });
    var rates = this.state.currency;
    var c = rates.USD * this.state.amount;
    this.setState({ test: c });
    console.log(rates)
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      currencyList: [...this.state.currencyList, this.state.inputCurrName],
    });
  };

  // Getting inputted data
  handleChange = inputCurrName => event => {
    this.setState({ inputCurrName: event.target.value, });
    console.log(this.state.currency['IDR']);
    console.log(this.state.inputCurrName)
  };


  render() {
    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <InputData valueInputed={this.state.amount} changeValue={this.onChangeNameInputed.bind(this)}/>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={styles.dateStyle}>Currency Updates: {this.state.date}</div>
          <div>
            <CurrencyListing
              name={this.state.currencyList}
              currValue={this.state.currency}
              amount={this.state.amount}
              // newValue={this.state.newValue}
            />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Card style={styles.cardStyle}>
            <FormControl style={styles.formControl}>
              <InputLabel htmlFor="currency-native-helper">(+) Add More Currencies:</InputLabel>
              <NativeSelect
                value={this.state.inputCurr}
                onChange={this.handleChange('currency')}
                input={<Input name="currency" id="currency-native-helper" />}
              >
                <option value="" />
                {this.state.currNameList.map((name, index) =>
                  <option key={index} value={name}>{name}</option>
                )}
              </NativeSelect>
            </FormControl>
            <button style={styles.btnAdd} onClick={this.onSubmit}>ADD</button>
          </Card>
        </Grid>
      </div>
    )
  }
};

const styles = {
  formControl: {
    minWidth: 220,
    marginTop: 20,
    marginLeft: 20
  },
  dateStyle: {
    marginTop: 20,
    marginBottom: 10,
  },
  cardStyle: {
    height: 90,
    backgroundColor: '#F08080',
  },
  btnAdd: {
    marginLeft: 10,
    fontSize: 15,
    backgroundColor: '#808080',
  }
};

export default Main;