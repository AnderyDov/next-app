import { createContext, PropsWithChildren, useState } from 'react';
import { IMenu } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IContext {
    menu: IMenu[];
    firstCategory: TopLevelCategory;
    setMenu?: (newMenu: IMenu[]) => void;
}

export const AppContext = createContext<IContext>({
    menu: [],
    firstCategory: TopLevelCategory.Courses,
});

export default function AppContextProvider({
    menu,
    firstCategory,
    children,
}: PropsWithChildren<IContext>) {
    const [menuState, setMenuState] = useState<IMenu[]>(menu);
    const setMenu = (newMenu: IMenu[]) => {
        setMenuState(newMenu);
    };

    return (
        <AppContext.Provider
            value={{ menu: menuState, firstCategory, setMenu }}
        >
            {children}
        </AppContext.Provider>
    );
}
