import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.SERVER_URL
});

const errorHandler = (error) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
    } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
    }
    console.log(error.config);
    throw new Error(`${getClubInformationAction.type} Error. Error: ${error.response}`);
}

const getClubInformationAction = {
    type: 'home/getClubInformation',
    payload : {info: '', events: '', officers: ''}
}

const getFaqsAction = {
    type: 'membership/getFaqs',
    payload : []
}

const getGalleryPhotosAction = {
    type: 'gallery/getPhotos',
    payload : []
}

const getTournamentResultsAction = {
    type: 'tournamentResults/getTournamentResults',
    payload : []
}

const getClubInformation = async () => {
    try {
        let response = await instance.get('/');
        getClubInformationAction.payload = response.data;
        return getClubInformationAction;
    } catch (error) {
        errorHandler(error);
    }
}

const getFaqs = async () => {
    try {
        let response = await instance.get('/Membership');
        getFaqsAction.payload = response.data;
        return getFaqsAction;
    } catch (error) {
        errorHandler(error);
    }
}

const getPhotos = async () => {
    try {
        let response = await instance.get('/Gallery');
        getGalleryPhotosAction.payload = response.data;
        return getGalleryPhotosAction;
    } catch (error) {
        errorHandler(error);
    }
}

const getTournamentResults = async (selectedYear) => {
    try {
        if(!selectedYear)
            selectedYear = new Date().getFullYear();

        let response = await instance.get(`/TournamentResults/${selectedYear}`);
        getTournamentResultsAction.payload = response.data;
        return getTournamentResultsAction;
    } catch (error) {
        errorHandler(error);
    }
}

export {getClubInformation, getFaqs, getPhotos, getTournamentResults}