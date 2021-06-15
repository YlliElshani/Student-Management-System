import React from 'react'
import { Item, Segment } from 'semantic-ui-react'
import { ITrip } from '../../../app/models/trip'

interface IProps{
  trips: ITrip[]
}

export const Lista:React.FC<IProps> = ({trips}) => {
    return (
        <Segment fluid>
        <Item.Group divided>
            {trips.map(trip=>(
                <Item key={trip.tripId}>
                <Item.Content>
                  <Item.Header>Emri:</Item.Header>
                  <Item.Meta>
                    <span className='price'>{trip.name}</span>
                  </Item.Meta>
                  <h4>
                      Data e udhetimit:
                  </h4>
                  <Item.Meta>
                      <span className='price'>{trip.date}</span>
                  </Item.Meta>
                  <Item.Description>
                    <h4>Info Shtese</h4>
                    <span>
                      Vendi:{trip.description}
                    </span>
                    <br/>
                    <br/>

                    <span>
                      Mundesin per te arrdhur kane:{trip.participants}
                    </span>
                    <br/>
                    <br/>
                    <span>
                      Cmimi:{trip.price}
                    </span>
                  </Item.Description>
                </Item.Content>
              </Item>
            ))}
      </Item.Group>
        </Segment>
    )
}
