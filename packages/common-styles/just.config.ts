import { preset, task, series } from '@tai-ui/scripts';

preset();

task('build', series('clean', 'copy')).cached();
