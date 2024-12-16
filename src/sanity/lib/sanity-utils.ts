import { loadQuery } from "./loader-query";
import type { About, Articles } from "../sanity.types";

export const about = () => loadQuery<About[]>({
	query: `*[_type == "about"]`,
});

export const articles = () => loadQuery<Articles[]>({
	query: `*[_type == "articles"]`,
});