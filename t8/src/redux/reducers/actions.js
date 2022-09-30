//actions creator
export const loadingPosts = () => ({
    type: 'getPosts'
});

export const errorPosts = (e) => ({
    type: 'error',
    payload: e
})