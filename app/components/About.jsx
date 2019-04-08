let React = require('react');
let {Container, Table}=require('reactstrap');
class About extends React.Component {
	render() {
		return (
            <Container>
			<Table bordered responsive className=" mt-5 text-center">
            <thead>
				<tr>
                      <th>Name</th>
                      {/* <td>&nbsp;&nbsp;&nbsp;</td> */}
                      <th>College ID</th>
                      {/* <th>&nbsp;&nbsp;&nbsp;</th> */}
                      <th>E-mail ID</th>
                      {/* <td>&nbsp;&nbsp;&nbsp;</td> */}
                      <th>Contact</th>
                  </tr> 
                  </thead>
				<tbody>
					<tr>
						<th>Pranav Sindura</th>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1012</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1012@iiitkota.ac.in</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>+91 9560175360</td>
					</tr>
					<tr>
						<th>Yudhveer Kaswan</th>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1077</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1077@iiitkota.ac.in</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>+91 8998987867</td>
					</tr>
					<tr>
						<th>Ishaan Tandel</th>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1023</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>2018kucp1023@iiitkota.ac.in</td>
						{/* <td>&nbsp;&nbsp;&nbsp;</td> */}
						<td>+91 6377982682</td>
					</tr>
				</tbody>
			</Table>
            </Container>
		);
	}
}

module.exports = About;
