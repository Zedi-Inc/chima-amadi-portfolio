import { createClient } from '@sanity/client';
/* empty css                                */

const sanityClient = createClient(
            {"apiVersion":"2025-01-23","projectId":"zlb6sz0u","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
