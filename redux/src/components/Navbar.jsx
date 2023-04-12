import { connect } from 'react-redux'
import PropTypes from "prop-types";
const NavBar = (props) => {
    const { todos } = props;
    const length = todos.length;
    return (
        <ul>
            <li>Total todos:{length}</li>
        </ul>
    );
}
NavBar.propTypes = {
    todos: PropTypes.array.isRequired,
}
const mapStateToProps = state => ({
    todos: state.myTodos.todos
})
export default connect(mapStateToProps, {})(NavBar);