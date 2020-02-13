import React from 'react'
import PropTypes from 'prop-types'
import {loadBarRequest, storeFooRequest, updateFooRequest} from "../actions";

const createFoo = ({sendEvent, focusMe, fooState}) => (
    <div>
        <h1>
            Foo Page
        </h1>
        <input ref={focusMe}
               value={fooState.fooString}
               autoFocus={true}
               onChange={event => sendEvent(updateFooRequest(event.target.value))}
               onBlur={event => sendEvent(storeFooRequest(event.target.value))}
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
               onClick={() => sendEvent(loadBarRequest())}>
                Bar
            </a>
        </p>
    </div>
);
