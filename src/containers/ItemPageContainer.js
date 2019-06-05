import React, {Component} from 'react';
import Items from './../components/items';
import * as action from './../actions/ItemPageActions';
import {connect} from 'react-redux';

class ItemPageContainer extends Component {
    componentDidMount() {
        this
            .props
            .initLoad()
    }

    render() {
        return (
            <Items {...this.props}/>
        );
    }
}

const mapStateToProps= (state)=>{
    return {
        items: state.items.listItem
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        initLoad:()=> dispatch(action.getListItem()),
        doIsDone:(payload)=>dispatch(action.updateStatus(payload))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ItemPageContainer);