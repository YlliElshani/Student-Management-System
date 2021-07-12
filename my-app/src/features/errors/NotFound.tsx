import { Link } from 'react-router-dom'
import { Button, Header, Icon, Segment } from 'semantic-ui-react'

export const NotFound = () => {
    return (
        <Segment textAlign='center'>
            <Header icon>
                <Icon name='search' />
                Oops - we've looked everywhere but couldn't find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to='/'>
                    Return to Home Page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}
