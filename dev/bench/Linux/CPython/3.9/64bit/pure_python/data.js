window.BENCHMARK_DATA = {
  "lastUpdate": 1643823799441,
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
        "date": 1642085089523,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.19518047811815,
            "unit": "iter/sec",
            "range": "stddev: 0.0005740660844477691",
            "extra": "mean: 7.861933103448315 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.87582508343172,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990693541582656",
            "extra": "mean: 5.886652791878222 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.86048276552435,
            "unit": "iter/sec",
            "range": "stddev: 0.0005153432206358978",
            "extra": "mean: 4.151781099656317 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 532.026024080713,
            "unit": "iter/sec",
            "range": "stddev: 0.00016100332857511815",
            "extra": "mean: 1.879607302533553 msec\nrounds: 671"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.98206690459442,
            "unit": "iter/sec",
            "range": "stddev: 0.00038540520010063383",
            "extra": "mean: 8.475864393939164 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.48818742574423,
            "unit": "iter/sec",
            "range": "stddev: 0.0003807744255332403",
            "extra": "mean: 6.472986813186973 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.14420019831448,
            "unit": "iter/sec",
            "range": "stddev: 0.0002886851906918006",
            "extra": "mean: 4.326303663003577 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.74168314329063,
            "unit": "iter/sec",
            "range": "stddev: 0.00039298479442810693",
            "extra": "mean: 2.1243073129251795 msec\nrounds: 588"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.001813497757126,
            "unit": "iter/sec",
            "range": "stddev: 0.0018504450111620063",
            "extra": "mean: 49.99546666666667 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.526016765023105,
            "unit": "iter/sec",
            "range": "stddev: 0.0014600459844264515",
            "extra": "mean: 46.455413043478906 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.75521972293484,
            "unit": "iter/sec",
            "range": "stddev: 0.00032381624570402927",
            "extra": "mean: 5.5019052631577035 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.519814032344,
            "unit": "iter/sec",
            "range": "stddev: 0.0002033975736016392",
            "extra": "mean: 3.062601278772452 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 954.4249264992188,
            "unit": "iter/sec",
            "range": "stddev: 0.00017832541368164293",
            "extra": "mean: 1.047751344537855 msec\nrounds: 1190"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 795.157680563103,
            "unit": "iter/sec",
            "range": "stddev: 0.00013364230706386677",
            "extra": "mean: 1.2576122000001746 msec\nrounds: 1000"
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
          "id": "47b651f62e195f128f5b4a2eeeb86575d0d1302c",
          "message": "Merge pull request #414 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.17.5",
          "timestamp": "2022-01-17T14:17:07Z",
          "tree_id": "4d41b141b482b6b7cf3f7964d4bcfab727102e36"
        },
        "date": 1642431457058,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.07311355940715,
            "unit": "iter/sec",
            "range": "stddev: 0.000652014969732321",
            "extra": "mean: 7.34899036144578 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.8550786547621,
            "unit": "iter/sec",
            "range": "stddev: 0.00035834974669178457",
            "extra": "mean: 5.591118840579674 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.85431333229323,
            "unit": "iter/sec",
            "range": "stddev: 0.000527852328624489",
            "extra": "mean: 4.100809152542357 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 593.5658390493811,
            "unit": "iter/sec",
            "range": "stddev: 0.0002217606819345147",
            "extra": "mean: 1.6847330729166272 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.16673840248399,
            "unit": "iter/sec",
            "range": "stddev: 0.0005695413397156222",
            "extra": "mean: 7.98934295774663 msec\nrounds: 142"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 167.05753172759293,
            "unit": "iter/sec",
            "range": "stddev: 0.0006240341001603791",
            "extra": "mean: 5.985961780104703 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.6228373456159,
            "unit": "iter/sec",
            "range": "stddev: 0.0003163362397243029",
            "extra": "mean: 3.866634556574869 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 546.5571045412687,
            "unit": "iter/sec",
            "range": "stddev: 0.00029373540643444604",
            "extra": "mean: 1.829634985422632 msec\nrounds: 686"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.544874273012855,
            "unit": "iter/sec",
            "range": "stddev: 0.0024738006438137622",
            "extra": "mean: 46.41475217391274 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.198854830289036,
            "unit": "iter/sec",
            "range": "stddev: 0.0010851161532609258",
            "extra": "mean: 43.10557600000038 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.18850170797643,
            "unit": "iter/sec",
            "range": "stddev: 0.0005424080881270817",
            "extra": "mean: 5.07128961038984 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.10845342117915,
            "unit": "iter/sec",
            "range": "stddev: 0.000307143266855759",
            "extra": "mean: 2.9060605459059383 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1104.3992792952188,
            "unit": "iter/sec",
            "range": "stddev: 0.000139695558848123",
            "extra": "mean: 905.4696238466925 usec\nrounds: 1409"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 915.9427572909351,
            "unit": "iter/sec",
            "range": "stddev: 0.00017794492704594059",
            "extra": "mean: 1.0917712837838025 msec\nrounds: 1184"
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
        "date": 1642432646011,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 201.15159785217736,
            "unit": "iter/sec",
            "range": "stddev: 0.00001611839270908109",
            "extra": "mean: 4.971374876847271 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.0164416614703,
            "unit": "iter/sec",
            "range": "stddev: 0.000011430991769000072",
            "extra": "mean: 3.745087732342053 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.13794108447735,
            "unit": "iter/sec",
            "range": "stddev: 0.000013837100836418112",
            "extra": "mean: 2.5053995049504714 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 822.5189854203704,
            "unit": "iter/sec",
            "range": "stddev: 0.00000896303192940451",
            "extra": "mean: 1.215777407847824 msec\nrounds: 841"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.51387943034442,
            "unit": "iter/sec",
            "range": "stddev: 0.00001948778778391132",
            "extra": "mean: 5.390432258064409 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.19821069388075,
            "unit": "iter/sec",
            "range": "stddev: 0.000011687679197721045",
            "extra": "mean: 4.111872357723566 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.413664962548,
            "unit": "iter/sec",
            "range": "stddev: 0.000012825779239305636",
            "extra": "mean: 2.6356457142857788 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 735.9357627110455,
            "unit": "iter/sec",
            "range": "stddev: 0.000010471063866432535",
            "extra": "mean: 1.3588142480210401 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.47590158534752,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576801082068844",
            "extra": "mean: 37.77019629629637 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.038115013548776,
            "unit": "iter/sec",
            "range": "stddev: 0.0002168408380524056",
            "extra": "mean: 35.665735714286534 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.5653441860847,
            "unit": "iter/sec",
            "range": "stddev: 0.000021731419263886385",
            "extra": "mean: 3.406396632996713 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.0954128323929,
            "unit": "iter/sec",
            "range": "stddev: 0.000018390316188085427",
            "extra": "mean: 2.07427818930039 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.4594156455448,
            "unit": "iter/sec",
            "range": "stddev: 0.000007193973566096198",
            "extra": "mean: 682.3798662206509 usec\nrounds: 1495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1233.4993679790334,
            "unit": "iter/sec",
            "range": "stddev: 0.000006533158238069479",
            "extra": "mean: 810.701671974426 usec\nrounds: 1256"
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
          "id": "72326bb172ec9a61951193ae60d0c19c966fd36a",
          "message": "Merge pull request #417 from TeoZosa/dependabot/pip/importlib-metadata-4.10.1",
          "timestamp": "2022-01-17T15:32:35Z",
          "tree_id": "4b4b5e123579effdb1376478fc68c7dad22f148d"
        },
        "date": 1642433722911,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.26424415883602,
            "unit": "iter/sec",
            "range": "stddev: 0.000015792097796983918",
            "extra": "mean: 4.895619417475724 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 266.2396876330563,
            "unit": "iter/sec",
            "range": "stddev: 0.0000691646020231974",
            "extra": "mean: 3.756014022140252 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.4760703078062,
            "unit": "iter/sec",
            "range": "stddev: 0.000022013964336199538",
            "extra": "mean: 2.4723341463414643 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 825.3189065502102,
            "unit": "iter/sec",
            "range": "stddev: 0.000010685564323219124",
            "extra": "mean: 1.2116528436019327 msec\nrounds: 844"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 186.63369010650513,
            "unit": "iter/sec",
            "range": "stddev: 0.000014899889124950874",
            "extra": "mean: 5.358089417989517 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.20784999496186,
            "unit": "iter/sec",
            "range": "stddev: 0.000008469585994685583",
            "extra": "mean: 4.111709387755022 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.9989052663498,
            "unit": "iter/sec",
            "range": "stddev: 0.000009896385511961399",
            "extra": "mean: 2.617808549222797 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 753.1370372711176,
            "unit": "iter/sec",
            "range": "stddev: 0.000009451783252574366",
            "extra": "mean: 1.3277796078431547 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.80103181987285,
            "unit": "iter/sec",
            "range": "stddev: 0.000052562925523272526",
            "extra": "mean: 37.31199629629574 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.504046690020978,
            "unit": "iter/sec",
            "range": "stddev: 0.00006308074991554772",
            "extra": "mean: 35.0827379310353 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.3206443896843,
            "unit": "iter/sec",
            "range": "stddev: 0.00002410179066273391",
            "extra": "mean: 3.3861499999995615 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.9718005195684,
            "unit": "iter/sec",
            "range": "stddev: 0.000010626254233183972",
            "extra": "mean: 2.0619755600813545 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1465.283418112396,
            "unit": "iter/sec",
            "range": "stddev: 0.000006583379238547027",
            "extra": "mean: 682.4618279569543 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1239.329461234428,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056806041086652795",
            "extra": "mean: 806.8879432624436 usec\nrounds: 1269"
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
        "date": 1643746382704,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.64924674204589,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993829714767863",
            "extra": "mean: 8.572708593749992 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.39843137660506,
            "unit": "iter/sec",
            "range": "stddev: 0.0008978616163374906",
            "extra": "mean: 6.476749738219966 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.62295736051433,
            "unit": "iter/sec",
            "range": "stddev: 0.0004477291974318443",
            "extra": "mean: 4.412615613382844 msec\nrounds: 269"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.4365921505932,
            "unit": "iter/sec",
            "range": "stddev: 0.00023906149610653134",
            "extra": "mean: 2.038999568965565 msec\nrounds: 696"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.43144689729603,
            "unit": "iter/sec",
            "range": "stddev: 0.000981518692433423",
            "extra": "mean: 9.66823949579828 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.53398768892708,
            "unit": "iter/sec",
            "range": "stddev: 0.0011237576978728766",
            "extra": "mean: 7.324183647798781 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.51718097233345,
            "unit": "iter/sec",
            "range": "stddev: 0.0005117706306115237",
            "extra": "mean: 4.661631275720388 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.39979005734796,
            "unit": "iter/sec",
            "range": "stddev: 0.0005139030058325906",
            "extra": "mean: 2.3126745733788927 msec\nrounds: 586"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.99614617265523,
            "unit": "iter/sec",
            "range": "stddev: 0.0024695276919934742",
            "extra": "mean: 55.567452631579485 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.37368180258154,
            "unit": "iter/sec",
            "range": "stddev: 0.0018654230504443273",
            "extra": "mean: 51.61641500000016 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.09087798526616,
            "unit": "iter/sec",
            "range": "stddev: 0.000868551543385099",
            "extra": "mean: 5.984767164178637 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.59754973904586,
            "unit": "iter/sec",
            "range": "stddev: 0.0003381546192830469",
            "extra": "mean: 3.4530678899082274 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.8144150535729,
            "unit": "iter/sec",
            "range": "stddev: 0.0002894545187980277",
            "extra": "mean: 1.157656068911493 msec\nrounds: 1277"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 743.0955600689847,
            "unit": "iter/sec",
            "range": "stddev: 0.0003301358542163085",
            "extra": "mean: 1.3457219417475268 msec\nrounds: 1030"
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
        "date": 1643755076507,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.8222718977767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003892398611624104",
            "extra": "mean: 7.885050354609921 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.01408060881718,
            "unit": "iter/sec",
            "range": "stddev: 0.000733654662628093",
            "extra": "mean: 6.0970375000001145 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.03224423905058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004328180046808125",
            "extra": "mean: 4.114680350877159 msec\nrounds: 285"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 508.3138995726558,
            "unit": "iter/sec",
            "range": "stddev: 0.00022470180823971076",
            "extra": "mean: 1.9672883248730935 msec\nrounds: 591"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.71533047529125,
            "unit": "iter/sec",
            "range": "stddev: 0.0009478951724831617",
            "extra": "mean: 8.567854761904659 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.1330805918005,
            "unit": "iter/sec",
            "range": "stddev: 0.0009343905981992959",
            "extra": "mean: 6.750686585365945 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.69121774869964,
            "unit": "iter/sec",
            "range": "stddev: 0.0005125504931347057",
            "extra": "mean: 4.279150965250873 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 471.0135988354738,
            "unit": "iter/sec",
            "range": "stddev: 0.00030538053464366203",
            "extra": "mean: 2.123080952380958 msec\nrounds: 546"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.591251853005783,
            "unit": "iter/sec",
            "range": "stddev: 0.00188615408328838",
            "extra": "mean: 51.04319047619079 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.995010821973594,
            "unit": "iter/sec",
            "range": "stddev: 0.0011357963694701425",
            "extra": "mean: 47.63036363636401 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.14321142927415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005482486474828564",
            "extra": "mean: 5.645150000000187 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.681397948984,
            "unit": "iter/sec",
            "range": "stddev: 0.00032245910256844217",
            "extra": "mean: 3.2607129310345346 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 892.252114691282,
            "unit": "iter/sec",
            "range": "stddev: 0.00023877128393895417",
            "extra": "mean: 1.1207594619666423 msec\nrounds: 1078"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 784.9820157617144,
            "unit": "iter/sec",
            "range": "stddev: 0.0001699895626113288",
            "extra": "mean: 1.2739145355191877 msec\nrounds: 915"
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
        "date": 1643755269606,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.58982158300444,
            "unit": "iter/sec",
            "range": "stddev: 0.000030412647306918187",
            "extra": "mean: 4.81719186602871 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.39875532589167,
            "unit": "iter/sec",
            "range": "stddev: 0.000010496334962452561",
            "extra": "mean: 3.6710887272727177 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.5478716468651,
            "unit": "iter/sec",
            "range": "stddev: 0.000014706337629275137",
            "extra": "mean: 2.47189534313732 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 833.7856977895036,
            "unit": "iter/sec",
            "range": "stddev: 0.00000849927406968783",
            "extra": "mean: 1.1993489485981308 msec\nrounds: 856"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.19928513261894,
            "unit": "iter/sec",
            "range": "stddev: 0.000027376434306244593",
            "extra": "mean: 5.230145077720263 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.0529333053182,
            "unit": "iter/sec",
            "range": "stddev: 0.000009089253675080505",
            "extra": "mean: 4.03139759999992 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.0110512508357,
            "unit": "iter/sec",
            "range": "stddev: 0.000051196268400970166",
            "extra": "mean: 2.610890721649427 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.019298751509,
            "unit": "iter/sec",
            "range": "stddev: 0.00000974678396143436",
            "extra": "mean: 1.3350790849672822 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.86700296193773,
            "unit": "iter/sec",
            "range": "stddev: 0.00006902159268140583",
            "extra": "mean: 37.2203777777779 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.459712284085448,
            "unit": "iter/sec",
            "range": "stddev: 0.000065125841617481",
            "extra": "mean: 35.13738965517216 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2660405841076,
            "unit": "iter/sec",
            "range": "stddev: 0.000014275636034042743",
            "extra": "mean: 3.3753446666666065 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.8283948662689,
            "unit": "iter/sec",
            "range": "stddev: 0.000011206043304028451",
            "extra": "mean: 2.045707676767784 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1469.3746060867816,
            "unit": "iter/sec",
            "range": "stddev: 0.000006534424275209025",
            "extra": "mean: 680.5616456535793 usec\nrounds: 1507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1228.8399141149316,
            "unit": "iter/sec",
            "range": "stddev: 0.000006652998991127945",
            "extra": "mean: 813.7756501181418 usec\nrounds: 1269"
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
        "date": 1643757231251,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.0681884936247,
            "unit": "iter/sec",
            "range": "stddev: 0.00003121986412423954",
            "extra": "mean: 4.900322815533991 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.4165422684523,
            "unit": "iter/sec",
            "range": "stddev: 0.000016897989879202472",
            "extra": "mean: 3.7394844444444533 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.8772669886128,
            "unit": "iter/sec",
            "range": "stddev: 0.000031249941391707214",
            "extra": "mean: 2.5196706467662002 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1942382306082,
            "unit": "iter/sec",
            "range": "stddev: 0.000011095511368314433",
            "extra": "mean: 1.2236992788461205 msec\nrounds: 832"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.23931472659473,
            "unit": "iter/sec",
            "range": "stddev: 0.000014879091475413242",
            "extra": "mean: 5.284314210526281 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.13610760580488,
            "unit": "iter/sec",
            "range": "stddev: 0.000008308143495641002",
            "extra": "mean: 4.079366396761372 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.26148269920077,
            "unit": "iter/sec",
            "range": "stddev: 0.000009297872756186342",
            "extra": "mean: 2.6160103626943076 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 737.2879673723871,
            "unit": "iter/sec",
            "range": "stddev: 0.000009018424413992382",
            "extra": "mean: 1.3563221485410775 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.94228155023505,
            "unit": "iter/sec",
            "range": "stddev: 0.00016422220180869806",
            "extra": "mean: 37.11638148148132 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.541402453654708,
            "unit": "iter/sec",
            "range": "stddev: 0.00003081247867882328",
            "extra": "mean: 35.03682068965573 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.361470174669,
            "unit": "iter/sec",
            "range": "stddev: 0.000009048966314492454",
            "extra": "mean: 3.351639202657677 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.28933260516897,
            "unit": "iter/sec",
            "range": "stddev: 0.000009407258516033885",
            "extra": "mean: 2.03132575452743 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1406.7533769188153,
            "unit": "iter/sec",
            "range": "stddev: 0.000006015007031155823",
            "extra": "mean: 710.8566550522739 usec\nrounds: 1435"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1201.3400653017954,
            "unit": "iter/sec",
            "range": "stddev: 0.000005768569377412272",
            "extra": "mean: 832.4037704917336 usec\nrounds: 1220"
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
        "date": 1643757689394,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 205.91517067150306,
            "unit": "iter/sec",
            "range": "stddev: 0.000015667972020040145",
            "extra": "mean: 4.85636874999998 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 271.1377715573911,
            "unit": "iter/sec",
            "range": "stddev: 0.00001739174751576421",
            "extra": "mean: 3.6881619047618837 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.95462977220757,
            "unit": "iter/sec",
            "range": "stddev: 0.00001710926532047407",
            "extra": "mean: 2.4694124390243752 msec\nrounds: 410"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.8577182759055,
            "unit": "iter/sec",
            "range": "stddev: 0.000009014315525146335",
            "extra": "mean: 1.2006852767962515 msec\nrounds: 849"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.37896277163898,
            "unit": "iter/sec",
            "range": "stddev: 0.000015967606761076527",
            "extra": "mean: 5.22523471502581 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 247.23962911672908,
            "unit": "iter/sec",
            "range": "stddev: 0.000027219364413224407",
            "extra": "mean: 4.044659036144528 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.35947225829017,
            "unit": "iter/sec",
            "range": "stddev: 0.000011865531121173638",
            "extra": "mean: 2.5815813775510383 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.0000196807121,
            "unit": "iter/sec",
            "range": "stddev: 0.000010620667433503271",
            "extra": "mean: 1.3315578878748238 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.024016243235387,
            "unit": "iter/sec",
            "range": "stddev: 0.00007538783993576984",
            "extra": "mean: 37.00412222222219 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.60394406962349,
            "unit": "iter/sec",
            "range": "stddev: 0.00006000183761640723",
            "extra": "mean: 34.96021379310307 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.3500929847952,
            "unit": "iter/sec",
            "range": "stddev: 0.000011306509781614501",
            "extra": "mean: 3.37438733333317 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.72543592010726,
            "unit": "iter/sec",
            "range": "stddev: 0.000011109572378994917",
            "extra": "mean: 2.0336552208832135 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.1820804564068,
            "unit": "iter/sec",
            "range": "stddev: 0.000005704849029708393",
            "extra": "mean: 690.0444143534118 usec\nrounds: 1477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1226.2298745019648,
            "unit": "iter/sec",
            "range": "stddev: 0.00000629365855670553",
            "extra": "mean: 815.507777777924 usec\nrounds: 1260"
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
        "date": 1643758471923,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 207.01456471275316,
            "unit": "iter/sec",
            "range": "stddev: 0.00002634215679833958",
            "extra": "mean: 4.8305779904306165 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 270.3971837489513,
            "unit": "iter/sec",
            "range": "stddev: 0.000029819370043260357",
            "extra": "mean: 3.698263369963365 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 406.33523091556265,
            "unit": "iter/sec",
            "range": "stddev: 0.00003425957542893165",
            "extra": "mean: 2.461022141119243 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 831.5032734919657,
            "unit": "iter/sec",
            "range": "stddev: 0.000008635803625353574",
            "extra": "mean: 1.2026410861864905 msec\nrounds: 847"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.32511991225707,
            "unit": "iter/sec",
            "range": "stddev: 0.000038408862911710696",
            "extra": "mean: 5.254167187500085 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.44897338600353,
            "unit": "iter/sec",
            "range": "stddev: 0.000010414390697377203",
            "extra": "mean: 4.057635080645025 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.7131454311969,
            "unit": "iter/sec",
            "range": "stddev: 0.000011367875017130986",
            "extra": "mean: 2.592600257069483 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.7766214564188,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880022750394031",
            "extra": "mean: 1.3284153246752948 msec\nrounds: 770"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 30.603884738662185,
            "unit": "iter/sec",
            "range": "stddev: 0.00039919874611929284",
            "extra": "mean: 32.67559032258053 msec\nrounds: 31"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 32.647582406950264,
            "unit": "iter/sec",
            "range": "stddev: 0.00006261362141857912",
            "extra": "mean: 30.630139393939086 msec\nrounds: 33"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.83269532787995,
            "unit": "iter/sec",
            "range": "stddev: 0.000016629693163426874",
            "extra": "mean: 2.977673150684988 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 555.1199201492816,
            "unit": "iter/sec",
            "range": "stddev: 0.000018323018735055662",
            "extra": "mean: 1.8014125663713925 msec\nrounds: 565"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1651.1940304743846,
            "unit": "iter/sec",
            "range": "stddev: 0.000010638335963737411",
            "extra": "mean: 605.6223445240424 usec\nrounds: 1817"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1401.2015690905366,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300853162200612",
            "extra": "mean: 713.6731945347874 usec\nrounds: 1537"
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
        "date": 1643759030032,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 204.26513535242492,
            "unit": "iter/sec",
            "range": "stddev: 0.000013068255938891273",
            "extra": "mean: 4.895598058252424 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 263.81638145347,
            "unit": "iter/sec",
            "range": "stddev: 0.0001366697553821895",
            "extra": "mean: 3.790515185185241 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 403.37546168200265,
            "unit": "iter/sec",
            "range": "stddev: 0.00001794443205452118",
            "extra": "mean: 2.479079901960771 msec\nrounds: 408"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 815.3791244390674,
            "unit": "iter/sec",
            "range": "stddev: 0.000027967283357175074",
            "extra": "mean: 1.2264233532934032 msec\nrounds: 835"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.10574852153195,
            "unit": "iter/sec",
            "range": "stddev: 0.000020288996660878535",
            "extra": "mean: 5.316158638743211 msec\nrounds: 191"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.49450066272402,
            "unit": "iter/sec",
            "range": "stddev: 0.000009337718292574192",
            "extra": "mean: 4.090071544715367 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3719896639781,
            "unit": "iter/sec",
            "range": "stddev: 0.00001050237637048503",
            "extra": "mean: 2.6016463917524533 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.6855821348124,
            "unit": "iter/sec",
            "range": "stddev: 0.00000864763883767767",
            "extra": "mean: 1.3501005340454832 msec\nrounds: 749"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 26.826163776114754,
            "unit": "iter/sec",
            "range": "stddev: 0.0004231005402057541",
            "extra": "mean: 37.277040740740254 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.498707731010953,
            "unit": "iter/sec",
            "range": "stddev: 0.00004229514785414995",
            "extra": "mean: 35.08931034482827 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.4873291152623,
            "unit": "iter/sec",
            "range": "stddev: 0.000009723450093750087",
            "extra": "mean: 3.361487707641313 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.56049393468646,
            "unit": "iter/sec",
            "range": "stddev: 0.000009894125411213485",
            "extra": "mean: 2.0468294354837577 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.2399409091763,
            "unit": "iter/sec",
            "range": "stddev: 0.000005486501764147722",
            "extra": "mean: 682.9481781374435 usec\nrounds: 1482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1206.046824620663,
            "unit": "iter/sec",
            "range": "stddev: 0.000005276169747923008",
            "extra": "mean: 829.1552032521867 usec\nrounds: 1230"
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
        "date": 1643759974410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.5216074643746,
            "unit": "iter/sec",
            "range": "stddev: 0.00009392328077154822",
            "extra": "mean: 5.539503076923061 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.71525212263037,
            "unit": "iter/sec",
            "range": "stddev: 0.0001158441004393958",
            "extra": "mean: 4.171616078431393 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.25230982168245,
            "unit": "iter/sec",
            "range": "stddev: 0.000052316417124064895",
            "extra": "mean: 2.830837823834154 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 730.3534239088258,
            "unit": "iter/sec",
            "range": "stddev: 0.000026956404250599545",
            "extra": "mean: 1.3692001259445532 msec\nrounds: 794"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 168.93708002723352,
            "unit": "iter/sec",
            "range": "stddev: 0.00019362907396462028",
            "extra": "mean: 5.919363586956723 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.15019635356225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001314960853382951",
            "extra": "mean: 4.605107509881353 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.7605944589528,
            "unit": "iter/sec",
            "range": "stddev: 0.00012054354014929652",
            "extra": "mean: 2.8590985257985024 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 666.1198186688391,
            "unit": "iter/sec",
            "range": "stddev: 0.00005349482893527016",
            "extra": "mean: 1.5012314180928898 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.60554006983771,
            "unit": "iter/sec",
            "range": "stddev: 0.0008750310916670415",
            "extra": "mean: 40.641253846154484 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.758905044280464,
            "unit": "iter/sec",
            "range": "stddev: 0.0006947262784674598",
            "extra": "mean: 38.821525925926 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 259.18512564137353,
            "unit": "iter/sec",
            "range": "stddev: 0.00007509699447422335",
            "extra": "mean: 3.8582460992907026 msec\nrounds: 282"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.60304765054263,
            "unit": "iter/sec",
            "range": "stddev: 0.00008260527491699307",
            "extra": "mean: 2.279965917602905 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1324.3967025583286,
            "unit": "iter/sec",
            "range": "stddev: 0.0000389898771849648",
            "extra": "mean: 755.0607745159032 usec\nrounds: 1601"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1070.882290401844,
            "unit": "iter/sec",
            "range": "stddev: 0.000029696438108228862",
            "extra": "mean: 933.8094475581944 usec\nrounds: 1249"
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
          "id": "7940508d06cb95f1d0485d97377176a2d09c3797",
          "message": "Merge pull request #418 from TeoZosa/dependabot/pip/pre-commit-2.17.0",
          "timestamp": "2022-02-01T23:34:45Z",
          "tree_id": "e604faef0c8a6e5394e2cb6a4ccd21eb59dedd5a"
        },
        "date": 1643761422710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 203.4720027956631,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218581665847657",
            "extra": "mean: 4.91468106796123 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.02779373625657,
            "unit": "iter/sec",
            "range": "stddev: 0.000009563116570507287",
            "extra": "mean: 3.744928518518564 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 404.276477896109,
            "unit": "iter/sec",
            "range": "stddev: 0.000010116762020282413",
            "extra": "mean: 2.4735547445255524 msec\nrounds: 411"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.7703587294363,
            "unit": "iter/sec",
            "range": "stddev: 0.000008928247777703796",
            "extra": "mean: 1.237975606796128 msec\nrounds: 824"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.90235209241922,
            "unit": "iter/sec",
            "range": "stddev: 0.000017584988954516277",
            "extra": "mean: 5.321913157894654 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.41207697464787,
            "unit": "iter/sec",
            "range": "stddev: 0.000026878532932911498",
            "extra": "mean: 4.10825959183674 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.63081815827,
            "unit": "iter/sec",
            "range": "stddev: 0.000010194842939872848",
            "extra": "mean: 2.6066727506428897 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 740.1688250681436,
            "unit": "iter/sec",
            "range": "stddev: 0.000010901234770181102",
            "extra": "mean: 1.3510431216931287 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.066681476485336,
            "unit": "iter/sec",
            "range": "stddev: 0.0001230679234774553",
            "extra": "mean: 36.945792592592774 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.69010384333642,
            "unit": "iter/sec",
            "range": "stddev: 0.00011997655620823624",
            "extra": "mean: 34.85522413793077 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.5410268464458,
            "unit": "iter/sec",
            "range": "stddev: 0.000011124003914970697",
            "extra": "mean: 3.3722146666667405 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.64097668051664,
            "unit": "iter/sec",
            "range": "stddev: 0.000010244104896400653",
            "extra": "mean: 2.0464923076924437 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1399.042200164779,
            "unit": "iter/sec",
            "range": "stddev: 0.000006774469707007828",
            "extra": "mean: 714.7747222222606 usec\nrounds: 1440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1197.2785741767773,
            "unit": "iter/sec",
            "range": "stddev: 0.000007275534106777189",
            "extra": "mean: 835.2275080906533 usec\nrounds: 1236"
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
        "date": 1643775056415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.96605271566338,
            "unit": "iter/sec",
            "range": "stddev: 0.0005713399113628554",
            "extra": "mean: 7.577706382978807 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.3237263284121,
            "unit": "iter/sec",
            "range": "stddev: 0.0003743120017443615",
            "extra": "mean: 5.905846874999954 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.6335574670159,
            "unit": "iter/sec",
            "range": "stddev: 0.00034638731800514926",
            "extra": "mean: 3.9583023333333736 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 558.8890701138391,
            "unit": "iter/sec",
            "range": "stddev: 0.0001220868267426031",
            "extra": "mean: 1.7892638333333515 msec\nrounds: 600"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.44731410794068,
            "unit": "iter/sec",
            "range": "stddev: 0.0006480577992980747",
            "extra": "mean: 8.5875746268656 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.3849433934026,
            "unit": "iter/sec",
            "range": "stddev: 0.000502261544646484",
            "extra": "mean: 6.313731460674021 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 243.27899665753654,
            "unit": "iter/sec",
            "range": "stddev: 0.00030387924514120975",
            "extra": "mean: 4.110506923076876 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 502.773373384601,
            "unit": "iter/sec",
            "range": "stddev: 0.00015896438085266187",
            "extra": "mean: 1.9889676998368828 msec\nrounds: 613"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.171067945666064,
            "unit": "iter/sec",
            "range": "stddev: 0.00162557412183169",
            "extra": "mean: 49.575957142857135 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.686883519117377,
            "unit": "iter/sec",
            "range": "stddev: 0.0031954165637841122",
            "extra": "mean: 48.33980909090873 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.18830549813327,
            "unit": "iter/sec",
            "range": "stddev: 0.0006727395540162979",
            "extra": "mean: 5.429226341463546 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.9417038486511,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203286581839634",
            "extra": "mean: 3.1651408719345278 msec\nrounds: 367"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 929.7868173430201,
            "unit": "iter/sec",
            "range": "stddev: 0.0000920349075538454",
            "extra": "mean: 1.0755153561518789 msec\nrounds: 1081"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 817.2553191689022,
            "unit": "iter/sec",
            "range": "stddev: 0.00009075441724704419",
            "extra": "mean: 1.2236078206464753 msec\nrounds: 959"
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
        "date": 1643775413343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.3891737765086,
            "unit": "iter/sec",
            "range": "stddev: 0.000012173609448353305",
            "extra": "mean: 4.845215384615396 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 269.1304424977693,
            "unit": "iter/sec",
            "range": "stddev: 0.000010108494111369",
            "extra": "mean: 3.7156703296702998 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 407.5216859754292,
            "unit": "iter/sec",
            "range": "stddev: 0.000010111484318235078",
            "extra": "mean: 2.4538571428571614 msec\nrounds: 413"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 814.8219049652959,
            "unit": "iter/sec",
            "range": "stddev: 0.000008310491176334424",
            "extra": "mean: 1.2272620481927166 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 190.73553056053223,
            "unit": "iter/sec",
            "range": "stddev: 0.000015963620143194232",
            "extra": "mean: 5.2428616580309235 msec\nrounds: 193"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 246.1614203514014,
            "unit": "iter/sec",
            "range": "stddev: 0.000008232645837651423",
            "extra": "mean: 4.062374999999901 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.57655014377417,
            "unit": "iter/sec",
            "range": "stddev: 0.000010949633858885967",
            "extra": "mean: 2.593518717948794 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.3795714222626,
            "unit": "iter/sec",
            "range": "stddev: 0.000008749887972651105",
            "extra": "mean: 1.3524852980133202 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.14948506476652,
            "unit": "iter/sec",
            "range": "stddev: 0.00009305282343237258",
            "extra": "mean: 36.83311111111123 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 28.815711995503783,
            "unit": "iter/sec",
            "range": "stddev: 0.00004289072780941918",
            "extra": "mean: 34.70328965517262 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.3514383807792,
            "unit": "iter/sec",
            "range": "stddev: 0.000024578165633599004",
            "extra": "mean: 3.3630239202657917 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 485.68771109402934,
            "unit": "iter/sec",
            "range": "stddev: 0.000010118726566496993",
            "extra": "mean: 2.0589361788616465 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1446.8498009038492,
            "unit": "iter/sec",
            "range": "stddev: 0.000006076510169085008",
            "extra": "mean: 691.1567457626206 usec\nrounds: 1475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1208.0104602236408,
            "unit": "iter/sec",
            "range": "stddev: 0.000005884423056479228",
            "extra": "mean: 827.8074014482196 usec\nrounds: 1243"
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
        "date": 1643781820458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.9208050500466,
            "unit": "iter/sec",
            "range": "stddev: 0.00029037401395258446",
            "extra": "mean: 5.210482520325158 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 254.0682881904462,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558234021733737",
            "extra": "mean: 3.935949689441027 msec\nrounds: 322"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.0862031694548,
            "unit": "iter/sec",
            "range": "stddev: 0.00015155046456486046",
            "extra": "mean: 2.687549260042254 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.456936781335,
            "unit": "iter/sec",
            "range": "stddev: 0.00011236093178666477",
            "extra": "mean: 1.2555606635070933 msec\nrounds: 1055"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.34023840601617,
            "unit": "iter/sec",
            "range": "stddev: 0.00033256467193486336",
            "extra": "mean: 5.703197446808585 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.16870131029836,
            "unit": "iter/sec",
            "range": "stddev: 0.00023490111034791137",
            "extra": "mean: 4.402014864864953 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.0201952736065,
            "unit": "iter/sec",
            "range": "stddev: 0.0001704682707307892",
            "extra": "mean: 2.7931385245901534 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.4161803851691,
            "unit": "iter/sec",
            "range": "stddev: 0.00011730097651611834",
            "extra": "mean: 1.4096097997892603 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.509246555249607,
            "unit": "iter/sec",
            "range": "stddev: 0.0011506149247590362",
            "extra": "mean: 39.20147142857137 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.69696577829737,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863321309093425",
            "extra": "mean: 36.10503793103482 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.31582682961914,
            "unit": "iter/sec",
            "range": "stddev: 0.00018627796351870337",
            "extra": "mean: 3.67220668604647 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.1810647994457,
            "unit": "iter/sec",
            "range": "stddev: 0.00015472785070807564",
            "extra": "mean: 2.1589829032259624 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1369.708452668909,
            "unit": "iter/sec",
            "range": "stddev: 0.00005362864341042033",
            "extra": "mean: 730.0823748670578 usec\nrounds: 1878"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1140.9550068067592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007128547885309557",
            "extra": "mean: 876.4587508132715 usec\nrounds: 1537"
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
        "date": 1643823797196,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.18090780837554,
            "unit": "iter/sec",
            "range": "stddev: 0.0005644579587049017",
            "extra": "mean: 7.681617964071858 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 168.91891891891842,
            "unit": "iter/sec",
            "range": "stddev: 0.0005924136375083654",
            "extra": "mean: 5.920000000000018 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 249.70655399732865,
            "unit": "iter/sec",
            "range": "stddev: 0.00036082129630668263",
            "extra": "mean: 4.00470065359477 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 543.1133549394942,
            "unit": "iter/sec",
            "range": "stddev: 0.00040226839705215575",
            "extra": "mean: 1.8412362555721087 msec\nrounds: 673"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.39194699704656,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381220258487787",
            "extra": "mean: 8.44652043795636 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.9875820142193,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325547286937165",
            "extra": "mean: 6.711968786127159 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.4251508357991,
            "unit": "iter/sec",
            "range": "stddev: 0.0004583180352815373",
            "extra": "mean: 4.176670648464218 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.67702433334415,
            "unit": "iter/sec",
            "range": "stddev: 0.0003438159741381106",
            "extra": "mean: 2.0297272870662675 msec\nrounds: 634"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.090416004025226,
            "unit": "iter/sec",
            "range": "stddev: 0.00225814851275221",
            "extra": "mean: 49.77497727272768 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.980468369800636,
            "unit": "iter/sec",
            "range": "stddev: 0.002090053985374897",
            "extra": "mean: 47.66337826086874 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.084010322393,
            "unit": "iter/sec",
            "range": "stddev: 0.0005948198690401672",
            "extra": "mean: 5.615327272727393 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.64903412003986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003609713451523726",
            "extra": "mean: 3.148128571428613 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 941.2655192981548,
            "unit": "iter/sec",
            "range": "stddev: 0.000190245762356928",
            "extra": "mean: 1.0623994818652658 msec\nrounds: 1158"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 798.2403769864231,
            "unit": "iter/sec",
            "range": "stddev: 0.0003836766852306578",
            "extra": "mean: 1.2527554716979803 msec\nrounds: 1060"
          }
        ]
      }
    ]
  }
}