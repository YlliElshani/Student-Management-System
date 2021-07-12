import { observer } from 'mobx-react-lite';
import { Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';

export default observer( function DetyraDetailsS() {
    const {detyraStore} = useStore();
    const {selectedDetyra: detyra, openForm, cancelSelectedDetyra} = detyraStore;
    if (!detyra) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{detyra!.detyraEmri}</Card.Header>
                <Card.Meta>
                    <span>{detyra!.lenda}</span>
                </Card.Meta>
                <Card.Meta>
                    <span>{detyra!.klasa}</span>
                </Card.Meta>
                <Card.Meta>
                    <span>{detyra!.profesori}</span>
                </Card.Meta>
                <Card.Meta>
                    <span>{detyra!.pershkrimi}</span>
                </Card.Meta>

            </Card.Content>
         
        </Card>
    )
})
