# Release automation

This repository uses [SemVerge](https://github.com/EvanGribar/semverge) for
release preparation and GitHub release publication.

The workflow runs the production build while preparing a release pull request.
Merging the generated `semverge/release` pull request is the only release
publication step; the workflow's concurrency group keeps preparation and
publication from racing each other.

