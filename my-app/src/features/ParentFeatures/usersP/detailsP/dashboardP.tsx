import React from 'react'
import { act } from 'react-dom/test-utils';
import { Grid, GridColumn, List } from 'semantic-ui-react';
import { IArsyeja } from '../../../../app/models/arsyeja';
import ArsyetoMungesen from '../formP/ArsyetoMungesen';
import ListaArsyetimeve from './ListaArsyetimeve';
import MungesaDetails from '../details/mungesaDetails';
import agent from '../../../../app/api/agent';

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
        <Grid>
            <GridColumn width={10}>
                <ListaArsyetimeve arsyetimet={arsyetimet} selectArsyetim={selectArsyetim} openCreateForm={openCreateForm} deleteActivity={deleteActivity}/>
            </GridColumn>
            <GridColumn width={6}>
                {selectedArsyetim &&  !editMode &&
                <MungesaDetails arsyetim={selectedArsyetim} setEditMode={setEditMode} setSelectedArsyetim={setSelectedArsyetim}/>}
                {editMode  &&
                <ArsyetoMungesen setEditMode={setEditMode} arsyetim={selectedArsyetim!} createArsyeja={createArsyeja} editArsyeja={editArsyeja}/>}
            </GridColumn>
        </Grid>
    );
};
export default DashboardP;