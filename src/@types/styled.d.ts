import "styled-components";
import { defaultTheme } from "../styles/themes/default";

/** Define o tipo do tema com base no tema padrão */
type ThemeType = typeof defaultTheme;

/** Extensão do módulo styled-components para incluir o tema */
declare module "styled-components" {
    export interface DefaultTheme extends ThemeType {_?: never}
}
