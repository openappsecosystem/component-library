import React from 'react'
import { storiesOf } from '@storybook/react'
import NavigationItem from './index'
import styled, {injectGlobal} from 'styled-components'
import Panel from '../panel'
import Icon from '../icons'
import {Wrapper} from '../utilities'


storiesOf('NavigationItem', module)
  .add('Classic', () => (
    <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
  ))
  .add('Multiple', () => (
    <div>
        <NavigationItem img='https://picsum.photos/200/300/?random' title='DiaryDiary Diary DiaryDiaryDiaryDiary DiaryDiaryDiary Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='Diary' />
    </div>
  ))
  .add('Inside Panel', () => (
    <Wrapper>
    <Panel icon={<Icon.Globe width='18' color='#f0f0f0' />} title='Network'>
      <Wrapper>
        <NavigationItem img='https://picsum.photos/200/300/?random' title='OCE ~ Development' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='FairCoop Communication FairCoop Communication FairCoop Communication' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='CE ~ Circular Economy' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='OCE ~ Development' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='FairCoop Communication' />
        <NavigationItem img='https://picsum.photos/200/300/?random' title='CE ~ Circular Economy' />
      </Wrapper>
    </Panel>
    </Wrapper>
  ))
