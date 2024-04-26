import {Component} from 'react';
import type {FlatListProps, ListRenderItemInfo} from 'react-native';
import type {ScreenComponent} from 'core/navigation/types';
import type {Character} from 'features/characters/common/domain/CharacterSummary';

export type RenderItemParams = ListRenderItemInfo<Character>;

export type Props = ScreenComponent<'Character'>;

class CustomList extends Component<FlatListProps<Character>> {}

export type ListType = typeof CustomList;
