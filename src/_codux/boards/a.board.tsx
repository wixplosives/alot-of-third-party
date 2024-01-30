import React from 'react';
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: '[test] Multi screen app',
    Board: () => <A />,
});

function A({children, title}: {title: React.ReactNode, children: React.ReactNode}) {
    return <div>
        <h1>{title}</h1>
        {children}
    </div>
}