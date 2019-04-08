const React = require('react');
const {Container} = require('reactstrap');
class Home extends React.Component{

    render() {
        return (
            <Container>
                <h1 className="display-1 text-center">HOME</h1>
            </Container>
        );
    }
}


module.exports = Home;