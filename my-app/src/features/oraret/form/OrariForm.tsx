import axios from 'axios';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment, Table } from 'semantic-ui-react'
import { IKoheZ } from '../../../app/models/kOres';
import { IParaleljaKlasa } from '../../../app/models/paraleljaKlasa';
import { IVitiAkademik } from '../../../app/models/vitiAkademik';
import orariStore from '../../../app/stores/orariStore';
import { useStore } from '../../../app/stores/store'
import KohaZDetails from '../../kohezgjatjaOres/KohaZDetails';


export default observer(function OrariForm() {
  const { orariStore } = useStore();
  const { selectedOrari, closeForm, createOrari, updateOrari, loading } = orariStore;
  //i shton qito store t'qasaj tabele qe ka me hi ndrop-down (12-13)


  const initialState = selectedOrari ?? {
    orariId: '',
    gjenerata: '',
    klasa: '',
    Nderrimi: '',
    dita: '',

    lendaHen1: '',
    lendaHen2: '',
    lendaHen3: '',
    lendaHen4: '',
    lendaHen5: '',
    lendaHen6: '',
    lendaHen7: '',

    profaHen1: '',
    profaHen2: '',
    profaHen3: '',
    profaHen4: '',
    profaHen5: '',
    profaHen6: '',
    profaHen7: '',

    kohaHen1: '',
    kohaHen2: '',
    kohaHen3: '',
    kohaHen4: '',
    kohaHen5: '',
    kohaHen6: '',
    kohaHen7: '',

    lendaMar1: '',
    lendaMar2: '',
    lendaMar3: '',
    lendaMar4: '',
    lendaMar5: '',
    lendaMar6: '',
    lendaMar7: '',

    profaMar1: '',
    profaMar2: '',
    profaMar3: '',
    profaMar4: '',
    profaMar5: '',
    profaMar6: '',
    profaMar7: '',

    kohaMar1: '',
    kohaMar2: '',
    kohaMar3: '',
    kohaMar4: '',
    kohaMar5: '',
    kohaMar6: '',
    kohaMar7: '',

    lendaMer1: '',
    lendaMer2: '',
    lendaMer3: '',
    lendaMer4: '',
    lendaMer5: '',
    lendaMer6: '',
    lendaMer7: '',

    profaMer1: '',
    profaMer2: '',
    profaMer3: '',
    profaMer4: '',
    profaMer5: '',
    profaMer6: '',
    profaMer7: '',

    kohaMer1: '',
    kohaMer2: '',
    kohaMer3: '',
    kohaMer4: '',
    kohaMer5: '',
    kohaMer6: '',
    kohaMer7: '',

    lendaEnjt1: '',
    lendaEnjt2: '',
    lendaEnjt3: '',
    lendaEnjt4: '',
    lendaEnjt5: '',
    lendaEnjt6: '',
    lendaEnjt7: '',

    profaEnjt1: '',
    profaEnjt2: '',
    profaEnjt3: '',
    profaEnjt4: '',
    profaEnjt5: '',
    profaEnjt6: '',
    profaEnjt7: '',

    kohaEnjt1: '',
    kohaEnjt2: '',
    kohaEnjt3: '',
    kohaEnjt4: '',
    kohaEnjt5: '',
    kohaEnjt6: '',
    kohaEnjt7: '',

    lendaPre1: '',
    lendaPre2: '',
    lendaPre3: '',
    lendaPre4: '',
    lendaPre5: '',
    lendaPre6: '',
    lendaPre7: '',

    profaPre1: '',
    profaPre2: '',
    profaPre3: '',
    profaPre4: '',
    profaPre5: '',
    profaPre6: '',
    profaPre7: '',

    kohaPre1: '',
    kohaPre2: '',
    kohaPre3: '',
    kohaPre4: '',
    kohaPre5: '',
    kohaPre6: '',
    kohaPre7: '',

  }


  const [orari, setOrari] = useState(initialState);
  //shton rreshtin 26
  const [selected, setSelected] = React.useState("");


  function handleSubmit() {
    orari.orariId ? updateOrari(orari) : createOrari(orari);
  };

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setOrari({ ...orari, [name]: value });
  };
  //e shton 45-49


  /*
  Kodi i nevojshem per te gjithedropdowns*/

  const { vitiAkademikStore } = useStore();
  const { vitetAkademikeByEmri } = vitiAkademikStore;

  const { paraleljaKlasaStore } = useStore();
  const { paraleletKlasetByEmri } = paraleljaKlasaStore;

  const { nderrimiStore } = useStore();
  const { nderrimiByEmri } = nderrimiStore;

  const { lendaStore } = useStore();
  const { lendetByEmri } = lendaStore;

  const { koheZStore } = useStore();
  const { koheZ } = koheZStore;


  /*Per react use Effect */
  //@ts-ignore
  const [data1, setData1]=React.useState<IVitiAkademik[]>([] as vitetAkademike);
  //@ts-ignore
  const [data2, setData2]=React.useState<IParaleljaKlasa[]>([] as paraleletKlaset);
  //@ts-ignore
  const [data3, setData3]=React.useState<INderrimi[]>([] as nderrimet);
  //@ts-ignore
  const [data4, setData4]=React.useState<ILenda[]>([] as lendet);
  //@ts-ignore
  const [data5, setData5]=React.useState<IKoheZ[]>([] as kohezgjatjet);


  /*USE EFECTS */
  React.useEffect(()=>{
    axios
    .get(('https://localhost:5000/API/vitetAkademike'))
    .then((res)=>setData1(res.data));
},[])

React.useEffect(()=>{
  axios
  .get(('https://localhost:5000/API/paraleletKlaset'))
  .then((res)=>setData2(res.data));
},[])


React.useEffect(()=>{
  axios
  .get(('https://localhost:5000/API/nderrimet'))
  .then((res)=>setData3(res.data));
},[])

React.useEffect(()=>{
  axios
  .get(('https://localhost:5000/API/lendet'))
  .then((res)=>setData4(res.data));
},[])

React.useEffect(()=>{
  axios
  .get(('https://localhost:5000/API/kohezgjatja'))
  .then((res)=>setData5(res.data));
},[])



  function changeSelectOptionHandler(event: { target: { value: any; name?: any; }; }) {
    setSelected(event.target.value);
    const { name, value } = event.target;
    setOrari({ ...orari, [name]: value });
  }

  



  /* */

  return (
    <Segment clearing>

      <Form onSubmit={handleSubmit} autoComplete='off'>
        <Table>
          <Table.Header>
            <Table.Row rowspan='4'>
              <Table.HeaderCell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='gjenerata' placeholder='Klasa' value={orari.gjenerata}>
                    {data1.map(vitiAkademik => (

                      <option>{vitiAkademik.vitiAk}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={orari.klasa}>
                    {data2.map(paraleljaKlasa => (

                      <option>{paraleljaKlasa.emriKl}/{paraleljaKlasa.emriPar}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='Nderrimi' placeholder='Klasa' value={orari.Nderrimi}>
                    {data3.map(nderrimi => (

                      <option>{nderrimi.ndrr}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>


            </Table.Row>

          </Table.Header>

          <Table.Body >
            {/*Per ditene hene */}
            <Table.Row>
              <Table.Cell rowspan='6'>E hene</Table.Cell>
              <Table.Cell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen1' placeholder='Klasa' value={orari.lendaHen1}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen1' placeholder='Klasa' value={orari.profaHen1}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen1' placeholder='Klasa' value={orari.kohaHen1}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
            </Table.Row>
            <Table.Row height='10px'>

              <Table.Cell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen2' placeholder='Klasa' value={orari.lendaHen2}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen2' placeholder='Klasa' value={orari.profaHen2}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen2' placeholder='Klasa' value={orari.kohaHen2}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen3' placeholder='Klasa' value={orari.lendaHen3}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen3' placeholder='Klasa' value={orari.profaHen3}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen3' placeholder='Klasa' value={orari.kohaHen3}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen4' placeholder='Klasa' value={orari.lendaHen4}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen4' placeholder='Klasa' value={orari.profaHen4}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen4' placeholder='Klasa' value={orari.kohaHen4}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen5' placeholder='Klasa' value={orari.lendaHen5}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen5' placeholder='Klasa' value={orari.profaHen5}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen5' placeholder='Klasa' value={orari.kohaHen5}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaHen6' placeholder='Klasa' value={orari.lendaHen6}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen6' placeholder='Klasa' value={orari.profaHen6}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen6' placeholder='Klasa' value={orari.kohaHen6}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
            </Table.Row>



            {/*Per diten e marte */}
            <Table.Row>
              <Table.Cell rowspan='6'>EMarte</Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar1' placeholder='Klasa' value={orari.lendaMar1}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar1' placeholder='Klasa' value={orari.profaMar1}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar1' placeholder='Klasa' value={orari.kohaMar1}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar2' placeholder='Klasa' value={orari.lendaMar2}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar2' placeholder='Klasa' value={orari.profaMar2}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar2' placeholder='Klasa' value={orari.kohaMar2}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar3' placeholder='Klasa' value={orari.lendaMar3}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar3' placeholder='Klasa' value={orari.profaMar3}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar3' placeholder='Klasa' value={orari.kohaMar3}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar4' placeholder='Klasa' value={orari.lendaMar4}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar4' placeholder='Klasa' value={orari.profaMar4}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar4' placeholder='Klasa' value={orari.kohaMar4}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar5' placeholder='Klasa' value={orari.lendaMar5}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar5' placeholder='Klasa' value={orari.profaMar5}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar5' placeholder='Klasa' value={orari.kohaMar5}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar6' placeholder='Klasa' value={orari.lendaMar6}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar6' placeholder='Klasa' value={orari.profaMar6}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar6' placeholder='Klasa' value={orari.kohaMar6}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>

            {/*Per ditenn e merkure */}
            <Table.Row>
              <Table.Cell rowspan='6'>E merkure</Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer1' placeholder='Klasa' value={orari.lendaMer1}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer1' placeholder='Klasa' value={orari.profaMer1}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer1' placeholder='Klasa' value={orari.kohaMer1}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer2' placeholder='Klasa' value={orari.lendaMer2}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer2' placeholder='Klasa' value={orari.profaMer2}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer2' placeholder='Klasa' value={orari.kohaMer2}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer3' placeholder='Klasa' value={orari.lendaMer3}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer3' placeholder='Klasa' value={orari.profaMer3}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer3' placeholder='Klasa' value={orari.kohaMer3}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer4' placeholder='Klasa' value={orari.lendaMer4}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer4' placeholder='Klasa' value={orari.profaMer4}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer4' placeholder='Klasa' value={orari.kohaMer4}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer5' placeholder='Klasa' value={orari.lendaMer5}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer5' placeholder='Klasa' value={orari.profaMer5}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer5' placeholder='Klasa' value={orari.kohaMer5}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMer6' placeholder='Klasa' value={orari.lendaMer6}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer6' placeholder='Klasa' value={orari.profaMer6}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer6' placeholder='Klasa' value={orari.kohaMer6}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>

            {/*Per ditenn e enjte */}
            <Table.Row>
              <Table.Cell rowspan='6'>E enjte</Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt1' placeholder='Klasa' value={orari.lendaEnjt1}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt1' placeholder='Klasa' value={orari.profaEnjt1}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt1' placeholder='Klasa' value={orari.kohaEnjt1}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt2' placeholder='Klasa' value={orari.lendaEnjt2}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt2' placeholder='Klasa' value={orari.profaEnjt2}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt2' placeholder='Klasa' value={orari.kohaEnjt2}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt3' placeholder='Klasa' value={orari.lendaEnjt3}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt3' placeholder='Klasa' value={orari.profaEnjt3}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt3' placeholder='Klasa' value={orari.kohaEnjt3}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt4' placeholder='Klasa' value={orari.lendaEnjt4}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt1' placeholder='Klasa' value={orari.profaEnjt4}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt4' placeholder='Klasa' value={orari.kohaEnjt4}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt5' placeholder='Klasa' value={orari.lendaEnjt5}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt5' placeholder='Klasa' value={orari.profaEnjt5}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt5' placeholder='Klasa' value={orari.kohaEnjt5}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt6' placeholder='Klasa' value={orari.lendaEnjt6}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt6' placeholder='Klasa' value={orari.profaEnjt6}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt6' placeholder='Klasa' value={orari.kohaEnjt6}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            {/*Per ditenn e premte */}
            <Table.Row>
              <Table.Cell rowspan='6'>E premte</Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre1' placeholder='Klasa' value={orari.lendaPre1}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre1' placeholder='Klasa' value={orari.profaPre1}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre1' placeholder='Klasa' value={orari.kohaPre1}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre2' placeholder='Klasa' value={orari.lendaPre2}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre2' placeholder='Klasa' value={orari.profaPre2}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre2' placeholder='Klasa' value={orari.kohaPre2}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre3' placeholder='Klasa' value={orari.lendaPre3}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre3' placeholder='Klasa' value={orari.profaPre3}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre3' placeholder='Klasa' value={orari.kohaPre3}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre4' placeholder='Klasa' value={orari.lendaPre4}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre4' placeholder='Klasa' value={orari.profaPre4}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre4' placeholder='Klasa' value={orari.kohaPre4}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre5' placeholder='Klasa' value={orari.lendaPre5}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre5' placeholder='Klasa' value={orari.profaPre5}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre5' placeholder='Klasa' value={orari.kohaPre5}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaPre6' placeholder='Klasa' value={orari.lendaPre6}>
                    {data4.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre6' placeholder='Klasa' value={orari.profaPre6}>
                    {data4.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre6' placeholder='Klasa' value={orari.kohaPre6}>
                    {data5.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
          </Table.Body>
        </Table>
        <Button loading={loading} floated='right' positive type='submit' content='Dërgo' />
        <Button onClick={closeForm} floated='right' type='submit' content='Anulo' />
      </Form>

    </Segment>
  )
})

