import React from 'react'
import { Card, CardBody, CardHeader, CardTitle, Tab, Tabs } from 'react-bootstrap'
import Combate from './Pages/Combate'
import Formações from './Pages/Formações'

const Manual = () => {
    return (
        <Card className='p-0'>
            <CardHeader>
                <CardTitle>Manual</CardTitle>
            </CardHeader>
            <CardBody>
                <Tabs>
                    <Tab eventKey={0} title="Combate">
                        <Combate />
                    </Tab>
                    <Tab eventKey={1} title="Formações">
                        <Formações />
                    </Tab>
                </Tabs>
            </CardBody>
        </Card>
    )
}

export default Manual