import React from 'react'
import { Table } from 'semantic-ui-react'
import './pStyle.css';

export const KontrolloVijueshmerin = () => {
    return (
        <div>
            <div  className="tabela">
                <Table celled>
                <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Emri</Table.HeaderCell>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>Vijushmeria per muaj</Table.HeaderCell>
                </Table.Row>
                </Table.Header>

                <Table.Body>
                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>Requires call</Table.Cell>
                </Table.Row>
                <Table.Row >
                    <Table.Cell>John</Table.Cell>
                    <Table.Cell>Selected</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell>Jamie</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>Requires call</Table.Cell>
                </Table.Row>
                <Table.Row>
                    <Table.Cell >Jill</Table.Cell>
                    <Table.Cell>Approved</Table.Cell>
                    <Table.Cell>None</Table.Cell>
                </Table.Row>
                </Table.Body>
            </Table>
            </div>
        </div>
    )
}

export default KontrolloVijueshmerin;