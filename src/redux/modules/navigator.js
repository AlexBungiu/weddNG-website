import {NAVIGATOR_PAGES} from "../../constants/enums";

const NAVIGATE_TO_SCREEN_ACTION = 'NAVIGATE_TO_SCREEN_ACTION';

const INITIAL_STATE = {
    screen: NAVIGATOR_PAGES.SPLASH
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case NAVIGATE_TO_SCREEN_ACTION: {
            return {
                ...state,
                screen: action.screen,
            };
        }

        default:
            return state;
    }
}

export function navigateToScreen(screen) {
    return {
        type: NAVIGATE_TO_SCREEN_ACTION,
        screen,
    }
}