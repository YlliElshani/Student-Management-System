import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import {ChangeEvent, useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function ParaleljaaForm() {
    const {paraleljaaStore} = useStore();
    const {selectedParaleljaa, closeForm, createParaleljaa, updateParaleljaa, loading} = paraleljaaStore;

    const initialState =selectedParaleljaa ?? {
          paraleljaaId: '',
          emriPar: '',
        }
    
    const [paraleljaa, setParaleljaa] = useState(initialState);
  
  
    function handleSubmit () {
      paraleljaa.paraleljaaId ? updateParaleljaa(paraleljaa) : createParaleljaa(paraleljaa);
    };
  
    function handleInputChange (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      setParaleljaa({ ...paraleljaa, [name]: value });
    };

    return (
    <Segment clearing>
        
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <Form.Input onChange={handleInputChange} name='emriPar' placeholder='Paraleljaa' value={paraleljaa.emriPar} />
            <Button loading={loading} floated='right' positive type='submit' content='Dërgo'/>
            <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
        </Form>
        
    </Segment>
    )
})
