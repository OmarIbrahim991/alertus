import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const Main = () => {
	return (
		<>
			<Container fluid align="center">
				<Button variant="primary">Pause Alarm</Button>
				<Button variant="danger">Clear All</Button>
				<Button variant="warning">Logout</Button>
			</Container>
			<Container>
				<Table striped bordered hover responsive size="sm">
					<thead>
						<tr>
							<th>Account</th>
							<th>Unread Messages</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<Image roundedCircle={true} src="/logo512.png" width={50} />
							</td>
							<td>2</td>
							<td>
								<Button variant="danger">X</Button>
							</td>
						</tr>
					</tbody>

				</Table>
			</Container>
		</>
	)
}

export default Main
