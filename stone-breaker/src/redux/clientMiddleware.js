
export default function clientMiddleware() {
    return ({ dispatch, getState }) => {
        return next => (action) => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }

            const { promise, types, ...rest } = action;

            if (!promise) {
                return next(action);
            }
            const [REQUEST, SUCCESS, FAILURE] = types;
            next({ ...rest, type: REQUEST });

            const actionPromise = promise(client);
            actionPromise.then(
                data = next({ ...rest, data, type: SUCCESS }),
                error => next({ ...rest, error, type: FAILURE })
            ).catch((error) => {
                console.log('MIDDLEWARE_ERROR', error);
                next({ ...rest, error, type: FAILURE })
            });
            return actionPromise;
        };
    };
}
