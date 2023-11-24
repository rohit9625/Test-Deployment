import { defineConfig } from "vite";

export default defineConfig(({ command, mode, isSsrBuild })=> {
    console.log(command, mode, isSsrBuild)
    if(mode === 'production') {
        return {
            base: "/Test-Deployment/"
        }
    }

    return {}
})