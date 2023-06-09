const swaggerJSDoc = require('swagger-jsdoc');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'oneid账号服务',
            version: '1.0.0',
            description: 'oneid账号服务api',
        },
        //servers的每一项，可以理解为一个服务,实际项目中，可自由修改
        servers: [
            {
                url: '/oneid',
                description: 'API server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

// 如果有Swagger规范文件转TS的需求，可在此处保留Swagger规范文件到本地，方便使用
//fs.writeFileSync('swagger.json', JSON.stringify(swaggerSpec, null, 2));

module.exports = swaggerSpec;
