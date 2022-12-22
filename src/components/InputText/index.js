import './styles.css';

const InputText = (props) => {

    const whenTyped = (event) => {
        props.changer(event.target.value);
    }
    
    return (
        <div className="input-text">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={whenTyped} required={props.required} placeholder={props.placeholder}/>
        </div>
    )
}

export default InputText;