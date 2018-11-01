import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Contentheader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContents'
import Tabheader from '../common/tab/tabHeader'
import tabContent from '../common/tab/tabContent'
import { selectTab, showTabs } from '../common/tab/tabActions'

class BillingCycle extends Component {

    componentWillMount(){
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>   
                <Contentheader title='Ciclos de Pagamentos' small='Cadastro'/>
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <Tabheader label='Listar' icon='bars' target='tabList'/>
                            <Tabheader label='Incluir' icon='plus' target='tabCreate'/>
                            <Tabheader label='Alterar' icon='pencil' target='tabUpdate'/>
                            <Tabheader label='Excluir' icon='trash-o' target='tabDelete'/>
                        </TabsHeader>
                        <TabsContent>
                            <tabContent id='tabList'><h1>Lista</h1></tabContent>
                            <tabContent id='tabCreate'><h1>Incluir</h1></tabContent>
                            <tabContent id='tabUpdate'><h1>Alterar</h1></tabContent>
                            <tabContent id='tabDelete'><h1>Excluir</h1></tabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({selectTab, showTabs}, dispatch)
export default connect(null, mapDispatchToProps)(BillingCycle)