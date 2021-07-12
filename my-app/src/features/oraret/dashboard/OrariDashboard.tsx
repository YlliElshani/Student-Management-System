import { observer } from 'mobx-react-lite';
import { Button, Grid, Table } from 'semantic-ui-react'
import { SyntheticEvent, useEffect, useState } from 'react';
import { useStore } from '../../../app/stores/store';
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import AdminNavBar from '../../administrator/AdminNavBar';
import OrariDetails from '../details/OrariDetails';
import OrariForm from '../form/OrariForm';



export default observer(function OrariDashboard() {
    const { orariStore } = useStore();
    const [target, setTarget] = useState('');
    const { selectedOrari, editMode, oraretByEmri, selectOrari, loading, deleteOrari } = orariStore;
    function handleOrariDelete(e: SyntheticEvent<HTMLButtonElement>, id: string) {
        setTarget(e.currentTarget.name);
        deleteOrari(id);
    }

    useEffect(() => {
        orariStore.loadOraret();
    }, [orariStore]);


    if (loading) return <LoadingComponent content='Loading Lendet' />

    return (

        <Grid>
            <Grid.Column width='4'>

                <AdminNavBar />

            </Grid.Column>

            <Grid.Column style={{ marginTop: '50px' }} width={10}>


                <Table size='small'>
                    <Table.Header>
                        <Table.Row rowspan='4'>
                            <Table.HeaderCell>Gjenerata</Table.HeaderCell>
                            <Table.HeaderCell>Klasa</Table.HeaderCell>
                            <Table.HeaderCell>Nderrimi</Table.HeaderCell>
                            <Table.HeaderCell>Edit</Table.HeaderCell>
                            <Table.HeaderCell>Delete</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>


                        </Table.Row>

                    </Table.Header>
                    {oraretByEmri.map(orari => (
                        <Table.Body >
                            {/*Per ditene hene */}
                            <Table.Row>

                                <Table.Cell>{orari.gjenerata}</Table.Cell>
                                <Table.Cell>{orari.klasa}</Table.Cell>
                                <Table.Cell>{orari.Nderrimi}</Table.Cell>

                                <Table.Cell><Button onClick={() => selectOrari(orari.orariId)} size='mini' content='Edit' inverted color='olive' /></Table.Cell>
                                <Table.Cell><Button inverted color='red' name={orari.orariId} loading={target === orari.orariId && loading} onClick={(e) => handleOrariDelete(e, orari.orariId)} size='mini' content='Fshij Orarin' /></Table.Cell>
                            </Table.Row>

                        </Table.Body>))}


                </Table>
                <Button class='ui button' inverted color='grey' onClick={() => orariStore.openForm()} content='Shto Orarin' />

                <Grid.Column width='5'>
                    {selectedOrari && !editMode &&
                        <OrariDetails />}
                    {editMode && (<OrariForm />)}
                </Grid.Column>

            </Grid.Column>

        </Grid>
    )
});

