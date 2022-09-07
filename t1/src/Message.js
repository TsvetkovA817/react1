import './Message.css'

function Mess(props) {
    return (
        <div className='message'>
            <h2>Message</h2>
            <p>Переданное через пропс значение = {props.varInApp} из App.js</p>
        </div>
    );
}

export default Mess;