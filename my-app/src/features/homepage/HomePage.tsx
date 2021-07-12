import { NavLink } from 'react-router-dom'
import { Button, Segment } from 'semantic-ui-react'
import Foto from '../../assets/school.png';
import Tilt from 'react-parallax-tilt';
import { observer } from 'mobx-react-lite';

export default observer (function HomePage(){
    return (
        <div className="container">
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Admin</h2>
                <Button as={NavLink} to='/adminLogin' className="login">Login as an Admin</Button>
                <img alt="" src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Student</h2>
                <Button as={NavLink} to='/studentLogin' className="login">Login as a Student</Button>
                <img alt="" src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Profesor</h2>
                <Button as={NavLink} to='/profesorLogin' className="login">Login as a Profesor</Button>
                <img alt="" src={Foto} className="product"/>
            </Segment>
            </Tilt>
            <Tilt>
            <Segment className="box" raised>
                <h2 className="name">Guardian</h2>
                <Button as={NavLink} to='/guardianLogin' className="login">Login as a Guardian</Button>
                <img alt="" src={Foto} className="product"/>
            </Segment>
            </Tilt>
        </div>

    )
})
