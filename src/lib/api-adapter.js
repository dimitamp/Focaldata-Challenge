import ky from 'ky';
import {store} from '../hooks';
import {ui} from '../actions';

const apiUrl = process.env.API_URL;

export const prefixUrl = route => `${apiUrl}/${route}`;

export const api = ky.create({
  timeout: 20000,
  hooks: {
    beforeRequest: [
      req => {
          req.headers = {
            ...req.headers,
            ...(req.body instanceof FormData
              ? {}
              : {'content-type': 'application/json'})
          };
        }
    ],
    afterResponse: [
      async response => {
        try {
          if (!response.ok) {
            const json = await response.clone().json();
            store.dispatch(ui.addError(json));
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error);
        }
        return response;
      }
    ]
  }
});
