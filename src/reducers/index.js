import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducers =  combineReducers ({
    courses // short hand property name . similar to rootReducers courses: courses
});

export default rootReducers;