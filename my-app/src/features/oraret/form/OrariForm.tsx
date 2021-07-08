import { observer } from 'mobx-react-lite';
import React from 'react';
import { ChangeEvent, useState } from 'react'
import { Button, Form, Segment, Table } from 'semantic-ui-react'
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
                    {vitetAkademikeByEmri.map(vitiAkademik => (

                      <option>{vitiAkademik.vitiAk}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='klasa' placeholder='Klasa' value={orari.klasa}>
                    {paraleletKlasetByEmri.map(paraleljaKlasa => (

                      <option>{paraleljaKlasa.emriKl}/{paraleljaKlasa.emriPar}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='Nderrimi' placeholder='Klasa' value={orari.Nderrimi}>
                    {nderrimiByEmri.map(nderrimi => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen1' placeholder='Klasa' value={orari.profaHen1}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen1' placeholder='Klasa' value={orari.kohaHen1}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen2' placeholder='Klasa' value={orari.profaHen2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen2' placeholder='Klasa' value={orari.kohaHen2}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen3' placeholder='Klasa' value={orari.profaHen3}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen3' placeholder='Klasa' value={orari.kohaHen3}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen4' placeholder='Klasa' value={orari.profaHen4}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen4' placeholder='Klasa' value={orari.kohaHen4}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen5' placeholder='Klasa' value={orari.profaHen5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen5' placeholder='Klasa' value={orari.kohaHen5}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaHen6' placeholder='Klasa' value={orari.profaHen6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaHen6' placeholder='Klasa' value={orari.kohaHen6}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar1' placeholder='Klasa' value={orari.profaMar1}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar1' placeholder='Klasa' value={orari.kohaMar1}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar2' placeholder='Klasa' value={orari.profaMar2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar2' placeholder='Klasa' value={orari.kohaMar2}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar3' placeholder='Klasa' value={orari.profaMar3}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar3' placeholder='Klasa' value={orari.kohaMar3}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar4' placeholder='Klasa' value={orari.profaMar4}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar4' placeholder='Klasa' value={orari.kohaMar4}>
                    {koheZ.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar5' placeholder='Klasa' value={orari.lendaMar5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar5' placeholder='Klasa' value={orari.profaMar5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar5' placeholder='Klasa' value={orari.kohaMar5}>
                    {koheZ.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaMar6' placeholder='Klasa' value={orari.lendaMar6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMar6' placeholder='Klasa' value={orari.profaMar6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMar6' placeholder='Klasa' value={orari.kohaMar6}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer1' placeholder='Klasa' value={orari.profaMer1}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer1' placeholder='Klasa' value={orari.kohaMer1}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer2' placeholder='Klasa' value={orari.profaMer2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer2' placeholder='Klasa' value={orari.kohaMer2}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer3' placeholder='Klasa' value={orari.profaMer3}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer3' placeholder='Klasa' value={orari.kohaMer3}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer4' placeholder='Klasa' value={orari.profaMer4}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer4' placeholder='Klasa' value={orari.kohaMer4}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer5' placeholder='Klasa' value={orari.profaMer5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer5' placeholder='Klasa' value={orari.kohaMer5}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaMer6' placeholder='Klasa' value={orari.profaMer6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaMer6' placeholder='Klasa' value={orari.kohaMer6}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt1' placeholder='Klasa' value={orari.profaEnjt1}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt1' placeholder='Klasa' value={orari.kohaEnjt1}>
                    {koheZ.map(koha => (

                      <option>{koha.oraNisjes}  -  {koha.kohaMin}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>

            </Table.Row>
            <Table.Row>

              <Table.Cell><Form.Input>
                  <select onChange={changeSelectOptionHandler} name='lendaEnjt2' placeholder='Klasa' value={orari.lendaEnjt2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input></Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt2' placeholder='Klasa' value={orari.profaEnjt2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt2' placeholder='Klasa' value={orari.kohaEnjt2}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt3' placeholder='Klasa' value={orari.profaEnjt3}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt3' placeholder='Klasa' value={orari.kohaEnjt3}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt1' placeholder='Klasa' value={orari.profaEnjt4}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt4' placeholder='Klasa' value={orari.kohaEnjt4}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt5' placeholder='Klasa' value={orari.profaEnjt5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt5' placeholder='Klasa' value={orari.kohaEnjt5}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaEnjt6' placeholder='Klasa' value={orari.profaEnjt6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaEnjt6' placeholder='Klasa' value={orari.kohaEnjt6}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre1' placeholder='Klasa' value={orari.profaPre1}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre1' placeholder='Klasa' value={orari.kohaPre1}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre2' placeholder='Klasa' value={orari.profaPre2}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre2' placeholder='Klasa' value={orari.kohaPre2}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre3' placeholder='Klasa' value={orari.profaPre3}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre3' placeholder='Klasa' value={orari.kohaPre3}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre4' placeholder='Klasa' value={orari.profaPre4}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre4' placeholder='Klasa' value={orari.kohaPre4}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre5' placeholder='Klasa' value={orari.profaPre5}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre5' placeholder='Klasa' value={orari.kohaPre5}>
                    {koheZ.map(koha => (

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
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.emri}  -  {lenda.klasa}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='profaPre6' placeholder='Klasa' value={orari.profaPre6}>
                    {lendetByEmri.map(lenda => (

                      <option>{lenda.profesori}</option>
                    ))}
                  </select>
                </Form.Input>
              </Table.Cell>
              <Table.Cell>
              <Form.Input>
                  <select onChange={changeSelectOptionHandler} name='kohaPre6' placeholder='Klasa' value={orari.kohaPre6}>
                    {koheZ.map(koha => (

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

