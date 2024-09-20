import {esbuildPlugin} from '@web/dev-server-esbuild';

export default {
    files: 'src/**/*-spec.ts',
    plugins: [
        esbuildPlugin({
            ts: true,
            target: 'es6',
        }),
    ],
    // browsers: [playwrightLauncher({product: 'webkit'})],
};
