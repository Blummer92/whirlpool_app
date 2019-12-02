/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Mix from "./MixComponent";

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

storiesOf("Mix", module)
    .add("default", () => < Mix
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => < Mix
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>)
    .add("archived", () => < Mix
{...
    myProps
}
archived = {true}
{...
    actions
}
/>);
