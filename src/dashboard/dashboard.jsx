import React, { Component } from 'react'

import Contentheader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Contentheader title='Dashboard' small='Versão 1.0'/>
                <Content>
                    DashBoard
                </Content>
            </div>
        )
    }
}

export default Dashboard