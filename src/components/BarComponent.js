import React from 'react'
import PropTypes from 'prop-types'
import {loadFooRequest, storeBarRequest, updateBarRequest} from "../actions";

const createBar = ({sendEvent, focusMe, barState}) => (
    <div>
        <h1>
            Bar Page
        </h1>
        <input ref={focusMe}
               value={barState.barString}
               autoFocus={true}
               onChange={event => sendEvent(updateBarRequest(event.target.value))}
               onBlur={event => sendEvent(storeBarRequest(event.target.value))}
               onFocus={event => {
                   const target = event.target;
                   const length = target.value.length;
                   target.setSelectionRange(0, length);
               }}>
        </input>
        <p>
            <button onClick={event => focusMe.focus()}>set focus</button>
        </p>
        <p>
            <a href='#'
               onClick={() => sendEvent(loadFooRequest())}>
                Foo
            </a>
        </p>
    </div>
);
