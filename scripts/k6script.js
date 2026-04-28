import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    teste: {
      executor: 'ramping-vus',
      startVUs: 3,
      stages: [
        { target: 20, duration: '30s' },
        { target: 100, duration: '0' },
        { target: 100, duration: '1m' },
		{ target: 500, duration: '0' },
        { target: 500, duration: '1m' },
		{ target: 1000, duration: '0' },
        { target: 1000, duration: '1m' },
      ],
    },
  },
};

export default function () {
  http.get('http://<IP>:<PORTA>');
  sleep(1);
}
