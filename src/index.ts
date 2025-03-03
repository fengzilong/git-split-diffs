import { Readable, Writable } from 'stream';
import chalk from 'chalk';
import { exec } from 'child_process';
import terminalSize from 'terminal-size';
import * as util from 'util';
import { getContextForConfig } from './context';
import { getGitConfig } from './getGitConfig';
import { transformContentsStreaming } from './transformContentsStreaming';
import { Config, getConfig } from './getConfig';
const execAsync = util.promisify(exec);

async function transform(
    input: string,
    userConfig: Partial<Config>,
    columns: number = terminalSize().columns,
): Promise<string> {
    const { stdout: gitConfigString } = await execAsync('git config -l');
    const gitConfig = getGitConfig(gitConfigString);
    const config = getConfig(gitConfig);

    const finalConfig: Config = {
        ...config,
        ...userConfig,
    };
    const context = await getContextForConfig(
        finalConfig,
        chalk,
        columns
    );

    let string = '';
    await transformContentsStreaming(
        context,
        Readable.from(input),
        new (class extends Writable {
            write(chunk: Buffer) {
                string += chunk.toString();
                return true;
            }
        })()
    );
    return string;
}

export {
    transform,
}