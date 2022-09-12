import './Message.css'

function Mess(props) {

    return (
        <div className='message'>
            {props.varInApp && <h2>Принято</h2>}
            {props.varInApp && <p>{props.varInApp}</p>}
        </div>
    );
}

export default Mess;