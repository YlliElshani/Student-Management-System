import {  Grid, Card, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import StudentNavBar from '../StudentNavBar';

export default observer( function Shtesat() {
  return (
    <Grid style={{display:'flex'}}>
      <Grid.Column width='6' >
        <StudentNavBar />
      </Grid.Column>


      <Grid.Column style={{ marginTop: '50px' }}>
        <Card.Group>
          <Grid.Row>
            <Card >
              <Card.Content>
                <Card.Header>Kerko Ndihmë</Card.Header>
                <Card.Description>
                  Kerkoni ndihmë!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/student/KerkesNdihme'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Prezantimet</Card.Header>
                <Card.Description>
                    Kerkoni Prezantime!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/student/prezantimet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Shëtitjet</Card.Header>
                <Card.Description>
                 Shtoni shëtitje
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/student/listoTrips'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>


          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Garat</Card.Header>
                <Card.Description>
                  Garat!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/student/listoGara'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Njoftimet</Card.Header>
                <Card.Description>
                  Njoftimet!
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/student/listoNjoftimetS'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          
          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Materialet Mësimore</Card.Header>
                <Card.Description>
                  Materialet Mësimore
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons' >
                  <Button basic color='green' as={NavLink} to='/student/materialet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>



          <Grid.Row style={{ marginTop: '50px' }}>
            <Card>
              <Card.Content>
                <Card.Header>Orët Shtesë</Card.Header>
                <Card.Description>
                    Mbaj orët shtesë
              </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/student/trajnimet'>
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
