import './Message.css'

function Mess(props) {

    return (
        <div className='message'>
            {props.varInChats && <h2>Исполнено</h2>}
            {props.varInChats && <p>{props.varInChats}</p>}
        </div>
    );
}

export default Mess;