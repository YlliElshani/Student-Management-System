import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function KlasaForm() {
  const { klasaStore } = useStore();
  const { selectedKlasa, closeForm, createKlasa, updateKlasa, loading } = klasaStore;

  const initialState = selectedKlasa ?? {
    klasaId: '',
    emriKl: '',
  }

  const [klasa, setKlasa] = useState(initialState);


  function handleSubmit() {
    klasa.klasaId ? updateKlasa(klasa) : createKlasa(klasa);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setKlasa({ ...klasa, [name]: value });
  };

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='emriKl' placeholder='Klasa' value={klasa.emriKl} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})


