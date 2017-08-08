import axios from 'axios'
import {toastr} from 'react-redux-toastr'
import {reset as resetForm, initialize} from 'redux-form'
import {showTabs, selectTab} from './tabActions'
const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

const create = values => {
    return submit(values, 'post')
}

const update = values => {
    return submit(values, 'put')
}

const remove = values => {
    return submit(values, 'delete')
}

const submit = (values, method) => {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.responce.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

const showUpdate = billingCycle => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

const showDelete = billingCycle => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

export {getList, create, showUpdate, showDelete, init, update, remove}