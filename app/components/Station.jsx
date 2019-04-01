const React = require('react');
const {connect} = require('react-redux');
const actions = require('../actions');


class Station extends React.Component{

  render()
  {
   let stations = this.props.stationList;
    return (<div>
        {stations.map((station, index)=>{
          return (
            <div key={index} className="container">{JSON.stringify(station)}</div>
          );
        })}
        <button onClick={()=>this.props.onGetStations()}>Click</button>
      </div>);
  }
}

const mapStateToProps  = (state)=>{
  return {
    stationList: state.stationList
  };
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onGetStations: () => dispatch(actions.getStations())
  };
}

// const connectStation = connect(mapStateToProps, mapDispatchToProps)(Station);

module.exports =  connect(mapStateToProps, mapDispatchToProps)(Station);