var assert = require('assert');
var pathDirname = require('./');

var path = {
  posix: {
    dirname: pathDirname.posix
  },
  win32: {
    dirname: pathDirname.win32
  }
};

var f = __filename;

// https://github.com/nodejs/node/blob/0f2f8e/test/parallel/test-path.js#L67-L115

// path.dirname tests
assert.strictEqual(pathDirname(f).substr(-13),
            process.platform === 'win32' ? '\\path-dirname' : '/path-dirname');

assert.strictEqual(path.posix.dirname('/a/b/'), '/a');
assert.strictEqual(path.posix.dirname('/a/b'), '/a');
assert.strictEqual(path.posix.dirname('/a'), '/');
assert.strictEqual(path.posix.dirname(''), '.');
assert.strictEqual(path.posix.dirname('/'), '/');
assert.strictEqual(path.posix.dirname('////'), '/');
assert.strictEqual(path.posix.dirname('foo'), '.');

assert.strictEqual(path.win32.dirname('c:\\'), 'c:\\');
assert.strictEqual(path.win32.dirname('c:\\foo'), 'c:\\');
assert.strictEqual(path.win32.dirname('c:\\foo\\'), 'c:\\');
assert.strictEqual(path.win32.dirname('c:\\foo\\bar'), 'c:\\foo');
assert.strictEqual(path.win32.dirname('c:\\foo\\bar\\'), 'c:\\foo');
assert.strictEqual(path.win32.dirname('c:\\foo\\bar\\baz'), 'c:\\foo\\bar');
assert.strictEqual(path.win32.dirname('\\'), '\\');
assert.strictEqual(path.win32.dirname('\\foo'), '\\');
assert.strictEqual(path.win32.dirname('\\foo\\'), '\\');
assert.strictEqual(path.win32.dirname('\\foo\\bar'), '\\foo');
assert.strictEqual(path.win32.dirname('\\foo\\bar\\'), '\\foo');
assert.strictEqual(path.win32.dirname('\\foo\\bar\\baz'), '\\foo\\bar');
assert.strictEqual(path.win32.dirname('c:'), 'c:');
assert.strictEqual(path.win32.dirname('c:foo'), 'c:');
assert.strictEqual(path.win32.dirname('c:foo\\'), 'c:');
assert.strictEqual(path.win32.dirname('c:foo\\bar'), 'c:foo');
assert.strictEqual(path.win32.dirname('c:foo\\bar\\'), 'c:foo');
assert.strictEqual(path.win32.dirname('c:foo\\bar\\baz'), 'c:foo\\bar');
assert.strictEqual(path.win32.dirname('\\\\unc\\share'),
                   '\\\\unc\\share');
assert.strictEqual(path.win32.dirname('\\\\unc\\share\\foo'),
                   '\\\\unc\\share\\');
assert.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\'),
                   '\\\\unc\\share\\');
assert.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar'),
                   '\\\\unc\\share\\foo');
assert.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar\\'),
                   '\\\\unc\\share\\foo');
assert.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar\\baz'),
                   '\\\\unc\\share\\foo\\bar');
assert.strictEqual(path.win32.dirname('/a/b/'), '/a');
assert.strictEqual(path.win32.dirname('/a/b'), '/a');
assert.strictEqual(path.win32.dirname('/a'), '/');
assert.strictEqual(path.win32.dirname(''), '.');
assert.strictEqual(path.win32.dirname('/'), '/');
assert.strictEqual(path.win32.dirname('////'), '/');
assert.strictEqual(path.win32.dirname('foo'), '.');
