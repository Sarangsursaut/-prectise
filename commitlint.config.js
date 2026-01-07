module.exports = {
  extends: ["@commitlint/cli",'@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',     // new feature
        'fix',      // bug fix
        'docs',     // documentation
        'style',    // formatting (no logic change)
        'refactor', // code refactor
        'perf',     // performance improvement
        'test',     // tests
        'build',    // build system
        'ci',       // CI changes
        'chore',    // maintenance
        'revert'    // revert commit
      ]
    ],
    'subject-case': [2,"always","sentence-case"],        // allow any case
    // 'subject-empty': [2, 'never'],
    // 'type-empty': [2, 'never'],
    // 'header-max-length': [2, 'always', 100]
  }
};
