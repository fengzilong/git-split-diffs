import chalk from 'chalk';
import { Readable, Writable } from 'stream';
import terminalSize from 'term-size';
import { getContextForConfig } from './context';
import { getGitConfig } from './getGitConfig';
import { transformContentsStreaming } from './transformContentsStreaming';

export async function transform(input: string, options?: any): Promise<string> {
    let config = await getGitConfig(terminalSize().columns, chalk);
    const overrides: any = {};

    const { disableSyntaxHighlight = true, forceSideBySide = false } =
        options || {};

    if (disableSyntaxHighlight === true) {
        overrides.SYNTAX_HIGHLIGHTING_THEME = '';
    }

    if (forceSideBySide === true) {
        overrides.MIN_LINE_WIDTH = 0;
    }

    config = {
        ...config,
        ...overrides,
    };
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
