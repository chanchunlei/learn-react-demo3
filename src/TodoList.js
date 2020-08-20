import React from 'react';
// import store from './store';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { inputValue, changeInputValue, handleChick, list, handleItemDelete } = props;
    return (
        <div>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button onClick={handleChick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item,index) => {
                        return <li
                            key={index}
                            onClick={() => handleItemDelete(index)}
                        >
                            {item}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
// class TodoList extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = store.getState();
//     //
//     // }
//     render() {
//
//     }
// }
const mapStateToProps = (state) => { //将reducer中的state映射到props里
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
//store.dispatch, props
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleChick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action);
        },
        handleItemDelete(idx) {
            const action = {
                type: 'delete_item',
                index: idx
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
