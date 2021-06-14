import React from 'react'
import { Grid } from 'semantic-ui-react'
import { ITrip } from '../../../app/models/trip'
import { Lista } from './Lista'

interface IProps{
    trips: ITrip[]
}

export const Listues:React.FC<IProps> = ({trips}) => {
    return (
        <Grid>
            <Grid.Column width={10}>
             <Lista trips={trips}/>
            </Grid.Column>
        </Grid>
    )
}