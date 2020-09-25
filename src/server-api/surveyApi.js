import serverUrl from '~/utils/constants';

const list = [
  {
    id: 1,
    title: 'Test1',
    purpose: 'test',
    startDate: new Date('2020/09/01'),
    endDate: new Date('2020/09/30'),
    authority: 'all',
    anonymous: true,
    questions: [
      {
        type: 'subjective',
        question: '객관식 질문1',
        answers: [
          { type: 'normal', text: '선택지1' },
          { type: 'normal', text: '선택지2' },
          { type: 'normal', text: '선택지3' },
          { type: 'etc', text: '기타' },
        ],
      },
      {
        type: 'subjective',
        question: '객관식 질문2',
        answers: [
          { type: 'normal', text: '선택지1' },
          { type: 'normal', text: '선택지2' },
          { type: 'normal', text: '선택지3' },
          { type: 'essential', text: '기타필수' },
        ],
      },
      {
        type: 'objective',
        question: '서술형 질문',
      },
    ],
  },
];

async function getSurveyListFromServer() {
  return list;
}

async function getSurveyDetailFromServer(surveyId) {
  return list.find((item) => item.id === surveyId);
}

function addSurveyToServer(survey) {
  list.push(survey);
}

export { getSurveyListFromServer, getSurveyDetailFromServer };
