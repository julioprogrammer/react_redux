import React from 'react'

import Grid from '../Grid'
import Row from '../Row'
import Widget from '../Widget'

const Summary = ({credit, debt}) => (
    <Grid cols='12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <Widget cols='12 4' color='green' icon='bank'
                    value={`R$ ${credit}`} text='Total de Creditos' />
                <Widget cols='12 4' color='red' icon='credit-card'
                    value={`R$ ${debt}`} text='Total de Debitos' />
                <Widget cols='12 4' color='blue' icon='money'
                    value={`R$ ${credit - debt}`} text='Total Consolidado' />
            </Row>
        </fieldset>
    </Grid>
)

export default Summary