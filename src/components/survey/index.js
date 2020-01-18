import React, {useState} from 'react';
import styled from 'styled-components';
import {Breadcrumbs} from '@blueprintjs/core';
import {space, layout} from 'styled-system';
import {Flex} from 'rebass';
import propTypes from 'prop-types';
import {path} from 'ramda';
import {Fetcher} from '../common/hoc';
import {
  StyledContainer,
  StyledDescription,
  StyledCard,
  StyledHeader
} from '../common/ui';
import {
getVoters, getDataFromQuestion, getAgreeDisagreeData
} from '../../lib/utilities';
import {getSurvey} from '../../api/survey';
import {BarChart, PieChart} from '../common/charts';

const SurveyInfoContainer = styled(StyledCard).attrs(() => ({mb: [4, 0]}))`
  width: 90vw;
  min-height: 25vh;
  ${space};
`;

const SurveyChartsContainer = styled(StyledCard)`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  min-height: 50vh;
`;

const SurveyMain = styled(Flex).attrs(() => ({flexWrap: 'wrap'}))`
  min-height: calc(25vh - 30px);
`;

const SurveyInfo = styled(Flex).attrs(() => ({
  p: [1, 2],
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: ['100%', '30%']
}))`
  ${layout};
  height: 100%;
  ${space};
`;

const SurveyQuestions = styled(Flex).attrs(() => ({
  p: [1, 2],
  width: ['100%', '70%']
}))`
  ${space};
  ${layout};
`;

const InfoContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const Value = styled(StyledDescription)`
  color: ${path(['theme', 'colors', 'darkGreen'])};
`;

const Label = styled(StyledDescription)`
  color: ${path(['theme', 'colors', 'darkGreen'])};
  opacity: 0.7;
  margin-right: 20px;
`;

const Info = ({label, value}) => (
  <InfoContainer>
    <Label>{`${label}:`}</Label>
    <Value>{value}</Value>
  </InfoContainer>
);

const QuestionsList = styled.ul`
  border-radius: 20px;
  width: 100%;
  background-color: ${path(['theme', 'colors', 'grey'])};
  overflow-y: auto;
  max-height: calc(25vh - 30px);
  border: 2px solid ${path(['theme', 'colors', 'darkGreen'])};
`;

const QuestionContainer = styled.li.attrs(() => ({p: [1, 2]}))`
  ${space};
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  background-color: ${props => props.active ? 'rgba(64, 159, 155, 0.4)' : ''};
  &:hover {
    background-color: rgba(64, 159, 155, 0.1);
    cursor: pointer;
  }
`;

const QuestionText = Value;

const ChartContainer = styled(Flex).attrs(() => ({
  flexDirection: 'column',
  alignItems: 'center',
  width: ['100%', '33%'],
  my: [3]
}))``;

const ChartHeader = styled(StyledHeader)`
  color: ${path(['theme', 'colors', 'darkGreen'])};
`;

const Survey = ({survey}) => {
  const breadcrumbs = [
    {text: 'Surveys', href: '/surveys'},
    {text: survey.title}
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <React.Fragment>
      <SurveyInfoContainer>
        <SurveyMain>
          <SurveyInfo>
            <Breadcrumbs items={breadcrumbs} />
            <Info label="Title" value={survey.title} />
            <Info label="Questions" value={survey.questions.length} />
            <Info label="Voters" value={getVoters(survey)} />
          </SurveyInfo>
          <SurveyQuestions>
            <QuestionsList>
              {survey.questions.map((question, index) => (
                <QuestionContainer
                  onClick={() => setCurrentQuestion(index)} 
                  active={index === currentQuestion}
                  key={question.questionId}
                >
                  <QuestionText>
                    {`${index + 1}.${question.questionTitle}`}
                  </QuestionText>
                </QuestionContainer>
              ))}
            </QuestionsList>
          </SurveyQuestions>
        </SurveyMain>
      </SurveyInfoContainer>
      <SurveyChartsContainer>
        <ChartContainer>
          <ChartHeader>Number of voters per answer</ChartHeader>
          <BarChart
            data={getDataFromQuestion(survey.questions[currentQuestion])}
          />
        </ChartContainer>
        <ChartContainer>
          <ChartHeader>Percentage of voters per answer</ChartHeader>
          <PieChart
            colors={[...new Array(5)].map((_, index) => `rgba(36,73,72,${1 - 0.2 * index })`)}
            data={getDataFromQuestion(survey.questions[currentQuestion])}
          />
        </ChartContainer>
        <ChartContainer>
          <ChartHeader>Agree-Disagree Percentages</ChartHeader>
          <PieChart
            colors={[...new Array(3)].map((_, index) => `rgba(36,73,72,${1 - 0.3 * index} )`)}
            data={getAgreeDisagreeData(survey.questions[currentQuestion])}
          />
        </ChartContainer>
      </SurveyChartsContainer>
    </React.Fragment>
  );
};

const Component = ({match: {params: {id}}}) => {
  return (
    <StyledContainer
      flexDirection="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Fetcher action={() => getSurvey(id)}>
        {survey => <Survey survey={survey} />}
      </Fetcher>
    </StyledContainer>
  );
};

Component.propTypes = {match: propTypes.objectOf(propTypes.any).isRequired};

Info.propTypes = {
  label: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]).isRequired
};

export default Component;
