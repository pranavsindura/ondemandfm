const React = require('react');
const {Link} = require('react-router-dom');
const {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} = require('reactstrap');

class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
        //2017kuec2019,parikshit
		return (
			<div>
				<Navbar color="dark" dark expand="md">
					<NavbarBrand href="/">OnDemand FM</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/">Home</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/search">Search</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/popular">Popular Stations</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/about">About Us</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
		/*return(
            <Nav className="navbar navbar-inverse navbar-fixed-top navbar-no-bg" role="navigation">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-navbar-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand" href="index.html">Bootstrap Search Template</a>
              </div>
              <div className="collapse navbar-collapse" id="top-navbar-1">
                <ul className="nav navbar-nav navbar-right navbar-search-button">
                  <li><a className="search-button" href="#"><i className="fa fa-search" /></a></li>
                </ul>
                <form className="navbar-form navbar-right navbar-search-form disabled wow fadeInLeft" role="form" action method="post">
                  <div className="form-group">
                    <input type="text" name="search" placeholder="Search..." className="search form-control" />
                  </div>
                </form>
                <ul className="nav navbar-nav navbar-right navbar-menu-items wow fadeIn">
                  <li><a href="index.html">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="about.html">About</a></li>
                  <li><a href="#">Mission</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </Nav>
        );*/
	}
}

module.exports = NavBar;
