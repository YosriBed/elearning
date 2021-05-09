import React from 'react';
import { useSelector } from 'react-redux';
import Welcome from './Welcome';
import StudentHomepage from '../Student';
import TeacherHomepage from '../Teacher';
import AdminHomepage from '../Admin';

const index = () => {
  const user = useSelector(state => state.user);
  if(!user || !user.role){
    return <Welcome/>;
  }
  switch(user.role){
    case 'student':
      console.log('hezllo world');
      return <StudentHomepage/>;
    case 'teacher':
      return <TeacherHomepage/>;
    case 'admin':
      return <AdminHomepage/>;
    default: 
      return <Welcome/>;
  }
  
};

export default index;
