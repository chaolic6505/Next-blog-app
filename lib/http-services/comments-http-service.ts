import { IFormInput } from '../../typing';

const CommentsHttpService = {
    addComments: async (data: IFormInput) => {
        fetch('/api/createComments', {
            method: 'POST',
            body: JSON.stringify(data),
        })
            .then(() => {
                console.log(data);
            })
            .catch((err) => {
                console.log(err);
            });
    },
};

export default CommentsHttpService;
