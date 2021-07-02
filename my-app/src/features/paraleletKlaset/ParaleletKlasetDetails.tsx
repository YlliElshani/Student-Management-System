import { observer } from 'mobx-react-lite';
import { Button,Card } from 'semantic-ui-react'
import { LoadingComponent } from '../../app/layout/LoadingComponent';
import { useStore } from '../../app/stores/store';


export default observer( function ParaleljaKlasaDetails() {
    const {paraleljaKlasaStore} = useStore();
    const {selectedParaleljaKlasa: paraleljaKlasa, openForm, cancelSelectedParaleljaKlasa} = paraleljaKlasaStore
    if (!paraleljaKlasa) return <LoadingComponent/>;
    return (
        <Card fluid>   
            <Card.Content>
                <Card.Header>{paraleljaKlasa!.emriKl}</Card.Header>
                <Card.Meta>
                    <span>{paraleljaKlasa!.emriPar}</span>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths={2}>
                    <Button onClick={() => openForm(paraleljaKlasa.paraleljaKlasaId)} basic color="blue" content='Edit' />
                    <Button onClick={() => cancelSelectedParaleljaKlasa} basic color="grey" content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})