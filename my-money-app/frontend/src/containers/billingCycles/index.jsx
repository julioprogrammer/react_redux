import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {init, create, update, remove} from '../../redux/actions/billingCycleActions'

import ContentHeader from '../../components/ContentHeader'
import Content from '../../components/Content'
import Tabs from '../../components/Tabs'
import TabsHeader from '../../components/TabsHeader'
import TabsContent from '../../components/TabsContent'
import TabHeader from '../../components/TabHeader'
import TabContent from '../../components/TabContent'
import List from '../../components/BillingCycleList'
import Form from '../../components/BillingCycleForm'

class BillingCycles extends Component {
    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target='tabList' />
                            <TabHeader label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id='tabList'>
                                <List />
                            </TabContent>
                            <TabContent id='tabCreate'>
                                <Form onSubmit={this.props.create}
                                    submitLabel='Incluir' submitClass='primary' />
                            </TabContent>
                            <TabContent id='tabUpdate'>
                                <Form onSubmit={this.props.update}
                                    submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id='tabDelete'>
                                <Form onSubmit={this.props.remove} readOnly={true}
                                    submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => (bindActionCreators({init, create, update, remove}, dispatch))

export default connect(null, mapDispatchToProps)(BillingCycles)