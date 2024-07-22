### VentureDive Flutter CLI

<br clear="left"/>

[![style: very good analysis][very_good_analysis_badge]][very_good_analysis_link]
[![License: MIT][license_badge]][license_link]

---

A Command-Line Interface for generating Flutter Apps created by VentureDive.

Developed with 💙 by [VentureDive][venturedive_link].

## Quick Start 🚀

### Installing 🧑‍💻

```sh
dart pub global activate venturedive_flutter_cli
```

If you haven't already, you might need to [set up your path][path_setup_link].

When that is not possible (eg: CI environments), run `venturedive_flutter` commands via:

```sh
dart pub global run venturedive_flutter_cli:venturedive_flutter <command> <args>
```

### Commands ✨

### `venturedive_flutter create`

Create a venturedive flutter project in seconds based on the provided template. Each template has a corresponding sub-command (e.g.,`venturedive_flutter create flutter_app` will generate a Flutter starter app).

```sh
Creates a new venturedive flutter project in the specified directory.

Usage: venturedive_flutter create <subcommand> <project-name> [arguments]
-h, --help    Print this usage information.

Available subcommands:
  flutter_app       Generate a VentureDive Flutter application.
  flutter_feature   Generate a VentureDive Flutter feature.

Run "venturedive_flutter help" to see global options.
```

#### Usage

```sh
# Create a new Flutter app named my_app
venturedive_flutter create flutter_app my_app

# Create a new Flutter app named my_app with a custom org
venturedive_flutter create flutter_app my_app --desc "My new Flutter app" --org "com.custom.org"

# Create a new Flutter app named my_app with a custom application id
venturedive_flutter create flutter_app my_app --desc "My new Flutter app" --application-id "com.custom.app.id"

# Create a new Flutter feature named my_feature
venturedive_flutter create flutter_feature my_feature

```

---

```sh
🦄 A VentureDive Command-Line Interface

Usage: venturedive_flutter <command> [arguments]

Global options:
-h, --help            Print this usage information.
    --version         Print the current version.
    --[no-]verbose    Noisy logging, including all shell commands executed.

Available commands:
  create     venturedive_flutter create <subcommand> <name> [arguments]
             Creates a new venturedive flutter project or feature in the specified directory.
  update     Update VentureDive Flutter CLI.

Run "venturedive_flutter help <command>" for more information about a command.
```

[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license_link]: https://opensource.org/licenses/MIT
[very_good_analysis_badge]: https://img.shields.io/badge/style-very_good_analysis-B22C89.svg
[very_good_analysis_link]: https://pub.dev/packages/very_good_analysis
[venturedive_link]: https://venturedive.com
[path_setup_link]: https://dart.dev/tools/pub/cmd/pub-global#running-a-script-from-your-path
# hadiyaaamir.github.io
