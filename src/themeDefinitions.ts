import { ThemeDefinition } from './themes';

const THEME_DEFINITIONS: { [key in string]: ThemeDefinition } = {
    default: {
        DEFAULT_COLOR: 'white',
        BORDER_COLOR: { modifiers: ['dim'] },
        COMMIT_SHA_COLOR: 'green',
        COMMIT_AUTHOR_COLOR: 'blue',
        FILE_NAME_COLOR: 'yellow',
        HUNK_HEADER_COLOR: { modifiers: ['dim'] },
        DELETED_LINE_COLOR: 'red',
        INSERTED_LINE_COLOR: 'green',
        DELETED_LINE_NO_COLOR: { color: 'red', modifiers: ['dim'] },
        INSERTED_LINE_NO_COLOR: { color: 'green', modifiers: ['dim'] },
        UNMODIFIED_LINE_NO_COLOR: { modifiers: ['dim'] },
    },
    'color-test': { DEFAULT_COLOR: { modifiers: ['inverse', 'bold'] } },
    'github-light': {
        DEFAULT_COLOR: { color: '05264c', backgroundColor: 'ffffff' },
        BORDER_COLOR: { color: 'e1e4e8' },
        COMMIT_COLOR: { backgroundColor: 'f1f8fe' },
        COMMIT_AUTHOR_COLOR: { modifiers: ['bold'], backgroundColor: 'f1f8fe' },
        COMMIT_DATE_COLOR: { backgroundColor: 'f1f8fe' },
        COMMIT_SHA_COLOR: { backgroundColor: 'f1f8fe' },
        HUNK_HEADER_COLOR: { color: '4c5154', backgroundColor: 'f1f8ff' },
        DELETED_LINE_COLOR: { color: 'd73a49', backgroundColor: 'ffeef0' },
        INSERTED_LINE_COLOR: { color: '22863a', backgroundColor: 'e6ffed' },
        UNMODIFIED_LINE_COLOR: { color: '24292e' },
        MISSING_LINE_COLOR: { color: 'c2a9ad', backgroundColor: 'fedbdf' },
        DELETED_LINE_NO_COLOR: { color: 'c2a9ad', backgroundColor: 'ffdce0' },
        INSERTED_LINE_NO_COLOR: { color: 'a5cfb0', backgroundColor: 'cdffd8' },
        UNMODIFIED_LINE_NO_COLOR: { color: 'd1d5da' },
    },
    'github-dark-dimmed': {
        DEFAULT_COLOR: { color: 'adbac7', backgroundColor: '22272e' },
        BORDER_COLOR: { color: '444c56' },
        COMMIT_COLOR: { color: 'c6e6ff' },
        COMMIT_AUTHOR_COLOR: { modifiers: ['bold'] },
        HUNK_HEADER_COLOR: { color: '768390', backgroundColor: '263441' },
        DELETED_LINE_COLOR: { color: 'e5534b', backgroundColor: '442d30' },
        INSERTED_LINE_COLOR: { color: '57ab5a', backgroundColor: '253230' },
        UNMODIFIED_LINE_COLOR: { backgroundColor: '22282d' },
        MISSING_LINE_COLOR: { backgroundColor: '2d333b' },
        DELETED_LINE_NO_COLOR: { color: 'e5534b', backgroundColor: '442d30' },
        INSERTED_LINE_NO_COLOR: { color: '57ab5a', backgroundColor: '253230' },
        UNMODIFIED_LINE_NO_COLOR: { backgroundColor: '22282d' },
    },
};
export default THEME_DEFINITIONS;
