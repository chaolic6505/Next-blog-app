import { sanityClient } from "../../sanity";

const PostsHttpService = {
    fetchAll: async () => {
        let query = `*[_type == "post"] {
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
    }
}

export default PostsHttpService;

