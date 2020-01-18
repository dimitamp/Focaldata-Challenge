import {
path, ifElse, isNil, pipe
} from 'ramda';

export const sanitize = str => str.replace(/[^a-zA-Z]/g, '');

export const matchTitle = (filter, survey) => 
  filter
  ? survey.title.toLowerCase().includes(filter.toLowerCase()) 
  : true;

export const getVoters = survey =>
  pipe(
    s => path(['questions', 0, 'answerOptions'], s),
    ifElse(
      isNil,
      () => 0,
      answers =>
        answers.reduce((acc, val) => acc + val.selectedByRespondents, 0)
    )
  )(survey);

export const getDataFromQuestion = question =>
  question.answerOptions.map(({text, selectedByRespondents}) => ({
    name: text,
    value: selectedByRespondents
  }));

export const getAgreeDisagreeData = question => {
  const data = [{name: 'Agree', value: 0}, {name: 'Disagree', value: 0}, {name: 'Neutral', value: 0}];
  question.answerOptions.forEach(({text, selectedByRespondents}) => {
    if(text.toLowerCase().includes('neither')){
      data[2].value += selectedByRespondents; 
    } else if(text.toLowerCase().includes('disagree')){
      data[1].value += selectedByRespondents;
    } else {
      data[0].value += selectedByRespondents;
    }
  });
  return data;
}
;
