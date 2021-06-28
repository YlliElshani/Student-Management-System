import React from 'react'
import { Container, Grid, Image, Divider, Header, Table, Icon } from 'semantic-ui-react'
import StudentNavBar from './StudentNavBar'

import Photo from '../../assets/studentphoto.jpg'

export const StudentProfile = () => {
    return (
      <Grid divided='vertically'>
        <Grid.Row columns={2}>
        <Grid.Column width='6' >
          <StudentNavBar />
        </Grid.Column>
        <Grid.Column>
          <Grid divided='vertically' style={{marginTop:"3em"}}>

            <Grid.Row columns={2} style={{marginBottom:"1em"}}>
              <Grid.Column width='5'>
              <Image src={Photo} circular size='medium'/>
              </Grid.Column>
              <Grid.Column style={{fontSize:"x-large"}} textAlign='center'>
                <Container>Hysnije Zllanoga <Divider style={{width:"250px", marginLeft:"1em"}}>Studente</Divider> </Container>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row columns={1} >
              <Table celled  >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell><Icon style={{marginRight:"2em"}} name='newspaper'/>Informata Personale</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Email
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>hysi@gmail.com</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Numri Tel.
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>049 - 575 - 412</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Qyteti
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Rahovec</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Rruga
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Rruga B</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
            </Grid.Row>

            <Grid.Row columns={1} style={{marginTop:"20px"}}>
              <Table  celled  >
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell><Icon style={{marginRight:"2em"}} name='newspaper'/>Informata rreth shkollës</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Drejtimi
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>Shkenca Natyrore</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Header.Content>
                            Klasa 
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>XII/11</Table.Cell>
                    </Table.Row>
                  </Table.Body>
                </Table>
            </Grid.Row>

          </Grid>
        </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}
