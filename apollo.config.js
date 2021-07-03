module.exports = {
    client: { 
        includes: ['./src/**/*.tsx'],
        tagName: 'gql',
        service: {
            name: 'nuber-eats-backend',
            url: 'https://nuber-eats-backend-s.herokuapp.com/graphql',
        },
    },
};  