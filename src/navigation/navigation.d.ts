import {MainStackParamsList} from '../../App';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends MainStackParamsList {}
  }
}
