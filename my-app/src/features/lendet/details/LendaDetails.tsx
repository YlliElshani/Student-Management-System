import { observer } from 'mobx-react-lite';
import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function LendaDetails() {
    const {lendaStore} = useStore();
    const {selectedLenda: lenda, openForm, cancelSelectedLenda} = lendaStore
    if (!lenda) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{lenda!.emri}</Card.Header>
                <Card.Meta>
                    <span>{lenda!.klasa}</span>
                </Card.Meta>
                <Card.Description>
                    {lenda!.descripion}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(lenda.lendaId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedLenda} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})