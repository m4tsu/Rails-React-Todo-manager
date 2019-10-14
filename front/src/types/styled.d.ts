// import original module declarations
import "styled-components"
import { Theme } from "@material-ui/core"

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    //   追加でテーマを拡張する場合、この中に定義をかく。
    palette: {
      primary: {
        main: string
        dark: string
        light: string
      }
      secondary: {
        main: string
      }
      text: {
        primary: string
        secondary: string
      }
    }
  }
}