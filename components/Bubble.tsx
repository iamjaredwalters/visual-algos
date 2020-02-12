import React, { useState } from 'react';
import { log } from 'util';

const Bubble = (props: { items: number[] }) => {
    const { items } = props;
    const [changed, setChanged] = useState(false);
    const [current, setCurrent] = useState(0);
    const [inner, setInner] = useState(0);
    const [next, setNext] = useState(current + 1);

    /**
     * Start at step 0
     * Clicking button will move to next step
     */
    if (current < items.length - 1) {
        if (inner < items.length - (current + 1)) {
            // Reset changed value with each iteration
            if (changed) {
                setChanged(false)
            }

            if (items[inner] > items[inner + 1]) {
                console.log(`First: ${items[inner]} Second: ${items[inner + 1]}`);
                // use array destructuring to avoid temp variable
                [items[inner], items[inner + 1]] = [items[inner + 1], items[inner]];

                // A change was made this pass, so the array was not sorted prior to this pass
                // changed = true;
                setChanged(true);
                console.log(`current: ${current}, inner: ${inner}`);
            }
        }

        // if (inner === items.length - (current + 1)) {
        //     console.log('increment current');
        //     setCurrent(current + 1);
        // }

        console.log(`Changed: ${changed}`);
    }

    const tileStyle = (index: number) => {
        if (index === inner) {
            return { color: 'green' };
        }

        if (index === inner + 1) {
            return { color: 'blue' };
        }

        return { color: 'red' };
    };

    const tiles = () => {
        return items.map((item, index) => {
            const style = {
                ...tileStyle(index),
                width: '40px',
                height: '40px',
                border: '1px solid red',
            };
            return (
                <div style={style} key={item}>
                    {item}
                    <div>{index}</div>
                </div>
            )
        });
    };

    return (
        <>
            <button onClick={() => {
                console.log('test');
                // When inner counter reaches number of items then reset it, otherwise increment
                inner < (items.length - 1) ? setInner(inner + 1) : setInner(0);
            }}>
                Step
            </button>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {tiles()}
            </div>
            {!changed && <div>sorted!</div>}
        </>
    )
};

export {
    Bubble,
}
