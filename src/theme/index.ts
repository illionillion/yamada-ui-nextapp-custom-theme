"use client"
import { extendTheme } from "@yamada-ui/react";

// extendThemeは内部で"use client"で実行しなければならない処理をしているから外部ファイルに"use client"をつけてexportする

export const customTheme = extendTheme({
    semantics: {
        colors: {
            primary: "pink.500",
        },
        colorSchemes: {
            primary: "pink",
        },
    },
})();