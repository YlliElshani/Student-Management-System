import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button, Container, Divider, Form, Grid, Image, Segment } from 'semantic-ui-react';
import { StudentNavBar } from './StudentNavBar'

export const Student = () => {
    return (
        <div>
            <Container>
            <StudentNavBar/>
            <Segment.Group horizontal style={{width:'100%', marginTop:'15%', height:'400px'}}>
                    <Segment style={{width:'5%'}}>
                        <Form style={{padding:'60px'}}>
                            <Form.Field>
                            <h2>Sistemi i menaxhimit të studentëve</h2>
                            </Form.Field>
                        </Form>
                        <Form style={{padding:'60px', marginLeft:'15%'}}>
                            <Button as={NavLink} to='/studentProfile' type='submit'>Profili im</Button>
                            <Button as={NavLink} to='/transcript' type='submit'>Transkripta</Button>
                        </Form>
                    </Segment>
                    <Segment className='Student' >
                    </Segment>
                </Segment.Group>
            </Container>
        </div>
    )
}

