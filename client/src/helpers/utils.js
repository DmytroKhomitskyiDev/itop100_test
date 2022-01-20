import moment from "moment";

export const getFormatedData = (birthdate) => {
    return moment(birthdate, 'DD.MM.YYYY')
}

export const getCurrentTitle = (name) => {
    switch (name) {
        case "users":
            return "Users: "
        case "profiles":
            return "Profiles: "
        case "adult":
            return "Profiles over 18 years old: "
        default:
            return ''
    }
}