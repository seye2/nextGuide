import { toJS, observable, action } from 'mobx';
import {API} from '../lib/util';

class LanguageStore {
    @observable lang;

    getLang() {
        return toJS(this.lang);
    }

    @action.bound
    async setLang() {
        this.lang=toJS(await API.getApi());
    }

    @action.bound
    setData(data) {
        this.lang=data;
    }
}

export default new LanguageStore();

