import mainLogo from './pictures/mainLogo.png';
import bodybuilding from './pictures/bodybuilding.jpg'
import cardio from './pictures/cardio.jpg'
import powerlifting from './pictures/powerlifting.jpg'
import sc from './pictures/sc.jpg'
import './signUp.css';
import { useState } from 'react';

function SignUp() {
    return(
        
        <div className='signUpPage'>
            <div className='title'><u>About You</u></div>
            <div className='body'>
            <div className='personalisationRow'>
            
                <div className='experienceButtons'>
                    <label><u>Fitness Experience</u></label><br></br>
                    <button className='beginner'>Beginner</button>
                    <button className='intermediate'>Intermediate</button>
                    <button className='advanced'>Advanced</button>
                </div>
                
                <div className='trainingType'>
                <label><u>Type of Training</u></label><br></br>
                    <div className='trainingPics'><img src={bodybuilding}></img><img src={powerlifting}></img></div>
                    <div className='trainingTitles'><p className='left'>Bodybuilding</p><p className='right'>Powerlifting</p></div>
                    <div className='trainingPics'><img src={sc}></img><img src={cardio}></img></div>
                    <div className='trainingTitles'><p className='left'>Strength and Conditioning</p><p className='right'>Cardio</p></div>
                </div>
                <button className='startSearching'>Start Searching for Personal Trainers Now</button>
            </div>
            <div className='basicInfoRow'>
                <img className='profilePic'></img><br></br>
                <button className='addProfilePic'>+</button><br></br>
                <div className='inputsDiv'>
                <label>Full Name</label><br></br>
                <input className="fullName" type='text'></input><br></br>
                <label>Date Of Birth</label><br></br>
                <input className="dob" type='date'></input><br></br>
                <label>Gender</label><br></br>
                <input className="gender"  type='text'></input>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SignUp;