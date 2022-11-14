import { sanityClient } from '../../sanity';

import { Post } from '../../typing';

interface fetchPostProps {
    slug: string | string[] | undefined;
}
const PostsHttpService = {
    fetchAll: async () => {
        const query = `*[_type == "post"] {
            _id,
            title,
            author -> {
                name,
                image
            },
            description,
            mainImage,
            slug
        }`;
        let results = await sanityClient.fetch(query);
        return results;
    },
    fetchPostPath: async () => {
        const query = `*[_type == "post"]{
            _id,
            slug {
                current
            }
        }`;
        const posts = await sanityClient.fetch(query);

        const paths = posts.map((post: Post) => ({
            params: {
                slug: post.slug.current,
            },
        }));

        return {
            paths,
            fallback: 'blocking',
        };
    },
    fetchPostProps: async (params: fetchPostProps) => {
        const query = `*[_type == "post" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title,
            author-> {
                name,
                image
            },
            'comments' : *[
                _type == "comment" &&
                post._ref == ^._id
            ],
            description,
            mainImage,
            slug,
            body
        }`;

        const post = await sanityClient.fetch(query, {
            slug: params?.slug,
        });

        return post;
    },
};

export default PostsHttpService;
