const SHOW_ELEMENT = 'animation/SHOW_ELEMENT';
const INITIAL_STATE = {};


export default function (state = INITIAL_STATE, action) {
    switch(action.type) {
        case SHOW_ELEMENT:
            return {
                ...state,
                [action.componentId]: {
                    ...state[action.componentId],
                    isVisible: action.isVisible,
                }
            };
        default:
            return state;
    }
}

export function showElement(componentId, isVisible) {
    return {
        type: SHOW_ELEMENT,
        componentId,
        isVisible,
    }
}
