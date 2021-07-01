import React from 'react'
import { Container, Grid, Image, Divider, Header, Table, Icon, Card, Button } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'

import AdminNavBar from './Profesor-Profili/ProfesorNavBar'
import Photo from '../../assets/user.png';
import { NavLink } from 'react-router-dom';

export default function ProfesorProfile() {
  const { userStore: { user, logout } } = useStore();

  return (

    <Grid>
      <Grid.Column width='6' >
        <AdminNavBar />
      </Grid.Column>


      <Grid.Column style={{ marginTop: '50px' }}>
        <Card.Group>
          <Grid.Row>
            <Card >
              <Card.Content>
                <Card.Header>Vijushmeria</Card.Header>
                <Card.Description>
                  Shtimi i vijushmerise per nxenesin e caktuar
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/vijushmeria'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

        </Card.Group>
      </Grid.Column>

    </Grid>
  )
}
