import mainLogo from './pictures/mainLogo.png';
import bodybuilding from './pictures/bodybuilding.jpg'
import cardio from './pictures/cardio.jpg'
import powerlifting from './pictures/powerlifting.jpg'
import sc from './pictures/sc.jpg'
import './signUp.css';
import { useState } from 'react';
import axios from 'axios';



import { imageDb } from './firebaseConfig';
import { ref, uploadBytes } from 'firebase/storage';



function SignUp() {
    const [img, setImg] = useState('')

    const [selectedExperience, setSelectedExperience] = useState("")

    const changeExperience = (experienceSelected) => {
        setSelectedExperience(experienceSelected)
    };

    const [selectedDiscipline, setSelectedDiscipline] = useState("")

    const changeDiscipline = (disciplineSelected) => {
        setSelectedDiscipline(disciplineSelected)
    }

    const [fullname, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const createAccount = () => {

        if ((password === confirmPassword) && (img) && (selectedExperience) && (selectedDiscipline)) {
            
            axios.post("http://localhost:8000/newAccount", {fullname:fullname, username: username, email: email, dob: dob, password: password, selectedExperience: selectedExperience, selectedDiscipline: selectedDiscipline}).then(response => {
          
            });
            const imageRef = ref(imageDb, `profilePics/${username}`)
            uploadBytes(imageRef, img).then(() => {
                alert(fullname, username, email, dob, password, confirmPassword, selectedExperience, selectedDiscipline);
            });
        }
        else {
            if (password != confirmPassword) {
                alert("passwords dont match")
            }
            if (! img) {
                alert("please add a profile picture")
            }

            if (! selectedExperience) {
                alert("please select an experience level");
            }

            if (! selectedDiscipline) {
                alert("please select a type of training");
            }
        }

        

    }
    console.log(selectedExperience);
    if (img) {
        document.getElementById("profilePic").src = URL.createObjectURL(img);
        console.log(document.getElementById("profilePic").src);
    }
    
    
    console.log(img);
    console.log(fullname);
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
                <img className='profilePic' id="profilePic"></img><br></br>
                <button className='addProfilePic' onClick={()=> document.getElementById("chooseFile").click()}>+</button><br></br>
                <input id='chooseFile' onChange={(e)=> setImg(e.target.files[0])} type="file"></input>
                <div className='inputsDiv'>
                <div className="formLabels">
                <label>Full Name</label><br></br>
                <label>Username</label><br></br>
                <label>Date Of Birth</label><br></br>
                <label>Email</label><br></br>
                <label>Password</label><br></br>
                <label>Confirm Password</label><br></br>
                </div>
                <div className="formInputs">
                <input className="fullName" type='text' onChange={(e) => setFullName(e.target.value)}></input><br></br>
                <input className="username" type='text' onChange={(e) => setUsername(e.target.value)}></input><br></br>
                <input className="dob" type='date' onChange={(e) => setDob(e.target.value)}></input><br></br>
                <input className="email" type='text' onChange={(e) => setEmail(e.target.value)}></input><br></br>
                <input className="password"  type='password' onChange={(e) => setPassword(e.target.value)}></input><br></br>
                <input className="confirm"  type='password' onChange={(e) => setConfirmPassword(e.target.value)}></input>
                </div>
                
                
                
                </div>
                <button className='startSearching' onClick={() => createAccount()}>Start Searching for Personal Trainers Now</button>
            </div>
            </div>
        </div>
    );
}

export default SignUp;