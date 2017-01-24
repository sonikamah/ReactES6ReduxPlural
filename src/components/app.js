import React , {PropTypes} from 'react';
import Header from './common/header'

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <p className="header"><Header/></p>
                <hr/>
                {this.props.children}
                <hr/>
                <p className="footer">Footer here ...</p>
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;