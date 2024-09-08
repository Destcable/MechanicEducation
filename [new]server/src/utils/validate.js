export function validate(request, params) {
    let errors = null;
    let data = {};

    for (let key in params) {
        let isKeyRequired = false;

        if (request[key]) {
            isKeyRequired = true;
            data[key] = request[key];
        }

        if (request.body && request.body[key]) {
            data[key] = request.body[key];
            isKeyRequired = true;
        }

        if (!isKeyRequired)
            errors
                ? (errors[key] = `The ${key} field is required.`)
                : (errors = { [key]: `The ${key} field is required.` });
    }

    return Object.assign({}, data, { errors })
}
