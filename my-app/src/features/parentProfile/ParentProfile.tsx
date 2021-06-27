import React from 'react'
import { Container, Grid, Image, Label, List, Segment } from 'semantic-ui-react'
import { NavBar } from '../nav/NavBar'
import Photo from '../../assets/user.png'
import { ParentNavBar } from './ParentNavBar'

export const ParentProfile = () => {
    return (
            <Container>
                <NavBar />
                <ParentNavBar/>
                <Segment>
                    <Grid centered style={{marginTop:'2em'}}>
                        <Label  color='red'>
                            Administrator
                        </Label>
                    </Grid>
                    <Grid columns={3} style={{marginBottom:'2em'}}>
                        <Grid.Row>
                           <Grid.Column>
                            <Segment style={{marginLeft:'50px'}}>
                                <List divided selection>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Emri
                                        </Label>
                                        Bashkim
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Mbiemri
                                        </Label>
                                        Hoti
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Mosha
                                        </Label>
                                        35
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Gjinia
                                        </Label>
                                        M
                                    </List.Item>
                                </List>
                                </Segment>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={Photo} size='small' circular centered/>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment style={{marginRight:'50px'}}>
                                <List divided selection>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Email
                                        </Label>
                                        bashkim.hoti@yahoo.com
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Qyteti
                                        </Label>
                                        Prishtine
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Rruga
                                        </Label>
                                        Musine Kokolari
                                    </List.Item>
                                    <List.Item>
                                        <Label color='red' horizontal>
                                        Numri Tel.
                                        </Label>
                                        049-847-345
                                    </List.Item>
                                </List>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </Container>    
        )
}
