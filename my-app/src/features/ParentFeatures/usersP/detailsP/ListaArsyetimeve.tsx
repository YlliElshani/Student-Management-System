import React from 'react'
import { Button, Item, Segment } from 'semantic-ui-react';
import { IArsyeja } from '../../../../app/models/arsyeja';

interface IProps{
    arsyetimet: IArsyeja[];
    selectArsyetim:(Id:string)=>void;
    openCreateForm:()=>void;
    deleteActivity:(Id:string)=>void;

}


export const ListaArsyetimeve:React.FC<IProps> = ({arsyetimet, selectArsyetim,openCreateForm,deleteActivity}) => {
    return (
        <Segment clearing>
        <Item.Group divided>
            {arsyetimet.map(arsyetimet=>(
                <Item key={arsyetimet.Id}>
                <Item.Content>
                    <Item.Meta>Mungesa e Arsyetuar</Item.Meta>
                    <Item.Description>
                        <div>{arsyetimet.ArsyejaMungeses}</div>
                        <div>{arsyetimet.nrDiteve}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button onClick={() =>selectArsyetim(arsyetimet.Id)}  content='Shiko' color='green' />
                        <Button onClick={() =>deleteActivity(arsyetimet.Id)}  content='Fshij Arsyetimin' color='red' />
                    </Item.Extra>
                </Item.Content>
                </Item>
            ))}
        </Item.Group>
        </Segment>
    )
}
export default ListaArsyetimeve;