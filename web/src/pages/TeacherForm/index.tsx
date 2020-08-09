import React, { useState, FormEvent } from "react"
import { useHistory } from 'react-router-dom';
import PageHeader from "../../components/pageHeader";

import Input from "../../components/Input";

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');


    const [subject, setSubjet] = useState('');
    const [cost, setCost] = useState('');
    // Concept of declare a new array position
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' },
    ]);

    function addNewScheduleItem() {

        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }
            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems)
    }

    function handleCreateClass(e: FormEvent) {
        // evit the window reload
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then((response) => {
            history.push('/')
        }).catch((err) => {
            console.log(err)
            alert("ops something wrong!")
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <form onSubmit={handleCreateClass}>
                <main>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            name="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}

                        />
                        <Input
                            name="whatsapp"
                            label="whatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}

                        />
                        <Textarea
                            name="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}

                        />

                    </fieldset>

                    <fieldset>
                        <legend>Sobre a sua aula</legend>

                        <Select
                            name="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => { setSubjet(e.target.value) }}
                            options={[
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciência', label: 'Ciências' },
                                { value: 'Química', label: 'Química' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Língua portuguêsa', label: 'Língua portuguêsa' },
                                { value: 'Língua inglêsa', label: 'Língua inglêsa' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'História', label: 'História' },
                                { value: 'Educação física', label: 'Educação física' },
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Filosofia', label: 'Filosofia' },
                                { value: 'Sociologia', label: 'Sociologia' }
                            ]}
                        />
                        <Input
                            name="cost"
                            label="Custo de sua hora por aula"
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }}
                        />

                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem} >
                                + Novo horário
                    </button>

                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                        name="week_day"
                                        label="Dia da semana"
                                        value={scheduleItem.week_day}
                                        onChange={e => { setScheduleItemValue(index, 'week_day', e.target.value) }}
                                        options={[
                                            { value: '0', label: 'Domingo' },
                                            { value: '1', label: 'Segunda-feira' },
                                            { value: '3', label: 'Terça-feira' },
                                            { value: '4', label: 'Quarta-feira' },
                                            { value: '5', label: 'Quinta-feira' },
                                            { value: '6', label: 'Sexta-feira' },
                                            { value: '7', label: 'Sábado' },
                                        ]}

                                    />
                                    <Input
                                        name='from'
                                        label='Dás'
                                        type='time'
                                        value={scheduleItem.from}

                                        onChange={e => { setScheduleItemValue(index, 'from', e.target.value) }}
                                    />
                                    <Input
                                        name='to'
                                        label='até'
                                        type='time'
                                        value={scheduleItem.to}
                                        onChange={e => { setScheduleItemValue(index, 'to', e.target.value) }}
                                    />
                                </div>

                            )
                        })}

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso inportante" />
                        Importante! <br />
                    Preencha todos os dados
                    </p>
                        <button type="submit">Salvar cadastro</button>
                    </footer>
                </main>
            </form>
        </div>)
}

export default TeacherForm;