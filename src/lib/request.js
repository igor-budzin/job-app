import axios from 'axios';
import VACANCIES_URL from '../config/api';

export function getVacancies(text, area, order, page) {
	return axios.get('https://api.hh.ru/vacancies', {
		params: {
			text: text,
			area: area,
			order_by: order,
			per_page: 10,
			page: page
		}
	});
}
