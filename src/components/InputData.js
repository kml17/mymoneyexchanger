import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


export class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: props.valueInputed
    };
  }

  onChangeValue() {
    this.props.changeValue(this.state.amount);
  }

  onHandleChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  render() {
    const { inputStyle, textStyle, cardStyle } = styles;
    return (
      <Card style={cardStyle}>
        <CardContent>
          <div style={styles.cardIn}>
            <h4>USD - United States Dollars</h4>
            <span style={textStyle}>USD</span>
            <span style={inputStyle}>
                            <input
                              style={{ height: 20, width: 180, fontSize: 16, }}
                              type="number"
                              value={this.state.amount}
                              onChange={(event) => this.onHandleChange(event)}
                            />
                        </span>
            <button
              style={styles.btnSubmit}
              onClick={this.onChangeValue.bind(this)}>SUBMIT</button>
          </div>
        </CardContent>
      </Card>
    )
  }
}
const styles = {
  inputStyle: {
    marginLeft: 20,
  },
  textStyle: {
    fontSize: 16,
  },
  cardStyle: {
    height: 120,
    backgroundColor: '#FF7F50',
  },
  cardIn:{
    marginTop: -10,
  },
  btnSubmit: {
    fontSize: 16,
    marginLeft: 10,
    backgroundColor: '#808080',
  }
};