import { NavLink } from 'react-router-dom'
import { Button, Container, Grid, Image, Segment} from 'semantic-ui-react'
import { StudentNavBar} from './StudentNavBar'
import Photo from '../../assets/studentphoto.jpg'
import React from 'react'
import { NavBar } from '../nav/NavBar'

export const StudentProfilePhoto = () => {
    return (
        <Container>
        <NavBar />
        
            <Grid.Column width={10}>
                <Button as={NavLink} to='/studentProfile' activeClassName="active">Informatat Personale</Button>
                <Button as={NavLink} to='/studentProfile2' activeClassName="active">Informatat Shtesë</Button>
                <Button primary as={NavLink} to='/studentProfilePhoto' activeClassName="active">Foto</Button>
                <Segment>
                <Grid.Row>
                    <Grid.Column>
                        <Image src={Photo} size='medium' centered/>
                    </Grid.Column>
                </Grid.Row>
                </Segment>
            </Grid.Column>
    </Container>
    )
}
