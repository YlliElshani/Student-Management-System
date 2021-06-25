import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Checkbox, Container, Form, Segment } from 'semantic-ui-react'

export const GuardianLogin = () => {
    return (
        <div className='login'> 
            <Container>
                <Segment.Group horizontal style={{width:'70%', marginLeft:'15%', marginTop:'15%', height:'400px'}}>
                    <Segment style={{width:'5%'}}>
                        <Form style={{padding:'60px'}}>
                            <Form.Field> <label>Guardian Login</label> </Form.Field>
                            <Form.Field>
                            <label>Email</label>
                            <input placeholder='Email' />
                            </Form.Field>
                            <Form.Field>
                            <label>Password</label>
                            <input placeholder='Password' />
                            </Form.Field>
                            <Form.Field>
                            <Checkbox label='Remember me' />
                            </Form.Field>
                            <Button as={NavLink} to='/admin/profile' type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                    <Segment className='rightSideOfLogIn' >
                    </Segment>
                </Segment.Group>
            </Container>
        </div>
    )
}
