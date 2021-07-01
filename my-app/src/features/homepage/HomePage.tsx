import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import Foto from '../../assets/school.png';
import Tilt from 'react-parallax-tilt';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../app/stores/store';

export default observer (function HomePage(){
    const {modalStore} = useStore();

    return (
        <div className="container">
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Admin</h2>
                <Button as={NavLink} to='/adminLogin' className="login">Login as an Admin</Button>
                <img src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Student</h2>
                <Button as={NavLink} to='/studentLogin' className="login">Login as a Student</Button>
                <img src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Profesor</h2>
                <Button as={NavLink} to='/profesorLogin' className="login">Login as a Profesor</Button>
                <img src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Guardian</h2>
                <Button as={NavLink} to='/guardianLogin' className="login">Login as a Guardian</Button>
                <img src={Foto} className="product"/>
            </Segment>
            </Tilt>
        </div>

        /*  <div className='typesOfLogin' style={{marginTop:'10%'}}>
                <Segment.Group horizontal style={{width:'68%', marginLeft:'17%'}} raised>
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
    </div>*/
    )
})
