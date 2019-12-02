/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import Laundrybasket from "./LaundrybasketComponent";

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

storiesOf("Laundrybasket", module)
    .add("default", () => < Laundrybasket
{...
    myProps
}
{...
    actions
}
/>)
    .add("pinned", () => (
        < Laundrybasket
{...
    myProps
}
pinned = {true}
{...
    actions
}
/>
))
.
add("archived", () => (
    < Laundrybasket
{...
    myProps
}
archived = {true}
{...
    actions
}
/>
))
;
