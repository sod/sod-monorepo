import {esbuildPlugin} from '@web/dev-server-esbuild';
import {playwrightLauncher} from '@web/test-runner-playwright';

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
