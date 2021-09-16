window.BENCHMARK_DATA = {
  "lastUpdate": 1631768486882,
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
        "date": 1631755137697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.07692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378879538497865",
            "extra": "mean: 16.927083333333336 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.378378378378379,
            "unit": "iter/sec",
            "range": "stddev: 0.00637887953849786",
            "extra": "mean: 96.35416666666667 msec\nrounds: 6"
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
          "id": "4cc61459ec5c5a6f91481c6ff85a23300f099946",
          "message": ":construction_worker: Benchmark based on process time\n\nGiven that benchmarks run automatically on cloud instances during CI,\nresource contention may confound metrics. Benchmarking based on process\ntime will lead to more accurate results within and between environment.\n\nNote: logging is inherently I/O-bound and process time, by definition,\nexcludes time spent waiting on I/O, so these benchmarks are *not*\na good indication of real-world performance. Instead, they are meant to\ncompare performance across different combinations of Python\ninterpreters, platforms, and library types (viz. Python and C).",
          "timestamp": "2021-09-16T01:00:37Z",
          "tree_id": "addd2c89830236692cba95e762cb2fb0018b4598"
        },
        "date": 1631756287380,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 86.15384615384615,
            "unit": "iter/sec",
            "range": "stddev: 0.0007188182909816195",
            "extra": "mean: 11.607142857142858 msec\nrounds: 7"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.559322033898306,
            "unit": "iter/sec",
            "range": "stddev: 0.0013072812914594935",
            "extra": "mean: 73.75 msec\nrounds: 5"
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
          "id": "99dd7a9b89d48ea97eacf85123b3fb121a53e9bd",
          "message": ":memo: Fix broken link",
          "timestamp": "2021-09-16T04:36:21Z",
          "tree_id": "27a53814f2e5df6ee6610a9e4460a01f86308d40"
        },
        "date": 1631768484003,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.76470588235294,
            "unit": "iter/sec",
            "range": "stddev: 0.001063146589749643",
            "extra": "mean: 14.756944444444445 msec\nrounds: 6"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.816901408450704,
            "unit": "iter/sec",
            "range": "stddev: 0.00318943976924893",
            "extra": "mean: 92.44791666666667 msec\nrounds: 6"
          }
        ]
      }
    ]
  }
}