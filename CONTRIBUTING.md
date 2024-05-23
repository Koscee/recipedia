# CONTRIBUTING

Contributions are only accepted from approved project developers.

Some thoughts to help you contribute to this project

## Recommended Communication Style

1. Always leave screenshots for visuals changes
1. Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer.
1. Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer.
1. Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.

## Pull Requests

### _When creating pull requests, ensure link your work to an existing issue._

1. Clone the repo and create your branch from `develop` branch.
1. Name your branch something that is descriptive to the work you are doing. It MUST start with either the `fix/` or `feature/` prefixes. Good examples are: `fix/signin-issue` or `feature/issue-templates`.
1. If you've added code that should be tested, add tests.
1. If you've changed APIs, update the documentation.
1. If you make visual changes, screenshots are required.
1. Ensure the test suite passes.
1. If test fails, fix them first and amend your commit (`git commit --amend`).
1. Ensure you have a descriptive commit message with a short title (first line)
1. Make sure you address any lint warnings.
1. If you make the existing code better, please let us know in your PR description.
1. A PR description and title are required. The title is required to begin with: "feat:" or "fix:"
1. [Link to an issue](https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls) in the project. Unsolicited code is welcomed, but an issue is required to announce your intentions. PR's without a linked issue will be marked invalid and closed.

_note for maintainers: All pull requests need a label to assist automation._

### PR Validation

1. Make sure that your PR is not a duplicate.
1. Your pull request MUST NOT target the `master` or `main` branch on this repository. You probably want to target `develop` branch instead.

Examples for valid PR titles:

- fix: Correct typo.
- feat: Add support for Node 12.
- refactor!: Drop support for Node 6.
- chore: Write button documentation

_Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes._

See [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [Git Branches and Commits Naming Convention](https://dev.to/varbsan/a-simplified-convention-for-naming-branches-and-commits-in-git-il4) for more examples.

## Issues

If you plan to contribute a change based on an open issue, please assign yourself by commenting on the following word `.take`. Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues.

If you would like to contribute to the project for the first time, please consider checking the bug or good first issue labels.

Also, all questions are welcomed.

## Coding Tips

- Ask questions if you are stuck.
