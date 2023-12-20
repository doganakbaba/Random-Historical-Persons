import Aristo from './images/Aristotle_Altemps_Inv8575.jpg';
import Ataturk from './images/atam.jpg';
import Che from './images/cuguvera.jpg';
import Einstein from './images/Einstein.jpg';
import Jesus from './images/isa.jpg';
import Newton from './images/IsaacNewton.jpg';
import Napolyon from './images/napolyon.jpg';
import Sezar from './images/sezar.jpg';
import Iskender from './images/iskender.jpg'
import './person.css';


const personMap = {
    Aristo,
    Ataturk,
    Che,
    Einstein,
    Jesus,
    Newton,
    Napolyon,
    Sezar,
    Iskender,
};


function Persons({personName}) {
    //console.log(personName);
    console.log(personMap[personName]);
    return (
        <div className='personDiv'>
            <img className='person' src={personMap[personName]} alt="" />
        </div>
    );
}

export default Persons;
