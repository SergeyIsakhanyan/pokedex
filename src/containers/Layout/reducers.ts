import { LayoutAction } from './actions';
import { LAYOUT_BOOTSTRAP_FINISHED, 
    LAYOUT_BOOTSTRAP_USER_DATA, 
    SHOW_LOADER } from './constants';

export interface ILayoutState {
    isBootstrapInProgress: boolean;
    isBootstrapSuccessful: boolean;
    isLoading: boolean;
}

const initialState: ILayoutState = {
    isBootstrapInProgress: false,
    isBootstrapSuccessful: false,
    isLoading: false
};

export const layoutReducer = (
    state: ILayoutState = initialState,
    action: LayoutAction
): ILayoutState => {
    switch (action.type) {
        case LAYOUT_BOOTSTRAP_USER_DATA: {
            return {
                ...state,
                isBootstrapInProgress: true,
                isBootstrapSuccessful: false,
            };
        }
        case LAYOUT_BOOTSTRAP_FINISHED: {
            return {
                ...state,
                isBootstrapInProgress: false,
                isBootstrapSuccessful: action.payload.success,
            };
        }
        case SHOW_LOADER:
            return {
                ...state,
                isLoading: action.payload.show,
            };
        default:
            return state;
    }
};
