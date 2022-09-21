import './Message.css'

function Mess(props) {

    return (
        <div className='message'>
            {props.varInChats && <h2>Принято</h2>}
            {props.varInChats && <p>{props.varInChats}</p>}
        </div>
    );
}

export default Mess;