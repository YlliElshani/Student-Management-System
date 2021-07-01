import { observer } from 'mobx-react-lite';
import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function VleresimiDetails() {
    const {vleresimiStore} = useStore();
    const {selectedVleresimi: vleresimi, openForm, cancelSelectedVleresimi} = vleresimiStore;
    if (!vleresimi) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{vleresimi!.lenda}</Card.Header>
                <Card.Meta>
                    <span>{vleresimi!.nota}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(vleresimi.vleresimiId)} basic color="blue" content='Edit' />
                    <Button onClick={cancelSelectedVleresimi} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})