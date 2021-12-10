const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : ''

const getEnvironmentVariable = (environmentVariable: string): string => {
    const unvalidatedEnvironmentVariable = process.env[ environmentVariable ];
    if (!unvalidatedEnvironmentVariable) {
        throw new Error(
            `Couldn't find environment variable: ${environmentVariable}`
        );
    } else {
        return unvalidatedEnvironmentVariable;
    }
};

export const secrets = {
    jsonAPI: getEnvironmentVariable("JSONAPI")
};