import React from 'react'
import { Grid, GridColumn, Segment } from 'semantic-ui-react'
import { INdihma } from '../../../../app/models/kNdihme'
import { NDetails } from '../details/NDetails'
import { NForm } from '../form/NForm'
import { KerkeseNList } from './KerkeseNList'

interface IProps{
    kerkesat:INdihma[]
    selectKerkesa:(id:string)=>void
    selectedKerkeseN:INdihma;
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    setSelectedKerkses:(kerkes:INdihma|null)=>void;
    createKerkesa:(kerkes: INdihma)=>void;
    editKerkese:(kerkes: INdihma)=>void;
    deleteKerkesa:(id:string)=>void;
}

export const KerkeseNDashboard:React.FC<IProps> = ({
    kerkesat,
    selectKerkesa,
    selectedKerkeseN,
    editMode,
    setEditMode,
    setSelectedKerkses,
    createKerkesa,
    editKerkese,
    deleteKerkesa
    }) => {
    return (
        <Grid>
            <GridColumn width={10}>
                <Segment clearing>
                 <KerkeseNList kerkesat={kerkesat} selectKerkesa={selectKerkesa} deleteKerkesa={deleteKerkesa}/>
                </Segment>
            </GridColumn>
            <GridColumn width={6}>{selectedKerkeseN && !editMode &&
                <NDetails kerkesaN={selectedKerkeseN} setEditMode={setEditMode} setSelectedKerkes={setSelectedKerkses}/>}
                {editMode && 
                <NForm key={selectedKerkeseN && selectedKerkeseN.id || 0} setEditMode={setEditMode} kerkesa={selectedKerkeseN!} createKerkesa={createKerkesa} editKerkese={editKerkese} />}
            </GridColumn>
        </Grid>
    )
}
