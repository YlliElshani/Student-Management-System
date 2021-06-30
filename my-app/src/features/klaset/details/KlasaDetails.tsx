import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import AdminNavBar from '../../administrator/AdminNavBar';

export default function KlasaDetails() {
    const {klasaStore} = useStore();
    const {selectedKlasa: klasa, openForm, cancelSelectedKlasa} = klasaStore
    if (!klasa) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{klasa!.emriKl}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(klasa.klasaId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedKlasa} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}