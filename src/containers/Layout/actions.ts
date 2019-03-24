import { LAYOUT_BOOTSTRAP_FINISHED, 
    LAYOUT_BOOTSTRAP_USER_DATA, 
    SHOW_LOADER } from './constants';

export interface IBootstrapUserData {
    type: typeof LAYOUT_BOOTSTRAP_USER_DATA;
}

export interface IBootstrapFinished {
    type: typeof LAYOUT_BOOTSTRAP_FINISHED;
    payload: {
        success: boolean;
    };
}

export interface IShowLoader {
    type: typeof SHOW_LOADER;
    payload: {
        show: boolean;
    }
}

export type LayoutAction = IBootstrapUserData | IBootstrapFinished | IShowLoader;

export class LayoutActions {
    public static bootstrapUserData(): LayoutAction {
        return {
            type: LAYOUT_BOOTSTRAP_USER_DATA,
        };
    }
    public static bootstrapFinished(success: boolean): LayoutAction {
        return {
            type: LAYOUT_BOOTSTRAP_FINISHED,
            payload: {
                success,
            },
        };
    }
    public static showLoader(show: boolean): LayoutAction {
        return {
            type: SHOW_LOADER,
            payload: {
                show
            }
        }
    }
}
