let React = require('react');
let { Container, Media } = require('reactstrap');
class About extends React.Component {
	render() {
		return (
			<Container fluid className="m-0 p-0">
				<Container fluid style={{ backgroundColor: '#263238', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/pranav.jpeg"
								alt="Pranav Sindura"
								className="p-2"
							/>
						</Media>
						<Media body>
							<Media heading>
								<h1>Pranav Sindura</h1>
							</Media>
							<h4>Batch A1</h4>
							<h4>2018KUCP1012</h4>
							<h4>Combined Frontend and Backend and designed the backbone of the Application using ExpressJS, NodeJS, ReactJS, Redux.</h4>
						</Media>
					</Media>
				</Container>
				<Container fluid style={{ backgroundColor: '#37474f', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/ishaan.png"
								alt="Ishaan Tandel"
								className="p-2"

							/>
						</Media>
						<Media body>
							<Media heading>
								<h1>Ishaan Tandel</h1>
							</Media>
							<h4>Batch A1</h4>
							<h4>2018KUCP1023</h4>
							<h4>Created UI using ReactJS, Bootstrap and Reactstrap. Added Card support and Search Engine support to Results.</h4>
						</Media>
					</Media>
				</Container>
				<Container fluid style={{ backgroundColor: '#1c313a', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/yudhveer.png"
								alt="Yudhveer Kaswan"
								className="p-2"

							/>
						</Media>
						<Media body>
							<Media heading>
								<h1>Yudhveer Kaswan</h1>
							</Media>
							<h4>Batch A2</h4>
							<h4>2018KUCP1077</h4>
							<h4>Moral Support😂</h4>
						</Media>
					</Media>
				</Container>
				<Container fluid style={{ backgroundColor: '#37474f', height:'300px', color: 'white' }} className="m-0 p-0">
				</Container>
			</Container>

		);
	}
}

module.exports = About;
