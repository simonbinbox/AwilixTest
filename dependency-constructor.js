import { createContainer, asClass, asValue, asFunction, Lifetime, InjectionMode }  from 'awilix';
import awilix from 'awilix';

const listModules = awilix.listModules;

const container = createContainer();

function setup() {

    const modulesToLoad = [
        ['controllers/**/*.js', Lifetime.SCOPED],
    ];

    container.loadModules(modulesToLoad, {
        formatName: 'camelCase',
        resolverOptions: { register: asFunction },
        esModules: true // Loading ES modules
    });

    console.log(listModules(modulesToLoad))
    console.log(container.registrations)
    container.resolve('loginController')
}


export {
    container,
    setup
};