import { useState } from 'react';
import Button from '../Button';
import DropdownList from '../DropdownList';
import InputText from '../InputText';
import './styles.css';

const Form = (props) => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.collaboratorRegister({
            name,
            role,
            image,
            team
        });
        setName('');
        setRole('');
        setImage('');
        setTeam('');
    }

    return (
        <section className='section-form'>
            <form onSubmit={handleSubmit}>
                <h2>
                    Preencha os dados para criar o card do colaborador
                </h2>
                <InputText
                    required={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    value={name}
                    changer={value => setName(value)}
                />
                <InputText
                    required={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    value={role}
                    changer={value => setRole(value)}
                />
                <InputText
                    label="Imagem"
                    placeholder="Informe o endereço da imagem"
                    value={image}
                    changer={value => setImage(value)}
                />
                <DropdownList
                    required={true}
                    label="Time"
                    itens={props.teams}
                    value={team}
                    changer={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form;