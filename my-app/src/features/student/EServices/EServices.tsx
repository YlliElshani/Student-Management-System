import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Container, Form, Segment } from 'semantic-ui-react'
import StudentMiniNav from './StudentMiniNav'

export const EServices = () => {
    return (
        <div>
        <StudentMiniNav/>
            <Segment.Group horizontal style={{width:'75%', marginTop:'-35%', height:'400px', marginLeft:'24%'}}>
                    <Segment style={{width:'5%'}}>
                        <Form style={{padding:'60px'}}>
                            <Form.Field>
                            <h2>Sistemi i menaxhimit të studentëve</h2>
                            </Form.Field>
                        </Form>
                        <Form style={{padding:'60px', marginLeft:'15%'}}>
                            <Button as={NavLink} to='/studentProfile' type='submit'>Profili im</Button>
                            <Button as={NavLink} to='/EServices' type='submit'>E-Shërbimet</Button>
                        </Form>
                    </Segment>
                    <Segment className='Student' >
                    </Segment>
                </Segment.Group>
        </div>

    )
}
