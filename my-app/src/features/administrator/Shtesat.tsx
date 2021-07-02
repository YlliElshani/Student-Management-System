import React from 'react'
import {  Grid, Card, Button } from 'semantic-ui-react'
import { useStore } from '../../app/stores/store'

import AdminNavBar from './AdminNavBar'
import Photo from '../../assets/user.png';
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer( function Shtesat() {
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
                <Card.Header>Viti Akademik</Card.Header>
                <Card.Description>
                  Shtimi i gjenerates se re!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/vitetAkademike'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>



          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Klaset</Card.Header>
                <Card.Description>
                  Shtoni klaset!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/admin/klaset'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>



          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Paralelet</Card.Header>
                <Card.Description>
                 Shtoni paralelet
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>


          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Javet</Card.Header>
                <Card.Description>
                 Shtoni javet
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>




          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header as={NavLink} to='/admin/lendet'>Lendet</Card.Header>
                <Card.Description>
                 Shtoni Lendet
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button as={NavLink} to='/admin/lendet' basic color='green'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header as={NavLink} to='/periodat'>Periodat</Card.Header>
                <Card.Description>
                 Shtoni Perioda
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button as={NavLink} to='/periodat' basic color='green'>
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
)