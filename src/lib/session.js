import { userInfo } from "os";

// import api from './api';
export default {
    login (row) {
        this.replace_uinfo(row);
    },
    replace_uinfo(row) {
        delete row.password;
        localStorage.setItem('uinfo', JSON.stringify(row));
    },
    uinfo() {
        return JSON.parse(localStorage.getItem('uinfo')) || '';
    }
}