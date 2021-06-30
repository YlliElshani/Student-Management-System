import React from 'react'
import { Grid, GridColumn} from 'semantic-ui-react';
import { IArsyeja } from '../../../../app/models/arsyeja';
import ArsyetoMungesen from '../formP/ArsyetoMungesen';
import ListaArsyetimeve from './ListaArsyetimeve';
import MungesaDetails from '../details/mungesaDetails';
import './test.css';
import ParentNavBar from '../ParentNavBar';

interface IProps{
    arsyetimet: IArsyeja[];
    selectArsyetim:(Id:string)=>void;
    selectedArsyetim:IArsyeja|null;
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    openCreateForm:()=>void;
    setSelectedArsyetim:(arsyetim:IArsyeja|null)=>void 
    createArsyeja:(arsyetim:IArsyeja)=>void;
    editArsyeja:(arsyetim:IArsyeja)=>void;
    deleteActivity:(Id:string)=>void;
}


 const DashboardP:React.FC<IProps> = ({arsyetimet, selectArsyetim,selectedArsyetim,editMode,setEditMode,openCreateForm,setSelectedArsyetim,createArsyeja,editArsyeja,deleteActivity}) => {
    return (
        <Grid className='test1'>
            <Grid.Row>
            <Grid.Column width='10'>
                <ListaArsyetimeve arsyetimet={arsyetimet} selectArsyetim={selectArsyetim} openCreateForm={openCreateForm} deleteActivity={deleteActivity}/>
            </Grid.Column>
            <Grid.Column  width='10' style={{marginTop:'50%', marginLeft:"4em"}}>
                {selectedArsyetim &&  !editMode &&
                <MungesaDetails arsyetim={selectedArsyetim} setEditMode={setEditMode} setSelectedArsyetim={setSelectedArsyetim}/>}
                {editMode  &&
                <ArsyetoMungesen setEditMode={setEditMode} arsyetim={selectedArsyetim!} createArsyeja={createArsyeja} editArsyeja={editArsyeja}/>}
            </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};
export default DashboardP;