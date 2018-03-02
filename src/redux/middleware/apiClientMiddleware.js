import {API_URL} from "../../constants/configs";

export default function apiClientMiddleware({dispatch, getState}) {
    return (next) => (action) => {
        const {
            types,
            body,
            queryParameters,
            method,
            url,
            shouldCallAPI = () => true,
            successSideEffects,
            payload = {},
            userRequired = false,
            extraData,
        } = action;

        // let userData = getState().persisted.userData;
        if (!types) {
            // Normal action: pass it on
            return next(action)
        }

        if (
            !Array.isArray(types) ||
            types.length !== 3 ||
            !types.every(type => typeof type === 'string')
        ) {
            throw new Error('Expected an array of three string types.')
        }

        if (shouldCallAPI && !shouldCallAPI(getState())) {
            return;
        }

        const [requestType, successType, failureType] = types;

        dispatch(Object.assign({}, payload, extraData, {
            type: requestType,
            ...(extraData || {}),
        }));

        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        //
        // if (userData) {
        //     headers['Authorization'] = 'Bearer ' + userData.token;
        // }

        let fetchParams = {
            method,
            headers,
        };

        if (body) {
            fetchParams['body'] = JSON.stringify(body)
        }
        let encodedUrl = url;
        // if (queryParameters) {
        //     encodedUrl = encodeParametersInUrl(url, queryParameters);
        // }
        let finalUrl = API_URL() + encodedUrl;
        // console.log(finalUrl);
        return fetch(finalUrl, fetchParams)
            .then(response => {
                    response
                        .json()
                        .then(json => {
                            // console.log("ENTERED SUCCESS");
                            if (response.status === 401) {
                                // dispatch(logout());
                                // dispatch(push('/login'));
                            }
//TODO make sure this is right
                            let actionType = failureType;
                            if (response.status >= 200 && response.status < 300) {
                                actionType = successType;
                                if (successSideEffects) {
                                    successSideEffects(json);
                                }
                            } else {
                                // toastr.error(_t(apiResponses[json.error] || json.error, {message: json.message}));
                            }
                            if (json.error) {
                                let translatedError = _t(json.error, {message: json.message, ...(json.extra_details || {})});
                                if (translatedError === json.error) {
                                }
                                // dispatch(showAlert("RootWorker", DIALOG_IDS.API_ERROR, translatedError));
                            }
                            // dispatch(showAlert("RootWorker", DIALOG_IDS.API_ERROR, url));
                            dispatch(Object.assign({}, payload, {
                                response: json,
                                type: actionType,
                                ...(extraData || {}),
                            }));
                        })
                }
            ).catch(error => {
                // console.log(finalUrl);
                console.log(error);
                // dispatch(showAlert("RootWorker", DIALOG_IDS.API_ERROR, 'COULD_NOT_CONTACT_SERVER'));
                dispatch(Object.assign({}, payload, {
                    response: {error},
                    type: failureType,
                    ...(extraData || {}),
                }));

            })
    }
}