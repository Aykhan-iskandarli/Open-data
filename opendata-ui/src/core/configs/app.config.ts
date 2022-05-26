export enum environment {
    // @ts-ignore
    env = process.env.NODE_ENV,
    // @ts-ignore
    applicationUrl = process.env.BASE_URL,
    // @ts-ignore
    applicationName = process.env.REACT_APP_TITLE,
    // @ts-ignore
    apiMain = process.env.REACT_APP_API_MAIN,
    applicationVersion = require('../../../package.json').version,
}



