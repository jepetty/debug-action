import * as github from '@actions/github';

Object.defineProperty(github.context, 'github', {enumerable: true});
Object.defineProperty(process.env, 'env', { enumerable: true});
console.log('-------- GitHub Properties --------')
for (const prop in github.context) {
    console.log(`${prop}: ${github.context[prop]}`);
}
Object.defineProperty(github.context.payload, 'payload', {enumerable: true});
for (const prop in github.context.payload) {
    console.log(`payload.${prop}: ${github.context.payload[prop]}`)
}
if (github.context.eventName === 'pull_request') {
    Object.defineProperty(github.context.payload.pull_request, 'payload', {enumerable: true});
    for (const prop in github.context.payload.pull_request) {
        console.log(`pullrequest.${prop}: ${github.context.payload.pull_request[prop]}`)
    }
    for (const prop in github.context.payload.pull_request.base) {
        console.log(`pullrequest.base.${prop}: ${github.context.payload.pull_request.base[prop]}`)
    }
    for (const prop in github.context.payload.pull_request.head) {
        console.log(`pullrequest.base.head${prop}: ${github.context.payload.pull_request.head[prop]}`)
    }
}

console.log('\n-------- Process.ENV properties --------')
for (const prop in process.env) {
    console.log(`${prop}: ${process.env[prop]}`);
}