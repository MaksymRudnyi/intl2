import {getFromStorage} from "../../utils/localStorage";
 import {LOCALES} from '../i18n/constants';
 import { STORAGE_KEY } from '../../constants/locale'

export default {
	locale: getFromStorage(STORAGE_KEY) || LOCALES.ENGLISH,
};