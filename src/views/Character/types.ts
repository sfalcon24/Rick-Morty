import {Component} from 'react';
import type {FlatListProps} from 'react-native';
import type {ScreenComponent} from 'core/navigation/types';
import type {Lesson} from './model';

export type Props = ScreenComponent<'Character'>;

class CustomList extends Component<FlatListProps<Lesson>> {}

export type ListType = typeof CustomList;
