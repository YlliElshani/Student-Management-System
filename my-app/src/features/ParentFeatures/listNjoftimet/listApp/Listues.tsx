import React from 'react'
import { Grid } from 'semantic-ui-react'
import { INjoftimi } from '../../../../app/models/njoftimi'
import { Lista } from './Lista'

interface IProps{
    listnjoftimet:INjoftimi[]
}

export const Listues:React.FC<IProps> = ({listnjoftimet}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
             <Lista njoftimet={listnjoftimet}/>
            </Grid.Column>
        </Grid>
    )
}
