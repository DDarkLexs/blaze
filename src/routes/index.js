import routeSetup from './routePath'


export default ((app) => {


    app.use('/api',  routeSetup)



})