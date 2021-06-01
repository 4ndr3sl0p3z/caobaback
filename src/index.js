import App from './app';

App.listen(process.env.VIRTUAL_PORT || 4000);


console.log(`App is running on port ${process.env.VIRTUAL_PORT}`)