import React from 'react'
import { Button, Header, Table } from 'semantic-ui-react'

export const KontrolloTranskripten = () => {
    return (
        <div className="Notat">
    <Table basic='very' celled collapsing className="tabela">
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell>Employee</Table.HeaderCell>
            <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
            <Table.Cell>
                <Header as='h4' image>
                    <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4' image>
                    <Header.Content>
                    Matthew
                    <Header.Subheader>Fabric Design</Header.Subheader>
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>15</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4' image>
                    <Header.Content>
                    Lindsay
                    <Header.Subheader>Entertainment</Header.Subheader>
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>12</Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                <Header as='h4' image>
                    <Header.Content>
                    Mark
                    <Header.Subheader>Executive</Header.Subheader>
                    </Header.Content>
                </Header>
                </Table.Cell>
                <Table.Cell>11</Table.Cell>
            </Table.Row>
            </Table.Body>
    </Table>
    <Button className="btn">Kontrollo Transkripten</Button>

        </div>
    )
}

export default KontrolloTranskripten;
