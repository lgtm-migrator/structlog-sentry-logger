window.BENCHMARK_DATA = {
  "lastUpdate": 1644603570375,
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
        "date": 1642086180777,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.79737504494811,
            "unit": "iter/sec",
            "range": "stddev: 0.00041294563358096277",
            "extra": "mean: 8.27832558139533 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.47161597741032,
            "unit": "iter/sec",
            "range": "stddev: 0.0006381432404311959",
            "extra": "mean: 7.018941935483877 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.3791994260936,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838966014806955",
            "extra": "mean: 4.869042253521166 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.25615982156154,
            "unit": "iter/sec",
            "range": "stddev: 0.0001331007295540684",
            "extra": "mean: 3.112780780780794 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.14119565891993,
            "unit": "iter/sec",
            "range": "stddev: 0.0011972515157029709",
            "extra": "mean: 9.88716806722669 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.45743135207766,
            "unit": "iter/sec",
            "range": "stddev: 0.0004374739484252945",
            "extra": "mean: 7.0692645161290235 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.4375685044684,
            "unit": "iter/sec",
            "range": "stddev: 0.00024864076244778167",
            "extra": "mean: 5.116723502304198 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.6804151034956,
            "unit": "iter/sec",
            "range": "stddev: 0.0002487196024379363",
            "extra": "mean: 3.325790273556046 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.558077589749209,
            "unit": "iter/sec",
            "range": "stddev: 0.0018160068903072272",
            "extra": "mean: 73.75676923076952 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.219667692806492,
            "unit": "iter/sec",
            "range": "stddev: 0.0027111143693702147",
            "extra": "mean: 75.64486666666757 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.52935020525578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005931554994334522",
            "extra": "mean: 6.348023391812583 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.26734505089513,
            "unit": "iter/sec",
            "range": "stddev: 0.0004141713493409695",
            "extra": "mean: 4.323999999999695 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 455.7999614895974,
            "unit": "iter/sec",
            "range": "stddev: 0.00015764579068748132",
            "extra": "mean: 2.193944897958976 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.77113206790597,
            "unit": "iter/sec",
            "range": "stddev: 0.00020652751242028955",
            "extra": "mean: 2.258503157894752 msec\nrounds: 475"
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
        "date": 1642435798791,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.86313213385188,
            "unit": "iter/sec",
            "range": "stddev: 0.00048080284117135453",
            "extra": "mean: 8.484417322834632 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.3681876261468,
            "unit": "iter/sec",
            "range": "stddev: 0.00046465502056196935",
            "extra": "mean: 6.926733766233746 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5802586874906,
            "unit": "iter/sec",
            "range": "stddev: 0.00038036941236252035",
            "extra": "mean: 5.112990476190429 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.63327923363573,
            "unit": "iter/sec",
            "range": "stddev: 0.00013727447617881136",
            "extra": "mean: 3.1986358024690147 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.82677407787669,
            "unit": "iter/sec",
            "range": "stddev: 0.00041122615025662094",
            "extra": "mean: 9.10524786324793 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 123.39215311595342,
            "unit": "iter/sec",
            "range": "stddev: 0.0007628148942492877",
            "extra": "mean: 8.104243055555449 msec\nrounds: 144"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.85889322525057,
            "unit": "iter/sec",
            "range": "stddev: 0.00025689506083636853",
            "extra": "mean: 5.239472906404239 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.44308984349107,
            "unit": "iter/sec",
            "range": "stddev: 0.00016919420967873253",
            "extra": "mean: 3.2739323076924074 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.186262551673678,
            "unit": "iter/sec",
            "range": "stddev: 0.0017282343479805616",
            "extra": "mean: 75.83649999999993 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.522924738162427,
            "unit": "iter/sec",
            "range": "stddev: 0.002398980191986007",
            "extra": "mean: 73.94849999999968 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.4929702775492,
            "unit": "iter/sec",
            "range": "stddev: 0.00034201266053878685",
            "extra": "mean: 6.116470930232526 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.9451583703751,
            "unit": "iter/sec",
            "range": "stddev: 0.0003593038243166115",
            "extra": "mean: 4.44552800000028 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.6460262662161,
            "unit": "iter/sec",
            "range": "stddev: 0.00007769995519929343",
            "extra": "mean: 2.1898800000003034 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 434.1116088757213,
            "unit": "iter/sec",
            "range": "stddev: 0.00015602824936799794",
            "extra": "mean: 2.3035550755941268 msec\nrounds: 463"
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
        "date": 1643747095192,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.35065367261419,
            "unit": "iter/sec",
            "range": "stddev: 0.0008260374913279448",
            "extra": "mean: 9.22929365079365 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.10821056935384,
            "unit": "iter/sec",
            "range": "stddev: 0.0006503687387764822",
            "extra": "mean: 6.891408805031431 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.30557365925964,
            "unit": "iter/sec",
            "range": "stddev: 0.000374641602106292",
            "extra": "mean: 5.068280542986423 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.1213054779087,
            "unit": "iter/sec",
            "range": "stddev: 0.0003092804532909985",
            "extra": "mean: 3.1936504559270613 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.87265851208221,
            "unit": "iter/sec",
            "range": "stddev: 0.0007928380442210402",
            "extra": "mean: 9.101445378151421 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.0606740499827,
            "unit": "iter/sec",
            "range": "stddev: 0.0006164357970076501",
            "extra": "mean: 7.349662251655786 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.9456072139624,
            "unit": "iter/sec",
            "range": "stddev: 0.0003652942233948827",
            "extra": "mean: 5.001360189573441 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.66804949360414,
            "unit": "iter/sec",
            "range": "stddev: 0.00020204509257054805",
            "extra": "mean: 3.1282450704226785 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.455302446366286,
            "unit": "iter/sec",
            "range": "stddev: 0.0007893598045872702",
            "extra": "mean: 74.3201428571424 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.733759821390054,
            "unit": "iter/sec",
            "range": "stddev: 0.0066391682084412295",
            "extra": "mean: 93.16400000000158 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.4640022955689,
            "unit": "iter/sec",
            "range": "stddev: 0.0005233880590931517",
            "extra": "mean: 5.971432584269844 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 152.25752645989138,
            "unit": "iter/sec",
            "range": "stddev: 0.0014696964607852005",
            "extra": "mean: 6.56781981981972 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.17260988276496,
            "unit": "iter/sec",
            "range": "stddev: 0.00011098505359555242",
            "extra": "mean: 2.11786956521745 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.2223065476856,
            "unit": "iter/sec",
            "range": "stddev: 0.00009093912134671553",
            "extra": "mean: 2.2410354330709255 msec\nrounds: 508"
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
        "date": 1643756396355,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.05279914054017,
            "unit": "iter/sec",
            "range": "stddev: 0.0011460965725950895",
            "extra": "mean: 9.086547619047609 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.28826188071548,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812501708408033",
            "extra": "mean: 7.12818012422366 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.5474551063828,
            "unit": "iter/sec",
            "range": "stddev: 0.0005417932225201776",
            "extra": "mean: 5.193524886877877 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.3356618122786,
            "unit": "iter/sec",
            "range": "stddev: 0.00017898315160960867",
            "extra": "mean: 3.141338278931804 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.85636510043783,
            "unit": "iter/sec",
            "range": "stddev: 0.0015612200537655596",
            "extra": "mean: 10.219059322034084 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.2257890619184,
            "unit": "iter/sec",
            "range": "stddev: 0.0006961810459390946",
            "extra": "mean: 7.234539999999919 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.90683473740754,
            "unit": "iter/sec",
            "range": "stddev: 0.0004722459207211202",
            "extra": "mean: 5.238157142857146 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.52954619153945,
            "unit": "iter/sec",
            "range": "stddev: 0.00033584847653890667",
            "extra": "mean: 3.465849557522102 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.616650440158324,
            "unit": "iter/sec",
            "range": "stddev: 0.001259421402562018",
            "extra": "mean: 73.43949999999947 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.088968523835383,
            "unit": "iter/sec",
            "range": "stddev: 0.004648011587741582",
            "extra": "mean: 76.40021428571485 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.61106437527755,
            "unit": "iter/sec",
            "range": "stddev: 0.00066430339411174",
            "extra": "mean: 7.012078651685288 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.04428110975064,
            "unit": "iter/sec",
            "range": "stddev: 0.00023618861198064075",
            "extra": "mean: 4.165898039215481 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 454.0430953772237,
            "unit": "iter/sec",
            "range": "stddev: 0.0001296031490066569",
            "extra": "mean: 2.2024341085270542 msec\nrounds: 516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 442.99355817277194,
            "unit": "iter/sec",
            "range": "stddev: 0.0002041376011068919",
            "extra": "mean: 2.257369168357049 msec\nrounds: 493"
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
        "date": 1643756997732,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.19162519897888,
            "unit": "iter/sec",
            "range": "stddev: 0.0006588570774788056",
            "extra": "mean: 8.320047244094473 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.38062979030337,
            "unit": "iter/sec",
            "range": "stddev: 0.0003386734724164552",
            "extra": "mean: 6.435808641975305 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.30948339623686,
            "unit": "iter/sec",
            "range": "stddev: 0.0003855018972519366",
            "extra": "mean: 4.942922018348651 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.9092840367007,
            "unit": "iter/sec",
            "range": "stddev: 0.0001471905311295334",
            "extra": "mean: 3.049623931623957 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.21746545973419,
            "unit": "iter/sec",
            "range": "stddev: 0.0007677531662796389",
            "extra": "mean: 9.41464754098363 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.47128273754248,
            "unit": "iter/sec",
            "range": "stddev: 0.0008117161018569434",
            "extra": "mean: 7.492248366012911 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.34531219346795,
            "unit": "iter/sec",
            "range": "stddev: 0.0006458603879089335",
            "extra": "mean: 5.607100000000033 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.2734127420559,
            "unit": "iter/sec",
            "range": "stddev: 0.0010777191431863764",
            "extra": "mean: 3.4569371257485617 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.888284351243511,
            "unit": "iter/sec",
            "range": "stddev: 0.004166933501712449",
            "extra": "mean: 77.58984615384563 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.573352037691208,
            "unit": "iter/sec",
            "range": "stddev: 0.003179551768810115",
            "extra": "mean: 79.53328571428641 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.76430808616516,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452416182840507",
            "extra": "mean: 6.143853107344725 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.31373551804683,
            "unit": "iter/sec",
            "range": "stddev: 0.00028542040190067137",
            "extra": "mean: 4.323132812499936 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 450.0648056654957,
            "unit": "iter/sec",
            "range": "stddev: 0.0001561667169562127",
            "extra": "mean: 2.2219022403258872 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.3787392601943,
            "unit": "iter/sec",
            "range": "stddev: 0.0002680633371349999",
            "extra": "mean: 2.307450526315769 msec\nrounds: 475"
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
        "date": 1643758609171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.90946242429942,
            "unit": "iter/sec",
            "range": "stddev: 0.0005028282782894727",
            "extra": "mean: 7.87963309352518 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.15379848442046,
            "unit": "iter/sec",
            "range": "stddev: 0.0005760606320152587",
            "extra": "mean: 6.445217647058854 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.19338653794915,
            "unit": "iter/sec",
            "range": "stddev: 0.00024759007809455833",
            "extra": "mean: 4.945760180995399 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.26190317100844,
            "unit": "iter/sec",
            "range": "stddev: 0.00022409666251850668",
            "extra": "mean: 3.1420662983425953 msec\nrounds: 362"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.68644537822739,
            "unit": "iter/sec",
            "range": "stddev: 0.0006152164024029422",
            "extra": "mean: 8.719426229508414 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.3873873024708,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931562968367619",
            "extra": "mean: 7.072766666666628 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.57404814580798,
            "unit": "iter/sec",
            "range": "stddev: 0.00047512466687641325",
            "extra": "mean: 5.087141509433912 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.1198931594028,
            "unit": "iter/sec",
            "range": "stddev: 0.0002235916155749615",
            "extra": "mean: 3.1336184971097754 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.458986430649837,
            "unit": "iter/sec",
            "range": "stddev: 0.001330972104462692",
            "extra": "mean: 74.29980000000023 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.985896621846482,
            "unit": "iter/sec",
            "range": "stddev: 0.0028669935920992567",
            "extra": "mean: 71.50060000000025 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.68624262477982,
            "unit": "iter/sec",
            "range": "stddev: 0.0004165123819708414",
            "extra": "mean: 5.9281657142863 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.30821873686392,
            "unit": "iter/sec",
            "range": "stddev: 0.00020129491461326251",
            "extra": "mean: 4.05995384615371 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.4546375899136,
            "unit": "iter/sec",
            "range": "stddev: 0.00014402119667052926",
            "extra": "mean: 2.112134765624912 msec\nrounds: 512"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 449.42938352490734,
            "unit": "iter/sec",
            "range": "stddev: 0.0001903709103477207",
            "extra": "mean: 2.2250436590436684 msec\nrounds: 481"
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
        "date": 1643759043929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.47489088039579,
            "unit": "iter/sec",
            "range": "stddev: 0.0006826071459822939",
            "extra": "mean: 8.512457364341167 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.3391510672181,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144566944362887",
            "extra": "mean: 6.696167701863367 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.92777085214982,
            "unit": "iter/sec",
            "range": "stddev: 0.00028405189027122356",
            "extra": "mean: 4.809362385321128 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.1803872763231,
            "unit": "iter/sec",
            "range": "stddev: 0.00021995014478152044",
            "extra": "mean: 3.1527800586510226 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.61288989878042,
            "unit": "iter/sec",
            "range": "stddev: 0.0005460805801342869",
            "extra": "mean: 8.801818181818245 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.5937585807045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004234190292314356",
            "extra": "mean: 7.112691275167622 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.1710348147928,
            "unit": "iter/sec",
            "range": "stddev: 0.0002600843477445344",
            "extra": "mean: 4.94630697674418 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.918715093862,
            "unit": "iter/sec",
            "range": "stddev: 0.00015213682148243186",
            "extra": "mean: 3.15538323353302 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.521889225588632,
            "unit": "iter/sec",
            "range": "stddev: 0.0024943154988278935",
            "extra": "mean: 79.8601538461535 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.270670491147257,
            "unit": "iter/sec",
            "range": "stddev: 0.0014291895421013172",
            "extra": "mean: 75.35414285714432 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.8326290974545,
            "unit": "iter/sec",
            "range": "stddev: 0.00039523417581974023",
            "extra": "mean: 6.1412752808990465 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.08372876166374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001936033545706772",
            "extra": "mean: 4.147936507936642 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.5071872418826,
            "unit": "iter/sec",
            "range": "stddev: 0.00014749313067009254",
            "extra": "mean: 2.1668134920635276 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.1329799576155,
            "unit": "iter/sec",
            "range": "stddev: 0.0001779607640427344",
            "extra": "mean: 2.34668530020714 msec\nrounds: 483"
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
        "date": 1643759910611,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.8714926518108,
            "unit": "iter/sec",
            "range": "stddev: 0.0004931547509717122",
            "extra": "mean: 8.205364341085238 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.31324932912878,
            "unit": "iter/sec",
            "range": "stddev: 0.0004909249589638862",
            "extra": "mean: 7.126910714285637 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.04802646180698,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411416019039947",
            "extra": "mean: 4.9008070175438645 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.80796788475703,
            "unit": "iter/sec",
            "range": "stddev: 0.0001521005991987301",
            "extra": "mean: 3.1866622340425734 msec\nrounds: 376"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.46596467130036,
            "unit": "iter/sec",
            "range": "stddev: 0.0004124102609582522",
            "extra": "mean: 8.736221311475362 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.82578148899,
            "unit": "iter/sec",
            "range": "stddev: 0.0003667602214021941",
            "extra": "mean: 7.255536585365804 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.64987737534864,
            "unit": "iter/sec",
            "range": "stddev: 0.00027308783719651186",
            "extra": "mean: 4.983805687203762 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.50384286196686,
            "unit": "iter/sec",
            "range": "stddev: 0.00018981727776748748",
            "extra": "mean: 3.2309776536312085 msec\nrounds: 358"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.280410133379029,
            "unit": "iter/sec",
            "range": "stddev: 0.0008329277965620763",
            "extra": "mean: 70.02600000000001 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.05774039533249,
            "unit": "iter/sec",
            "range": "stddev: 0.0043603957030086925",
            "extra": "mean: 76.58292857142816 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.0779266136514,
            "unit": "iter/sec",
            "range": "stddev: 0.000366616791057674",
            "extra": "mean: 5.879657754010592 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.33730489153407,
            "unit": "iter/sec",
            "range": "stddev: 0.00042709301256353845",
            "extra": "mean: 4.160818897637664 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.12048484510143,
            "unit": "iter/sec",
            "range": "stddev: 0.00010595103055451432",
            "extra": "mean: 2.1780775047259784 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.0284777940672,
            "unit": "iter/sec",
            "range": "stddev: 0.00009492875070458116",
            "extra": "mean: 2.2122500000001653 msec\nrounds: 512"
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
        "date": 1643760263488,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.8925014489354,
            "unit": "iter/sec",
            "range": "stddev: 0.0010405403051944007",
            "extra": "mean: 8.857984251968492 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.67319621939532,
            "unit": "iter/sec",
            "range": "stddev: 0.0005170849507062896",
            "extra": "mean: 6.96024050632907 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.54759100011822,
            "unit": "iter/sec",
            "range": "stddev: 0.00041313113090470934",
            "extra": "mean: 4.961607305936063 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.17776879146754,
            "unit": "iter/sec",
            "range": "stddev: 0.00011295586067821117",
            "extra": "mean: 3.0658128654970396 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.69232514763415,
            "unit": "iter/sec",
            "range": "stddev: 0.0005915782885034155",
            "extra": "mean: 9.034050000000143 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.91160926357688,
            "unit": "iter/sec",
            "range": "stddev: 0.0005524634188481238",
            "extra": "mean: 7.198822368421036 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.728565446174,
            "unit": "iter/sec",
            "range": "stddev: 0.0004045551733511741",
            "extra": "mean: 5.109116279069665 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.3880498347794,
            "unit": "iter/sec",
            "range": "stddev: 0.00019969774386333856",
            "extra": "mean: 3.1807824773413964 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.027057197799783,
            "unit": "iter/sec",
            "range": "stddev: 0.003180778950316236",
            "extra": "mean: 76.76330769230798 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.892844986746029,
            "unit": "iter/sec",
            "range": "stddev: 0.0013311534633011336",
            "extra": "mean: 77.56240000000076 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.82045503257945,
            "unit": "iter/sec",
            "range": "stddev: 0.0004206074106128372",
            "extra": "mean: 6.141734463276778 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.9803215501089,
            "unit": "iter/sec",
            "range": "stddev: 0.00041101671950276937",
            "extra": "mean: 4.292208000000215 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.1148298433105,
            "unit": "iter/sec",
            "range": "stddev: 0.00010209642393196805",
            "extra": "mean: 2.1226247544204733 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.34114356030096,
            "unit": "iter/sec",
            "range": "stddev: 0.00006842457381977492",
            "extra": "mean: 2.205844349680089 msec\nrounds: 469"
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
        "date": 1643761181957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.51797922884386,
            "unit": "iter/sec",
            "range": "stddev: 0.00034287905485725804",
            "extra": "mean: 8.030968750000048 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.22345549795327,
            "unit": "iter/sec",
            "range": "stddev: 0.0002933356474935168",
            "extra": "mean: 6.74657055214725 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.36251689272416,
            "unit": "iter/sec",
            "range": "stddev: 0.00020887178649851756",
            "extra": "mean: 4.869437788018409 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 330.99924025028093,
            "unit": "iter/sec",
            "range": "stddev: 0.00006732376333894361",
            "extra": "mean: 3.021154970760243 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.13403854126452,
            "unit": "iter/sec",
            "range": "stddev: 0.0005792343645154961",
            "extra": "mean: 9.887867768594862 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.5863643782002,
            "unit": "iter/sec",
            "range": "stddev: 0.0003264324807271207",
            "extra": "mean: 7.215717105263072 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8461466532789,
            "unit": "iter/sec",
            "range": "stddev: 0.00021702656382163886",
            "extra": "mean: 4.905660550458656 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4618214007726,
            "unit": "iter/sec",
            "range": "stddev: 0.00010642077370519705",
            "extra": "mean: 3.1107893175074155 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.892003564291134,
            "unit": "iter/sec",
            "range": "stddev: 0.000911721183522177",
            "extra": "mean: 71.98385714285749 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.840549722277101,
            "unit": "iter/sec",
            "range": "stddev: 0.0021503844174613164",
            "extra": "mean: 77.87828571428663 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.65298134509695,
            "unit": "iter/sec",
            "range": "stddev: 0.0003591902667942745",
            "extra": "mean: 6.224596590908641 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.59036410261663,
            "unit": "iter/sec",
            "range": "stddev: 0.00025004729393045657",
            "extra": "mean: 4.0884685039368724 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.782417870953,
            "unit": "iter/sec",
            "range": "stddev: 0.00012949943813121202",
            "extra": "mean: 2.1241235059761974 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.8049617947985,
            "unit": "iter/sec",
            "range": "stddev: 0.00004715037171508897",
            "extra": "mean: 2.165416317991721 msec\nrounds: 478"
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
        "date": 1643775401298,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.86379771809484,
            "unit": "iter/sec",
            "range": "stddev: 0.000887474747960731",
            "extra": "mean: 8.70596323529417 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.97552921069114,
            "unit": "iter/sec",
            "range": "stddev: 0.0018931806193289514",
            "extra": "mean: 8.851474358974436 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.89790530616094,
            "unit": "iter/sec",
            "range": "stddev: 0.0007878566713790408",
            "extra": "mean: 5.58978037383181 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.4478764002933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004928790682835965",
            "extra": "mean: 3.5279855072463873 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.93124331713287,
            "unit": "iter/sec",
            "range": "stddev: 0.0011224150106702913",
            "extra": "mean: 9.621745762711873 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.64222285057454,
            "unit": "iter/sec",
            "range": "stddev: 0.000917327522050591",
            "extra": "mean: 7.654493150685105 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.02626916221826,
            "unit": "iter/sec",
            "range": "stddev: 0.0007872529693523167",
            "extra": "mean: 6.171838709677472 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 269.6798456247412,
            "unit": "iter/sec",
            "range": "stddev: 0.0005768099546571883",
            "extra": "mean: 3.7081006097559746 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.495263644434285,
            "unit": "iter/sec",
            "range": "stddev: 0.0015422450401075588",
            "extra": "mean: 74.10007142857263 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.887547199930774,
            "unit": "iter/sec",
            "range": "stddev: 0.006825016355090723",
            "extra": "mean: 84.12164285714242 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 135.39076589339808,
            "unit": "iter/sec",
            "range": "stddev: 0.0010255765881641784",
            "extra": "mean: 7.386028089887348 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 223.84324526145258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005527040522136445",
            "extra": "mean: 4.467412000000195 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 380.39974210186534,
            "unit": "iter/sec",
            "range": "stddev: 0.00043771405219962555",
            "extra": "mean: 2.6288135593220643 msec\nrounds: 472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 404.55226874430906,
            "unit": "iter/sec",
            "range": "stddev: 0.0003083959740454558",
            "extra": "mean: 2.4718684759917497 msec\nrounds: 479"
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
        "date": 1643776205905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.05545729471794,
            "unit": "iter/sec",
            "range": "stddev: 0.0007845763413041772",
            "extra": "mean: 8.399446969696923 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.3658583304598,
            "unit": "iter/sec",
            "range": "stddev: 0.0004260673985883427",
            "extra": "mean: 6.650445859872625 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.9291147510382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002291988449385036",
            "extra": "mean: 4.740929203539825 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.35805322134865,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870581742946643",
            "extra": "mean: 3.2856038781163317 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.56721238866776,
            "unit": "iter/sec",
            "range": "stddev: 0.0005556459152406383",
            "extra": "mean: 8.805358333333402 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.09451338889008,
            "unit": "iter/sec",
            "range": "stddev: 0.00046582158560950875",
            "extra": "mean: 7.457426666666673 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.13650101038908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003971218346975248",
            "extra": "mean: 5.177685185185211 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.24549227934284,
            "unit": "iter/sec",
            "range": "stddev: 0.00015721474432603896",
            "extra": "mean: 3.112884146341385 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.506173768502192,
            "unit": "iter/sec",
            "range": "stddev: 0.001964410272774957",
            "extra": "mean: 74.04021428571461 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.442770286100519,
            "unit": "iter/sec",
            "range": "stddev: 0.0009862416394716385",
            "extra": "mean: 74.3894285714288 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.3435727735597,
            "unit": "iter/sec",
            "range": "stddev: 0.0003625931294748913",
            "extra": "mean: 6.084813559322133 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.85544582055854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001570022321685916",
            "extra": "mean: 4.084042307692215 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 468.0078434293998,
            "unit": "iter/sec",
            "range": "stddev: 0.00010459445071052124",
            "extra": "mean: 2.1367163265306526 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.63189903390634,
            "unit": "iter/sec",
            "range": "stddev: 0.00014041969757264778",
            "extra": "mean: 2.279815950920386 msec\nrounds: 489"
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
        "date": 1643782713972,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.61123566751434,
            "unit": "iter/sec",
            "range": "stddev: 0.0006742870041948926",
            "extra": "mean: 8.36041860465115 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.29253715134604,
            "unit": "iter/sec",
            "range": "stddev: 0.0004051187667406128",
            "extra": "mean: 6.653690322580624 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.51727902768573,
            "unit": "iter/sec",
            "range": "stddev: 0.0006032398071435559",
            "extra": "mean: 5.0120972222222235 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.6483818219678,
            "unit": "iter/sec",
            "range": "stddev: 0.0006198197247329973",
            "extra": "mean: 3.1882836257309854 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.43351626048366,
            "unit": "iter/sec",
            "range": "stddev: 0.001025563388106892",
            "extra": "mean: 9.484650000000036 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.54451857584445,
            "unit": "iter/sec",
            "range": "stddev: 0.0006368488441466955",
            "extra": "mean: 7.2703733333334 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.97411602668765,
            "unit": "iter/sec",
            "range": "stddev: 0.0005358178431579414",
            "extra": "mean: 5.263875000000103 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.8451240953684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003830251079854617",
            "extra": "mean: 3.438256024096519 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.11249395888667,
            "unit": "iter/sec",
            "range": "stddev: 0.005639234902511665",
            "extra": "mean: 76.2631428571431 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.657884393756829,
            "unit": "iter/sec",
            "range": "stddev: 0.006371879095588198",
            "extra": "mean: 85.77885714285622 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.58169567861304,
            "unit": "iter/sec",
            "range": "stddev: 0.000762955175757371",
            "extra": "mean: 6.427491329479477 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.13806283931356,
            "unit": "iter/sec",
            "range": "stddev: 0.00036434542454331405",
            "extra": "mean: 4.252820610686797 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 432.6418113505216,
            "unit": "iter/sec",
            "range": "stddev: 0.00032931360830109767",
            "extra": "mean: 2.3113808553972865 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.90107379140875,
            "unit": "iter/sec",
            "range": "stddev: 0.00024035751924530023",
            "extra": "mean: 2.294098501070747 msec\nrounds: 467"
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
        "date": 1643824423506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.59289998538891,
            "unit": "iter/sec",
            "range": "stddev: 0.00048558608246519037",
            "extra": "mean: 8.432208000000031 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.8673665380244,
            "unit": "iter/sec",
            "range": "stddev: 0.0006296084180543661",
            "extra": "mean: 7.149630573248404 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.97550539264327,
            "unit": "iter/sec",
            "range": "stddev: 0.0003221904269072106",
            "extra": "mean: 5.000612440191328 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.1797740468677,
            "unit": "iter/sec",
            "range": "stddev: 0.00019507506316977018",
            "extra": "mean: 3.213576470588307 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.08525580176611,
            "unit": "iter/sec",
            "range": "stddev: 0.0007722093088901268",
            "extra": "mean: 9.700708333333422 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.05585294468884,
            "unit": "iter/sec",
            "range": "stddev: 0.00042385725883743584",
            "extra": "mean: 7.243445161290216 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.58404688779706,
            "unit": "iter/sec",
            "range": "stddev: 0.0002285117880936157",
            "extra": "mean: 5.192538095238065 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 297.0772762577779,
            "unit": "iter/sec",
            "range": "stddev: 0.0002276270561916274",
            "extra": "mean: 3.366127536231639 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.200573282039736,
            "unit": "iter/sec",
            "range": "stddev: 0.0019121770286799104",
            "extra": "mean: 75.75428571428537 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.718625840529949,
            "unit": "iter/sec",
            "range": "stddev: 0.0029438723887129665",
            "extra": "mean: 78.62484615384619 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.45034465488885,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505276863076861",
            "extra": "mean: 6.781944134077981 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.94626686899335,
            "unit": "iter/sec",
            "range": "stddev: 0.00042819665243683583",
            "extra": "mean: 4.406329365079437 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 433.7064102701538,
            "unit": "iter/sec",
            "range": "stddev: 0.000187821165297838",
            "extra": "mean: 2.3057072164949197 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 389.6269965164841,
            "unit": "iter/sec",
            "range": "stddev: 0.0002503880697131399",
            "extra": "mean: 2.566557268722761 msec\nrounds: 454"
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
        "date": 1643830736124,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.46916534926552,
            "unit": "iter/sec",
            "range": "stddev: 0.00027831548969234083",
            "extra": "mean: 8.165320610687065 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.10129364091281,
            "unit": "iter/sec",
            "range": "stddev: 0.0005203798821867589",
            "extra": "mean: 6.75213548387096 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.99447482702976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003003965513398161",
            "extra": "mean: 4.878180257510746 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3642364356129,
            "unit": "iter/sec",
            "range": "stddev: 0.00019933112071977347",
            "extra": "mean: 3.092487935656781 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.60346270169778,
            "unit": "iter/sec",
            "range": "stddev: 0.0002541458158126179",
            "extra": "mean: 8.725739837398347 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.21101867058374,
            "unit": "iter/sec",
            "range": "stddev: 0.00045542378805386223",
            "extra": "mean: 6.934282894736813 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.51076864695315,
            "unit": "iter/sec",
            "range": "stddev: 0.00028209277686625157",
            "extra": "mean: 4.938009009009039 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7877531566902,
            "unit": "iter/sec",
            "range": "stddev: 0.00019189181439618894",
            "extra": "mean: 3.156687687687781 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.919143694279938,
            "unit": "iter/sec",
            "range": "stddev: 0.001777617149660478",
            "extra": "mean: 71.84349999999995 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.05204315751287,
            "unit": "iter/sec",
            "range": "stddev: 0.004531328835615962",
            "extra": "mean: 76.61635714285785 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.3232164444082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005175524341679542",
            "extra": "mean: 6.048757225433376 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.74465270917855,
            "unit": "iter/sec",
            "range": "stddev: 0.00019279217781963858",
            "extra": "mean: 4.1537786561266135 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.65677069806134,
            "unit": "iter/sec",
            "range": "stddev: 0.00013292282926236244",
            "extra": "mean: 2.1429025844929295 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 451.9789000709608,
            "unit": "iter/sec",
            "range": "stddev: 0.00015818450842783097",
            "extra": "mean: 2.2124926624738452 msec\nrounds: 477"
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
          "id": "6fb42723fda6021e9cf4eb191f0536f7d1413027",
          "message": "Merge pull request #431 from TeoZosa/ci/fix-release-workflow-windows-runner\n\n💚  Fix Windows package building in CI",
          "timestamp": "2022-02-02T20:46:43Z",
          "tree_id": "8223898c72d6743fd7f73aadb30236d7480040c6"
        },
        "date": 1643843062598,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.53277626079094,
            "unit": "iter/sec",
            "range": "stddev: 0.0004906819846288948",
            "extra": "mean: 8.365906249999979 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.38381467608798,
            "unit": "iter/sec",
            "range": "stddev: 0.00040684404546577666",
            "extra": "mean: 6.694165644171831 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.16510519508995,
            "unit": "iter/sec",
            "range": "stddev: 0.00035363525140933257",
            "extra": "mean: 4.946452054794506 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.2221987983575,
            "unit": "iter/sec",
            "range": "stddev: 0.00021396520851212227",
            "extra": "mean: 3.1623333333333146 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.96327604545877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006161419215743589",
            "extra": "mean: 8.931499999999867 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.310307420071,
            "unit": "iter/sec",
            "range": "stddev: 0.00051521249369418",
            "extra": "mean: 7.733335570469644 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.19463405338072,
            "unit": "iter/sec",
            "range": "stddev: 0.00009955729154244234",
            "extra": "mean: 4.84978672985794 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.76268360797025,
            "unit": "iter/sec",
            "range": "stddev: 0.00014760530109293661",
            "extra": "mean: 3.2075679758308158 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.011527283778657,
            "unit": "iter/sec",
            "range": "stddev: 0.0020291880325458743",
            "extra": "mean: 76.85492857142836 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.347036290591706,
            "unit": "iter/sec",
            "range": "stddev: 0.0014034232872094875",
            "extra": "mean: 74.92299999999982 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36213411947944,
            "unit": "iter/sec",
            "range": "stddev: 0.00028845949757289827",
            "extra": "mean: 6.01098324022347 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.7788421938393,
            "unit": "iter/sec",
            "range": "stddev: 0.0003398976251819971",
            "extra": "mean: 4.295923076923295 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.92345273797036,
            "unit": "iter/sec",
            "range": "stddev: 0.00007798307611042828",
            "extra": "mean: 2.1462753036438964 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.5131198810941,
            "unit": "iter/sec",
            "range": "stddev: 0.00006978045567943274",
            "extra": "mean: 2.2547247311829244 msec\nrounds: 465"
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
          "id": "475b4b4749ac4fe49e06172d6c1ce02bbd083e1d",
          "message": "Merge pull request #432 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.3",
          "timestamp": "2022-02-03T14:16:12Z",
          "tree_id": "ed7097a387a4590dfa9db87f1af3061cf6c05577"
        },
        "date": 1643898540323,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.12381566374654,
            "unit": "iter/sec",
            "range": "stddev: 0.0009420149248311392",
            "extra": "mean: 8.686299999999985 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.71130572797125,
            "unit": "iter/sec",
            "range": "stddev: 0.0007887194915581089",
            "extra": "mean: 7.056599999999987 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.14563177231759,
            "unit": "iter/sec",
            "range": "stddev: 0.0006091223569577762",
            "extra": "mean: 5.286931506849395 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.21810482700295,
            "unit": "iter/sec",
            "range": "stddev: 0.00032120906360827824",
            "extra": "mean: 3.20288921282797 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.13314434062367,
            "unit": "iter/sec",
            "range": "stddev: 0.0008763758670991922",
            "extra": "mean: 9.247858333333584 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.11578209935374,
            "unit": "iter/sec",
            "range": "stddev: 0.0008352114213383861",
            "extra": "mean: 7.5691184210526785 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.96689637520277,
            "unit": "iter/sec",
            "range": "stddev: 0.0005960315834690376",
            "extra": "mean: 5.209231481481484 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 280.554388912215,
            "unit": "iter/sec",
            "range": "stddev: 0.00041391909222334935",
            "extra": "mean: 3.5643712574851154 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.61776301007045,
            "unit": "iter/sec",
            "range": "stddev: 0.0016638590801094785",
            "extra": "mean: 73.43349999999938 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.487746398846122,
            "unit": "iter/sec",
            "range": "stddev: 0.005079536876982127",
            "extra": "mean: 80.07850000000006 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 140.66950871174467,
            "unit": "iter/sec",
            "range": "stddev: 0.0010480500476550937",
            "extra": "mean: 7.108861111110917 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.1883393383492,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560892559954561",
            "extra": "mean: 4.4407272727274005 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.22629814089254,
            "unit": "iter/sec",
            "range": "stddev: 0.0002818475043045874",
            "extra": "mean: 2.23101590457253 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.54437861302443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002870768606402585",
            "extra": "mean: 2.3444219409282945 msec\nrounds: 474"
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
          "id": "ec84dd4269d982da53f359d284adaacdfe297a88",
          "message": "Merge pull request #433 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.18.0",
          "timestamp": "2022-02-04T14:17:32Z",
          "tree_id": "369052a1c1857be1fb0c5ff4c916ebd9d9ac7b6c"
        },
        "date": 1643988319513,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.45626100233075,
            "unit": "iter/sec",
            "range": "stddev: 0.000855512500749453",
            "extra": "mean: 8.892346153846198 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.4512600903084,
            "unit": "iter/sec",
            "range": "stddev: 0.00044133250240260954",
            "extra": "mean: 6.691144654088117 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.66772359749004,
            "unit": "iter/sec",
            "range": "stddev: 0.00041361898690888614",
            "extra": "mean: 4.838684931506862 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.8645110868664,
            "unit": "iter/sec",
            "range": "stddev: 0.00020898997588978709",
            "extra": "mean: 3.1068973607037873 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 98.84849737927762,
            "unit": "iter/sec",
            "range": "stddev: 0.0008798712090229715",
            "extra": "mean: 10.116491666666832 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.37489432241478,
            "unit": "iter/sec",
            "range": "stddev: 0.000775009368995503",
            "extra": "mean: 7.38689403973499 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.7801915968958,
            "unit": "iter/sec",
            "range": "stddev: 0.00020280953052883503",
            "extra": "mean: 4.955887850467201 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.75317621346767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004539987061774487",
            "extra": "mean: 3.336078078077996 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.556698322425017,
            "unit": "iter/sec",
            "range": "stddev: 0.0021353890025731788",
            "extra": "mean: 79.63876923076978 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.941082946795516,
            "unit": "iter/sec",
            "range": "stddev: 0.0049911781317497905",
            "extra": "mean: 77.27328571428568 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.4328308710818,
            "unit": "iter/sec",
            "range": "stddev: 0.0005703140679416169",
            "extra": "mean: 6.3925199999999505 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.43237353184688,
            "unit": "iter/sec",
            "range": "stddev: 0.00038741213757793294",
            "extra": "mean: 4.320916666666741 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.7910444413483,
            "unit": "iter/sec",
            "range": "stddev: 0.00023949402722699543",
            "extra": "mean: 2.2381827309237243 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.4914416183198,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249809194723982",
            "extra": "mean: 2.270191666666902 msec\nrounds: 480"
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
          "id": "9a9c2efa9a9118f8bca9aa78db6e33d5b288792d",
          "message": "Merge pull request #434 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.2",
          "timestamp": "2022-02-04T14:55:14Z",
          "tree_id": "8f8abe92f1f477f88bf71f535e6f932190b300a1"
        },
        "date": 1643988904861,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.73235741568479,
            "unit": "iter/sec",
            "range": "stddev: 0.0007724825035058795",
            "extra": "mean: 8.715937007874052 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.9283853699485,
            "unit": "iter/sec",
            "range": "stddev: 0.0009102325791915207",
            "extra": "mean: 7.146512820512852 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.1269141052147,
            "unit": "iter/sec",
            "range": "stddev: 0.000661319970361243",
            "extra": "mean: 5.520990654205652 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.32602871214397,
            "unit": "iter/sec",
            "range": "stddev: 0.00034278377997827125",
            "extra": "mean: 3.2224174174174487 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.29666062839246,
            "unit": "iter/sec",
            "range": "stddev: 0.000614191326354366",
            "extra": "mean: 9.066457627118595 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.97105082772623,
            "unit": "iter/sec",
            "range": "stddev: 0.000520625593356208",
            "extra": "mean: 7.195743243243068 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.0080491851958,
            "unit": "iter/sec",
            "range": "stddev: 0.0004568056610918191",
            "extra": "mean: 5.181131067961193 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.65874071766586,
            "unit": "iter/sec",
            "range": "stddev: 0.000262905373694743",
            "extra": "mean: 3.2609538461539516 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.69928517367589,
            "unit": "iter/sec",
            "range": "stddev: 0.005480680225188436",
            "extra": "mean: 85.47530769230768 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.233110661592823,
            "unit": "iter/sec",
            "range": "stddev: 0.004238248796688682",
            "extra": "mean: 81.74535714285724 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.54026115982225,
            "unit": "iter/sec",
            "range": "stddev: 0.0006652608508423079",
            "extra": "mean: 6.388132947977097 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.67834802685655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003495569624226526",
            "extra": "mean: 4.35391497975712 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 417.72368552606406,
            "unit": "iter/sec",
            "range": "stddev: 0.00032815373953495197",
            "extra": "mean: 2.393926977687753 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 417.8760208083296,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951887297458291",
            "extra": "mean: 2.393054279749346 msec\nrounds: 479"
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
          "id": "c661549bea9eb68e6cde4b3ec8d6246c19c6fd93",
          "message": ":bookmark: Bump version number to `0.17.2`",
          "timestamp": "2022-02-04T21:43:59Z",
          "tree_id": "1404459e9c8c38056732bc89523a3d3dfc305fe0"
        },
        "date": 1644011630273,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.90908828041918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010209297190767349",
            "extra": "mean: 8.778930769230804 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.43685479103283,
            "unit": "iter/sec",
            "range": "stddev: 0.0006628977520975523",
            "extra": "mean: 6.828881987577597 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.82719193360802,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357442766830804",
            "extra": "mean: 5.0294931506849325 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 288.8285369390415,
            "unit": "iter/sec",
            "range": "stddev: 0.0004480576952120383",
            "extra": "mean: 3.462261764705938 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 97.41346778029066,
            "unit": "iter/sec",
            "range": "stddev: 0.0016693932362080782",
            "extra": "mean: 10.265521008403384 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.04487875305728,
            "unit": "iter/sec",
            "range": "stddev: 0.0009136365517383677",
            "extra": "mean: 7.689653061224378 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.4451372935095,
            "unit": "iter/sec",
            "range": "stddev: 0.0005716576225831035",
            "extra": "mean: 5.22342857142866 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.2851495548475,
            "unit": "iter/sec",
            "range": "stddev: 0.0003128833921499794",
            "extra": "mean: 3.3191148036254434 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.899205607383905,
            "unit": "iter/sec",
            "range": "stddev: 0.0024022637534259245",
            "extra": "mean: 77.52415384615382 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.239270749279424,
            "unit": "iter/sec",
            "range": "stddev: 0.006784420140503005",
            "extra": "mean: 81.70421428571422 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 151.21233408766102,
            "unit": "iter/sec",
            "range": "stddev: 0.0009995241619284376",
            "extra": "mean: 6.613217142857398 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 218.80977737814163,
            "unit": "iter/sec",
            "range": "stddev: 0.0003419001903111541",
            "extra": "mean: 4.570179687500092 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 424.9635210255241,
            "unit": "iter/sec",
            "range": "stddev: 0.0003091327588990602",
            "extra": "mean: 2.3531431535271428 msec\nrounds: 482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.4586132876239,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813969151938026",
            "extra": "mean: 2.296429487179513 msec\nrounds: 468"
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
          "id": "0b53177e092680e558558b432467f921bf6b88a0",
          "message": "Merge pull request #436 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.18.1",
          "timestamp": "2022-02-07T14:22:16Z",
          "tree_id": "e2043a56baab023f0d126ec293042513f2b0b5c5"
        },
        "date": 1644244775343,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.68713056396896,
            "unit": "iter/sec",
            "range": "stddev: 0.0010680674824579965",
            "extra": "mean: 9.644398437499992 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.20604012051103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005735128325078256",
            "extra": "mean: 6.934522292993508 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.41014684187803,
            "unit": "iter/sec",
            "range": "stddev: 0.0004710648752663129",
            "extra": "mean: 5.040064814814865 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.8956429166365,
            "unit": "iter/sec",
            "range": "stddev: 0.00028869873426882504",
            "extra": "mean: 3.2373392857142886 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.32098810831877,
            "unit": "iter/sec",
            "range": "stddev: 0.0006622145162076635",
            "extra": "mean: 9.064458333333173 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.90957045828165,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310335467693502",
            "extra": "mean: 7.251128378378245 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.78812743592022,
            "unit": "iter/sec",
            "range": "stddev: 0.0005568897520949365",
            "extra": "mean: 5.269033492822876 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 282.03397776876324,
            "unit": "iter/sec",
            "range": "stddev: 0.00044879581146720906",
            "extra": "mean: 3.5456720779220783 msec\nrounds: 308"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.746195033172018,
            "unit": "iter/sec",
            "range": "stddev: 0.002793196932619279",
            "extra": "mean: 78.45478571428544 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.492831451404426,
            "unit": "iter/sec",
            "range": "stddev: 0.001982669091219287",
            "extra": "mean: 74.11342857142955 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.69877135883394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005315737798229241",
            "extra": "mean: 6.184338888888953 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.0120386517272,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662861296685651",
            "extra": "mean: 4.25510116731482 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.32621307231284,
            "unit": "iter/sec",
            "range": "stddev: 0.00027796304345186043",
            "extra": "mean: 2.245544885177505 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 408.6854854518571,
            "unit": "iter/sec",
            "range": "stddev: 0.0003461047778291128",
            "extra": "mean: 2.446869379014928 msec\nrounds: 467"
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
          "id": "d36a93fa13c0c4c0c358ff9a84b626bff5df6930",
          "message": "Merge pull request #437 from TeoZosa/dependabot/pip/mutmut-2.4.0",
          "timestamp": "2022-02-09T14:39:07Z",
          "tree_id": "06812fe319ab4ba1cc89bd7d463c68e2316ca007"
        },
        "date": 1644418857479,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.20699522419446,
            "unit": "iter/sec",
            "range": "stddev: 0.00044277578313186314",
            "extra": "mean: 8.05107633587781 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.56658384951024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034018697615271256",
            "extra": "mean: 6.469703703703669 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.67045686338673,
            "unit": "iter/sec",
            "range": "stddev: 0.00024157613644501153",
            "extra": "mean: 4.769389140271496 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.0979051247288,
            "unit": "iter/sec",
            "range": "stddev: 0.00026097306275929717",
            "extra": "mean: 3.1436862170088538 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.82200325910914,
            "unit": "iter/sec",
            "range": "stddev: 0.0003143397155827192",
            "extra": "mean: 8.48737903225803 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.88615746772237,
            "unit": "iter/sec",
            "range": "stddev: 0.00033886159060665384",
            "extra": "mean: 6.807993464052227 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.87444157417406,
            "unit": "iter/sec",
            "range": "stddev: 0.0003211293213009408",
            "extra": "mean: 4.953574074074024 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.5143365443925,
            "unit": "iter/sec",
            "range": "stddev: 0.000558495684393909",
            "extra": "mean: 3.490226744186185 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.561673161739472,
            "unit": "iter/sec",
            "range": "stddev: 0.002251349447589255",
            "extra": "mean: 73.737214285714 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.501627910565205,
            "unit": "iter/sec",
            "range": "stddev: 0.0026874862964135957",
            "extra": "mean: 74.06514285714293 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.11491190282936,
            "unit": "iter/sec",
            "range": "stddev: 0.00024168278183391828",
            "extra": "mean: 5.810071823204769 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.53051082423673,
            "unit": "iter/sec",
            "range": "stddev: 0.00022665805001486795",
            "extra": "mean: 4.089469230769237 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.14697255468667,
            "unit": "iter/sec",
            "range": "stddev: 0.0001099840634130196",
            "extra": "mean: 2.1452461538462173 msec\nrounds: 520"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.2381957843422,
            "unit": "iter/sec",
            "range": "stddev: 0.00013081520129599262",
            "extra": "mean: 2.2063453815260874 msec\nrounds: 498"
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
          "id": "c2bd9fb37185d8c6778ea5a421803844d2b7c833",
          "message": "Merge pull request #438 from TeoZosa/dependabot/pip/rich-11.2.0",
          "timestamp": "2022-02-09T14:45:16Z",
          "tree_id": "2970d8702df558319ba2462cb4c6b2728a184161"
        },
        "date": 1644420983689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.82159131627695,
            "unit": "iter/sec",
            "range": "stddev: 0.0008349270507763633",
            "extra": "mean: 8.633968749999942 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.53431592274194,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748676860055593",
            "extra": "mean: 6.918772151898729 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.31180389421368,
            "unit": "iter/sec",
            "range": "stddev: 0.00048041601095034865",
            "extra": "mean: 4.9674186046511455 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.0865530889414,
            "unit": "iter/sec",
            "range": "stddev: 0.00015134200630354398",
            "extra": "mean: 3.07610385756684 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.16986476461825,
            "unit": "iter/sec",
            "range": "stddev: 0.0005102153391966325",
            "extra": "mean: 8.91505042016802 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.5587199367404,
            "unit": "iter/sec",
            "range": "stddev: 0.00030165236195353335",
            "extra": "mean: 7.014653333333409 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.750304556085,
            "unit": "iter/sec",
            "range": "stddev: 0.0002706148726897126",
            "extra": "mean: 4.956622009569298 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.66805161915494,
            "unit": "iter/sec",
            "range": "stddev: 0.0002969510462076755",
            "extra": "mean: 3.2608548387097085 msec\nrounds: 310"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.626484435148097,
            "unit": "iter/sec",
            "range": "stddev: 0.001520017244335317",
            "extra": "mean: 73.38650000000031 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.183021774585429,
            "unit": "iter/sec",
            "range": "stddev: 0.002719086607304284",
            "extra": "mean: 75.85514285714267 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.95609665686385,
            "unit": "iter/sec",
            "range": "stddev: 0.0004012974470250818",
            "extra": "mean: 6.0622191011234134 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 224.30375320227657,
            "unit": "iter/sec",
            "range": "stddev: 0.0003708134757477556",
            "extra": "mean: 4.458240157480568 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 439.0568261090336,
            "unit": "iter/sec",
            "range": "stddev: 0.000154387222544322",
            "extra": "mean: 2.277609504132078 msec\nrounds: 484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.6307199764497,
            "unit": "iter/sec",
            "range": "stddev: 0.000137506798417631",
            "extra": "mean: 2.327580299785861 msec\nrounds: 467"
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
          "id": "e45b29fc8beeefa93cf0668fdc8c73df499a3093",
          "message": "Merge pull request #439 from TeoZosa/feat/support-case-insensitive-log-level-configuration\n\n✨  Support case-insensitive log level config",
          "timestamp": "2022-02-11T00:22:17Z",
          "tree_id": "d4b4ab89bb6083a91fb3d259c4f3dc5906026aa4"
        },
        "date": 1644539460049,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.2881240819988,
            "unit": "iter/sec",
            "range": "stddev: 0.0009414419997082457",
            "extra": "mean: 8.905661290322621 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.83558357994107,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942473127054205",
            "extra": "mean: 6.904380645161391 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.7056876572263,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411694875441034",
            "extra": "mean: 5.083737089201871 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.63536578318514,
            "unit": "iter/sec",
            "range": "stddev: 0.00019492967100091262",
            "extra": "mean: 3.208878419452985 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.34161097549463,
            "unit": "iter/sec",
            "range": "stddev: 0.00043296458023275804",
            "extra": "mean: 9.316051724137932 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.16076577271835,
            "unit": "iter/sec",
            "range": "stddev: 0.00032780729390101735",
            "extra": "mean: 7.237944827586235 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.1579860544891,
            "unit": "iter/sec",
            "range": "stddev: 0.0005326995198257537",
            "extra": "mean: 5.286586206896592 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.9865816104306,
            "unit": "iter/sec",
            "range": "stddev: 0.00023681747310194296",
            "extra": "mean: 3.2788327759197378 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.349443657563254,
            "unit": "iter/sec",
            "range": "stddev: 0.0037226404245868042",
            "extra": "mean: 80.97530769230751 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.391484159036631,
            "unit": "iter/sec",
            "range": "stddev: 0.0023652870845679882",
            "extra": "mean: 80.70058333333208 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.17433049423977,
            "unit": "iter/sec",
            "range": "stddev: 0.0003887319217353746",
            "extra": "mean: 6.091086206896918 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.66371071182698,
            "unit": "iter/sec",
            "range": "stddev: 0.0004496379804692833",
            "extra": "mean: 4.373234374999924 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.2252592987775,
            "unit": "iter/sec",
            "range": "stddev: 0.00017607556880330316",
            "extra": "mean: 2.2923936170213484 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.1470261198737,
            "unit": "iter/sec",
            "range": "stddev: 0.00021211191360010382",
            "extra": "mean: 2.3521274725276844 msec\nrounds: 455"
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
          "id": "1db4e1d4e299da7b5a98c639bcc18633e0e3e78a",
          "message": ":bookmark: Bump version number to `0.17.3`",
          "timestamp": "2022-02-11T00:38:45Z",
          "tree_id": "bef9c677f792047c3b297d645772732327b9ddea"
        },
        "date": 1644540414905,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.77650234816154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003552397892172955",
            "extra": "mean: 7.887897058823548 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.83435635860698,
            "unit": "iter/sec",
            "range": "stddev: 0.0007737366540171122",
            "extra": "mean: 6.76432748538009 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.01423077608024,
            "unit": "iter/sec",
            "range": "stddev: 0.00034730644086599846",
            "extra": "mean: 4.78436322869955 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.5286603940748,
            "unit": "iter/sec",
            "range": "stddev: 0.0003123020767160979",
            "extra": "mean: 3.0719261363636354 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.41015573300426,
            "unit": "iter/sec",
            "range": "stddev: 0.0010244767341474669",
            "extra": "mean: 9.13991935483868 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.7190311621767,
            "unit": "iter/sec",
            "range": "stddev: 0.0004972976269660969",
            "extra": "mean: 6.8157483870967255 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.1137509482647,
            "unit": "iter/sec",
            "range": "stddev: 0.0002598748906325984",
            "extra": "mean: 4.805064516128929 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.06446006129386,
            "unit": "iter/sec",
            "range": "stddev: 0.00016265110811890251",
            "extra": "mean: 3.0763129251701056 msec\nrounds: 294"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.705442627059167,
            "unit": "iter/sec",
            "range": "stddev: 0.002569558909425954",
            "extra": "mean: 72.96371428571469 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.34133813621511,
            "unit": "iter/sec",
            "range": "stddev: 0.0021424848621674247",
            "extra": "mean: 74.95499999999973 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.16306829119347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003380825149949521",
            "extra": "mean: 5.8767158469941245 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.88097466312442,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084152083388184",
            "extra": "mean: 4.050534883720895 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 488.66915712425225,
            "unit": "iter/sec",
            "range": "stddev: 0.00013522579245061554",
            "extra": "mean: 2.046374291115192 msec\nrounds: 529"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 469.33280636316897,
            "unit": "iter/sec",
            "range": "stddev: 0.00006982049916131899",
            "extra": "mean: 2.130684210526297 msec\nrounds: 494"
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
          "id": "45f0d204159e09f08b9f6a8fc0b574006fd92d13",
          "message": "Merge pull request #440 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.13",
          "timestamp": "2022-02-11T14:15:34Z",
          "tree_id": "46c7a68ecb2770f9dc0223b3a64ca0da8ce60646"
        },
        "date": 1644598697751,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.2469293566525,
            "unit": "iter/sec",
            "range": "stddev: 0.00034395355197903516",
            "extra": "mean: 7.920984732824359 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9545077159176,
            "unit": "iter/sec",
            "range": "stddev: 0.00034048124942957103",
            "extra": "mean: 6.624512345679053 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.80108528607772,
            "unit": "iter/sec",
            "range": "stddev: 0.00048599840864299826",
            "extra": "mean: 5.1599298245614005 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.8351805505988,
            "unit": "iter/sec",
            "range": "stddev: 0.00023164427507585078",
            "extra": "mean: 3.196571428571337 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.56350740878965,
            "unit": "iter/sec",
            "range": "stddev: 0.0005395364772937975",
            "extra": "mean: 9.211198347107167 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.87921624058782,
            "unit": "iter/sec",
            "range": "stddev: 0.0003281740376172262",
            "extra": "mean: 6.902301282051322 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.56358219371685,
            "unit": "iter/sec",
            "range": "stddev: 0.00018133164898236678",
            "extra": "mean: 4.912470046083055 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.8801738138064,
            "unit": "iter/sec",
            "range": "stddev: 0.00023898114689647907",
            "extra": "mean: 3.2270538243626286 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.568205430383472,
            "unit": "iter/sec",
            "range": "stddev: 0.0026349856350082173",
            "extra": "mean: 73.7017142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.322485024099352,
            "unit": "iter/sec",
            "range": "stddev: 0.0025071613572774753",
            "extra": "mean: 75.06107142857184 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.22985856911467,
            "unit": "iter/sec",
            "range": "stddev: 0.00047761117529362333",
            "extra": "mean: 6.0890267379677425 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.66059200879147,
            "unit": "iter/sec",
            "range": "stddev: 0.00034728143268781034",
            "extra": "mean: 4.190050781249899 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 470.7724948666205,
            "unit": "iter/sec",
            "range": "stddev: 0.00011022072955823767",
            "extra": "mean: 2.1241682785297824 msec\nrounds: 517"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.1569078749723,
            "unit": "iter/sec",
            "range": "stddev: 0.00011626028353811599",
            "extra": "mean: 2.2214476386036988 msec\nrounds: 487"
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
          "id": "da36b8c0c7f4ae05ef9336f868d9b4efe977c512",
          "message": "Merge pull request #442 from TeoZosa/dependabot/pip/sentry-sdk-1.5.5",
          "timestamp": "2022-02-11T15:38:09Z",
          "tree_id": "096ba26af60b4b08ed4519909c022a46052f53b8"
        },
        "date": 1644601107322,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.71429172994807,
            "unit": "iter/sec",
            "range": "stddev: 0.0004368512773443796",
            "extra": "mean: 8.284023255813954 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.79459155870273,
            "unit": "iter/sec",
            "range": "stddev: 0.000324878500753048",
            "extra": "mean: 6.587850000000001 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.0436774571264,
            "unit": "iter/sec",
            "range": "stddev: 0.0004579298200823162",
            "extra": "mean: 5.100904109589019 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.80838704634044,
            "unit": "iter/sec",
            "range": "stddev: 0.00014019033232966357",
            "extra": "mean: 3.032063583815086 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.88220514946296,
            "unit": "iter/sec",
            "range": "stddev: 0.0008089581105873695",
            "extra": "mean: 9.444457627118771 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.3530669807493,
            "unit": "iter/sec",
            "range": "stddev: 0.0004744850920655119",
            "extra": "mean: 6.975783783783913 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.43678054625641,
            "unit": "iter/sec",
            "range": "stddev: 0.0002845106790574327",
            "extra": "mean: 5.039388349514651 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.9023863476041,
            "unit": "iter/sec",
            "range": "stddev: 0.00036209271606322163",
            "extra": "mean: 3.522337423312889 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.685382754712158,
            "unit": "iter/sec",
            "range": "stddev: 0.006562913696050213",
            "extra": "mean: 85.5769999999998 msec\nrounds: 12"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.766570552628336,
            "unit": "iter/sec",
            "range": "stddev: 0.0025093558387104275",
            "extra": "mean: 78.3295714285716 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.02423801996258,
            "unit": "iter/sec",
            "range": "stddev: 0.0005242525568653214",
            "extra": "mean: 6.6655895953755 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.62008090513547,
            "unit": "iter/sec",
            "range": "stddev: 0.00033634612082804517",
            "extra": "mean: 4.226184000000046 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.1549212364693,
            "unit": "iter/sec",
            "range": "stddev: 0.00017838573952191542",
            "extra": "mean: 2.2514666666669605 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 411.8868012762966,
            "unit": "iter/sec",
            "range": "stddev: 0.00031098175839864754",
            "extra": "mean: 2.4278515283843554 msec\nrounds: 458"
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
          "id": "316940211a09cc1a719e13e04294841f7f434b6c",
          "message": "Merge pull request #443 from TeoZosa/dependabot/pip/importlib-metadata-4.11.0",
          "timestamp": "2022-02-11T15:55:30Z",
          "tree_id": "969b54e0b2d458104a140225882681724a9d9e98"
        },
        "date": 1644601581139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.2107088729915,
            "unit": "iter/sec",
            "range": "stddev: 0.00013272074287097498",
            "extra": "mean: 7.563683823529396 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 163.1286313214777,
            "unit": "iter/sec",
            "range": "stddev: 0.00007273052680200751",
            "extra": "mean: 6.130131736526982 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.09286152203222,
            "unit": "iter/sec",
            "range": "stddev: 0.000264395442639916",
            "extra": "mean: 4.564274678111495 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.83587869675455,
            "unit": "iter/sec",
            "range": "stddev: 0.00017892391316257756",
            "extra": "mean: 3.186378830083526 msec\nrounds: 359"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.01406394838327,
            "unit": "iter/sec",
            "range": "stddev: 0.0005550685609004117",
            "extra": "mean: 9.432710743801742 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.25937317576822,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545640552925716",
            "extra": "mean: 7.029413793103478 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.36276952003922,
            "unit": "iter/sec",
            "range": "stddev: 0.00012842246286211064",
            "extra": "mean: 4.6218672566371515 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.77051851564966,
            "unit": "iter/sec",
            "range": "stddev: 0.00014308479915374774",
            "extra": "mean: 3.032411764705837 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.888104468173594,
            "unit": "iter/sec",
            "range": "stddev: 0.0030896779644180657",
            "extra": "mean: 72.00406666666646 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.909477122884415,
            "unit": "iter/sec",
            "range": "stddev: 0.0012814545650153282",
            "extra": "mean: 71.89342857142782 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.71926043682515,
            "unit": "iter/sec",
            "range": "stddev: 0.0002986050595268368",
            "extra": "mean: 5.857569892472976 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.74926536014783,
            "unit": "iter/sec",
            "range": "stddev: 0.0001849832769914473",
            "extra": "mean: 4.05269696969687 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 482.3555863887657,
            "unit": "iter/sec",
            "range": "stddev: 0.00011999558583850155",
            "extra": "mean: 2.073159362549658 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 459.0791445055307,
            "unit": "iter/sec",
            "range": "stddev: 0.0000937556749327259",
            "extra": "mean: 2.1782736418512094 msec\nrounds: 497"
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
          "id": "10d31257f4488c797bfdddfd116cad1d15285a5e",
          "message": "Merge pull request #444 from TeoZosa/dependabot/pip/myst-parser-0.17.0",
          "timestamp": "2022-02-11T16:09:12Z",
          "tree_id": "30be41e6dcbae795029913bef949ddbe09766eea"
        },
        "date": 1644602066149,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.43727146231782,
            "unit": "iter/sec",
            "range": "stddev: 0.00040288500386075407",
            "extra": "mean: 7.725749999999986 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.4993999980689,
            "unit": "iter/sec",
            "range": "stddev: 0.0004518934890238948",
            "extra": "mean: 6.4725170454545395 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.58942360567872,
            "unit": "iter/sec",
            "range": "stddev: 0.00019195044226652525",
            "extra": "mean: 4.553953389830471 msec\nrounds: 236"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 342.2701813845932,
            "unit": "iter/sec",
            "range": "stddev: 0.00008011799122954177",
            "extra": "mean: 2.9216684782608806 msec\nrounds: 368"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.94060953181351,
            "unit": "iter/sec",
            "range": "stddev: 0.0005380817114059299",
            "extra": "mean: 8.478843749999937 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.9786382265836,
            "unit": "iter/sec",
            "range": "stddev: 0.00034686083204229227",
            "extra": "mean: 6.757732142857058 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2416814109616,
            "unit": "iter/sec",
            "range": "stddev: 0.0001813658770102178",
            "extra": "mean: 4.711609865470813 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.303358097962,
            "unit": "iter/sec",
            "range": "stddev: 0.00010838294138393877",
            "extra": "mean: 3.0183817204301113 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.294113779239865,
            "unit": "iter/sec",
            "range": "stddev: 0.0016572498245441608",
            "extra": "mean: 69.95886666666635 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.846232396895067,
            "unit": "iter/sec",
            "range": "stddev: 0.003053568823932628",
            "extra": "mean: 72.22181250000136 msec\nrounds: 16"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.93726795908037,
            "unit": "iter/sec",
            "range": "stddev: 0.00018850026135888096",
            "extra": "mean: 5.683844086021506 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 248.22559615062087,
            "unit": "iter/sec",
            "range": "stddev: 0.0001856741083599741",
            "extra": "mean: 4.028593406592967 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.36635601855215,
            "unit": "iter/sec",
            "range": "stddev: 0.00010508451815696387",
            "extra": "mean: 2.0774198019802186 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 461.42226087754995,
            "unit": "iter/sec",
            "range": "stddev: 0.00011928708278239644",
            "extra": "mean: 2.1672123015871905 msec\nrounds: 504"
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
          "id": "b4277c8ae1cb98a1e5d4b2d2ebbd8da5e372b326",
          "message": "Merge pull request #441 from TeoZosa/dependabot/pip/docs/poetry-1.1.13",
          "timestamp": "2022-02-11T17:27:49Z",
          "tree_id": "9816391172ddcd0a9a553d1adfef650be0c22e07"
        },
        "date": 1644603568194,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.89699397621341,
            "unit": "iter/sec",
            "range": "stddev: 0.0005604292697976577",
            "extra": "mean: 8.136895522388034 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.69258586230663,
            "unit": "iter/sec",
            "range": "stddev: 0.00038199718986832307",
            "extra": "mean: 6.680357575757565 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.46041717568426,
            "unit": "iter/sec",
            "range": "stddev: 0.0003116272523986817",
            "extra": "mean: 4.706759090909138 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.00739872705185,
            "unit": "iter/sec",
            "range": "stddev: 0.00021898014094399586",
            "extra": "mean: 3.1445809248554863 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.20904198331964,
            "unit": "iter/sec",
            "range": "stddev: 0.0006974809332187426",
            "extra": "mean: 9.24137190082645 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.99347231332825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007580232506013215",
            "extra": "mean: 7.3532941176470965 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.0176754654185,
            "unit": "iter/sec",
            "range": "stddev: 0.00039853610072850763",
            "extra": "mean: 4.974686915887813 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 309.45000054769304,
            "unit": "iter/sec",
            "range": "stddev: 0.00027046135366001983",
            "extra": "mean: 3.231539823008913 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.723404776725166,
            "unit": "iter/sec",
            "range": "stddev: 0.0018880933882772432",
            "extra": "mean: 72.86821428571396 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.772207684891752,
            "unit": "iter/sec",
            "range": "stddev: 0.002335547687373962",
            "extra": "mean: 72.61000000000071 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.89095658099743,
            "unit": "iter/sec",
            "range": "stddev: 0.00047394961357295057",
            "extra": "mean: 5.886128491620087 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.52588988944393,
            "unit": "iter/sec",
            "range": "stddev: 0.00020436505010362651",
            "extra": "mean: 4.089546511627559 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.75990031247505,
            "unit": "iter/sec",
            "range": "stddev: 0.00009197756124482681",
            "extra": "mean: 2.084375954198516 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 458.7397585630282,
            "unit": "iter/sec",
            "range": "stddev: 0.00008789448653425805",
            "extra": "mean: 2.179885177453189 msec\nrounds: 479"
          }
        ]
      }
    ]
  }
}