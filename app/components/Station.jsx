const React = require('react');
const {connect} = require('react-redux');
const actions = require('../actions');

const {Container, Card, CardHeader, CardBody, Input, InputGroup,Media, Button} = require('reactstrap');


class Station extends React.Component{

  
  render()
  {
    return(
      <Container>
        <Container fluid className="col-4 col-offset-4">
        <InputGroup>
          <Input val={this.props.searchQuery} onChange={(e)=>{this.props.onChangeSearchQuery(e.target.value)}} type="text"/>
          <Button outline color="primary" onClick={()=>{this.props.search(this.props.searchQuery)}}>Search</Button>
        </InputGroup>
          <Container>
            {this.props.searchResult.map((e)=>{
              return (
              <Card>
                <CardHeader>
                  {e.name}
                  </CardHeader>
                  <CardBody>
                    {e.categories.map((category)=>{
                    <Container>
                        {category.streams.map((stream)=>{
                          return (<div>{stream.stream}:{stream.status}</div>);
                        })}
                      </Container>
                    })}
                  </CardBody>
                </Card>
              );
            })}
          </Container>
          <audio controls autoPlay>
          <source src="https://lyd.nrk.no:80/nrk_radio_jazz_aac_l" type="audio/mpeg"/>
            Browser does not support Audio
          </audio>
          </Container>
        <Container>
          {/*this.props.searchResult.map((res,index)=>{
            return (
              <Container key={index}>
                <Container>
                  Name: {res.name}
                </Container>
                <Container>
                  Country: {res.country}
                </Container>
                <Container>
                  ID: {res.id}
                </Container>
                <Container>
                  Stream: {res.streams[0]}
                </Container>
              </Container>
            );
          })*/console.log(JSON.stringify(this.props.searchResult))}
        </Container>
      </Container>
    );
  }
  
  /*render()
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
  }*/
}

const mapStateToProps  = (state)=>{
  return {
    stationList: state.stationList,
    searchQuery: state.searchQuery,
    searchResult: state.searchResult
  };
}

const mapDispatchToProps = (dispatch)=>{
  return {
    onGetStations: () => dispatch(actions.getStations()),
    search: (query)=>{dispatch(actions.getSearchResult(query))},
    onChangeSearchQuery: (query)=>{dispatch(actions.changeSearchQuery(query))}
  };
}

// const connectStation = connect(mapStateToProps, mapDispatchToProps)(Station);

module.exports =  connect(mapStateToProps, mapDispatchToProps)(Station);