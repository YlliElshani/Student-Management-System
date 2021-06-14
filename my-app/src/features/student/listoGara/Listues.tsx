import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ICompetition } from '../../../app/models/competition'
import { Lista } from './Lista'

interface IProps{
    listgara:ICompetition[]
}

export const Listues:React.FC<IProps> = ({listgara}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
             <Lista gara={listgara}/>
            </Grid.Column>
        </Grid>
    )
}
