window.BENCHMARK_DATA = {
  "lastUpdate": 1643830686249,
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
        "date": 1642086089876,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.04215524172139,
            "unit": "iter/sec",
            "range": "stddev: 0.00022873069562010531",
            "extra": "mean: 7.871402985074627 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.2068627978169,
            "unit": "iter/sec",
            "range": "stddev: 0.00034202096914875166",
            "extra": "mean: 6.570005988023971 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.81273810715197,
            "unit": "iter/sec",
            "range": "stddev: 0.00019962233933646512",
            "extra": "mean: 4.72115137614679 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.8829725121153,
            "unit": "iter/sec",
            "range": "stddev: 0.0001504360105784849",
            "extra": "mean: 3.078031428571433 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.65347172607318,
            "unit": "iter/sec",
            "range": "stddev: 0.00042560992969964244",
            "extra": "mean: 8.721933884297648 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.11340246341913,
            "unit": "iter/sec",
            "range": "stddev: 0.0005978080506057692",
            "extra": "mean: 7.188380000000052 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.10982879372725,
            "unit": "iter/sec",
            "range": "stddev: 0.00031785768721579106",
            "extra": "mean: 5.022353773584802 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.63587732456887,
            "unit": "iter/sec",
            "range": "stddev: 0.00020592712375697554",
            "extra": "mean: 3.158201807229021 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.435391123429001,
            "unit": "iter/sec",
            "range": "stddev: 0.005963801232675476",
            "extra": "mean: 74.43028571428582 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.787816533798107,
            "unit": "iter/sec",
            "range": "stddev: 0.001996472718142561",
            "extra": "mean: 72.52779999999983 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.41393182297827,
            "unit": "iter/sec",
            "range": "stddev: 0.0005265218834891122",
            "extra": "mean: 6.0454400000005695 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.09167361723377,
            "unit": "iter/sec",
            "range": "stddev: 0.0003213213807470934",
            "extra": "mean: 4.271830708661225 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.48118396504145,
            "unit": "iter/sec",
            "range": "stddev: 0.000183693914704484",
            "extra": "mean: 2.1716413934427283 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.464901434979,
            "unit": "iter/sec",
            "range": "stddev: 0.00015304866543749398",
            "extra": "mean: 2.275494577006521 msec\nrounds: 461"
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
        "date": 1642435407505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.76895743698356,
            "unit": "iter/sec",
            "range": "stddev: 0.0007394631624725829",
            "extra": "mean: 8.713157480314939 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.39912166912765,
            "unit": "iter/sec",
            "range": "stddev: 0.0004218110690669424",
            "extra": "mean: 6.648975000000079 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.48414329034708,
            "unit": "iter/sec",
            "range": "stddev: 0.000389493814957607",
            "extra": "mean: 4.96316972477064 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.14819491735153,
            "unit": "iter/sec",
            "range": "stddev: 0.00015699530593924055",
            "extra": "mean: 3.0850086956522196 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.31249607050948,
            "unit": "iter/sec",
            "range": "stddev: 0.0003993578637779814",
            "extra": "mean: 8.747949999999882 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.43692714819943,
            "unit": "iter/sec",
            "range": "stddev: 0.00037150168254104153",
            "extra": "mean: 7.020651315789363 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.16088048234295,
            "unit": "iter/sec",
            "range": "stddev: 0.00026244091810297224",
            "extra": "mean: 4.995981220657222 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.09755489330445,
            "unit": "iter/sec",
            "range": "stddev: 0.00013328610251946355",
            "extra": "mean: 3.183724242424266 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.939025765297137,
            "unit": "iter/sec",
            "range": "stddev: 0.003444383582549853",
            "extra": "mean: 77.28557142857159 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.602666122560034,
            "unit": "iter/sec",
            "range": "stddev: 0.0017150060327316644",
            "extra": "mean: 73.51499999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.5635108559591,
            "unit": "iter/sec",
            "range": "stddev: 0.000343764535655095",
            "extra": "mean: 6.003715909091161 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.6292486219025,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472975957069187",
            "extra": "mean: 4.173113281249918 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.2495684140456,
            "unit": "iter/sec",
            "range": "stddev: 0.00010298945198403432",
            "extra": "mean: 2.1085944333995594 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.38060249352577,
            "unit": "iter/sec",
            "range": "stddev: 0.0001389020460400128",
            "extra": "mean: 2.2656183673469616 msec\nrounds: 490"
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
          "id": "7ba9623bc95e5ad9b88a6ab406a22de86ad5df5b",
          "message": "Merge pull request #429 from TeoZosa/ci/fix-go-downloads\n\n👷  Fix `pre-commit` 2.17.0 compatibility with CI Go version",
          "timestamp": "2022-02-01T20:06:42Z",
          "tree_id": "45506e53ff19af72ba3c5f820616517d836a2b67"
        },
        "date": 1643747054249,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.26764631922819,
            "unit": "iter/sec",
            "range": "stddev: 0.0010196133492776799",
            "extra": "mean: 8.600844961240274 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.02034106319567,
            "unit": "iter/sec",
            "range": "stddev: 0.0006344593382678722",
            "extra": "mean: 6.578067073170785 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.93028127742681,
            "unit": "iter/sec",
            "range": "stddev: 0.0005310012304909005",
            "extra": "mean: 5.237513888888967 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.1240444036775,
            "unit": "iter/sec",
            "range": "stddev: 0.00033935262267814246",
            "extra": "mean: 3.298979472140706 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.6538772372833,
            "unit": "iter/sec",
            "range": "stddev: 0.0008367785254704113",
            "extra": "mean: 9.203537190082544 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.25272899585005,
            "unit": "iter/sec",
            "range": "stddev: 0.000812481070991686",
            "extra": "mean: 7.4486381578948135 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.7372823118672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651168286987044",
            "extra": "mean: 5.594803652967959 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.5631479303806,
            "unit": "iter/sec",
            "range": "stddev: 0.00035330017911334267",
            "extra": "mean: 3.5898502994011374 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.550056813452452,
            "unit": "iter/sec",
            "range": "stddev: 0.002806023979125677",
            "extra": "mean: 73.80042857142881 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.312215043253703,
            "unit": "iter/sec",
            "range": "stddev: 0.004779694687708011",
            "extra": "mean: 81.2201538461542 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.97221383031263,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315752922003193",
            "extra": "mean: 6.452769662921338 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.35648055391744,
            "unit": "iter/sec",
            "range": "stddev: 0.00026509000075753254",
            "extra": "mean: 4.213072243345982 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 415.40638427687276,
            "unit": "iter/sec",
            "range": "stddev: 0.00026099873631427515",
            "extra": "mean: 2.4072812499999747 msec\nrounds: 480"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 412.90203677661714,
            "unit": "iter/sec",
            "range": "stddev: 0.0002534634520475408",
            "extra": "mean: 2.421881974249032 msec\nrounds: 466"
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
          "id": "fbc1f51374879029ede846aead7cfe3820b086d5",
          "message": "Merge pull request #422 from TeoZosa/dependabot/pip/docs/orjson-3.6.6",
          "timestamp": "2022-02-01T20:46:04Z",
          "tree_id": "c109a979c4f17a5f3197a1b3af7e228b72defa1e"
        },
        "date": 1643756546092,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.90119186081868,
            "unit": "iter/sec",
            "range": "stddev: 0.0007914931099790832",
            "extra": "mean: 8.271217054263609 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.5756397797207,
            "unit": "iter/sec",
            "range": "stddev: 0.0025069651182843566",
            "extra": "mean: 7.717500000000044 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0567826681977,
            "unit": "iter/sec",
            "range": "stddev: 0.0005184464680587848",
            "extra": "mean: 4.973719298245667 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.0918496573405,
            "unit": "iter/sec",
            "range": "stddev: 0.00019239455746800817",
            "extra": "mean: 3.029459833794967 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.01549019269129,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993101702506948",
            "extra": "mean: 9.17300833333356 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.5198476424857,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481420950060987",
            "extra": "mean: 7.271677631578888 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.9599134956724,
            "unit": "iter/sec",
            "range": "stddev: 0.0005941426769930652",
            "extra": "mean: 5.406576923076889 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.5826584914465,
            "unit": "iter/sec",
            "range": "stddev: 0.00023895743269097895",
            "extra": "mean: 3.2831810089019977 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.206537990964883,
            "unit": "iter/sec",
            "range": "stddev: 0.002039001319057721",
            "extra": "mean: 75.72007142857119 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.801343629027325,
            "unit": "iter/sec",
            "range": "stddev: 0.003736459806514971",
            "extra": "mean: 78.11679999999986 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.8826093652895,
            "unit": "iter/sec",
            "range": "stddev: 0.000678662964906786",
            "extra": "mean: 6.4565027932962265 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.06819904199622,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021675190332483",
            "extra": "mean: 4.309078124999949 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 431.4751598537449,
            "unit": "iter/sec",
            "range": "stddev: 0.0003044825938077667",
            "extra": "mean: 2.3176305220883755 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.0598768145316,
            "unit": "iter/sec",
            "range": "stddev: 0.00015576852847042457",
            "extra": "mean: 2.251948559670626 msec\nrounds: 486"
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
          "id": "03111c457eb51c4c8cc36cc7509d615c6316806a",
          "message": "Merge pull request #419 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.6",
          "timestamp": "2022-02-01T20:53:48Z",
          "tree_id": "651df2fa401b2bf9d3332100b717d5e869152cc9"
        },
        "date": 1643756918652,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.00152211422777,
            "unit": "iter/sec",
            "range": "stddev: 0.0004179769727082258",
            "extra": "mean: 8.19661904761908 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.7011444256673,
            "unit": "iter/sec",
            "range": "stddev: 0.0002833294836484721",
            "extra": "mean: 6.548739393939417 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.40266201928236,
            "unit": "iter/sec",
            "range": "stddev: 0.000276447003001474",
            "extra": "mean: 4.775488479262586 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.6587249944273,
            "unit": "iter/sec",
            "range": "stddev: 0.0009785411795723957",
            "extra": "mean: 3.2823612716763377 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.26879241531262,
            "unit": "iter/sec",
            "range": "stddev: 0.0004479445880815584",
            "extra": "mean: 8.675375000000063 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.33185882284727,
            "unit": "iter/sec",
            "range": "stddev: 0.00043220617909497483",
            "extra": "mean: 7.281631578947468 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.66796282673346,
            "unit": "iter/sec",
            "range": "stddev: 0.000340088587927037",
            "extra": "mean: 5.3285599999999 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.28452959109836,
            "unit": "iter/sec",
            "range": "stddev: 0.00015861383608334266",
            "extra": "mean: 3.3081415094338587 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.4167471671497,
            "unit": "iter/sec",
            "range": "stddev: 0.003504222034337528",
            "extra": "mean: 74.53371428571413 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.31356585793079,
            "unit": "iter/sec",
            "range": "stddev: 0.001747462318605939",
            "extra": "mean: 75.11135714285798 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.4710970442015,
            "unit": "iter/sec",
            "range": "stddev: 0.0014496063469874047",
            "extra": "mean: 6.735317647058866 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.35947393173456,
            "unit": "iter/sec",
            "range": "stddev: 0.00032679223848996114",
            "extra": "mean: 4.143197628458692 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 452.3518280099918,
            "unit": "iter/sec",
            "range": "stddev: 0.00011248278156657924",
            "extra": "mean: 2.2106686390530323 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.28012442231164,
            "unit": "iter/sec",
            "range": "stddev: 0.00010592104702040025",
            "extra": "mean: 2.281645788337037 msec\nrounds: 463"
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
          "id": "e50edc43b9469575157db7fb338cc96c1551312c",
          "message": "Merge pull request #428 from TeoZosa/dependabot/pip/rich-11.1.0",
          "timestamp": "2022-02-01T21:04:22Z",
          "tree_id": "ff71e2f9f681b869ee73b148cbfdf11fb491a23e"
        },
        "date": 1643758759207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.90958068181769,
            "unit": "iter/sec",
            "range": "stddev: 0.0006294583488448898",
            "extra": "mean: 8.339617187499961 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.0756602243012,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182650528239397",
            "extra": "mean: 6.753304347826143 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.9034752519397,
            "unit": "iter/sec",
            "range": "stddev: 0.000433165137510244",
            "extra": "mean: 4.9528617511520165 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.445084639777,
            "unit": "iter/sec",
            "range": "stddev: 0.0002996389286516104",
            "extra": "mean: 3.1701238938053242 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.60804931644053,
            "unit": "iter/sec",
            "range": "stddev: 0.000733958746045431",
            "extra": "mean: 9.040933333333475 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.58185894203982,
            "unit": "iter/sec",
            "range": "stddev: 0.000596744203927781",
            "extra": "mean: 7.113293333333198 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.26975943897418,
            "unit": "iter/sec",
            "range": "stddev: 0.0007876698924359435",
            "extra": "mean: 5.873033492822938 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.8148381057195,
            "unit": "iter/sec",
            "range": "stddev: 0.0003391685575532258",
            "extra": "mean: 3.302348082595864 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.87834745045517,
            "unit": "iter/sec",
            "range": "stddev: 0.003874951045419362",
            "extra": "mean: 77.64971428571421 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.173680867580714,
            "unit": "iter/sec",
            "range": "stddev: 0.003058128373426211",
            "extra": "mean: 75.90892857143012 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.56109744884702,
            "unit": "iter/sec",
            "range": "stddev: 0.0007786708583742374",
            "extra": "mean: 6.346744318182062 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.57484333901328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896148903512505",
            "extra": "mean: 4.226992125984391 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 407.7344473071785,
            "unit": "iter/sec",
            "range": "stddev: 0.0004116821285256128",
            "extra": "mean: 2.4525766871167036 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.448993264914,
            "unit": "iter/sec",
            "range": "stddev: 0.00036992041296931714",
            "extra": "mean: 2.4186780383795936 msec\nrounds: 469"
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
          "id": "7254f43340b5341ea577062ceeaf0414def12934",
          "message": "Merge pull request #416 from TeoZosa/dependabot/pip/sphinx-4.4.0",
          "timestamp": "2022-02-01T21:13:46Z",
          "tree_id": "153b43cd3046e8dd3cf45a6ac4a7fe988cc9f449"
        },
        "date": 1643759238279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.61133632099425,
            "unit": "iter/sec",
            "range": "stddev: 0.00022307916548752654",
            "extra": "mean: 8.155852713178314 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.31464907966213,
            "unit": "iter/sec",
            "range": "stddev: 0.00030514183361972635",
            "extra": "mean: 6.565356687898021 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.19533640026543,
            "unit": "iter/sec",
            "range": "stddev: 0.00032370860711451776",
            "extra": "mean: 4.8972714932127115 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.6800213175057,
            "unit": "iter/sec",
            "range": "stddev: 0.00016891084216687233",
            "extra": "mean: 3.2291395348837497 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.37879104476123,
            "unit": "iter/sec",
            "range": "stddev: 0.00039760217755659675",
            "extra": "mean: 8.819991735537261 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.3235091352624,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351973517523932",
            "extra": "mean: 7.282074324324243 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.42140190792358,
            "unit": "iter/sec",
            "range": "stddev: 0.00035456244526413047",
            "extra": "mean: 5.143466666666626 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.25170853610126,
            "unit": "iter/sec",
            "range": "stddev: 0.00036543720835036173",
            "extra": "mean: 3.2759849397590934 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.854637147053177,
            "unit": "iter/sec",
            "range": "stddev: 0.0014261446684634492",
            "extra": "mean: 72.1779999999997 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.587378490015087,
            "unit": "iter/sec",
            "range": "stddev: 0.002133908924182685",
            "extra": "mean: 73.597714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.83416437223997,
            "unit": "iter/sec",
            "range": "stddev: 0.0003531727032918052",
            "extra": "mean: 6.066703488372293 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.57245249250855,
            "unit": "iter/sec",
            "range": "stddev: 0.0002533837390562089",
            "extra": "mean: 4.413599221790056 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.35591560025887,
            "unit": "iter/sec",
            "range": "stddev: 0.0000447817067870511",
            "extra": "mean: 2.1260495867768983 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.9271075943764,
            "unit": "iter/sec",
            "range": "stddev: 0.00012838793674884184",
            "extra": "mean: 2.2834850427350926 msec\nrounds: 468"
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
          "id": "76caacb1edc12f84e4944d2a5ac977ecb1000b1b",
          "message": "Merge pull request #424 from TeoZosa/dependabot/pip/sentry-sdk-1.5.4",
          "timestamp": "2022-02-01T21:30:40Z",
          "tree_id": "abf17f1b4d54f4575c8b34a627d1eb0d947d9dab"
        },
        "date": 1643759838754,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.90159268455146,
            "unit": "iter/sec",
            "range": "stddev: 0.0005276666328380097",
            "extra": "mean: 8.006303030303037 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.30275840426233,
            "unit": "iter/sec",
            "range": "stddev: 0.00046036088454788805",
            "extra": "mean: 6.788739130434804 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.77674648577698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003632285194185849",
            "extra": "mean: 5.056206140350856 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.0971107927863,
            "unit": "iter/sec",
            "range": "stddev: 0.00024141689466434472",
            "extra": "mean: 3.2457298850574414 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.00316029770889,
            "unit": "iter/sec",
            "range": "stddev: 0.0005782178492690978",
            "extra": "mean: 9.615092436975006 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 122.26763591555883,
            "unit": "iter/sec",
            "range": "stddev: 0.0032964530517178335",
            "extra": "mean: 8.178779220779452 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.27663228554314,
            "unit": "iter/sec",
            "range": "stddev: 0.0005067986642377277",
            "extra": "mean: 5.094850000000003 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.1557674273935,
            "unit": "iter/sec",
            "range": "stddev: 0.0002583622584059005",
            "extra": "mean: 3.2451120689656285 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.15564413843098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009718803718274133",
            "extra": "mean: 70.64319999999948 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.352573756279448,
            "unit": "iter/sec",
            "range": "stddev: 0.005335505577142443",
            "extra": "mean: 74.89192857142767 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.39170342013745,
            "unit": "iter/sec",
            "range": "stddev: 0.0007114056337531321",
            "extra": "mean: 6.394201086956363 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.77409244692697,
            "unit": "iter/sec",
            "range": "stddev: 0.000372789835324195",
            "extra": "mean: 4.188059055118273 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.63842666181847,
            "unit": "iter/sec",
            "range": "stddev: 0.00019965361283507904",
            "extra": "mean: 2.2439716599189725 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.23060899763647,
            "unit": "iter/sec",
            "range": "stddev: 0.000163449626170904",
            "extra": "mean: 2.2409937369520447 msec\nrounds: 479"
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
          "id": "1add8bac0a9435b17e6cb4039fc7248aff2854ae",
          "message": "Merge pull request #425 from TeoZosa/dependabot/pip/pytest-mock-3.7.0",
          "timestamp": "2022-02-01T22:00:15Z",
          "tree_id": "dc051959949ebed5266814db49e6ddab59028a90"
        },
        "date": 1643760309095,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.63655268986983,
            "unit": "iter/sec",
            "range": "stddev: 0.0005785177531910881",
            "extra": "mean: 8.289361538461572 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.1975050953074,
            "unit": "iter/sec",
            "range": "stddev: 0.0004343250866580989",
            "extra": "mean: 6.570409937888215 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.2558713416186,
            "unit": "iter/sec",
            "range": "stddev: 0.0002993658198550618",
            "extra": "mean: 4.801785388127765 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.61474193118585,
            "unit": "iter/sec",
            "range": "stddev: 0.00023066605002494673",
            "extra": "mean: 3.099672364672354 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.60716293232798,
            "unit": "iter/sec",
            "range": "stddev: 0.0007162622753624144",
            "extra": "mean: 8.880429752066098 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.8457684750848,
            "unit": "iter/sec",
            "range": "stddev: 0.0005616746848983566",
            "extra": "mean: 7.3074966887417325 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.40681851974625,
            "unit": "iter/sec",
            "range": "stddev: 0.00019617344515059318",
            "extra": "mean: 4.940545023696633 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7326287906601,
            "unit": "iter/sec",
            "range": "stddev: 0.0000951720147842033",
            "extra": "mean: 3.1178617647058693 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.29229317119209,
            "unit": "iter/sec",
            "range": "stddev: 0.006014428129073419",
            "extra": "mean: 81.351785714286 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.417685851721142,
            "unit": "iter/sec",
            "range": "stddev: 0.002353320722527401",
            "extra": "mean: 74.52850000000007 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.29793528104238,
            "unit": "iter/sec",
            "range": "stddev: 0.00022731329732884222",
            "extra": "mean: 5.872061797752872 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.58747455682453,
            "unit": "iter/sec",
            "range": "stddev: 0.00040644539668888504",
            "extra": "mean: 4.43287022900779 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.91345046248443,
            "unit": "iter/sec",
            "range": "stddev: 0.00014265714134247733",
            "extra": "mean: 2.1417245508979996 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.2611565289342,
            "unit": "iter/sec",
            "range": "stddev: 0.00013519615274462885",
            "extra": "mean: 2.2408403361343483 msec\nrounds: 476"
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
          "id": "62797e89c8da551f06c954afc88afbf7f598ffe6",
          "message": "Merge pull request #423 from TeoZosa/dependabot/pip/orjson-3.6.6",
          "timestamp": "2022-02-01T22:20:23Z",
          "tree_id": "b33af58f7c674aeeaa17f06c19ea69024130dab3"
        },
        "date": 1643761428670,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.48324976550828,
            "unit": "iter/sec",
            "range": "stddev: 0.0006511256080149093",
            "extra": "mean: 8.033209302325583 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.54889496961778,
            "unit": "iter/sec",
            "range": "stddev: 0.0005552483710215435",
            "extra": "mean: 7.270142011834286 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.8077742593487,
            "unit": "iter/sec",
            "range": "stddev: 0.00039629774258948604",
            "extra": "mean: 4.979886877828111 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4459116877679,
            "unit": "iter/sec",
            "range": "stddev: 0.0001541982929221139",
            "extra": "mean: 3.1109432835821424 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.20448144698919,
            "unit": "iter/sec",
            "range": "stddev: 0.0006376391672122881",
            "extra": "mean: 8.912299999999984 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.30903551995348,
            "unit": "iter/sec",
            "range": "stddev: 0.00034729952640175294",
            "extra": "mean: 7.076688311688288 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.56936145705728,
            "unit": "iter/sec",
            "range": "stddev: 0.00027829926001909596",
            "extra": "mean: 4.96107142857146 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.50416487046647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002739856984782476",
            "extra": "mean: 3.3840470588235116 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.137330023851527,
            "unit": "iter/sec",
            "range": "stddev: 0.0010090385697110046",
            "extra": "mean: 70.73471428571513 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.820464791444596,
            "unit": "iter/sec",
            "range": "stddev: 0.0012282616558526329",
            "extra": "mean: 72.35646666666658 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.97297597124407,
            "unit": "iter/sec",
            "range": "stddev: 0.0005329331379076026",
            "extra": "mean: 6.330196629213535 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.30490409108955,
            "unit": "iter/sec",
            "range": "stddev: 0.0002502150947567414",
            "extra": "mean: 4.110069230769042 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.5758005548373,
            "unit": "iter/sec",
            "range": "stddev: 0.0000963957974407163",
            "extra": "mean: 2.1295816326531916 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 431.94162354906985,
            "unit": "iter/sec",
            "range": "stddev: 0.00014549096602525777",
            "extra": "mean: 2.315127659574575 msec\nrounds: 470"
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
          "id": "47770cd905b46cfd1cb60d3dbf04cbb6316bec25",
          "message": "Merge pull request #427 from TeoZosa/dependabot/pip/black-22.1.0\n\n⬆️ Bump black from 21.12b0 to 22.1.0",
          "timestamp": "2022-02-02T04:07:47Z",
          "tree_id": "a70318d0a2394db56a236ba295bc8f0250efa2aa"
        },
        "date": 1643775648001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.86772679670513,
            "unit": "iter/sec",
            "range": "stddev: 0.0003793847395356327",
            "extra": "mean: 8.008474452554756 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.3744651530597,
            "unit": "iter/sec",
            "range": "stddev: 0.0005545588251017495",
            "extra": "mean: 6.83179268292682 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.1577279791937,
            "unit": "iter/sec",
            "range": "stddev: 0.00033962339041992203",
            "extra": "mean: 4.9960599078340335 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.8127803549283,
            "unit": "iter/sec",
            "range": "stddev: 0.00007010181827088521",
            "extra": "mean: 3.041244318181843 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8760004841263,
            "unit": "iter/sec",
            "range": "stddev: 0.0007298481474063799",
            "extra": "mean: 9.269902439024404 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.12438362135387,
            "unit": "iter/sec",
            "range": "stddev: 0.00046800622786004326",
            "extra": "mean: 7.292649006622581 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.22043136169123,
            "unit": "iter/sec",
            "range": "stddev: 0.00019683097128552862",
            "extra": "mean: 4.994495283019019 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 298.32723024094486,
            "unit": "iter/sec",
            "range": "stddev: 0.00021699217547754788",
            "extra": "mean: 3.3520238805969775 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.109473467362175,
            "unit": "iter/sec",
            "range": "stddev: 0.0019372457224129571",
            "extra": "mean: 76.28071428571381 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.59865185003361,
            "unit": "iter/sec",
            "range": "stddev: 0.012041741300073527",
            "extra": "mean: 86.21691666666435 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.76915131557743,
            "unit": "iter/sec",
            "range": "stddev: 0.0009340371637070214",
            "extra": "mean: 6.588954285714326 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.1217882524529,
            "unit": "iter/sec",
            "range": "stddev: 0.0003101532425236156",
            "extra": "mean: 4.164553359683656 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.9191498077643,
            "unit": "iter/sec",
            "range": "stddev: 0.00012905303216886443",
            "extra": "mean: 2.128025641025871 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.8039801661371,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366073241894266",
            "extra": "mean: 2.2431383399209035 msec\nrounds: 506"
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
          "id": "2b62d0a6b48e4202055ba14a2e276730b25850f5",
          "message": "Merge pull request #426 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.2\n\n⬆️ Bump pip from 21.3.1 to 22.0.2 in /.github/workflows",
          "timestamp": "2022-02-02T04:07:54Z",
          "tree_id": "cf41ec2147c04fd89215114e649693eba83a014f"
        },
        "date": 1643776095815,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.77535721521679,
            "unit": "iter/sec",
            "range": "stddev: 0.001079073818596143",
            "extra": "mean: 8.637416666666663 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.32940148748978,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125580307525706",
            "extra": "mean: 7.389377245508935 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.63742146830353,
            "unit": "iter/sec",
            "range": "stddev: 0.0002567549359066125",
            "extra": "mean: 4.839394495412786 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.60689012566434,
            "unit": "iter/sec",
            "range": "stddev: 0.001096247206180072",
            "extra": "mean: 3.4529565217391287 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.74411741091362,
            "unit": "iter/sec",
            "range": "stddev: 0.0006758804237947564",
            "extra": "mean: 9.029824999999972 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.52812165774074,
            "unit": "iter/sec",
            "range": "stddev: 0.00071866160313379",
            "extra": "mean: 7.116013422818825 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.8653840181506,
            "unit": "iter/sec",
            "range": "stddev: 0.0004400975455614496",
            "extra": "mean: 5.158218446601975 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.327638862299,
            "unit": "iter/sec",
            "range": "stddev: 0.0006069943411991843",
            "extra": "mean: 3.5928878787878635 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.892540133411089,
            "unit": "iter/sec",
            "range": "stddev: 0.0020900008158510545",
            "extra": "mean: 71.98107692307715 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.976239578457555,
            "unit": "iter/sec",
            "range": "stddev: 0.0034519741166754293",
            "extra": "mean: 77.06392857142878 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.36936154998597,
            "unit": "iter/sec",
            "range": "stddev: 0.00031995111515748355",
            "extra": "mean: 6.047069364162306 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.328150605613,
            "unit": "iter/sec",
            "range": "stddev: 0.0005437732410623863",
            "extra": "mean: 4.304256704980805 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.5130980151788,
            "unit": "iter/sec",
            "range": "stddev: 0.00016778790251561335",
            "extra": "mean: 2.138977505112665 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.0566945373891,
            "unit": "iter/sec",
            "range": "stddev: 0.00017766490285644758",
            "extra": "mean: 2.2880326797384236 msec\nrounds: 459"
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
          "id": "7d2d445cfe47bb00f6f42c0a2ada8bdc5346040c",
          "message": "Merge pull request #430 from TeoZosa/fix/no-git-executable-installed-compatibility\n\n🐛 Fix import errors when no git executable is found",
          "timestamp": "2022-02-02T06:00:23Z",
          "tree_id": "47d2f81f207a4b535eb059b62bdaa83d233cf9e1"
        },
        "date": 1643782483800,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.94213305279476,
            "unit": "iter/sec",
            "range": "stddev: 0.0010831236071199692",
            "extra": "mean: 9.264223076923054 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.30627026854944,
            "unit": "iter/sec",
            "range": "stddev: 0.0008552427986327837",
            "extra": "mean: 6.978061728395035 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.0897617293258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005573469028702501",
            "extra": "mean: 5.07383027522939 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.34627447419604,
            "unit": "iter/sec",
            "range": "stddev: 0.000323733240624519",
            "extra": "mean: 3.253659090909063 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.6591403955948,
            "unit": "iter/sec",
            "range": "stddev: 0.0008675927641537119",
            "extra": "mean: 9.288574999999888 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.26160286954706,
            "unit": "iter/sec",
            "range": "stddev: 0.0007879715368641457",
            "extra": "mean: 7.560773333333373 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.2109054862084,
            "unit": "iter/sec",
            "range": "stddev: 0.00063538893493588",
            "extra": "mean: 5.25732211538474 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.39212380819066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003311073504507528",
            "extra": "mean: 3.328982089552154 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.800491538875061,
            "unit": "iter/sec",
            "range": "stddev: 0.0024057172180740253",
            "extra": "mean: 78.12200000000018 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.368307371762153,
            "unit": "iter/sec",
            "range": "stddev: 0.0007750661687462244",
            "extra": "mean: 74.80378571428555 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.91830866229552,
            "unit": "iter/sec",
            "range": "stddev: 0.0003272257380409835",
            "extra": "mean: 5.99095454545476 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.71605816950142,
            "unit": "iter/sec",
            "range": "stddev: 0.00014846420975337006",
            "extra": "mean: 4.103135458167113 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.9828225789566,
            "unit": "iter/sec",
            "range": "stddev: 0.00018009419416683444",
            "extra": "mean: 2.2027265135699716 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 416.57391508355795,
            "unit": "iter/sec",
            "range": "stddev: 0.00017922659907568353",
            "extra": "mean: 2.400534368071069 msec\nrounds: 451"
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
          "id": "e5de33e7c7030fc3852537ccfe0aaf997c32a45c",
          "message": ":bookmark: Bump version number to `0.17.2`",
          "timestamp": "2022-02-02T17:39:51Z",
          "tree_id": "c25a330d4bd1dc422503c1c59b6f2e3114bff876"
        },
        "date": 1643824314098,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.61263766866756,
            "unit": "iter/sec",
            "range": "stddev: 0.0009112617479852357",
            "extra": "mean: 8.360320610687019 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.0705383390346,
            "unit": "iter/sec",
            "range": "stddev: 0.0004556319666742991",
            "extra": "mean: 6.575895705521498 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.97385302970486,
            "unit": "iter/sec",
            "range": "stddev: 0.0002744460474291266",
            "extra": "mean: 4.762497737556545 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.70010246530865,
            "unit": "iter/sec",
            "range": "stddev: 0.00019813902269019156",
            "extra": "mean: 3.0515706051872935 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.99980441838866,
            "unit": "iter/sec",
            "range": "stddev: 0.0008817484727082885",
            "extra": "mean: 9.345811475409977 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.65712595962447,
            "unit": "iter/sec",
            "range": "stddev: 0.0005648347888715816",
            "extra": "mean: 7.009814569536646 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.7304665685176,
            "unit": "iter/sec",
            "range": "stddev: 0.0003841785787966624",
            "extra": "mean: 5.083096774193429 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9959423464002,
            "unit": "iter/sec",
            "range": "stddev: 0.00021138321049906045",
            "extra": "mean: 3.164597597597575 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.97468823677702,
            "unit": "iter/sec",
            "range": "stddev: 0.0016608002638736497",
            "extra": "mean: 77.07314285714239 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.259019684908646,
            "unit": "iter/sec",
            "range": "stddev: 0.003362163740284343",
            "extra": "mean: 75.4203571428584 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.89651361616816,
            "unit": "iter/sec",
            "range": "stddev: 0.0003475297583371974",
            "extra": "mean: 5.851494444444841 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.6201581224173,
            "unit": "iter/sec",
            "range": "stddev: 0.0002459076450300473",
            "extra": "mean: 4.022200000000053 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.4553643246786,
            "unit": "iter/sec",
            "range": "stddev: 0.0001756855542843831",
            "extra": "mean: 2.1907947154471294 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 419.67170957291427,
            "unit": "iter/sec",
            "range": "stddev: 0.000309228853418015",
            "extra": "mean: 2.3828148936168856 msec\nrounds: 470"
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
          "id": "7d2d445cfe47bb00f6f42c0a2ada8bdc5346040c",
          "message": "Merge pull request #430 from TeoZosa/fix/no-git-executable-installed-compatibility\n\n🐛 Fix import errors when no git executable is found",
          "timestamp": "2022-02-02T06:00:23Z",
          "tree_id": "47d2f81f207a4b535eb059b62bdaa83d233cf9e1"
        },
        "date": 1643830683860,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.0843964743108,
            "unit": "iter/sec",
            "range": "stddev: 0.0008469357459835194",
            "extra": "mean: 8.468519379844986 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.27351193865093,
            "unit": "iter/sec",
            "range": "stddev: 0.00016011217127681244",
            "extra": "mean: 6.440248484848486 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.01436034414223,
            "unit": "iter/sec",
            "range": "stddev: 0.0002819797543984106",
            "extra": "mean: 4.901615740740735 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7012173707218,
            "unit": "iter/sec",
            "range": "stddev: 0.00021419012882834202",
            "extra": "mean: 3.1181671469741494 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.4429634912859,
            "unit": "iter/sec",
            "range": "stddev: 0.0005705337409652554",
            "extra": "mean: 8.97319999999994 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.18679289784967,
            "unit": "iter/sec",
            "range": "stddev: 0.0006394119192752283",
            "extra": "mean: 7.565052287581956 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.81524450247778,
            "unit": "iter/sec",
            "range": "stddev: 0.0004747601072823225",
            "extra": "mean: 5.240671428571393 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.40632811941487,
            "unit": "iter/sec",
            "range": "stddev: 0.00016933865762042212",
            "extra": "mean: 3.211238532110145 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.760904287996004,
            "unit": "iter/sec",
            "range": "stddev: 0.0009814592438067203",
            "extra": "mean: 72.6696428571432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.580353496601703,
            "unit": "iter/sec",
            "range": "stddev: 0.002927299994575223",
            "extra": "mean: 73.63578571428471 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.91859277049355,
            "unit": "iter/sec",
            "range": "stddev: 0.00038951468127784836",
            "extra": "mean: 6.06359770114965 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.0899335959303,
            "unit": "iter/sec",
            "range": "stddev: 0.00024293939014251903",
            "extra": "mean: 4.217808764940179 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 463.5704645798529,
            "unit": "iter/sec",
            "range": "stddev: 0.00009569895742840386",
            "extra": "mean: 2.1571693548387048 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.9725771821123,
            "unit": "iter/sec",
            "range": "stddev: 0.00012427117763289997",
            "extra": "mean: 2.3365983086679796 msec\nrounds: 473"
          }
        ]
      }
    ]
  }
}