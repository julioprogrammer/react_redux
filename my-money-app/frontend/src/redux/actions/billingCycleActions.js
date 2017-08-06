import axios from 'axios'
import {toastr} from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

const create = values => {
    axios.post(`${BASE_URL}/billingCycles`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        })
        .catch(e => {
            e.responce.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}

export {getList, create}