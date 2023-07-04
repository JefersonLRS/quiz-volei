import { Question } from "@/types/Question";

export const questions: Question[] = [
    {
        question: 'Em qual a posição o atleta deve ser especialista no ataque?',
        options: [
            'Levantador',
            'Central',
            'Oposto',
            'Líbero',
            'Ponteiro'
        ],
        answer: 2
    },
    {
        question: 'Qual a altura oficial da rede no voleibol masculino?',
        options: [
            '2.42m',
            '2.43m',
            '2.44m',
            '2.45m',
            '2.46m'
        ],
        answer: 1
    },
    {
        question: 'Onde serão os jogos da Olimpiada de 2024?',
        options: [
            'Tokyo',
            'Berlim',
            'Londres',
            'Paris',
            'Roma'
        ],
        answer: 3
    }
];