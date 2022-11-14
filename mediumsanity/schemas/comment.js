export default {
    name: 'comment',
    title: 'Comment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'approved',
            title: 'Approved',
            type: 'boolean',
            description: "Comments wont show until it is been approved by admin",
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'comment',
            title: 'Comment',
            type: 'text',
        },
        {
            name: 'post',
            title: 'Post',
            type: 'reference',
            to: { type: 'posts' },
        }
    ],
}