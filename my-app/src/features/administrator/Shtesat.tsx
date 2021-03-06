import {  Grid, Card, Button } from 'semantic-ui-react'
import AdminNavBar from './AdminNavBar'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export default observer( function Shtesat() {
  return (
    <Grid style={{display:'flex'}}>
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
                <Card.Header>Qytetet</Card.Header>
                <Card.Description>
                 Shtoni qytetet e përdoruesve
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/qytetet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Sallat</Card.Header>
                <Card.Description>
                 Shtoni sallat
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/sallat'>
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
                <Card.Header>Notat</Card.Header>
                <Card.Description>
                  Shtoni notat!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/admin/notat'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          
          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Kohezgjatja e Oreve</Card.Header>
                <Card.Description>
                  Modifiko kohzgjatjen e oreve
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/admin/kohezgjatjaOres'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>



          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header as={NavLink} to='/admin/paraleleet' basic color='green'>Paralelet</Card.Header>
                <Card.Description>
                 Shtoni paralelet
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/paraleleet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Klaset sipas paraleleve</Card.Header>
                <Card.Description>
                 Shtoni klaset ne paralele
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/paraleletKlaset'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Nderrimet</Card.Header>
                <Card.Description>
                 Nderrimet
              </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/admin/nderrimet'>
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
                <Card.Header as={NavLink} to='/admin/oraret'>Oraret</Card.Header>
                <Card.Description>
                 Shtoni Oraret
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button as={NavLink} to='/admin/oraret' basic color='green'>
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