window.BENCHMARK_DATA = {
  "lastUpdate": 1633821581140,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "6a93db071a7c88642fb7c9d235fc325f4bcf76c0",
          "message": "Merge pull request #299 from TeoZosa/dependabot/pip/emoji-1.6.0",
          "timestamp": "2021-10-06T13:26:23Z",
          "tree_id": "ae0e1fa92b395ebb6e46e6dcf64db4ff7148ab36"
        },
        "date": 1633528685705,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.44029236598907,
            "unit": "iter/sec",
            "range": "stddev: 0.0008833810271954254",
            "extra": "mean: 14.827930972972942 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.79069066473402,
            "unit": "iter/sec",
            "range": "stddev: 0.001880988708422575",
            "extra": "mean: 56.20917247368432 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "4f69af02ecbbfbfae0e136f83ad479b6b386e46c",
          "message": "Merge pull request #300 from TeoZosa/dependabot/pip/xdoctest-0.15.10",
          "timestamp": "2021-10-06T13:44:55Z",
          "tree_id": "8b30ac83a96e77c23bc0dc3658e54100fd6a90fb"
        },
        "date": 1633529848904,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.0141164475688,
            "unit": "iter/sec",
            "range": "stddev: 0.0003494123219022761",
            "extra": "mean: 14.282833958904078 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.75026089567015,
            "unit": "iter/sec",
            "range": "stddev: 0.003141220228277466",
            "extra": "mean: 56.33720010526334 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "764d015c2fbf5cee6de562a0ca91be3bc38f1fc6",
          "message": "Merge pull request #301 from TeoZosa/dependabot/pip/coverage-6.0.1\n\n⬆️ Bump coverage from 6.0b1 to 6.0.1",
          "timestamp": "2021-10-07T18:42:08Z",
          "tree_id": "7a05a3eb5596f02f3c0e1725d43be0ca44e05943"
        },
        "date": 1633632233443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.39598707133504,
            "unit": "iter/sec",
            "range": "stddev: 0.0022195861560739055",
            "extra": "mean: 15.528917957142951 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.046404252936952,
            "unit": "iter/sec",
            "range": "stddev: 0.003524773976146106",
            "extra": "mean: 58.66339816666663 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "e2b620812dcfdbcf5ff0a31141998660e8ae54e5",
          "message": ":green_heart: Allow spurious interrogate failures\n\nThis hook works fine locally, but recent runs throw spurious error.\n\nExample error log:\n```\n\ninterrogate..........................................................................Failed\n- hook id: interrogate\n- duration: 0.24s\n- exit code: 2\n\nUsage: interrogate [OPTIONS] [PATHS]...\n\nError: Invalid value for '[PATHS]...': Path 'tests/structlog_sentry_logger/child_module_1.py' does not exist.\n```",
          "timestamp": "2021-10-09T21:08:10Z",
          "tree_id": "44c0682dacb9aed51a382f8e2099e69f28999f8d"
        },
        "date": 1633813885964,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.95454405074564,
            "unit": "iter/sec",
            "range": "stddev: 0.0008264555635928227",
            "extra": "mean: 15.395381718309832 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 16.886684070852525,
            "unit": "iter/sec",
            "range": "stddev: 0.0023537559090052794",
            "extra": "mean: 59.21825716666677 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "b73fc2c6870cb9d950061342359b6a6bc7818919",
          "message": "Merge pull request #303 from TeoZosa/add-non-str-key-serialization-functionality\n\n✨  Enable Non-String Key JSON Serialization",
          "timestamp": "2021-10-09T21:36:31Z",
          "tree_id": "1d60d5d7b2cd69e4bba934a6a28c39159fefba23"
        },
        "date": 1633815540362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 106.2537893184095,
            "unit": "iter/sec",
            "range": "stddev: 0.00006192327449546852",
            "extra": "mean: 9.411429055045854 msec\nrounds: 109"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.0689146459304,
            "unit": "iter/sec",
            "range": "stddev: 0.00007206471975489543",
            "extra": "mean: 41.54736574999992 msec\nrounds: 24"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub"
          },
          "id": "2390314399f6d91c16e54309ac72939d5c170ccd",
          "message": "Merge pull request #304 from TeoZosa/add-non-str-key-serialization-benchmarks",
          "timestamp": "2021-10-09T23:05:44Z",
          "tree_id": "c2e7eacf71344e285607b2caf263d5608953905a"
        },
        "date": 1633820890958,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.10716605012423,
            "unit": "iter/sec",
            "range": "stddev: 0.0010816345809264106",
            "extra": "mean: 12.968963213483175 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.60842957240338,
            "unit": "iter/sec",
            "range": "stddev: 0.001514979401491975",
            "extra": "mean: 14.366076151162805 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.799843698148553,
            "unit": "iter/sec",
            "range": "stddev: 0.002620359679546109",
            "extra": "mean: 56.18026859999983 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "committer": {
            "email": "erinzosa@ucla.edu",
            "name": "Teo Zosa"
          },
          "id": "41985f89d3390fb7022861f7554ab4f1d631c006",
          "message": ":bookmark: Bump version number to `0.12.0`",
          "timestamp": "2021-10-09T23:16:59Z",
          "tree_id": "3a04d4d7745b241fd1f62babfc4ebfcd4295067c"
        },
        "date": 1633821578881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 120.20596841667407,
            "unit": "iter/sec",
            "range": "stddev: 0.000057062217672534454",
            "extra": "mean: 8.319054479338877 msec\nrounds: 121"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 107.74365712294116,
            "unit": "iter/sec",
            "range": "stddev: 0.00005697856400051074",
            "extra": "mean: 9.281288817391333 msec\nrounds: 115"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 23.120662568518966,
            "unit": "iter/sec",
            "range": "stddev: 0.0005040996219429502",
            "extra": "mean: 43.25135566666664 msec\nrounds: 24"
          }
        ]
      }
    ]
  }
}