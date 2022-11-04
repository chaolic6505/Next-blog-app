import { useMutation } from 'react-query';
import { IFormInput } from '../../typing';

export const useAddComments = () => {
    return useMutation(CommentsHttpService.addComments);
};

const CommentsHttpService = {
    addComments: async (data: IFormInput) => {
        fetch('/api/createComments', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }
};

export default CommentsHttpService;
