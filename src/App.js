

import { useEffect, useState } from 'react';
import { Route,Switch,Redirect } from 'react-router-dom';
import './App.css';


import AddTeachers from './Components/addteachers';
import Dashboard from './Components/dashboard';
import { EditStudents } from './Components/editstudent';
import { EditTeacher } from './Components/editteacher';
import { StudentsDetails } from './Components/studentdetail';
import { StudentProfile } from './Components/studentprofile';
import { TeacherDetails } from './Components/teacherdetail';
import { TeacherProfile } from './Components/teacherprofile';

import AddStudents from './Components/addstudent';
function App() {
  const[teachersData,setTeachersData]=useState([])
  const[studentsData,setStudentsData]=useState([])
 
  useEffect(()=>{
       const getStudent = async() => {
        try {
          const response =await fetch ("https://64d0f904ff953154bb79cc22.mockapi.io//students" , {
            method:"GET"
          });
          const data =await response.json();
          
          setStudentsData(data)
          
        } catch (error) {
          console.log("Error Occure" , error)
        }
       }

       const getTeacher = async() => {
        try {
          const response = await fetch ("https://64d0f904ff953154bb79cc22.mockapi.io//teachers" ,{
            method:"GET"
          });

          const data = await response.json();
          setTeachersData(data)
          
        } catch (error) {
          console.log("Error Occure" , error)
        }
       }
       getStudent(); 
       getTeacher();
  },[])
  

  return (
    <div className="App">
      <Switch>
           <Route path="/dashboard">
              <Dashboard/>
           </Route>
           <Route exact path="/">
            <Redirect to = "/dashboard"/>
           </Route>
           <Route path="/add-student-data">
              <AddStudents
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              
              />
           </Route>
           <Route path="/add-teacher-data">
              <AddTeachers
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              
              />
           </Route>
          <Route path="/students-list">
              <StudentsDetails
              studentsData={studentsData}
              setStudentsData={setStudentsData}
              />
          </Route>
          
          <Route path="/teachers-list">
              <TeacherDetails
              teachersData={teachersData}
              setTeachersData={setTeachersData}
              />
          </Route>
          

          <Route path="/student/:id">
            <StudentProfile
            studentsData={studentsData}
            />
          </Route>

          <Route path="/teacher/:id">
            <TeacherProfile
            teachersData={teachersData}
            />
          </Route>

          <Route path="/editstudent/:id">
            <EditStudents
            studentsData={studentsData}
            setStudentsData={setStudentsData}
            />
          </Route>

          <Route path="/editteacher/:id">
            <EditTeacher
            teachersData={teachersData}
            setTeachersData={setTeachersData}
            />
          </Route>
      </Switch>
    </div>
  );
}

export default App;