export default {
  branches: ["main"],
  repositoryUrl: "https://github.com/SP-Packages/hello-world.git",
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "conventionalcommits",
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
      },
    ],
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        message: "chore(release): v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    [
      "@semantic-release/github",
      {
        assets: [
          { path: "dist/**", label: "Distribution Files" },
          { path: "package.json", label: "Package Metadata" },
          { path: "README.md", label: "Documentation" },
        ],
      },
    ],
  ],
};
