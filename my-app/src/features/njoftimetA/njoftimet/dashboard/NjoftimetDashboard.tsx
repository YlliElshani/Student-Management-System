import React, { SyntheticEvent } from 'react'
import { Grid} from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'
import { NjoftimeDetails } from '../details/NjoftimeDetails'
import { NjoftimeForm } from '../form/NjoftimeForm'
import { NjoftimeList } from './NjoftimeList'

interface IProps{
    njoftimet:INjoftimi[];
    selectNjoftim:(id:string)=>void
    selectedNjoftim:INjoftimi | null
    editMode:boolean;
    setEditMode:(editMode:boolean)=>void;
    setSelectedNjoftim : (njoftim:INjoftimi|null) => void;
    createNjoftim:(njoftim:INjoftimi)=>void;
    editNjoftim:(njoftim:INjoftimi)=>void;
    deleteNjoftim:(e:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
    submitting:boolean;
    target:string;
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
    deleteNjoftim,
    submitting,
    target
    }) => {
    return (
            <Grid>
            <Grid.Column width={4}>
                <NjoftimeList njoftimet={njoftimet} selectNjoftim={selectNjoftim} deleteNjoftim={deleteNjoftim} submitting={submitting} target={target}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedNjoftim && !editMode &&
                <NjoftimeDetails njoftim={selectedNjoftim} 
                setEditMode={setEditMode}
                setSelectedNjoftim={setSelectedNjoftim}
                />}
                {editMode &&
                <NjoftimeForm key={selectedNjoftim && selectedNjoftim.id || 0} setEditMode={setEditMode} njoftim={selectedNjoftim!}
                    createNjoftim={createNjoftim} editNjoftim={editNjoftim} submitting={submitting}
                />}
            </Grid.Column>
            </Grid>
    )
}
