window.BENCHMARK_DATA = {
  "lastUpdate": 1642435411544,
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
          "id": "de351d873a6e2fd6ba664f30f32e7c44c395f1af",
          "message": "Merge pull request #413 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.16.1",
          "timestamp": "2022-01-13T14:41:34Z",
          "tree_id": "d94f460d865ed87282fc73b144e9f910eaac6178"
        },
        "date": 1642085559446,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.59116528468559,
            "unit": "iter/sec",
            "range": "stddev: 0.00042526934037314193",
            "extra": "mean: 7.962343511450311 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.00381929471993,
            "unit": "iter/sec",
            "range": "stddev: 0.0005086056939170273",
            "extra": "mean: 6.493345454545396 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7641996255056,
            "unit": "iter/sec",
            "range": "stddev: 0.00036604794274823244",
            "extra": "mean: 5.242073732718861 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.0149603542948,
            "unit": "iter/sec",
            "range": "stddev: 0.00014896474597961095",
            "extra": "mean: 3.021011494252923 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33082949649847,
            "unit": "iter/sec",
            "range": "stddev: 0.0002483249107415116",
            "extra": "mean: 8.59617355371905 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.94014546321588,
            "unit": "iter/sec",
            "range": "stddev: 0.0003024255959009022",
            "extra": "mean: 6.852124183006582 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01073558380548,
            "unit": "iter/sec",
            "range": "stddev: 0.00021002015563735486",
            "extra": "mean: 4.901702830188612 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.6895620523507,
            "unit": "iter/sec",
            "range": "stddev: 0.00011842720564590338",
            "extra": "mean: 3.014867256637306 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.09543296775252,
            "unit": "iter/sec",
            "range": "stddev: 0.0014735283532029749",
            "extra": "mean: 76.36249999999986 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.2075222499577,
            "unit": "iter/sec",
            "range": "stddev: 0.0017187273339152537",
            "extra": "mean: 75.7144285714304 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.17918317532946,
            "unit": "iter/sec",
            "range": "stddev: 0.0003253330422041604",
            "extra": "mean: 5.946039106144808 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.64685430307122,
            "unit": "iter/sec",
            "range": "stddev: 0.0002564084469247955",
            "extra": "mean: 4.07088461538462 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 486.91218611034094,
            "unit": "iter/sec",
            "range": "stddev: 0.00009090140008376759",
            "extra": "mean: 2.0537584158417146 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 469.646225507209,
            "unit": "iter/sec",
            "range": "stddev: 0.00005722667250186487",
            "extra": "mean: 2.129262295081833 msec\nrounds: 488"
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
          "id": "03c022db08faa4d02905eab49e8bd3142abfc36c",
          "message": "Merge pull request #415 from TeoZosa/dependabot/pip/emoji-1.6.3",
          "timestamp": "2022-01-17T15:11:48Z",
          "tree_id": "4d20e97e7e3408092678a41a004d1fb0811ff220"
        },
        "date": 1642435405932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.42702305501945,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727088072409583",
            "extra": "mean: 8.101953488372112 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.09292120220766,
            "unit": "iter/sec",
            "range": "stddev: 0.00028707399933252016",
            "extra": "mean: 6.618443750000041 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.54342289655128,
            "unit": "iter/sec",
            "range": "stddev: 0.00036320482955292684",
            "extra": "mean: 4.772280542986484 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 334.1750288648441,
            "unit": "iter/sec",
            "range": "stddev: 0.00014322355102193578",
            "extra": "mean: 2.99244382022466 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.31131936294751,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834535773173983",
            "extra": "mean: 8.903822033898292 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 125.54717644400046,
            "unit": "iter/sec",
            "range": "stddev: 0.0007431460935314981",
            "extra": "mean: 7.9651333333334176 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.1511703499171,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531374204162762",
            "extra": "mean: 5.286776699028964 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.6879257724834,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849011003003273",
            "extra": "mean: 3.1676852941176494 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.230713409471768,
            "unit": "iter/sec",
            "range": "stddev: 0.006857589331237249",
            "extra": "mean: 89.0415384615388 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.884453854494078,
            "unit": "iter/sec",
            "range": "stddev: 0.003952302422121362",
            "extra": "mean: 84.14353846153834 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.80895078973256,
            "unit": "iter/sec",
            "range": "stddev: 0.00045142785859738775",
            "extra": "mean: 6.218559322034011 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.13296690030867,
            "unit": "iter/sec",
            "range": "stddev: 0.0004333848070946313",
            "extra": "mean: 4.38340856031118 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.72208205340706,
            "unit": "iter/sec",
            "range": "stddev: 0.00017963356703551423",
            "extra": "mean: 2.11540784313736 msec\nrounds: 510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.34337816638185,
            "unit": "iter/sec",
            "range": "stddev: 0.00017277689911543155",
            "extra": "mean: 2.2555879917184893 msec\nrounds: 483"
          }
        ]
      }
    ]
  }
}