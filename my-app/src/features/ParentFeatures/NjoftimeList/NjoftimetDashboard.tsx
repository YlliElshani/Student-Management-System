import React from 'react'
import { Grid} from 'semantic-ui-react'
import { INjoftimi } from '../../../app/models/njoftimi'
import { NjoftimeDetails } from '../../njoftimetA/njoftimet/details/NjoftimeDetails'
import { NjoftimeForm } from '../../njoftimetA/njoftimet/form/NjoftimeForm'
import { ListoNjoftimet } from './ListoNjoftimet'

interface IProps{
    njoftimet:INjoftimi[];
    selectNjoftim:(id:string)=>void
    selectedNjoftim:INjoftimi | null
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    setSelectedNjoftim : (njoftim:INjoftimi|null) => void;
    createNjoftim:(njoftim:INjoftimi)=>void;
    editNjoftim:(njoftim:INjoftimi)=>void;
    deleteNjoftim:(id:string)=>void;
}


export const NjoftimetDashboard:React.FC<IProps> = ({
    njoftimet,
    selectNjoftim,
    selectedNjoftim,
    editMode,
    setEditMode,
    setSelectedNjoftim,
    createNjoftim,
    editNjoftim,
    deleteNjoftim
    }) => {
    return (
            <Grid>
            <Grid.Column width={4}>
                <ListoNjoftimet/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedNjoftim && !editMode &&
                <NjoftimeDetails njoftim={selectedNjoftim} 
                setEditMode={setEditMode}
                setSelectedNjoftim={setSelectedNjoftim}
                />}
                {editMode &&
                <NjoftimeForm key={selectedNjoftim && selectedNjoftim.id || 0} setEditMode={setEditMode} njoftim={selectedNjoftim!}
                    createNjoftim={createNjoftim} editNjoftim={editNjoftim}
                />}
            </Grid.Column>
            </Grid>
    )
}
