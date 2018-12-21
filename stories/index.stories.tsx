import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import { text, select, boolean, number, color, array, object, Function } from "@storybook/addon-knobs/react";

import { Button, Welcome } from '@storybook/react/demo';
import {ButtonA, InputA} from '../components';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
    .add(
        "ButtonA",
        withInfo({ inline: true })
        (() => <ButtonA name="ddd" onClick={action('onClick')}>custom button</ButtonA>)
    )

storiesOf('Input', module)
    .add(
        "InputA",
        withInfo({ inline: true })
        (() => <InputA name="aaa" type="text" placeholder="input" onChange={action('onChange')} />)
    )


