import { loadQuery } from './loader-query';
import type { About, Articles, Gallery } from '../sanity.types';

export const about = () =>
	loadQuery<About[]>({
		query: `*[_type == "about"]`,
	});

export const articles = () =>
	loadQuery<Articles[]>({
		query: `*[_type == "articles"]`,
	});

export const gallery = () =>
	loadQuery<Gallery[]>({
		query: `*[_type == "gallery"]`,
	});
