const React = require('react');
const { connect } = require('react-redux');
const actions = require('../actions');
let ReactPlayer = require('react-player').default;
const Axios = require('axios');
let loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';

// console.log(ReactPlayer.ReactPlayer);

const { Container,CardFooter, CardColumns, Card, CardHeader, CardBody, Input, InputGroup, Media, ButtonGroup, Button } = require('reactstrap');

class Popular extends React.Component {
	constructor(props) {
    super(props);
    // this.handleLink = this.handleLink.bind(this);
		this.state = {
      stations: [],
      link: '',
      prevLink: ''
		};
  }
  componentWillMount()
  {
    // this.props.onGetStations();
    this.props.onGetPopular();
  }

  handlePlay()
  {
    this.setState({prevLink:this.state.link});
  }

	handleLink(index1)  {
    // console.log(this.props.searchResult[index1].streams);
    let e;
    // for(e of this.props.searchResult[index1].streams)
    for(e of this.props.stationList[index1].streams)
    {
      let playable = true;
      // if(ReactPlayer.canPlay(e.stream)){ this.setState({ link: e.stream }); return;}
      const header = {headers: {'Access-Control-Allow-Origin': '*',}};
      playable = Axios.get(e.stream,header).then((res)=> {console.log('RES: ',res); return true;}).catch(e=>{this.setState({link: this.state.prevLink});console.log('ERR: ',e); return false;})
      setTimeout(()=>{
        if(playable)
        {
          this.setState({ link: e.stream }); return;
        }
      },5000);
    }
  };
  
  handleError(e){
    e.preventDefault();
        this.setState({ link: this.state.prevLink });
    alert('Link Unplayable at the Moment!');
  }

	render() {
    // console.log(this.props.stationList);
    if(this.props.stationList.length)
    {
    return(
      <Container>
          <Container sm={{size:8}} md={{size:4, offset:4}} lg={{size:4, offset:4}} className="text-center">
				<ReactPlayer className="" style={{align: 'center'}} height="50px" width="300px" onPlay={()=>this.handlePlay()} controls onError={()=>this.handleError(event)} playing url={this.state.link}>some Text</ReactPlayer>
				</Container>
        <Container>
        <CardColumns>
						{this.props.stationList.map((e, index1) => {
							return (
								<Card key={index1}>
									<CardHeader>
										{e.name}, {e.country}
									</CardHeader>
									<CardBody>
									<p>{e.categories[0].description?e.categories[0].description:loremIpsum}</p>
									<p><a href={e.website}>{e.website}</a></p>
									</CardBody>
									<CardFooter>
									<Button color="primary" onClick={()=> this.handleLink(index1)}>Play</Button>
									</CardFooter>
								</Card>
							);
						})}
            </CardColumns>
					</Container>
				</Container>
    );
          }
          else
          return null;
		/*return (
				<Container fluid className="text-center col-12">
                <Container>
					<ReactPlayer className="mr-0" height="50px" style={{align:'center'}} onPlay={()=>this.handlePlay()} controls onError={()=>this.handleError(event)} playing url={this.state.link}>some Text</ReactPlayer>
					</Container>
                    <Container>
						{this.props.stationList.map((e, index1) => {
							return (
								<Card key={index1}>
									<CardHeader>
										{e.name}, {e.country}
									</CardHeader>
									<CardBody>
                  <Button color="primary" onClick={()=> this.handleLink(index1)}>Play</Button>
									</CardBody>
								</Card>
							);
						})}
					</Container>
				</Container>
			
		);*/
	}

}

const mapStateToProps = (state) => {
	return {
		stationList: state.stationList,
		searchQuery: state.searchQuery,
		searchResult: state.searchResult
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onGetStations: () => dispatch(actions.getStations()),
		search: (query) => {
			dispatch(actions.getSearchResult(query));
		},
		onChangeSearchQuery: (query) => {
			dispatch(actions.changeSearchQuery(query));
        },
        onGetPopular: ()=> dispatch(actions.getPopular())
	};
};

// const connectStation = connect(mapStateToProps, mapDispatchToProps)(Station);

module.exports = connect(mapStateToProps, mapDispatchToProps)(Popular);
