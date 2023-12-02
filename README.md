# github-username-regex-js ✅

[![npm version](https://img.shields.io/npm/v/github-username-regex-js.svg)](https://www.npmjs.com/package/github-username-regex-js) [![lint](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/lint.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/lint.yml) [![test](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/test.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/test.yml) [![build](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/build.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/build.yml)

A regular expression that only matches a valid [GitHub](https://github.com/) username or [GitHub EMU](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users) username.

```javascript
import githubUsernameRegex from 'github-username-regex-js';

githubUsernameRegex.test('john'); //=> true
githubUsernameRegex.test('john-due'); //=> true
githubUsernameRegex.test('john-due-'); //=> false
```

According to the form validation messages on [*Join GitHub*](https://github.com/join) page,

* GitHub username may only contain alphanumeric characters or hyphens.
* GitHub username cannot have multiple consecutive hyphens.
* GitHub username cannot begin or end with a hyphen.
* Maximum is 39 characters.

## Installation

### [npm](https://www.npmjs.com/)

```bash
npm install github-username-regex-js
```

## API

```javascript
import githubUsernameRegex from 'github-username-regex-js';
```

### githubUsernameRegex

Type: [`RegExp`](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions) (`/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i`)

```javascript
// Returns `true`
githubUsernameRegex.test('a');
githubUsernameRegex.test('0');
githubUsernameRegex.test('a-b');
githubUsernameRegex.test('a-b-123');
githubUsernameRegex.test('a'.repeat(39));

// Returns `false`
githubUsernameRegex.test('');
githubUsernameRegex.test('a_b');
githubUsernameRegex.test('a--b');
githubUsernameRegex.test('a-b-');
githubUsernameRegex.test('-a-b');
githubUsernameRegex.test('a'.repeat(40));
```

Note that this module doesn't take reserved usernames into consideration. For example it matches `help`, `about` and `pricing`, though they are reserved words and cannot be used as Github usernames.

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
