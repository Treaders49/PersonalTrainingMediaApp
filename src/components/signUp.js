import mainLogo from './pictures/mainLogo.png';
import bodybuilding from './pictures/bodybuilding.jpg'
import cardio from './pictures/cardio.jpg'
import powerlifting from './pictures/powerlifting.jpg'
import sc from './pictures/sc.jpg'
import './signUp.css';
import { useState } from 'react';


function SignUp() {
    const [selectedExperience, setSelectedExperience] = useState("")

    const changeExperience = (experienceSelected) => {
        setSelectedExperience(experienceSelected)
    };

    const [selectedDiscipline, setSelectedDiscipline] = useState("")

    const changeDiscipline = (disciplineSelected) => {
        setSelectedDiscipline(disciplineSelected)
    }
    console.log(selectedExperience);


    return(
        <div className='signUpPage'>
            <div className='title'><u>About You</u></div>
            <div className='body'>
            <div className='personalisationRow'>
            
                <div className='experienceButtons'>
                    <label><u className='subheadings'>Fitness Experience</u></label><br></br>
                    <button className={`beginner ${selectedExperience == 'beginner' ? 'selectedExperience' : "" }`} onClick={() => changeExperience('beginner')}>Beginner</button>
                    <button className={`intermediate ${selectedExperience == 'intermediate' ? 'selectedExperience' : "" }`} onClick={() => changeExperience('intermediate')}>Intermediate</button>
                    <button className={`advanced ${selectedExperience == 'advanced' ? 'selectedExperience' : "" }`} onClick={() => changeExperience('advanced')}>Advanced</button>
                </div>
                
                <div className='trainingType'>
                <label><u className='subheadings'>Type of Training</u></label><br></br>
                    <div className='trainingPics' ><img src={bodybuilding} className={`${selectedDiscipline == 'bodybuilding' ? 'selectedDiscipline' : ''}`} onClick={() => changeDiscipline('bodybuilding')}></img><img src={powerlifting} className={`${selectedDiscipline == 'powerlifting' ? 'selectedDiscipline' : ''}`} onClick={() => changeDiscipline('powerlifting')}></img></div>
                    <div className='trainingTitles' ><p className='left'>Bodybuilding</p><p className='right'>Powerlifting</p></div>
                    <div className='trainingPics' ><img src={sc} className={`${selectedDiscipline == 'sandc' ? 'selectedDiscipline' : ''}`} onClick={() => changeDiscipline('sandc')}></img><img src={cardio} className={`${selectedDiscipline == 'cardio' ? 'selectedDiscipline' : ''}`} onClick={() => changeDiscipline('cardio')}></img></div>
                    <div className='trainingTitles' ><p className='left'>Strength and Conditioning</p><p className='right'>Cardio</p></div>
                </div>
                
            </div>
            <div className='basicInfoRow'>
                <img className='profilePic'></img><br></br>
                <button className='addProfilePic'>+</button><br></br>
                <div className='inputsDiv'>
                <label>Full Name</label>
                <input className="fullName" type='text'></input><br></br>
                <label>Username</label>
                <input className="fullName" type='text'></input><br></br>
                <label>Date Of Birth</label>
                <input className="dob" type='date'></input><br></br>
                <label>Email</label>
                <input className="fullName" type='text'></input><br></br>
                <label>Password</label>
                <input className="gender"  type='text'></input><br></br>
                <label>Confirm Password</label>
                <input className="gender"  type='text'></input>
                </div>
                <button className='startSearching'>Start Searching for Personal Trainers Now</button>
            </div>
            </div>
        </div>
    );
}

export default SignUp;