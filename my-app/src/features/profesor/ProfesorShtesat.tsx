import { Grid, Card, Button } from 'semantic-ui-react'
import AdminNavBar from './Profesor-Profili/ProfesorNavBar'
import { NavLink } from 'react-router-dom';

export default function ProfesorProfile() {
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


          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Detyrat</Card.Header>
                <Card.Description>
                  Shtimi i detyrave per nxenesin e caktuar
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/detyrat'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Vleresimi</Card.Header>
                <Card.Description>
                  Shtimi i Vleresimit per nxenesin e caktuar
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/vleresimet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Kerkesa te Ndihmes</Card.Header>
                <Card.Description>
                  Kerkesa per ndihme nga nxenesit
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/kerkesaNView'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Prezantimet</Card.Header>
                <Card.Description>
                  Shiko Prezantimet
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/prezantimet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Oret Shtese</Card.Header>
                <Card.Description>
                  Shtimi i Oreve Shtese per nxenesin e caktuar
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/trajnimet'>
                    Shfaq
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Grid.Row>

          <Grid.Row style={{ marginTop: '50px' }}>
            <Card >
              <Card.Content>
                <Card.Header>Evidenca prinderve</Card.Header>
                <Card.Description>
                  Shtimi i Evidences per konsultim me prindin
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className='ui two buttons'>
                  <Button basic color='green' as={NavLink} to='/profesor/EvidencaPrinderve'>
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
