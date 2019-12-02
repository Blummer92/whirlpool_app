/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Shirt from "./ShirtComponent";

export const myProps = {
    id: "1",
    className: "mySampleClass",
    sampleString: "Test Task",
    sampleDate: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
    onActionOne: action("onActionOne"),
    onActionTwo: action("onActionTwo")
};

storiesOf("Shirt", module)
    .add("default", () => < Shirt
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => < Shirt
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>)
    .add("archived", () => < Shirt
{...
    myProps
}
archived = {true}
{...
    actions
}
/>);
