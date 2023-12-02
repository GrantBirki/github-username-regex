# github-username-regex-js ✅

[![npm version](https://img.shields.io/npm/v/github-username-regex-js.svg)](https://www.npmjs.com/package/github-username-regex-js) [![lint](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/lint.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/lint.yml) [![test](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/test.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/test.yml) [![build](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/build.yml/badge.svg)](https://github.com/GrantBirki/github-username-regex-js/actions/workflows/build.yml)

A regular expression that only matches a valid [GitHub](https://github.com/) username or [GitHub EMU](https://docs.github.com/en/enterprise-cloud@latest/admin/identity-and-access-management/understanding-iam-for-enterprises/about-enterprise-managed-users) username.

```javascript
import githubUsernameRegex from 'github-username-regex-js';

githubUsernameRegex.test('monalisa'); //=> true
githubUsernameRegex.test('mona-lisa'); //=> true
githubUsernameRegex.test('name_company'); //=> true - GitHub EMU
githubUsernameRegex.test('mona-lisa-'); //=> false
githubUsernameRegex.test('mona%$^lisa'); //=> false
```

According to the form validation messages on the [*Join GitHub*](https://github.com/join) page,

- GitHub usernames may only contain alphanumeric characters or hyphens
- GitHub usernames cannot have multiple consecutive hyphens
- GitHub usernames cannot begin or end with a hyphen
- Usernames can have a maximum of 39 characters

Additionally, this package (regex) also checks for GitHub EMU handles to see if they are valid as well. GitHub EMUs can look like this:

- `name_company`
- `name-with-hyphens_company`
- `name-with-numbers123_company123`
- etc

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

```javascript
// Returns `true`
githubUsernameRegex.test('a');
githubUsernameRegex.test('0');
githubUsernameRegex.test('a-b');
githubUsernameRegex.test('a-b-123');
githubUsernameRegex.test('a'.repeat(39));
githubUsernameRegex.test('some-person_githubEmuCompany'); // GitHub EMU

// Returns `false`
githubUsernameRegex.test('');
githubUsernameRegex.test('a_b');
githubUsernameRegex.test('a--b');
githubUsernameRegex.test('a-b-');
githubUsernameRegex.test('-a-b');
githubUsernameRegex.test('a'.repeat(40));
```

> Note: This module doesn't take reserved usernames into consideration. For example, it matches `help`, `about` and `pricing` even though they are reserved words and cannot be used as GitHub usernames.

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
