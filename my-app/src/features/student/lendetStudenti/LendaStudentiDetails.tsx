import { observer } from 'mobx-react-lite';
import { Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function LendaStudentiDetails() {
    const {lendaStore} = useStore();
    const {selectedLenda: lenda} = lendaStore
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
            </Card.Content>
        </Card>
    )
})