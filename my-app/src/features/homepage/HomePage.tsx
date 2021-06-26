import React from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Icon, Label, Segment } from 'semantic-ui-react'

export const HomePage = () => {
    return (
        <div className='homepage'>
            <Segment clearing raised>
                <Container> 
                </Container>
            </Segment>
            <div className='typesOfLogin' style={{marginTop:'50px'}}>
                <Segment.Group horizontal style={{width:'70%', marginLeft:'13%'}} raised>
                    <Segment>
                    <Container textAlign='center'>
                        <Icon circular name='users' size='huge' style={{marginTop:'50px', marginBottom:'30px'}}/>
                        <Label as={NavLink} to='/adminLogin' tag style={{marginBottom:'50px'}}>
                            Kycu si Admin
                        </Label>
                    </Container>
                    </Segment>
                    <Segment>
                    <Container textAlign='center'>
                        <Icon circular color='teal' name='users' size='huge' style={{marginTop:'50px', marginBottom:'30px'}}/>
                        <Label as={NavLink} to='/studentLogin' tag>
                            Kycu si Nxënës
                        </Label>
                    </Container>
                    </Segment>
                    <Segment>
                    <Container textAlign='center'>
                        <Icon circular inverted name='users' size='huge' style={{marginTop:'50px', marginBottom:'30px'}}/>
                        <Label as={NavLink} to='/profesorLogin' tag>
                            Kycu si Profesor
                        </Label>
                    </Container>
                    </Segment>
                    <Segment>
                    <Container textAlign='center'>
                        <Icon circular inverted color='teal' name='users' size='huge' style={{marginTop:'50px', marginBottom:'30px'}}/>
                        <Label as={NavLink} to='/guardianLogin' tag>
                            Kycu si Prind
                        </Label>
                    </Container>
                    </Segment>
                </Segment.Group>
            </div>
        </div>
    )
}
