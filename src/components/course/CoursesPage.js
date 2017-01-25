import React , {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import  * as courseActions from '../../actions/courseActions';

class CoursesPage extends React.Component {

    constructor(props, context){
        super(props, context);

        this.state = {
            course:  {
                title: ""
            }
        };

        // IMP: do your bind in the constructor rather than in render method
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({course: course});
    }

    onClickSave(event) {
        // console.log("onClickSave!!!!!");
        // since we have not define "mapDispatchToProps " , connect will attach the dispatch to props
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>CoursePage Content</h1>
                {this.props.courses.map(this.courseRow)}
                <h2>Add Course</h2>
                <input  type="text" 
                        onChange={this.onTitleChange}
                        value= {this.state.course.title} />

                <input  type="submit"
                        onClick={this.onClickSave}
                        value= "Save" />
                
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//ownProps : refrence to own component props.
function mapStateToProps(state, ownProps) {
    return {
        courses: state.courses   // check the reducer variable "courses" also in rootReducer in index.js
    };
}

// helps us from manualy wrap our dispatch function.
//Manualy: createCourse: course => dispatch(courseActions.createCourse(course))
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}


//1] connect takes two parameter: mapStateToProps,mapDispatchToProps , 
//2] function return function and connect is higher order component that wraps the component
//3] mapDispatchToProps is optional , then components will automaticly dispatch property attached to it

// export default CoursesPage;  //without using redux
export default connect(
    mapStateToProps, mapDispatchToProps) (CoursesPage);
