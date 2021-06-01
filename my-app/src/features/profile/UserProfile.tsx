import React from 'react'
import { Card, Container, Grid, Icon, Segment } from 'semantic-ui-react'
import App from '../../app/layout/App'
import { NavBar } from '../nav/NavBar'

export const UserProfile = () => {
    return (
        <Container style={{marginTop:'6em'}}>
            <NavBar />
              <Grid columns='equal'>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment align="center">
                <Card align="center">
                    <Card.Content>
                        <Card.Header>Emri</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Ky eshte profili juaj
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
              </Grid.Column>
              <Grid.Column width={6}>
                <Segment>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment>1</Segment>
                <Segment>2</Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    )
}
