
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Table } from 'semantic-ui-react'
import agent from '../../../../app/api/agent';
import { LoadingComponent } from '../../../../app/layout/LoadingComponent';
import { ILenda } from '../../../../app/models/lenda';
import StudentNavBar from '../../StudentNavBar';

const LendaStudentiDashboard: React.FC = () => {
    const [lendet, setLendet] = useState<ILenda[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLenda, setSelectedLenda] = useState<ILenda | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');


    useEffect(() => {
        agent.Lendet.list().then((response) => {
            let lendet: ILenda[] = [];
            response.forEach((lenda) => {
                lendet.push(lenda);
            })
            setLendet(lendet);
        }).then(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent content='Loading Lendet' />

    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width='4'>
            <StudentNavBar/>
            </Grid.Column>
            <Grid.Column width='10' style={{marginTop:'5em', marginLeft:"3em"}}>
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Profesori</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {lendet.map((lenda) => (
                        <Table.Body key={lenda.lendaId}>
                            <Table.Row>
                                <Table.Cell>{lenda.emri}</Table.Cell>
                                <Table.Cell>{lenda.klasa}</Table.Cell>
                                <Table.Cell>{lenda.profesori}</Table.Cell>
                                <Table.Cell>{lenda.descripion}</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
            </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default LendaStudentiDashboard;
