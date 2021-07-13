import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent,  useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { useStore } from '../../../app/stores/store'


export default observer(function VleresimiStudentiForm() {
  const { vleresimiStore } = useStore();
  const { selectedVleresimi, createVleresimi, updateVleresimi } = vleresimiStore;

  const { notaStore } = useStore();
  const { notat } = notaStore;
  const { lendaStore } = useStore();
  const { lendetByEmri } = lendaStore;

  const initialState = selectedVleresimi ?? {
    vleresimiId: '',
    studenti: '',
    lenda: '',
    nota: '',
    dataEVendosjes: '',
    oraEVendosjes: ''
  }

 
  const [vleresimi, setVleresimi] = useState(initialState);
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    vleresimi.vleresimiId ? updateVleresimi(vleresimi) : createVleresimi(vleresimi);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setVleresimi({ ...vleresimi, [name]: value });
  };
  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setVleresimi({ ...vleresimi, [name]: value });
  }

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Form.Input>
      <select onChange={changeSelectOptionHandler} name='lenda' placeholder='Lenda' value={vleresimi.lenda}>
          {lendetByEmri.map(lenda => (
            
            <option>{lenda.emri}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input>
        <select onChange={changeSelectOptionHandler} name='nota' placeholder='Nota' value={vleresimi.nota}>
          {notat.map(nota => (
            
            <option>{nota.grade}</option>
          ))}
        </select>
        </Form.Input>
        <Form.Input onChange={handleInputChange} name='dataVendosjes' placeholder='dataVendosjes' value={vleresimi.dataEVendosjes} />
        <Form.Input onChange={handleInputChange} name='oraVendosjes' placeholder='oraVendosjes' value={vleresimi.oraEVendosjes} />
      </Form>
    </Segment>
  )
});

