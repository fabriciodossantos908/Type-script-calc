import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/pageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'

import './styles.css'
import Input from '../../components/Input'
import Select from '../../components/Select'
import api from '../../services/api'


function TeacherList() {
    const [subject, setSubject] = useState('');
    const [weekDay, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    const [teachers, setTeachers] = useState([]);

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day: weekDay,
                time
            }
        })

        setTeachers(response.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => {
                            setSubject(e.target.value)
                        }}
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
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={weekDay}
                        onChange={(e) => {
                            setWeekDay(e.target.value)
                        }}
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
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </form>
            </PageHeader>
            <main>
                {teachers.map((teacher: Teacher) => {
                    return < TeacherItem key={teacher.id} teacher={teacher} />
                })}
            </main>
        </div>
    )
}

export default TeacherList;