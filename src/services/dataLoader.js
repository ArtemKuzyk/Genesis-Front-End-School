import { LS_KEYS, LocalStorageService } from "./localStorage";

const APP_KEYS = {
    HOST : 'https://api.wisey.app',
    VERSION : 'api/v1'
}

const header = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
const body = 'eyJzdWIiOiJkOTRlNjg4NS1kM2U5LTQwY2EtYTVjYy01MDRkNjZlZDVlN2QiLCJwbGF0Zm9ybSI6InN1YnNjcmlwdGlvbnMiLCJpYXQiOjE2Nzg3MDQ3NjIsImV4cCI6MTY3OTYwNDc2Mn0'
const signature = 'Qw3LF39CDp27ZxoGzt5rikJM_OTx0eNaoyFFLxxrXUM'
const token = [header, body, signature].join('.')
// pm.request.addHeader(`Authorization: Bearer ${token}`)

const DATA_URL = {PATH : `${APP_KEYS.HOST}/${APP_KEYS.VERSION}/core/preview-courses`,
                  COURSE_PATH : `${APP_KEYS.HOST}/${APP_KEYS.VERSION}/core/preview-courses/`};
// const DATA_URL = {PATH : '/response.json'};

const sortByDate = (arr) => {
    const sortedResult = arr.sort((a, b) => new Date(b.launchDate) - new Date(a.launchDate))
    return sortedResult;
}

class DataLoader{
    static async set(path){
        // console.log(path)
        return fetch(path, {
            method: "GET",
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            if(data['courses']){
                const sortedResult = sortByDate(data['courses']);
                LocalStorageService.set(LS_KEYS.COURSES_LIST, sortedResult);
            } else {
                LocalStorageService.set(LS_KEYS.SPECIFIC_COURSE, data);
            }
        })
        .catch(() => alert("Sorry, servise dosn`t work"));
    }
}

export { DataLoader, DATA_URL }