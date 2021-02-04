const getClubInformationAction = {
    type: 'home/getClubInformation',
    payload : ''
}

const getClubOfficersAction = {
    type: 'home/getClubOfficers',
    payload : []
}

const getClubEventsAction = {
    type: 'home/getClubEvents',
    payload : []
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

const getTournamentFinalResultsAction = {
    type: 'tournamentResults/getTournamentFinalResults',
    payload : []
}

const getClubInformation = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/clubinformation.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getClubInformationAction.type} Error. status: ${response.status}`);
    } else {
        getClubInformationAction.payload = await response.json();
        return getClubInformationAction;
    }
}

const getClubOfficers = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/officers.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getClubOfficersAction.type} Error. status: ${response.status}`);
    } else {
        getClubOfficersAction.payload = await response.json();
        return getClubOfficersAction;
    }
}

const getClubEvents = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/events.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getClubEventsAction.type} Error. status: ${response.status}`);
    } else {
        getClubEventsAction.payload = await response.json();
        return getClubEventsAction;
    }
}

const getFaqs = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/faqs.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getFaqsAction.type} Error. status: ${response.status}`);
    } else {
        getFaqsAction.payload = await response.json();
        return getFaqsAction;
    }
}

const getPhotos = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/gallery.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getGalleryPhotosAction.type} Error. status: ${response.status}`);
    } else {
        getGalleryPhotosAction.payload = await response.json();
        return getGalleryPhotosAction;
    }
}

const getTournamentResults = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/results.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getTournamentResultsAction.type} Error. status: ${response.status}`);
    } else {
        getTournamentResultsAction.payload = await response.json();
        return getTournamentResultsAction;
    }
}

const getTournamentFinalResults = async () => {
    let response = await fetch(`${process.env.PUBLIC_URL}/Data/finalStandings.json`, {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    if (!response.ok) {
        throw new Error(`${getTournamentFinalResultsAction.type} Error. status: ${response.status}`);
    } else {
        getTournamentFinalResultsAction.payload = await response.json();
        return getTournamentFinalResultsAction;
    }
}

export {getClubInformation, getClubOfficers, getClubEvents, getFaqs, getPhotos, getTournamentResults, getTournamentFinalResults}