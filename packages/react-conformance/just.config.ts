import { preset, task } from '@tai-ui/scripts';

preset();

task('build', 'build:node-lib').cached();
