import { observer } from 'mobx-react-lite';
import { Button, Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function ParaleljaaDetails() {
    const { paraleljaaStore } = useStore();
    const { selectedParaleljaa: paraleljaa, openForm, cancelSelectedParaleljaa } = paraleljaaStore
    if (!paraleljaa) return <LoadingComponent />;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{paraleljaa!.emriPar}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(paraleljaa.paraleljaaId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedParaleljaa} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})