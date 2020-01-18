import {api, prefixUrl} from '../lib/api-adapter';

const activityApi = api.extend({prefixUrl: prefixUrl('focaldata/demo/surveys')});

export const getSurveys = () => activityApi.get('').json(); 

export const getSurvey = id => activityApi.get('').json().then(surveys => surveys.find(s => s.surveyId == id)); 
