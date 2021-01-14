function isIDNominated(id) {
    return localStorage.getItem('nomination_' + id) == "true";
};

function setIDNominated(id, flag) {
    localStorage.setItem('nomination_' + id, flag);
};

