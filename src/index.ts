import chalk from 'chalk';
import { Readable, Writable } from 'stream';
import terminalSize from 'term-size';
import { getContextForConfig } from './context';
import { getGitConfig } from './getGitConfig';
import { transformContentsStreaming } from './transformContentsStreaming';

export async function transform( input: string ): Promise<string> {
    const config = await getGitConfig(terminalSize().columns, chalk);
    const context = await getContextForConfig(config);

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
