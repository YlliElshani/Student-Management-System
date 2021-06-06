import React from 'react'
import { Card, Container, Grid, Icon, Image, Label, List, Segment } from 'semantic-ui-react'
import { NavBar } from '../nav/NavBar'
import { ProfesorNavBar } from './ProfesorNavBar'
import Photo from '../../assets/profesor.jpg'

export const ProfesorProfile = () => {
    return (
            <Container>
                <NavBar />
                
                <ProfesorNavBar/> 
                <Segment>
                    <Grid columns={3}>
                        <Grid.Column>
                        <Card style={{marginLeft:'1em'  }}>

                <Image src={Photo} wrapped ui={false} />
                 <Card.Content>
                  <Card.Header>The Profesor</Card.Header>
                  <Card.Meta>
                <span className='date'>Joined in 2017</span>
                </Card.Meta>
                <Card.Description>
                He is the mastermind of the heist who assembled the group, as well as Berlin's brother
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                
                </Card.Content>
            </Card>
                        </Grid.Column>
                        <Grid.Column  >
                        <List size='massive'  style={{marginRight:'20em' , marginTop:'2em' }} >
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Emri
                                        </Label>
                                        Filan
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Mbiemri
                                        </Label>
                                        Fisteku
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Mosha
                                        </Label>
                                        35
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Gjinia
                                        </Label>
                                        M
                                    </List.Item>
                                </List>
                        </Grid.Column>
                        <Grid.Column >
                        <List size='massive'  style={{marginRight:'70em' , marginTop:'2em' }} >
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Grada
                                        </Label>
                                        Profesor
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Drejtimi
                                        </Label>
                                        Farmaci
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        N.Akademik
                                        </Label>
                                        Master
                                    </List.Item>
                                    <List.Item>
                                        <Label color='blue' horizontal>
                                        Qyteti
                                        </Label>
                                        Prishtine
                                    </List.Item>
                                </List>
                        </Grid.Column>
                        
                   
            
            
         
                    </Grid>

                
            

                </Segment>

                
            </Container>    
        )
}
