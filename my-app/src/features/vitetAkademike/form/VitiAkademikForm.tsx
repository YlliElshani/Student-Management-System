import { observer } from 'mobx-react-lite';
import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'

export default observer(function VitiAkademimkForm() {
  const { vitiAkademikStore } = useStore();
  const { selectedVitiAkademik, closeForm, createVitiAkademik, updateVitiAkademik, loading } = vitiAkademikStore;

  const initialState = selectedVitiAkademik ?? {
    vitiAkademikId: '',
    vitiAk: '',
  }

  const [vitiAkademik, setVitiAkademik] = useState(initialState);


  function handleSubmit() {
    vitiAkademik.vitiAkademikId ? updateVitiAkademik(vitiAkademik) : createVitiAkademik(vitiAkademik);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setVitiAkademik({ ...vitiAkademik, [name]: value });
  };

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input onChange={handleInputChange} name='vitiAk' placeholder='VitiAkademik' value={vitiAkademik.vitiAk} />
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})


