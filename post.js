const post = {  
    type : 'object',
    properties:{
        id: {type: 'number'},
        title: {type: 'string'},
        body: {type: 'string'},
        userId: {type: 'number'},
        tags: {type: 'array',
            items:{
                type:'string'
            }
        },
        reaction: {type:'number'}
    },
    required:['id','title','body','userId','tags']
}
export {post};