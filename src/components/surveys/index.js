import React from 'react';
import styled from 'styled-components';
import {space, layout} from 'styled-system';
import propTypes from 'prop-types';
import {Fetcher, Filter} from '../common/hoc';
import {
StyledContainer, StyledHeader, StyledCard, StyledIcon
} from '../common/ui';
import {getSurveys} from '../../api/survey';
import {matchTitle, getVoters} from '../../lib/utilities';


const ListContainer = styled(StyledCard).attrs(() => ({
  width: ['90vw', 600, 700],
  height: '70vh',
}))`
  ${layout};
  overflow-y: auto;
`;

const SurveyList = styled.ul`
  margin-top: 20px;
`;

const SurveyTitle = styled(StyledHeader)`
  display: inline-block;
  width: auto;
  margin: 0;
`;

const VotesContainer = styled.div`
 float: right;
 display: flex;
`;

const VotersIcon = styled(StyledIcon).attrs(() => ({icon: 'person'}))``;

const VotersNumber = styled(SurveyTitle)``;

const Survey = ({title, voters, id, navigate}) => (
  <SurveyContainer onClick={() => navigate(`/surveys/${id}`)}>
    <SurveyTitle>{title}</SurveyTitle>
    <VotesContainer>
      <VotersIcon />
      <VotersNumber>{voters}</VotersNumber>
    </VotesContainer>
  </SurveyContainer>
);

const SurveyContainer = styled.li.attrs(() => ({p: [2, 3]}))`
  ${space};
  border-bottom: 1px solid #e0e0e0;
  &:hover{
    background-color: rgba(64,159,155,0.1);
    cursor: pointer;
  }
`;

const Component = ({history: {push: navigate}}) => (
  <StyledContainer>
    <ListContainer>
      <StyledHeader>YOUR SURVEYS</StyledHeader>
      <Fetcher action={getSurveys} spinnerClass="center-self">
        {data => (
          <Filter>
            {filter => (
              <SurveyList>
                {data
                  .filter(survey => matchTitle(filter, survey))
                  .map(survey => (
                    <Survey
                      key={survey.surveyId}
                      title={survey.title}
                      id={survey.surveyId}
                      navigate={navigate}
                      voters={getVoters(survey)}
                    />
                  ))}
              </SurveyList>
            )}
          </Filter>
        )}
      </Fetcher>
    </ListContainer>
  </StyledContainer>
);

Component.propTypes = {history: propTypes.objectOf(propTypes.any).isRequired};

Survey.propTypes = {
  id: propTypes.number.isRequired,
  voters: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  navigate: propTypes.func.isRequired
};

export default Component;
