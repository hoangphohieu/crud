import React, {Component} from 'react';

class Items extends Component {

    render() {
        let listData = [];
        if (this.props.items) {
            listData = this
                .props
                .items
                .map((item, key) => {
                    return (
                        <tr key={key}>
                            <th>{item.id}</th>
                            <th>{item.name}</th>
                            <th>
                                <button
                                    className={(
                                        item.isDone)
                                        ? "xanh"
                                        : "do"}
                                    onClick={()=>this.props.doIsDone(item.id)}>V</button>
                            </th>
                        </tr>
                    )
                })
        }

        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>tên
                            </th>
                            <th>status
                            </th>
                        </tr>
                        {listData}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Items;