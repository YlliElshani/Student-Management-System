import { observer } from 'mobx-react-lite';
import { Button, Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer(function VitiAkademikDetails() {
    const { vitiAkademikStore } = useStore();
    const { selectedVitiAkademik: vitiAkademik, openForm, cancelSelectedVitiAkademik } = vitiAkademikStore
    if (!vitiAkademik) return <LoadingComponent />;
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{vitiAkademik!.vitiAk}</Card.Header>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(vitiAkademik.vitiAkademikId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedVitiAkademik} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})