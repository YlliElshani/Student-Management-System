import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default function VijushmeriaDetails() {
    const {vijushmeriaStore} = useStore();
    const {selectedVijushmeria: vijushmeria, openForm, cancelSelectedVijushmeria} = vijushmeriaStore
    if (!vijushmeria) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{vijushmeria!.pjesmarrja}</Card.Header>
                <Card.Meta>
                    <span>{vijushmeria!.studenti}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(vijushmeria.vijushmeriaId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedVijushmeria} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}
