import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Tab, Tabs } from 'react-bootstrap'
import Combate from './Pages/Combate'
import Formações from './Pages/Formações'
import Ficha from './Pages/Ficha'
import Magias from './Pages/Magias'
import Grimório from './Pages/Grimório'

const Manual = () => {
    return (
        <Card className='p-0'>
            <CardHeader>
                <CardTitle>Manual</CardTitle>
            </CardHeader>
            <CardBody>
                <Tabs variant='pills' justify>
                    <Tab eventKey={0} title="Ficha">
                        <Ficha />
                    </Tab>
                    <Tab eventKey={1} title="Combate">
                        <Combate />
                    </Tab>
                    <Tab eventKey={2} title="Formações">
                        <Formações />
                    </Tab>
                    <Tab eventKey={3} title="Magias">
                        <Magias />
                    </Tab>
                    <Tab eventKey={4} title="Grimório">
                        <Grimório />
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Manual