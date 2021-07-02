import { observer } from 'mobx-react-lite';
import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer (function NderrimiDetails() {
    const {nderrimiStore} = useStore();
    const {selectedNderrimi: nderrimi, openForm, cancelSelectedNderrimi} = nderrimiStore
    if (!nderrimi) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{nderrimi!.ndrr}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(nderrimi.nderrimiId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedNderrimi} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})