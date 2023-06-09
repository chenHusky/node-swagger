const Router = require('koa-router');
const router = new Router();

/**
* @swagger
* tags:
*   - name: Oneid
*     description: 登录服务
*   - name: User
*     description: 个人中心
*/

/**
* @swagger
* components:
*   ErrorResponse:
*     type: object
*     properties:
*       code:
*         type: integer
*         description: 状态码.
*       data:
*         type: object
*         description: 返回数据.
*       msg:
*         type: object
*         properties:
*           code: 
*             type: string
*           message_en: 
*             type: string
*           message_zh: 
*             type: string
*         description: 失败信息.
*     required:
*       - code
*       - data
*       - msg
*   UserInfoResponse:
*     type: object
*     properties:
*       company:
*         type: string
*         description: 公司.
*       email:
*         type: string
*         description: 邮箱.
*       nickname:
*         type: string
*         description: 昵称.
*       phone:
*         type: string
*         description: 手机号.
*       photo:
*         type: string
*         description: 头像.
*       signedUp:
*         type: string
*         description: 注册时间.
*       username:
*         type: string
*         description: 用户名.
*   ConnListResponse:
*     type: object
*     properties:
*       authorizationUrl:
*         type: string
*         description: 三方绑定链接.
*       name:
*         type: string
*         description: 三方标识名字.
*/

/**
* @swagger
* parameters:
*   communityParam:
*     name: community
*     in: query
*     description: Community
*     required: true
*     schema:
*       type: string
*   clientIdParam:
*     name: client_id
*     in: query
*     description: App id
*     required: true
*     schema:
*       type: string
*   communityBody:
*     name: community
*     in: body
*     description: Community
*     required: true
*     schema:
*       type: string
*   clientIdBody:
*     name: client_id
*     in: body
*     description: App id
*     required: true
*     schema:
*       type: string
*   tokenHeaderParam:
*     name: Token
*     in: header
*     description: header token
*     required: true
*     schema:
*       type: string
*   cookieAuth:
*     type: apiKey
*     name: _Y_G_
*     in: cookie
*     description: cookie authentication
*     required: true
*/

/**
* @swagger
* /account/exists:
*   get:
*     summary: Check whether the account exists
*     tags: [Oneid]
*     parameters:
*       - name: username
*         in: query
*         description: Username
*         schema:
*           type: string
*       - name: account
*         in: query
*         description: Phone or email
*         schema:
*           type: string
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*     responses:
*       200:
*         description: Account available.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/account/exists', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /captcha/get:
*   post:
*     summary: 获取图片验证的图片信息
*     tags: [Oneid]
*     parameters:
*       - name: captchaType
*         in: body
*         description: type
*         required: true
*         schema:
*           type: string
*           example: blockPuzzle
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/captcha/get', async (ctx) => {
    const users = {
        code: 200,
        data: {},
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /captcha/check:
*   post:
*     summary: 校验图片位置
*     tags: [Oneid]
*     parameters:
*       - name: captchaType
*         in: body
*         description: type
*         required: true
*         schema:
*           type: string
*           example: blockPuzzle
*       - name: pointJson
*         in: body
*         description: 点位信息
*         required: true
*         schema:
*           type: string
*       - name: token
*         in: body
*         description: 图片验证token
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/captcha/check', async (ctx) => {
    const users = {
        code: 200,
        data: {},
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /captcha/sendCode:
*   get:
*     summary: Send code
*     tags: [Oneid]
*     parameters:
*       - name: captchaVerification
*         in: query
*         description: 图片验证参数
*         required: true
*         schema:
*           type: string
*       - name: account
*         in: query
*         description: Phone or email
*         required: true
*         schema:
*           type: string
*       - name: channel
*         in: query
*         description: 识别验证码种类
*         required: true
*         schema:
*           type: string
*           enum: 
*             - CHANNEL_REGISTER
*             - CHANNEL_LOGIN
*             - CHANNEL_REGISTER_BY_PASSWORD
*       - $ref: '#/parameters/communityParam'
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/captcha/sendCode', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /register:
*   post:
*     summary: register
*     tags: [Oneid]
*     parameters:
*       - name: username
*         in: body
*         description: username
*         required: true
*         schema:
*           type: string
*       - name: account
*         in: body
*         description: Phone or email
*         required: true
*         schema:
*           type: string
*       - name: code
*         in: body
*         description: code
*         required: true
*         schema:
*           type: string
*       - name: company
*         in: body
*         description: company
*         required: true
*         schema:
*           type: string
*       - name: password
*         in: body
*         description: password
*         schema:
*           type: string
*       - $ref: '#/parameters/communityBody'
*       - $ref: '#/parameters/clientIdBody'
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/register', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});


/**
* @swagger
* /login:
*   post:
*     summary: login
*     tags: [Oneid]
*     parameters:
*       - name: account
*         in: body
*         description: Username, phone or email
*         required: true
*         schema:
*           type: string
*       - name: code
*         in: body
*         description: code
*         schema:
*           type: string
*       - name: password
*         in: body
*         description: password
*         schema:
*           type: string
*       - $ref: '#/parameters/communityBody'
*       - $ref: '#/parameters/clientIdBody'
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/login', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /user/refresh:
*   get:
*     summary: refresh userinfo
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties: 
*                 photo: 
*                   type: string
*                 username: 
*                   type: string
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/user/refresh', async (ctx) => {
    const users = {
        code: 200,
        data: {
            photo: 'xxx',
            username: 'xxx',
        },
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /token/apply:
*   get:
*     summary: 第三方登录
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: code
*         in: query
*         required: true
*         description: 三方登录认证成功后返回的code
*         schema:
*           type: string
*       - name: permission
*         in: query
*         required: true
*         description: 权限
*         schema:
*           type: string
*           example: sigRead
*       - name: redirect
*         in: query
*         required: true
*         description: 回调地址
*         schema:
*           type: string
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/token/apply', async (ctx) => {
    const users = {
        code: 200,
        data: {
            data: 'xxx',
        },
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /logout:
*   get:
*     summary: logout
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/logout', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /app/verify:
*   get:
*     summary: 校验传入的回调地址
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/clientIdParam'
*       - name: redirect_uri
*         in: query
*         required: true
*         description: 传入的回调地址参数
*         schema:
*           type: string
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/app/verify', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /oidc/auth:
*   get:
*     summary: oidc方式登录成功调用接口
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: redirect_uri
*         in: query
*         required: true
*         description: 传入的回调地址参数
*         schema:
*           type: string
*       - name: response_type
*         in: query
*         required: true
*         description: 登录方式
*         schema:
*           type: string
*       - name: scope
*         in: query
*         required: true
*         description: 传入的回调地址参数
*         schema:
*           type: string
*       - name: state
*         in: query
*         required: true
*         description: 传入的回调地址参数
*         schema:
*           type: string
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/oidc/auth', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /public/key:
*   get:
*     summary: 获取公钥加密密码
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/public/key', async (ctx) => {
    const users = {
        code: 200,
        data: 'xxx',
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /reset/password/verify:
*   post:
*     summary: 获取重置密码token
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityBody'
*       - $ref: '#/parameters/clientIdBody'
*       - name: account
*         in: body
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: code
*         in: body
*         description: code
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 data:
*                   type: string
*                   description: reset token
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/reset/password/verify', async (ctx) => {
    const users = {
        code: 200,
        data: 'xxx',
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /reset/password:
*   post:
*     summary: 重置密码
*     tags: [Oneid]
*     parameters:
*       - $ref: '#/parameters/communityBody'
*       - $ref: '#/parameters/clientIdBody'
*       - name: pwd_reset_token
*         in: body
*         description: 重置密码token
*         required: true
*         schema:
*           type: string
*       - name: new_pwd
*         in: body
*         description: new password
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/reset/password', async (ctx) => {
    const users = {
        code: 200,
        data: 'xxx',
        msg: success,
    };
    ctx.body = users;
});



/**
* @swagger
* /personal/center/user:
*   get:
*     summary: 获取用户信息
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/UserInfoResponse'
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/personal/center/user', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /update/baseInfo:
*   post:
*     summary: 修改用户信息
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityBody'
*       - $ref: '#/parameters/clientIdBody'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: username
*         in: body
*         description: 为空时允许修改
*         required: true
*         schema:
*           type: string
*       - name: nickname
*         in: body
*         description: 昵称
*         required: true
*         schema:
*           type: string
*       - name: company
*         in: body
*         description: 公司
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/update/baseInfo', async (ctx) => {
    const users = {
        code: 200,
        data: 'xxx',
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /update/photo:
*   post:
*     summary: 修改用户头像
*     consumes:
*       - multipart/form-data
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: file
*         in: formData
*         description: 头像图片
*         required: true
*         schema:
*           type: file
*       - name: community
*         in: formData
*         description: 社区
*         required: true
*       - name: client_id
*         in: formData
*         description: app id
*         required: true
*     responses:
*       200:
*         description: send success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.post('/update/photo', async (ctx) => {
    const users = {
        code: 200,
        data: 'xxx',
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /sendcode:
*   get:
*     summary: 发送绑定验证码
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: account
*         in: query
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: captchaVerification
*         in: query
*         description: 图片验证信息
*         required: true
*         schema:
*           type: string
*       - name: channel
*         in: query
*         description: 验证码类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - channel_bind_phone 
*             - channel_bind_email 
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/sendcode', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /sendcode/unbind:
*   get:
*     summary: 发送解绑验证码
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: account
*         in: query
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: account_type
*         in: query
*         description: 验证账户类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - phone 
*             - email 
*       - name: field
*         in: query
*         description: 验证码类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - change 
*       - name: captchaVerification
*         in: query
*         description: 图片验证信息
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/sendcode/unbind', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /update/account:
*   get:
*     summary: 修改绑定邮箱或手机号
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: account
*         in: query
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: account_type
*         in: query
*         description: 验证账户类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - phone 
*             - email 
*       - name: code
*         in: query
*         description: 验证码
*         required: true
*         schema:
*           type: string
*           enum: 
*             - change 
*       - name: oldaccount
*         in: query
*         description: 旧账号phone or email
*         required: true
*         schema:
*           type: string
*       - name: oldcode
*         in: query
*         description: 旧账号验证码
*         required: true
*         schema:
*           type: string
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/update/account', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /bind/account:
*   get:
*     summary: 绑定邮箱或手机号
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: account
*         in: query
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: account_type
*         in: query
*         description: 验证账户类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - phone 
*             - email 
*       - name: code
*         in: query
*         description: 验证码
*         required: true
*         schema:
*           type: string
*           enum: 
*             - change 
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/bind/account', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /unbind/account:
*   get:
*     summary: 解绑邮箱或手机号
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: account
*         in: query
*         description: phone or email
*         required: true
*         schema:
*           type: string
*       - name: account_type
*         in: query
*         description: 验证账户类型
*         required: true
*         schema:
*           type: string
*           enum: 
*             - phone 
*             - email 
*       - name: code
*         in: query
*         description: 验证码
*         required: true
*         schema:
*           type: string
*           enum: 
*             - change 
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/unbind/account', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /conn/list:
*   get:
*     summary: 获取三方绑定链接
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 $ref: '#/components/ConnListResponse'
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/conn/list', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /unlink/account:
*   get:
*     summary: 解绑三方账号
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*       - name: platform
*         in: query
*         description: 标识符
*         required: true
*         schema:
*           type: string
*           enum: 
*             - github 
*             - gitee 
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/unlink/account', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

/**
* @swagger
* /delete/user:
*   get:
*     summary: 删除账号
*     tags: [User]
*     parameters:
*       - $ref: '#/parameters/communityParam'
*       - $ref: '#/parameters/clientIdParam'
*       - $ref: '#/parameters/cookieAuth'
*       - $ref: '#/parameters/tokenHeaderParam'
*     responses:
*       200:
*         description: success.
*         content:
*           application/json:
*             schema:
*               type: object
*       400:
*         description: error.
*         content:
*           application/json:
*             schema:
*               type: object
*               $ref: '#/components/ErrorResponse'
*/
router.get('/delete/user', async (ctx) => {
    const users = {
        code: 200,
        data: null,
        msg: success,
    };
    ctx.body = users;
});

module.exports = router;
