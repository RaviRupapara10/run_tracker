import { useTheme as _useTheme } from '@react-navigation/native';

export type MyTheme = {
    colors: {
        primary?: string;
        background?: string;
        card?: string;
        text?: string;
        border?: string;
        notification?: string;
        darkbackground?: string;
        grayText?: string;
        gray2?: string;
        white?: string;
        grade1?: string,
        grade2?: string;
        gray1?: string;
        cardColor?: string;
        secondGrade1?: string;
        secondGrade2?: string;
        firstGrade1?: string;
        firstGrade2?: string;


    };
}

export function useTheme<T = MyTheme>(): T {
    return (_useTheme() as T);
} 