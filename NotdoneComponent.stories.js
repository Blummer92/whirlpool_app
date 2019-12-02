/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Notdone from "./NotdoneComponent";

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

storiesOf("Notdone", module)
    .add("default", () => < Notdone
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => < Notdone
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>)
    .add("archived", () => < Notdone
{...
    myProps
}
archived = {true}
{...
    actions
}
/>);
