import React from 'react'
import { Button, Item, Label, Segment } from 'semantic-ui-react';
import { IArsyeja } from '../../../../app/models/arsyeja';

interface IProps{
    arsyetimet: IArsyeja[];
    selectArsyetim:(arsyejaId:string)=>void;
    openCreateForm:()=>void;
    deleteActivity:(arsyejaId:string)=>void;
}

 const ListaArsyetimeve:React.FC<IProps> = ({arsyetimet, selectArsyetim,openCreateForm,deleteActivity}) => {
    return (
        <Segment clearing>
        <Item.Group divided>
            {arsyetimet.map(arsyetimet=>(
                <Item key={arsyetimet.id}>
                <Item.Content>
                    <Item.Meta>Arsyeja e Mungeses:</Item.Meta>
                    <Item.Description>
                        <div>{arsyetimet.arsyejaMungeses}</div>
                        <h4>Nr. i diteve te humbura:</h4>
                        <div>{arsyetimet.nrDiteve}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button onClick={() =>selectArsyetim(arsyetimet.id)}  content='Shiko' color='green' />
                        <Button onClick={() =>deleteActivity(arsyetimet.id)}  content='Fshij Arsyetimin' color='red' />
                    </Item.Extra>
                </Item.Content>
                </Item>
            ))}
        </Item.Group>
        </Segment>
    )
}
export default ListaArsyetimeve;