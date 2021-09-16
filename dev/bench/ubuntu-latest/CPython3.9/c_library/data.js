window.BENCHMARK_DATA = {
  "lastUpdate": 1631754599870,
  "repoUrl": "https://github.com/TeoZosa/structlog-sentry-logger",
  "entries": {
    "Benchmark": [
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
          "id": "a830bc4a08c52c80a7d23252aaa468971a09cae7",
          "message": ":memo: Remove year from \"Performance\" section\n\nEasier to maintain; preempt risk of looking dated if the year\naccidentally doesn't get updated.",
          "timestamp": "2021-09-16T00:44:59Z",
          "tree_id": "6e6f16f6f92bbe32b37814f19654a748ccb5504f"
        },
        "date": 1631754599172,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.5467566648139,
            "unit": "iter/sec",
            "range": "stddev: 0.0010085196339569692",
            "extra": "mean: 8.435490165517216 msec\nrounds: 145"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.561997176552794,
            "unit": "iter/sec",
            "range": "stddev: 0.0022764570718569557",
            "extra": "mean: 40.71330164285717 msec\nrounds: 28"
          }
        ]
      }
    ]
  }
}