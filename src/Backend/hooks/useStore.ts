import { DynamicContext } from '@Context/Dynamic';
import { StaitcContext } from '@Context/Static';
import { useContext } from 'react';

export const useStaticData = () => useContext<StaticStateType | undefined>(StaitcContext) as StaticStateType;
export const useDynamicData = () => useContext<DynamicStateType | undefined>(DynamicContext) as DynamicStateType;
