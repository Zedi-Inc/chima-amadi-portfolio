import { s as sanityClient } from './page-ssr_CyZe_LUJ.mjs';

async function loadQuery({
  query,
  params
}) {
  const { result } = await sanityClient.fetch(
    query,
    params ?? {},
    { filterResponse: false }
  );
  return {
    data: result
  };
}

const about = () => loadQuery({
  query: `*[_type == "about"]`
});
const articles = () => loadQuery({
  query: `*[_type == "articles"]`
});
const gallery = () => loadQuery({
  query: `*[_type == "gallery"]`
});

export { about as a, articles as b, gallery as g };
