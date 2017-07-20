import React from 'react';
import DetailCard from './DetailCard.jsx';
import {errorAfterFiveSeconds} from '../actions';
import {connect} from 'react-redux';

class WeatherUI extends React.Component {
  constructor(props){
    super(props);
    this.state={cityName:'', data:''};
    this.setName=this.setName.bind(this);
    this.getData=this.getData.bind(this);
  }

  setName(e){
     this.setState({cityName:e.target.value});
  }

  getData(){
    this.props.onTodoClick(this.state.cityName);
  }

  componentWillReceiveProps(nextProp){
     this.setState({data:nextProp.data});
  }
  card(data){
    let cards = [], j=0;;
    const cardNumbers = data.list &&( data.list.length/8);
    const averageDataLength = data.list && (data.list.length%8);
    for(let i =0;i<5;i++){
       cards.push(<DetailCard data={data.list && data.list[j]}/>);
       j=j+8;

    }
    return cards;
  }

  render() {
    console.log(this.props.data);
       return (
        <div className="row">
          <div className="col-xs-6 col-md-4 center-align">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" id="txtSearch" onChange={this.setName}/>
                <div className="input-group-btn">
                      <button className="btn btn-primary" onClick={this.getData}>
                      <span className="glyphicon glyphicon-search"></span>
                      </button>
                </div>
            </div>
          </div>
         {this.card(this.state.data)}
        </div>
       );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(errorAfterFiveSeconds(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherUI);