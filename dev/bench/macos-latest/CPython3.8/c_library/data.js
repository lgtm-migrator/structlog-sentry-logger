window.BENCHMARK_DATA = {
  "lastUpdate": 1631654817438,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "committer": {
            "name": "TeoZosa",
            "username": "TeoZosa"
          },
          "id": "458510a21f0829dcd8e5e903e29099236d8b8a1c",
          "message": "👷‍♀️ 📝 Add Performance Testing and Benchmarks",
          "timestamp": "2021-09-14T13:16:10Z",
          "url": "https://github.com/TeoZosa/structlog-sentry-logger/pull/258/commits/458510a21f0829dcd8e5e903e29099236d8b8a1c"
        },
        "date": 1631654816031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.95697318989866,
            "unit": "iter/sec",
            "range": "stddev: 0.004523673052236871",
            "extra": "mean: 15.883864000000052 msec\nrounds: 51"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.32808603745452,
            "unit": "iter/sec",
            "range": "stddev: 0.012928097437420535",
            "extra": "mean: 81.1155922307692 msec\nrounds: 13"
          }
        ]
      }
    ]
  }
}