const React = require('react');
const { Container, Media, Card, CardImgOverlay, CardImg, CardTitle, CardText } = require('reactstrap');
class Home extends React.Component {
	render() {
		return (
			<Container fluid className="m-0 p-0">
				{/*OnDemand FM */}
				<Container fluid style={{ backgroundColor: '#01579b', color: 'white' }} className="m-0 p-0">
					<Card style={{ maxHeight: '500px', overflow: 'hidden' }} inverse>
						<CardImg
							style={{ maxHeight: 'initial' }}
							width="100%"
							src="/assets/1.jpg"
							alt="Card image cap"
						/>
						<CardImgOverlay>
							<CardText>
								<p style={{ padding: '10% 0' }} className="display-1 text-center">
									OnDemand FM
								</p>
							</CardText>
						</CardImgOverlay>
					</Card>
				</Container>
                
				<Container fluid style={{ backgroundColor: '#1c313a', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/music_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">Music Player</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								It is a HTML 5 based music player that allows users to hear and enjoy different types of
								music on users' demand.
							</p>
						</Media>
					</Media>
				</Container>
				<Container fluid style={{ backgroundColor: '#AB000D', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/live_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">Live Radio</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								This allows the users to search the type of music that they want to hear and can get a
								list of FM station currently playing that music live and enjoy.
							</p>
						</Media>
					</Media>
				</Container>
				<Container fluid style={{ backgroundColor: '#b61827', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/top20.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">Trending Now</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								On Demand FM also provides the facility of showing the users to surf on the top trending
								station going on worlwide.
							</p>
						</Media>
					</Media>
				</Container>

				{/*REACTJS*/}

				<Container fluid style={{ backgroundColor: '#004ba0', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/react_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">ReactJS</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								React is a JavaScript library for building user interfaces. It is maintained by Facebook
								and a community of individual developers and companies. The website is built completely
								on ReactJS along with NodeJS providing full scalibility and reusability of code
								improving efficiency of the workflow.
							</p>
						</Media>
					</Media>
				</Container>

                
				<Container fluid style={{ backgroundColor: '#000070', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/redux_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">Redux</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								Redux is a predictable state container for JavaScript apps. It helps you write
								applications that behave consistently, run in different environments (client, server,
								and native), and are easy to test. On top of that, it provides a great developer
								experience, such as live code editing combined with a time traveling debugger. You can
								use Redux together with React, or with any other view library. It is tiny (2kB,
								including dependencies), but has a large ecosystem of addons available.
							</p>
						</Media>
					</Media>
				</Container>

				<Container fluid style={{ backgroundColor: '#e8eaf6'}} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/express_logo.jpg"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">ExpressJS</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								Express.js, or simply Express, is a web application framework for Node.js, released as
								free and open-source software under the MIT License. It is designed for building web
								applications and APIs. It has been called the de facto standard server framework for
								Node.js
							</p>
						</Media>
					</Media>
				</Container>

				<Container fluid style={{ backgroundColor: '#005005', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/nodejs_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">NodeJS</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								Node.js is an open-source, cross-platform JavaScript run-time environment that executes
								JavaScript code outside of a browser. Node.js lets developers use JavaScript to write
								command line tools and for server-side scripting—running scripts server-side to produce
								dynamic web page content before the page is sent to the user's web browser.
								Consequently, Node.js represents a "JavaScript everywhere" paradigm,[7] unifying web
								application development around a single programming language, rather than different
								languages for server side and client side scripts.
							</p>
						</Media>
					</Media>
				</Container>

				<Container fluid style={{ backgroundColor: '#102027', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px' }}
								src="/assets/dirble_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">Dirble API</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								Dirble is created to make internet radio modern again and is focusing on giving that
								good experience of finding your new favorite radio station. Dirble is also made for
								developers to create that amazing radio app or service with an api that provides more
								speical data other radio don't have. You are welcome to the best internet radio
								directory on the internet.
							</p>
						</Media>
					</Media>
				</Container>


				{/*JSX*/}

				<Container fluid style={{ backgroundColor: '#311b92', color: 'white' }} className="m-0 p-0">
					<Media>
						<Media>
							<Media
								object
								style={{ width: '150px', height: '150px', paddingRight: '5px' }}
								src="/assets/jsx_logo.png"
								alt="React JS"
							/>
						</Media>
						<Media body>
							<Media heading>
								<p className="display-3">JSX</p>
							</Media>
							<p style={{ fontSize: '20pt' }}>
								React embraces the fact that rendering logic is inherently coupled with other UI logic:
								how events are handled, how the state changes over time, and how the data is prepared
								for display. Instead of artificially separating technologies by putting markup and logic
								in separate files, React separates concerns with loosely coupled units called
								“components” that contain both.
							</p>
						</Media>
					</Media>
				</Container>
			</Container>
		);
	}
}

module.exports = Home;
