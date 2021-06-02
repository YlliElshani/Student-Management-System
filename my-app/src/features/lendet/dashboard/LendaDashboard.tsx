
import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Button, Grid, Table } from 'semantic-ui-react'
import agent from '../../../app/api/agent';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { ILenda } from '../../../app/models/lenda';
import { NavBar } from '../../nav/NavBar';
import LendaDetails from '../details/LendaDetails';
import LendaForm from '../form/LendaForm';



const LendaDashboard: React.FC = () => {
    const [lendet, setLendet] = useState<ILenda[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedLenda, setSelectedLenda] = useState<ILenda | null>(null);
    const [editMode, setEditMode] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [target, setTarget] = useState('');

    const handleSelectLenda = (id: string) => {
        setSelectedLenda(lendet.filter(e => e.lendaId === id)[0])
    }

    const handleOpenCreateForm = () => {
        setSelectedLenda(null);
        setEditMode(true);
    }

    const handleCreateLenda = (lenda: ILenda) => {
        setSubmitting(true);
        agent.Lendet.create(lenda).then(() => {
            setLendet([...lendet, lenda]);
            setSelectedLenda(lenda);
            setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleEditLenda = (lenda: ILenda) => {
        setSubmitting(true);
        agent.Lendet.update(lenda).then(() => {
            setLendet([...lendet.filter(e => e.lendaId !== lenda.lendaId), lenda])
            setSelectedLenda(lenda);
            setEditMode(false);
        }).then(() => setSubmitting(false))
    }

    const handleDelete = (event: SyntheticEvent<HTMLButtonElement>, id: string) => {
        setSubmitting(true);
        setTarget(event.currentTarget.name)
        agent.Lendet.delete(id).then(() => {
            setLendet([...lendet.filter(e => e.lendaId !== id)])
        }).then(() => setSubmitting(false))
    }

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
            <NavBar />
            <Grid.Column width={10}>    
                <Table singleLine>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Lenda</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Profesori</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    {lendet.map((lenda) => (
                        <Table.Body key={lenda.lendaId}>
                            <Table.Row>
                                <Table.Cell>{lenda.emri}</Table.Cell>
                                <Table.Cell>{lenda.klasa}</Table.Cell>
                                <Table.Cell>{lenda.profesori}</Table.Cell>
                                <Table.Cell>{lenda.descripion}</Table.Cell>
                                <Table.Cell><Button onClick={() => handleSelectLenda(lenda.lendaId)} size='mini'  content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={lenda.lendaId} loading={target === lenda.lendaId && submitting} onClick={(e) => handleDelete(e, lenda.lendaId)} size='mini'  content='Fshij Lenden' /></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    ))}
                </Table>
                <Button  class='ui button' inverted color='grey' onClick={handleOpenCreateForm} content='Shto Lende'/>
            </Grid.Column>
            <Grid.Column width='5'>
                {selectedLenda && !editMode && (
                <LendaDetails setSelectedLenda={setSelectedLenda} 
                            lenda={selectedLenda} 
                            setEditMode={setEditMode} />)}
                {editMode && <LendaForm setEditMode={setEditMode} 
                                        lenda={selectedLenda!} 
                                        createLenda={handleCreateLenda} 
                                        editLenda={handleEditLenda} 
                                        submitting={submitting} />}
            </Grid.Column>
        </Grid>
    )
}
export default LendaDashboard;
