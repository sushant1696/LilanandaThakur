export const Utilities = {
    ApiResponseHandler,
};

async function ApiResponseHandler(response) {
    
    let apiResponse = null;
    let apiStatus = null;
    let exceptionMessage = null;
    try {
        if (response.status === 200 || response.status === 201) {
            await response.json().then((res) => {
               
                if (res.status === 200 || res.status === 201) {
                    apiResponse = res;
                    apiStatus = true;
                }
               
                else {
                    
                    apiResponse = res;
                    apiStatus = true;
                }
            });
        } else if (response.status === 401) {
            window.location.href = window.location.origin

        } else {
            apiStatus = false;
            exceptionMessage = getStatusMessage(response.status);
        }
    } catch {
        apiStatus = false;
        exceptionMessage = getStatusMessage(response.status);
    }
    return [apiStatus, apiResponse, exceptionMessage];
}
function getStatusMessage(statusCode) {
    if (statusCode === 204) {
        return "NO-CONTENT";
    } else if (statusCode === 500) {
        return;
    } else if (statusCode === 504) {
        return "Server Time Out";
    } else if (statusCode === 400) {
        return;
    } else if (statusCode === 404) {
        return;
    } else if (statusCode === 401) {
        return;
    }
}
