import { environment } from './app.config';

const base = "/api/v1/"
const baseDropdown = "/api/v1/dropdown/"

export const API = {
    login: environment.apiMain + 'login',
    test: environment.apiMain + 'test',
    contact: environment.apiMain + base + "home/contactForms",
    getContacts: environment.apiMain + base + "home/contacts",
    search: environment.apiMain + base + 'home/searchTags',
    servicesBySearch: environment.apiMain + base + 'home/servicesBySearch',
    servicesByTag: environment.apiMain + base + 'home/servicesByTag',
    servicesByDetailedSearch: environment.apiMain + base + 'home/servicesByDetailedSearch',
    subscribers: environment.apiMain + base + "home/subscribers",
    category: environment.apiMain + base + 'home/categories',
    organisation: environment.apiMain + base + 'home/organisations',
    faqs: environment.apiMain + base + 'home/faqs',
    about: environment.apiMain + base + 'home/about',
    detail: environment.apiMain + base + 'home/service',

    dropdown: {
        categories: environment.apiMain + baseDropdown + "categories",
        organisations: environment.apiMain + baseDropdown + "organisations",
        fileTypes: environment.apiMain + baseDropdown + "fileTypes",
        languages: environment.apiMain + baseDropdown + "languages",
        contentTypes: environment.apiMain + baseDropdown + "contentTypes",
    }
}
