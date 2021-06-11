import { NavLink } from 'react-router-dom'
import { Button, Grid, Table, TableRow } from 'semantic-ui-react'
import { StudentNavBar} from './StudentNavBar'
import React from 'react'
import { NavBar } from '../nav/NavBar'

export const StudentProfile = () => {
    return (
        <div>
            <NavBar />
            <Grid.Column width={10}>
                <Button primary as={NavLink} to='/studentProfile' activeClassName="active">Informatat Personale</Button>
                <Button as={NavLink} to='/studentProfile2' activeClassName="active">Informatat Shtesë</Button>
                <Button as={NavLink} to='/studentProfilePhoto' activeClassName="active">Foto</Button>
                <Table celled striped className="tabela">
                    <Table.Body>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> ID e Studentit</Table.Cell>
                                <Table.Cell>202145798</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Email i Studentit</Table.Cell>
                                <Table.Cell>altinahodaj1@gmail.com</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Emri</Table.Cell>
                                <Table.Cell>Altina</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Emri i Prindit</Table.Cell>
                                <Table.Cell>Osman</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Mbiemri</Table.Cell>
                                <Table.Cell>Hodaj</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Mosha</Table.Cell>
                                <Table.Cell>20</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Gjinia</Table.Cell>
                                <Table.Cell>F</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell style={{fontWeight: "bold"}}> Vendlindja</Table.Cell>
                                <Table.Cell>Prishtinë</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                </Table>
            </Grid.Column>
        </div>
    )
}
