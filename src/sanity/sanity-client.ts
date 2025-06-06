import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'vahwb5wp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-06-06',
});

const builder = imageUrlBuilder(client);

export type ImageType = {
  asset: {
    _id: string
    url: string
  }
}
export function urlFor(source: ImageType) {
  return builder.image(source);
}