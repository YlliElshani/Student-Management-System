import { NavLink } from 'react-router-dom'
import { Button, Grid, Table, TableRow } from 'semantic-ui-react'
import { StudentNavBar} from './StudentNavBar'
import React from 'react'
import { NavBar } from '../nav/NavBar'

export const StudentProfile2 = () => {
    return (
        <div>
            <NavBar />
            <Grid.Column width={10}>
                <Button as={NavLink} to='/studentProfile' activeClassName="active">Informatat Personale</Button>
                <Button primary as={NavLink} to='/studentProfile2' activeClassName="active">Informatat Shtesë</Button>
                <Button as={NavLink} to='/studentProfilePhoto' activeClassName="active">Foto</Button>
                <Table celled striped>
                    <Table.Body>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Drejtimi </Table.Cell>
                                <Table.Cell>Shkenca natyrore</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Klasa </Table.Cell>
                                <Table.Cell>10/11</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Numri i Telefonit </Table.Cell>
                                <Table.Cell>049123456</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Adresa </Table.Cell>
                                <Table.Cell>Muharrem Fejza - Prishtinë</Table.Cell>
                            </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>
        </div>
    )
}
