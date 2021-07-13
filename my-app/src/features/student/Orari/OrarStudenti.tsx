import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Grid, Table } from 'semantic-ui-react'
import { LoadingComponent } from '../../../app/layout/LoadingComponent';
import { useStore } from '../../../app/stores/store';
import StudentNavBar from '../StudentNavBar';

export default observer(function OrarStudenti() {
    const { orariStore } = useStore();
    const { oraretByEmri } = orariStore
    

    useEffect(()=>{
        orariStore.loadOraret();
      }, [orariStore]); 
      if(orariStore.loadingInitial) return <LoadingComponent content='Loading Orarin ...'/>
    return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width='4'>
                        <StudentNavBar />
                    </Grid.Column>
                    <Grid.Column width='11' style={{ marginTop: '5em', marginLeft: "3em" }}>
                        {oraretByEmri.map(orari => (
                            <Table size='small'>
                                <Table.Header>

                                    <Table.Row rowspan='4'>
                                        <Table.HeaderCell>VitiAkademik: {orari!.gjenerata} </Table.HeaderCell>
                                        <Table.HeaderCell>Klasa: {orari!.klasa}</Table.HeaderCell>
                                        <Table.HeaderCell>Nderrimi: {orari!.Nderrimi}</Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                    </Table.Row>

                                </Table.Header>

                                <Table.Body >
                                    {/*Per ditene hene */}
                                    <Table.Row>
                                        <Table.Cell rowspan='6'>E hene</Table.Cell>
                                        <Table.Cell>{orari!.lendaHen1}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen1}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen1}</Table.Cell>
                                    </Table.Row>
                                    <Table.Row height='10px'>

                                        <Table.Cell>{orari!.lendaHen2}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen2}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen2}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaHen3}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen3}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen3}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaHen4}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen4}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen4}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaHen5}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen5}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen5}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaHen6}</Table.Cell>
                                        <Table.Cell>{orari!.profaHen6}</Table.Cell>
                                        <Table.Cell>{orari!.kohaHen6}</Table.Cell>
                                    </Table.Row>



                                    {/*Per diten e marte */}
                                    <Table.Row>
                                        <Table.Cell rowspan='6'>EMarte</Table.Cell>
                                        <Table.Cell>{orari!.lendaMar1}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar1}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar1}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMar2}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar2}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar2}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMar3}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar3}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar3}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMar4}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar4}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar4}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMar5}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar5}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar5}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMar6}</Table.Cell>
                                        <Table.Cell>{orari!.profaMar6}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMar6}</Table.Cell>

                                    </Table.Row>

                                    {/*Per ditenn e merkure */}
                                    <Table.Row>
                                        <Table.Cell rowspan='6'>E merkure</Table.Cell>
                                        <Table.Cell>{orari!.lendaMer1}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer1}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer1}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMer2}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer2}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer2}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMer3}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer3}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer3}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMer4}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer4}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer4}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMer5}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer5}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer5}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaMer6}</Table.Cell>
                                        <Table.Cell>{orari!.profaMer6}</Table.Cell>
                                        <Table.Cell>{orari!.kohaMer6}</Table.Cell>

                                    </Table.Row>

                                    {/*Per ditenn e enjte */}
                                    <Table.Row>
                                        <Table.Cell rowspan='6'>E enjte</Table.Cell>
                                        <Table.Cell>{orari!.lendaEnjt1}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt1}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt1}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaEnjt2}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt2}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt2}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaEnjt3}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt3}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt3}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaEnjt4}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt4}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt4}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaEnjt5}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt5}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt5}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaEnjt6}</Table.Cell>
                                        <Table.Cell>{orari!.profaEnjt6}</Table.Cell>
                                        <Table.Cell>{orari!.kohaEnjt6}</Table.Cell>

                                    </Table.Row>
                                    {/*Per ditenn e premte */}
                                    <Table.Row>
                                        <Table.Cell rowspan='6'>E premte</Table.Cell>
                                        <Table.Cell>{orari!.lendaPre1}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre1}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre1}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaPre2}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre2}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre2}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaPre3}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre3}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre3}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaPre4}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre4}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre4}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaPre5}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre5}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre5}</Table.Cell>

                                    </Table.Row>
                                    <Table.Row>

                                        <Table.Cell>{orari!.lendaPre6}</Table.Cell>
                                        <Table.Cell>{orari!.profaPre6}</Table.Cell>
                                        <Table.Cell>{orari!.kohaPre6}</Table.Cell>

                                    </Table.Row>
                                </Table.Body>
                            </Table>
                        ))}
                    </Grid.Column>
                </Grid.Row>
            </Grid>

    )
})