name: My YourTomo cat
on:
  schedule:
    - cron: '23 */6 * * *'   # every 6h - pick your own minute
  workflow_dispatch:

permissions:
  contents: write

jobs:
  pet:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: prsdx/github-pet@v1
        with:
          username: your-username        # change me
          timezone-offset-minutes: "330" # your UTC offset in minutes
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/your-username/your-username/main/dist/pet.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/your-username/your-username/main/dist/pet-light.svg">
  <img alt="my github pet" src="https://raw.githubusercontent.com/your-username/your-username/main/dist/pet.svg" width="100%">
</picture>
