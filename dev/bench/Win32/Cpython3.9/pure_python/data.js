window.BENCHMARK_DATA = {
  "lastUpdate": 1644937717346,
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
        "date": 1642085281220,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.18032786885244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005813010404721279",
            "extra": "mean: 11.213235294117647 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.31531531531533,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793332",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.1780821917808,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738944131173322",
            "extra": "mean: 4.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.21052631578948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005379143536399198",
            "extra": "mean: 11.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.66666666666669,
            "unit": "iter/sec",
            "range": "stddev: 0.0006378879538497858",
            "extra": "mean: 9.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.22112211221125,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696334",
            "extra": "mean: 4.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.7681159420289,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026186",
            "extra": "mean: 2.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 100 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.847457627118644,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 92.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.97900262467192,
            "unit": "iter/sec",
            "range": "stddev: 0.00015537951968933657",
            "extra": "mean: 5.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.23744292237444,
            "unit": "iter/sec",
            "range": "stddev: 0.00052833144387149",
            "extra": "mean: 3.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 788.9655172413792,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763992459331404",
            "extra": "mean: 1.2674825174825175 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 761.904761904762,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684119",
            "extra": "mean: 1.3124999999999998 msec\nrounds: 10"
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
        "date": 1642431790360,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.972972972973,
            "unit": "iter/sec",
            "range": "stddev: 0.0004658474953124563",
            "extra": "mean: 5.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.093023255814,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 2.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 761.904761904762,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684119",
            "extra": "mean: 1.3124999999999998 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.6122448979592,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359876",
            "extra": "mean: 7.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.66666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.859375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.59116022099454,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 695.9223300970873,
            "unit": "iter/sec",
            "range": "stddev: 0.00006738921477952675",
            "extra": "mean: 1.4369419642857144 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.382022471910116,
            "unit": "iter/sec",
            "range": "stddev: 0.0011048543456039798",
            "extra": "mean: 69.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.953271028037385,
            "unit": "iter/sec",
            "range": "stddev: 0.00065880784586841",
            "extra": "mean: 66.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.86206896551727,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 3.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.61194029850736,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1321.4814814814815,
            "unit": "iter/sec",
            "range": "stddev: 0.000029542952729525212",
            "extra": "mean: 756.7264573991031 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1075.6302521008404,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 929.6875 usec\nrounds: 10"
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
        "date": 1642432943674,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.2857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.00032940392293420576",
            "extra": "mean: 8.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.88290398126463,
            "unit": "iter/sec",
            "range": "stddev: 0.00018117215761381355",
            "extra": "mean: 6.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 313.72549019607845,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 3.1875000000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.7657657657658,
            "unit": "iter/sec",
            "range": "stddev: 0.0000791917148713095",
            "extra": "mean: 1.548549107142857 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.30434782608697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677572",
            "extra": "mean: 8.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.73799126637553,
            "unit": "iter/sec",
            "range": "stddev: 0.0001232516621479085",
            "extra": "mean: 7.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2962962962963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 576.5765765765765,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494105884401309",
            "extra": "mean: 1.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.531531531531531,
            "unit": "iter/sec",
            "range": "stddev: 0.005764568651348608",
            "extra": "mean: 86.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 81.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 223.77622377622376,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439047",
            "extra": "mean: 4.468750000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 397.51552795031057,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697227",
            "extra": "mean: 2.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1122.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 925.0909090909091,
            "unit": "iter/sec",
            "range": "stddev: 0.0001035861392874862",
            "extra": "mean: 1.0809748427672956 msec\nrounds: 10"
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
        "date": 1642433986232,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.45308924485124,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 6.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 187.13450292397664,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684093",
            "extra": "mean: 5.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.2439024390244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 816.3265306122449,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270462766947303",
            "extra": "mean: 1.2249999999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.0449678800857,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 7.296874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 176.79558011049724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 5.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.7142857142858,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355139",
            "extra": "mean: 2.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 724.0404040404039,
            "unit": "iter/sec",
            "range": "stddev: 0.00004411659682154545",
            "extra": "mean: 1.381138392857143 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.645308924485127,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 68.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.238095238095237,
            "unit": "iter/sec",
            "range": "stddev: 0.0007365695637359876",
            "extra": "mean: 65.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.4444444444444,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 3.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.3076923076924,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 2.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1338.9121338912137,
            "unit": "iter/sec",
            "range": "stddev: 0.000012325166214790878",
            "extra": "mean: 746.875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438595,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1643746682908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.31531531531532,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793332",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.12471655328798,
            "unit": "iter/sec",
            "range": "stddev: 0.0005484847340375322",
            "extra": "mean: 6.890625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 323.23232323232327,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 3.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.6666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007352766136924241",
            "extra": "mean: 1.46484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.61061946902655,
            "unit": "iter/sec",
            "range": "stddev: 0.0003972416871214206",
            "extra": "mean: 9.292763157894736 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435838411676064",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 303.3175355450237,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586665",
            "extra": "mean: 3.296875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 598.1308411214953,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227383",
            "extra": "mean: 1.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.19047619047619,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 82.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.549019607843137,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 79.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.4322344322344,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 4.265625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.3006535947713,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.3119266055046,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 851.5625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 937.5438596491229,
            "unit": "iter/sec",
            "range": "stddev: 0.000048315660506579485",
            "extra": "mean: 1.0666167664670658 msec\nrounds: 10"
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
        "date": 1643755445250,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.48648648648648,
            "unit": "iter/sec",
            "range": "stddev: 0.00032940392293420663",
            "extra": "mean: 11.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.34482758620692,
            "unit": "iter/sec",
            "range": "stddev: 0.0004034357652299387",
            "extra": "mean: 9.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.76510067114094,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 4.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 460.431654676259,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697212",
            "extra": "mean: 2.171875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 80.00000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0.00062067040804606",
            "extra": "mean: 12.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 106.66666666666669,
            "unit": "iter/sec",
            "range": "stddev: 0.00036828478186799344",
            "extra": "mean: 9.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.8216560509554,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736826",
            "extra": "mean: 4.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 438.35616438356163,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736824",
            "extra": "mean: 2.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.32258064516129,
            "unit": "iter/sec",
            "range": "stddev: 0.008398185154477655",
            "extra": "mean: 96.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 95.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.60099750623442,
            "unit": "iter/sec",
            "range": "stddev: 0.0000494105884401307",
            "extra": "mean: 6.265625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.59276018099547,
            "unit": "iter/sec",
            "range": "stddev: 0.00015537951968933657",
            "extra": "mean: 3.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 832,
            "unit": "iter/sec",
            "range": "stddev: 0.00007284382284382283",
            "extra": "mean: 1.201923076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 720.7207207207209,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095577652469336",
            "extra": "mean: 1.3874999999999997 msec\nrounds: 10"
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
        "date": 1643755743379,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.22222222222223,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359876",
            "extra": "mean: 7.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.5072463768116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355116",
            "extra": "mean: 5.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.87878787878793,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039805",
            "extra": "mean: 2.578125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2456293706293708 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.77263581488933,
            "unit": "iter/sec",
            "range": "stddev: 0.0001482317653203929",
            "extra": "mean: 7.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.04301075268816,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 5.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.54189944134083,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886947206558666",
            "extra": "mean: 2.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 689.2307692307692,
            "unit": "iter/sec",
            "range": "stddev: 0.00007204210093391769",
            "extra": "mean: 1.4508928571428572 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.746543778801843,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598829",
            "extra": "mean: 67.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.274463007159902,
            "unit": "iter/sec",
            "range": "stddev: 0.000494105884401312",
            "extra": "mean: 65.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.5042735042735,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439067",
            "extra": "mean: 3.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.203007518797,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1370.4496788008569,
            "unit": "iter/sec",
            "range": "stddev: 0.000018117215761381356",
            "extra": "mean: 729.6875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1057.8512396694216,
            "unit": "iter/sec",
            "range": "stddev: 0.00013999666724703766",
            "extra": "mean: 945.3125 usec\nrounds: 10"
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
        "date": 1643757482321,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.83720930232556,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 6.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 185.50724637681162,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355116",
            "extra": "mean: 5.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.69822485207106,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.0792079207921,
            "unit": "iter/sec",
            "range": "stddev: 0.00003952847075210471",
            "extra": "mean: 1.2625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.8202247191011,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 6.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.2729805013928,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 5.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.59116022099454,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.8,
            "unit": "iter/sec",
            "range": "stddev: 0.00006576513961928452",
            "extra": "mean: 1.3950892857142858 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.988290398126464,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227381",
            "extra": "mean: 66.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.724815724815723,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306973",
            "extra": "mean: 63.59374999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 286.99551569506724,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 3.484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1311.4754098360659,
            "unit": "iter/sec",
            "range": "stddev: 0.000012325166214790878",
            "extra": "mean: 762.5 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1084.7457627118642,
            "unit": "iter/sec",
            "range": "stddev: 0.0000329403922934206",
            "extra": "mean: 921.875 usec\nrounds: 10"
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
        "date": 1643757979254,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 150.58823529411765,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 6.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.58892128279885,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 5.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.8787878787879,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 2.578125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.0000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.46952595936796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 6.921875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.2816901408451,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 365.7142857142858,
            "unit": "iter/sec",
            "range": "stddev: 0.00015184770559492966",
            "extra": "mean: 2.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.7207207207209,
            "unit": "iter/sec",
            "range": "stddev: 0.000039528470752104776",
            "extra": "mean: 1.3874999999999997 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.347721822541965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 65.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.880893300248138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055306973",
            "extra": "mean: 62.96875000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 292.23744292237444,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 3.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.5901639344262,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 1.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1319.5876288659795,
            "unit": "iter/sec",
            "range": "stddev: 0.000008235098073355162",
            "extra": "mean: 757.8125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1643758724954,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 88.07339449541283,
            "unit": "iter/sec",
            "range": "stddev: 0.0005912981377057781",
            "extra": "mean: 11.354166666666664 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.31531531531533,
            "unit": "iter/sec",
            "range": "stddev: 0.0002470529422006543",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.04693140794222,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422738",
            "extra": "mean: 4.328125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.1240310077519,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.015625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 87.27272727272727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006944444444444449",
            "extra": "mean: 11.458333333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.30434782608697,
            "unit": "iter/sec",
            "range": "stddev: 0.0005524271728019899",
            "extra": "mean: 8.984375000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.9312714776632,
            "unit": "iter/sec",
            "range": "stddev: 0.00013681172433920507",
            "extra": "mean: 4.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 457.14285714285705,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666662",
            "extra": "mean: 2.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.24,
            "unit": "iter/sec",
            "range": "stddev: 0.005524271728019903",
            "extra": "mean: 97.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.666666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 93.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.58176943699732,
            "unit": "iter/sec",
            "range": "stddev: 0.00018117215761381355",
            "extra": "mean: 5.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.9308755760369,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696334",
            "extra": "mean: 3.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 847.4074074074073,
            "unit": "iter/sec",
            "range": "stddev: 0.00008618997353000605",
            "extra": "mean: 1.18006993006993 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 720.7207207207209,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095577652469336",
            "extra": "mean: 1.3874999999999997 msec\nrounds: 10"
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
        "date": 1643759263907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.7909604519774,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 5.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.5421686746988,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 808.7272727272729,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.2365107913669064 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.68724279835394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 7.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 170.66666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 5.859375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 357.5418994413409,
            "unit": "iter/sec",
            "range": "stddev: 0.0000886947206558666",
            "extra": "mean: 2.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 702.7450980392156,
            "unit": "iter/sec",
            "range": "stddev: 0.0000882331936430909",
            "extra": "mean: 1.4229910714285714 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.512471655328797,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586666",
            "extra": "mean: 68.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.918414918414916,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586666",
            "extra": "mean: 67.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 277.056277056277,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697208",
            "extra": "mean: 3.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.768115942029,
            "unit": "iter/sec",
            "range": "stddev: 0.00029278061088656656",
            "extra": "mean: 2.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.368421052632,
            "unit": "iter/sec",
            "range": "stddev: 0.000011048543456039815",
            "extra": "mean: 742.1875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438595,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1643760326297,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.78899082568807,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736826",
            "extra": "mean: 6.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 193.3534743202417,
            "unit": "iter/sec",
            "range": "stddev: 0.00022642776165921006",
            "extra": "mean: 5.171875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.2439024390244,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.3271028037382,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278036402312586",
            "extra": "mean: 1.1691433566433567 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.04496788008566,
            "unit": "iter/sec",
            "range": "stddev: 0.000233505330952707",
            "extra": "mean: 7.296874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.27298050139277,
            "unit": "iter/sec",
            "range": "stddev: 0.000214112549907234",
            "extra": "mean: 5.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2335329341318,
            "unit": "iter/sec",
            "range": "stddev: 0.00014823176532039278",
            "extra": "mean: 2.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 769.2307692307694,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454972243679022",
            "extra": "mean: 1.3 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.384615384615381,
            "unit": "iter/sec",
            "range": "stddev: 0.0018340434230894825",
            "extra": "mean: 65 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.920398009950251,
            "unit": "iter/sec",
            "range": "stddev: 0.0019207384286026846",
            "extra": "mean: 62.81249999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.9308755760369,
            "unit": "iter/sec",
            "range": "stddev: 0.00018117215761381342",
            "extra": "mean: 3.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1412.8035320088304,
            "unit": "iter/sec",
            "range": "stddev: 0.00002760907975145536",
            "extra": "mean: 707.8125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1153.153153153153,
            "unit": "iter/sec",
            "range": "stddev: 0.00002470529422006545",
            "extra": "mean: 867.1875 usec\nrounds: 10"
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
        "date": 1643761643387,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 149.53271028037383,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 6.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.046511627907,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598747",
            "extra": "mean: 5.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2335329341318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.3137254901962,
            "unit": "iter/sec",
            "range": "stddev: 0.000052704627669472945",
            "extra": "mean: 1.2750000000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 143.4977578475336,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 6.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 175.34246575342468,
            "unit": "iter/sec",
            "range": "stddev: 0.0003314563036811942",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 355.55555555555566,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359866",
            "extra": "mean: 2.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 702.7450980392156,
            "unit": "iter/sec",
            "range": "stddev: 0.000058822129095393935",
            "extra": "mean: 1.4229910714285714 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.347721822541963,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 65.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.920398009950247,
            "unit": "iter/sec",
            "range": "stddev: 0.00065880784586841",
            "extra": "mean: 62.81249999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 285.71428571428567,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1290.3225806451615,
            "unit": "iter/sec",
            "range": "stddev: 0.000025727268823392633",
            "extra": "mean: 775 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1094.0170940170938,
            "unit": "iter/sec",
            "range": "stddev: 0.000037737960276534974",
            "extra": "mean: 914.0625 usec\nrounds: 10"
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
        "date": 1643775442171,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 141.5929203539823,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 7.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.7909604519774,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439069",
            "extra": "mean: 5.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2335329341318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 773.5652173913045,
            "unit": "iter/sec",
            "range": "stddev: 0.000059245309880253",
            "extra": "mean: 1.2927158273381294 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.2929292929293,
            "unit": "iter/sec",
            "range": "stddev: 0.00027804891281331563",
            "extra": "mean: 7.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 172.5067385444744,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 5.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 359.55056179775283,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 2.78125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.2857142857144,
            "unit": "iter/sec",
            "range": "stddev: 0.00005270462766947303",
            "extra": "mean: 1.4 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.611872146118724,
            "unit": "iter/sec",
            "range": "stddev: 0.0025301995419773162",
            "extra": "mean: 68.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.384615384615381,
            "unit": "iter/sec",
            "range": "stddev: 0.0010925092168439106",
            "extra": "mean: 65 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 290.9090909090909,
            "unit": "iter/sec",
            "range": "stddev: 0.00016470196146710315",
            "extra": "mean: 3.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039815",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1333.3333333333335,
            "unit": "iter/sec",
            "range": "stddev: 0.0000194877988894476",
            "extra": "mean: 750 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.4482758620688,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462546084219539",
            "extra": "mean: 906.2499999999999 usec\nrounds: 10"
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
        "date": 1643775721653,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.7196261682243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031728036871332",
            "extra": "mean: 11.145833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.62616822429908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773796027653503",
            "extra": "mean: 8.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.9503546099291,
            "unit": "iter/sec",
            "range": "stddev: 0.00017738944131173313",
            "extra": "mean: 4.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.9256198347107,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697219",
            "extra": "mean: 1.890625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.9557522123894,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031728036871341",
            "extra": "mean: 11.770833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 108.29103214890019,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 9.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.2211221122112,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696334",
            "extra": "mean: 4.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.5882352941175,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439078",
            "extra": "mean: 2.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.130434782608695,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 89.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.428571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 87.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.66666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00019832742463187278",
            "extra": "mean: 5.859375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.19512195121956,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355139",
            "extra": "mean: 3.2031250000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 913.5042735042736,
            "unit": "iter/sec",
            "range": "stddev: 0.0000887615361199956",
            "extra": "mean: 1.094685628742515 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 809.9115044247785,
            "unit": "iter/sec",
            "range": "stddev: 0.00007374874974984187",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
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
        "date": 1643782166015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 144.46952595936796,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 6.921875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.43804034582132,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 5.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.51552795031057,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.1428571428572,
            "unit": "iter/sec",
            "range": "stddev: 0.0000460704787320568",
            "extra": "mean: 1.223776223776224 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.73684210526315,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 7.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.38692098092642,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 5.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 367.816091954023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.7187500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 716.8,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.3950892857142858 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.849187935034807,
            "unit": "iter/sec",
            "range": "stddev: 0.0008869472065586684",
            "extra": "mean: 67.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.347721822541965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 65.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 283.1858407079646,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 3.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.3076923076924,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666677",
            "extra": "mean: 2.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1385.2813852813856,
            "unit": "iter/sec",
            "range": "stddev: 0.000023058274605394452",
            "extra": "mean: 721.875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1113.0434782608695,
            "unit": "iter/sec",
            "range": "stddev: 0.000041175490366775754",
            "extra": "mean: 898.4374999999999 usec\nrounds: 10"
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
        "date": 1643824132900,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 148.491879350348,
            "unit": "iter/sec",
            "range": "stddev: 0.00023810686355546815",
            "extra": "mean: 6.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 198.14241486068113,
            "unit": "iter/sec",
            "range": "stddev: 0.000105460712142274",
            "extra": "mean: 5.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.63803680981596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.9115044247787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278036402312586",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 136.46055437100216,
            "unit": "iter/sec",
            "range": "stddev: 0.00030768865599462345",
            "extra": "mean: 7.328125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.28169014084511,
            "unit": "iter/sec",
            "range": "stddev: 0.00015184770559492953",
            "extra": "mean: 5.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.54216867469887,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736825",
            "extra": "mean: 2.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 733.9449541284406,
            "unit": "iter/sec",
            "range": "stddev: 0.00007095577652469333",
            "extra": "mean: 1.3625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.814814814814817,
            "unit": "iter/sec",
            "range": "stddev: 0.0026352313834736513",
            "extra": "mean: 67.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.023474178403756,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598757",
            "extra": "mean: 66.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.2608695652174,
            "unit": "iter/sec",
            "range": "stddev: 0.00025515518153991447",
            "extra": "mean: 3.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.54961832061065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1454.545454545455,
            "unit": "iter/sec",
            "range": "stddev: 0.000023292374765622798",
            "extra": "mean: 687.5 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1230.7692307692307,
            "unit": "iter/sec",
            "range": "stddev: 0.00005462546084219539",
            "extra": "mean: 812.5000000000001 usec\nrounds: 10"
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
        "date": 1643830506142,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.7196261682243,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031728036871332",
            "extra": "mean: 11.145833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.43119266055045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793334",
            "extra": "mean: 8.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.39068100358418,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697197",
            "extra": "mean: 4.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.000105460712142274",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 84.95575221238938,
            "unit": "iter/sec",
            "range": "stddev: 0.0005031728036871341",
            "extra": "mean: 11.770833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.3448275862069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462546084219536",
            "extra": "mean: 9.062500000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 219.93127147766322,
            "unit": "iter/sec",
            "range": "stddev: 0.00011529137302697197",
            "extra": "mean: 4.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.5882352941177,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.228070175438596,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 89.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.531531531531531,
            "unit": "iter/sec",
            "range": "stddev: 0.004434736032793334",
            "extra": "mean: 86.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.68286445012788,
            "unit": "iter/sec",
            "range": "stddev: 0.0001368117243392053",
            "extra": "mean: 6.109375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.6923076923077,
            "unit": "iter/sec",
            "range": "stddev: 0.00016137430609197565",
            "extra": "mean: 3.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 890.6666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007639376692811806",
            "extra": "mean: 1.122754491017964 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 802.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.00005642458254964185",
            "extra": "mean: 1.2456293706293708 msec\nrounds: 10"
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
        "date": 1643842954213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 87.27272727272727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006944444444444449",
            "extra": "mean: 11.458333333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.43119266055045,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793334",
            "extra": "mean: 8.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.21582733812943,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 4.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.54961832061065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 81.35593220338984,
            "unit": "iter/sec",
            "range": "stddev: 0.00043920523057894225",
            "extra": "mean: 12.291666666666668 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 107.56302521008405,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793332",
            "extra": "mean: 9.296875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 217.687074829932,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 4.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 429.53020134228194,
            "unit": "iter/sec",
            "range": "stddev: 0.0001719538960335331",
            "extra": "mean: 2.328125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 9.770992366412214,
            "unit": "iter/sec",
            "range": "stddev: 0.004434736032793334",
            "extra": "mean: 102.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10,
            "unit": "iter/sec",
            "range": "stddev: 0.008869472065586668",
            "extra": "mean: 100 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.94845360824743,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 6.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.76190476190476,
            "unit": "iter/sec",
            "range": "stddev: 0.0001473139127471974",
            "extra": "mean: 3.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 824.5045045045044,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806233377810994",
            "extra": "mean: 1.2128496503496504 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 738.0645161290321,
            "unit": "iter/sec",
            "range": "stddev: 0.00018713916926959689",
            "extra": "mean: 1.354895104895105 msec\nrounds: 10"
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
        "date": 1643898918844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 154.96368038740917,
            "unit": "iter/sec",
            "range": "stddev: 0.00014823176532039264",
            "extra": "mean: 6.453125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 198.75776397515529,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435838411676066",
            "extra": "mean: 5.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 415.58441558441564,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 2.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 871.6190476190477,
            "unit": "iter/sec",
            "range": "stddev: 0.000057588098415071",
            "extra": "mean: 1.14729020979021 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 142.85714285714283,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 7 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 189.3491124260355,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 5.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.24390243902445,
            "unit": "iter/sec",
            "range": "stddev: 0.00013176156917368248",
            "extra": "mean: 2.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.7169811320757,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454972243679022",
            "extra": "mean: 1.325 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 15.496368038740918,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227416",
            "extra": "mean: 64.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 16.20253164556962,
            "unit": "iter/sec",
            "range": "stddev: 0.0018414239093399655",
            "extra": "mean: 61.71874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.57798165137615,
            "unit": "iter/sec",
            "range": "stddev: 0.00025301995419773173",
            "extra": "mean: 3.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 520.3252032520325,
            "unit": "iter/sec",
            "range": "stddev: 0.00014823176532039283",
            "extra": "mean: 1.921875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1467.8899082568812,
            "unit": "iter/sec",
            "range": "stddev: 0.00001092509216843906",
            "extra": "mean: 681.25 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438595,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422739",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1643988690745,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.27433628318585,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273035607113691",
            "extra": "mean: 8.828125000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.83720930232556,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757759076995732",
            "extra": "mean: 6.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.6923076923077,
            "unit": "iter/sec",
            "range": "stddev: 0.00014358384116760643",
            "extra": "mean: 3.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 663.7037037037038,
            "unit": "iter/sec",
            "range": "stddev: 0.000058822129095393935",
            "extra": "mean: 1.5066964285714286 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.56302521008404,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764568651348606",
            "extra": "mean: 9.296875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.43355119825705,
            "unit": "iter/sec",
            "range": "stddev: 0.00017195389603353288",
            "extra": "mean: 7.171875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 290.9090909090909,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757759076995732",
            "extra": "mean: 3.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 576.5765765765766,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586662",
            "extra": "mean: 1.734375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.636363636363637,
            "unit": "iter/sec",
            "range": "stddev: 0.00637887953849786",
            "extra": "mean: 85.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.237093690248566,
            "unit": "iter/sec",
            "range": "stddev: 0.0022158382693940283",
            "extra": "mean: 81.71874999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.56140350877195,
            "unit": "iter/sec",
            "range": "stddev: 0.00015184770559492945",
            "extra": "mean: 4.453125000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 400.00000000000006,
            "unit": "iter/sec",
            "range": "stddev: 0.00012757759076995732",
            "extra": "mean: 2.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1132.7433628318586,
            "unit": "iter/sec",
            "range": "stddev: 0.000052730356071136916",
            "extra": "mean: 882.8125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 898.1512605042016,
            "unit": "iter/sec",
            "range": "stddev: 0.00006903675031555217",
            "extra": "mean: 1.1133982035928143 msec\nrounds: 10"
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
        "date": 1643988852842,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.11872146118722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 6.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 184.43804034582132,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055306964",
            "extra": "mean: 5.421875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.8787878787879,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 2.578125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.9115044247787,
            "unit": "iter/sec",
            "range": "stddev: 0.00005278036402312586",
            "extra": "mean: 1.2347027972027973 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 134.45378151260505,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 7.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.44173441734415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 5.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.6363636363637,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.7029702970297,
            "unit": "iter/sec",
            "range": "stddev: 0.00004411659682154545",
            "extra": "mean: 1.4090401785714286 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.645308924485127,
            "unit": "iter/sec",
            "range": "stddev: 0.0007547592055307039",
            "extra": "mean: 68.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.165876777251182,
            "unit": "iter/sec",
            "range": "stddev: 0.000988211768802618",
            "extra": "mean: 65.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.9383259911894,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 3.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.1240310077519,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.015625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1382.2894168466526,
            "unit": "iter/sec",
            "range": "stddev: 0.000010546071214227398",
            "extra": "mean: 723.4375 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1644011633908,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.991452991453,
            "unit": "iter/sec",
            "range": "stddev: 0.0009736671925288418",
            "extra": "mean: 10.753676470588236 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.62616822429905,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273035607113695",
            "extra": "mean: 8.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.5766423357664,
            "unit": "iter/sec",
            "range": "stddev: 0.00018340434230894792",
            "extra": "mean: 4.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.00000000000006,
            "unit": "iter/sec",
            "range": "stddev: 0.00014358384116760649",
            "extra": "mean: 2 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 89.7196261682243,
            "unit": "iter/sec",
            "range": "stddev: 0.0008575756274464216",
            "extra": "mean: 11.145833333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 118.51851851851853,
            "unit": "iter/sec",
            "range": "stddev: 0.00032940392293420647",
            "extra": "mean: 8.4375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.95035460992906,
            "unit": "iter/sec",
            "range": "stddev: 0.0001773894413117332",
            "extra": "mean: 4.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.54961832061065,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 2.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.578512396694215,
            "unit": "iter/sec",
            "range": "stddev: 0.004434736032793334",
            "extra": "mean: 94.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.756302521008404,
            "unit": "iter/sec",
            "range": "stddev: 0.0077689759844668214",
            "extra": "mean: 92.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.34246575342465,
            "unit": "iter/sec",
            "range": "stddev: 0.00022401888716256843",
            "extra": "mean: 5.703125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.23232323232327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435838411676064",
            "extra": "mean: 3.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 883.3057851239669,
            "unit": "iter/sec",
            "range": "stddev: 0.00005311061117117765",
            "extra": "mean: 1.1321107784431137 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00010290907529357056",
            "extra": "mean: 1.3375 msec\nrounds: 10"
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
        "date": 1644244879914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.94202898550725,
            "unit": "iter/sec",
            "range": "stddev: 0.00038836149754806714",
            "extra": "mean: 8.625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.80600461893764,
            "unit": "iter/sec",
            "range": "stddev: 0.00027609079751455385",
            "extra": "mean: 6.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 326.530612244898,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 3.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 676.2264150943397,
            "unit": "iter/sec",
            "range": "stddev: 0.00009754546578963458",
            "extra": "mean: 1.4787946428571428 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.66666666666667,
            "unit": "iter/sec",
            "range": "stddev: 0.00036828478186799344",
            "extra": "mean: 9.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.9691629955947,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736824",
            "extra": "mean: 7.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.57798165137615,
            "unit": "iter/sec",
            "range": "stddev: 0.0003439077920670662",
            "extra": "mean: 3.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 542.3728813559323,
            "unit": "iter/sec",
            "range": "stddev: 0.00020571268393886974",
            "extra": "mean: 1.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.004034357652299392",
            "extra": "mean: 81.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.903225806451614,
            "unit": "iter/sec",
            "range": "stddev: 0.001317615691736823",
            "extra": "mean: 77.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 229.39068100358418,
            "unit": "iter/sec",
            "range": "stddev: 0.00031638213642682164",
            "extra": "mean: 4.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.3006535947713,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422739",
            "extra": "mean: 2.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1174.3119266055046,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434736032793331",
            "extra": "mean: 851.5625 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 954.2857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.00003944957160888691",
            "extra": "mean: 1.0479041916167666 msec\nrounds: 10"
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
        "date": 1644418612625,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 138.22894168466522,
            "unit": "iter/sec",
            "range": "stddev: 0.00043607157685280164",
            "extra": "mean: 7.234375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.30311614730874,
            "unit": "iter/sec",
            "range": "stddev: 0.00010546071214227398",
            "extra": "mean: 5.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.63803680981596,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 823.7037037037039,
            "unit": "iter/sec",
            "range": "stddev: 0.000047396247904202305",
            "extra": "mean: 1.2140287769784173 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.6872427983539,
            "unit": "iter/sec",
            "range": "stddev: 0.0001317615691736826",
            "extra": "mean: 7.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 171.58176943699732,
            "unit": "iter/sec",
            "range": "stddev: 0.00019557274328665212",
            "extra": "mean: 5.828125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 363.6363636363637,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439067",
            "extra": "mean: 2.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 714.2857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.00007905694150420951",
            "extra": "mean: 1.4 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.675213675213676,
            "unit": "iter/sec",
            "range": "stddev: 0.0069017786556156",
            "extra": "mean: 73.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.883720930232558,
            "unit": "iter/sec",
            "range": "stddev: 0.0016470196146710309",
            "extra": "mean: 67.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.18644067796606,
            "unit": "iter/sec",
            "range": "stddev: 0.00029646353064078566",
            "extra": "mean: 3.6875000000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.203007518797,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1364.6055437100215,
            "unit": "iter/sec",
            "range": "stddev: 0.00001553795196893366",
            "extra": "mean: 732.8125 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1103.4482758620688,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 906.2499999999999 usec\nrounds: 10"
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
        "date": 1644419710616,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 146.11872146118722,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 6.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 186.04651162790697,
            "unit": "iter/sec",
            "range": "stddev: 0.00015095184110613973",
            "extra": "mean: 5.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.2335329341318,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547592055307006",
            "extra": "mean: 2.609375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 788.9655172413793,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763992459331404",
            "extra": "mean: 1.2674825174825175 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 135.5932203389831,
            "unit": "iter/sec",
            "range": "stddev: 0.00016137430609197565",
            "extra": "mean: 7.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 173.44173441734415,
            "unit": "iter/sec",
            "range": "stddev: 0.00008869472065586674",
            "extra": "mean: 5.765625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 367.816091954023,
            "unit": "iter/sec",
            "range": "stddev: 0.0000806871530459877",
            "extra": "mean: 2.7187500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.9646017699116,
            "unit": "iter/sec",
            "range": "stddev: 0.000060380736442456043",
            "extra": "mean: 1.4124999999999999 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.446952595936796,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227381",
            "extra": "mean: 69.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 15.130023640661939,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863634411696332",
            "extra": "mean: 66.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 281.9383259911894,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696318",
            "extra": "mean: 3.546875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512,
            "unit": "iter/sec",
            "range": "stddev: 0.00008235098073355162",
            "extra": "mean: 1.953125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1379.3103448275865,
            "unit": "iter/sec",
            "range": "stddev: 0.000016796370308955327",
            "extra": "mean: 725 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1122.8070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.000040343576522993906",
            "extra": "mean: 890.625 usec\nrounds: 10"
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
        "date": 1644539504503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.2857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162583107395431",
            "extra": "mean: 8.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.23474178403754,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 6.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.8730964467006,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422739",
            "extra": "mean: 3.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 682.6666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.0001506868651973553",
            "extra": "mean: 1.46484375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.30434782608697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677572",
            "extra": "mean: 8.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.53271028037383,
            "unit": "iter/sec",
            "range": "stddev: 0.00023058274605394454",
            "extra": "mean: 6.6875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 307.6923076923077,
            "unit": "iter/sec",
            "range": "stddev: 0.00006588078458684112",
            "extra": "mean: 3.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 617.9310344827587,
            "unit": "iter/sec",
            "range": "stddev: 0.00009754546578963458",
            "extra": "mean: 1.6183035714285714 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.307692307692308,
            "unit": "iter/sec",
            "range": "stddev: 0.008398185154477655",
            "extra": "mean: 81.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.981744421906695,
            "unit": "iter/sec",
            "range": "stddev: 0.0010546071214227381",
            "extra": "mean: 77.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.60150375939844,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 4.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 418.30065359477123,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422739",
            "extra": "mean: 2.390625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1153.153153153153,
            "unit": "iter/sec",
            "range": "stddev: 0.00004434736032793331",
            "extra": "mean: 867.1875 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 980.5504587155963,
            "unit": "iter/sec",
            "range": "stddev: 0.00005311061117117765",
            "extra": "mean: 1.0198353293413174 msec\nrounds: 10"
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
        "date": 1644540494170,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 91.42857142857142,
            "unit": "iter/sec",
            "range": "stddev: 0.0005217336509168625",
            "extra": "mean: 10.937500000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 117.43119266055048,
            "unit": "iter/sec",
            "range": "stddev: 0.0004434736032793334",
            "extra": "mean: 8.515625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.14840989399292,
            "unit": "iter/sec",
            "range": "stddev: 0.00014823176532039253",
            "extra": "mean: 4.421875000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 503.93700787401576,
            "unit": "iter/sec",
            "range": "stddev: 0.000105460712142274",
            "extra": "mean: 1.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 85.66929133858268,
            "unit": "iter/sec",
            "range": "stddev: 0.0004439760032533522",
            "extra": "mean: 11.67279411764706 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 111.30434782608697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004117549036677572",
            "extra": "mean: 8.984375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 215.4882154882155,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696334",
            "extra": "mean: 4.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.5882352941175,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439078",
            "extra": "mean: 2.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.130434782608695,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 89.84375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.428571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 87.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.94845360824743,
            "unit": "iter/sec",
            "range": "stddev: 0.0002057126839388698",
            "extra": "mean: 6.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.19512195121956,
            "unit": "iter/sec",
            "range": "stddev: 0.00011048543456039794",
            "extra": "mean: 3.2031250000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 862.3728813559322,
            "unit": "iter/sec",
            "range": "stddev: 0.00004143445571499448",
            "extra": "mean: 1.1595911949685533 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 717.4193548387096,
            "unit": "iter/sec",
            "range": "stddev: 0.00005804831154387613",
            "extra": "mean: 1.393884892086331 msec\nrounds: 10"
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
        "date": 1644597575781,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 93.79310344827586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004746303120352228",
            "extra": "mean: 10.661764705882353 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 120.7547169811321,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462546084219542",
            "extra": "mean: 8.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 224.5614035087719,
            "unit": "iter/sec",
            "range": "stddev: 0.0004495488672300016",
            "extra": "mean: 4.453125000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 524.5901639344263,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 1.90625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 90.56603773584906,
            "unit": "iter/sec",
            "range": "stddev: 0.0007283394778959388",
            "extra": "mean: 11.041666666666666 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.62616822429908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273035607113695",
            "extra": "mean: 8.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 231.88405797101447,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 4.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.1532846715328,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054607121422739",
            "extra": "mean: 2.140625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.40650406504065,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 96.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 95.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.85714285714286,
            "unit": "iter/sec",
            "range": "stddev: 0.00014731391274719723",
            "extra": "mean: 5.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.23232323232327,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790864",
            "extra": "mean: 3.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 898.1512605042018,
            "unit": "iter/sec",
            "range": "stddev: 0.000029587178706665185",
            "extra": "mean: 1.1133982035928143 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00008436856971381908",
            "extra": "mean: 1.3375 msec\nrounds: 10"
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
        "date": 1644600350150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 85.66929133858268,
            "unit": "iter/sec",
            "range": "stddev: 0.0006203571302486693",
            "extra": "mean: 11.67279411764706 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 115.31531531531533,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764568651348606",
            "extra": "mean: 8.671875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.5766423357664,
            "unit": "iter/sec",
            "range": "stddev: 0.00018340434230894792",
            "extra": "mean: 4.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.5882352941177,
            "unit": "iter/sec",
            "range": "stddev: 0.00016796370308955308",
            "extra": "mean: 2.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 83.2,
            "unit": "iter/sec",
            "range": "stddev: 0.0005665919721046054",
            "extra": "mean: 12.01923076923077 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 110.3448275862069,
            "unit": "iter/sec",
            "range": "stddev: 0.0005462546084219536",
            "extra": "mean: 9.062500000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.43003412969279,
            "unit": "iter/sec",
            "range": "stddev: 0.00019557274328665193",
            "extra": "mean: 4.578125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 450.70422535211253,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 2.2187500000000004 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.491803278688524,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 95.3125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.666666666666666,
            "unit": "iter/sec",
            "range": "stddev: 0.005208333333333333",
            "extra": "mean: 93.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.04301075268816,
            "unit": "iter/sec",
            "range": "stddev: 0.0001435838411676066",
            "extra": "mean: 5.8125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 278.26086956521743,
            "unit": "iter/sec",
            "range": "stddev: 0.0002442924874908036",
            "extra": "mean: 3.5937499999999996 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 631.1724137931034,
            "unit": "iter/sec",
            "range": "stddev: 0.00020763684169200502",
            "extra": "mean: 1.5843531468531469 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 707.9646017699116,
            "unit": "iter/sec",
            "range": "stddev: 0.00008436856971381912",
            "extra": "mean: 1.4124999999999999 msec\nrounds: 10"
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
        "date": 1644600750516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 94.60869565217389,
            "unit": "iter/sec",
            "range": "stddev: 0.0004844175337267739",
            "extra": "mean: 10.569852941176471 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 124.27184466019416,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773796027653503",
            "extra": "mean: 8.046875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 240.6015037593985,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 4.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 533.3333333333333,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359871",
            "extra": "mean: 1.875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 91.42857142857143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005490065382236769",
            "extra": "mean: 10.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.62616822429908,
            "unit": "iter/sec",
            "range": "stddev: 0.0003773796027653503",
            "extra": "mean: 8.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.2158273381295,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026176",
            "extra": "mean: 4.34375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 474.074074074074,
            "unit": "iter/sec",
            "range": "stddev: 0.00013278696649981215",
            "extra": "mean: 2.109375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 10.24,
            "unit": "iter/sec",
            "range": "stddev: 0.0041175490366775775",
            "extra": "mean: 97.65625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 10.847457627118644,
            "unit": "iter/sec",
            "range": "stddev: 0.004941058844013093",
            "extra": "mean: 92.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.85714285714286,
            "unit": "iter/sec",
            "range": "stddev: 0.00014731391274719712",
            "extra": "mean: 5.46875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.42553191489367,
            "unit": "iter/sec",
            "range": "stddev: 0.00012325166214790877",
            "extra": "mean: 2.9375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 908.5714285714287,
            "unit": "iter/sec",
            "range": "stddev: 0.00004143445571499448",
            "extra": "mean: 1.10062893081761 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 769.2307692307693,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454972243679022",
            "extra": "mean: 1.3 msec\nrounds: 10"
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
        "date": 1644601217554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 92.20338983050846,
            "unit": "iter/sec",
            "range": "stddev: 0.00038753402698141914",
            "extra": "mean: 10.84558823529412 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.62616822429908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005273035607113695",
            "extra": "mean: 8.359375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 226.95035460992906,
            "unit": "iter/sec",
            "range": "stddev: 0.00020571268393886963",
            "extra": "mean: 4.40625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.9256198347108,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 1.890625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 86.48648648648648,
            "unit": "iter/sec",
            "range": "stddev: 0.0013402957684457491",
            "extra": "mean: 11.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 116.36363636363636,
            "unit": "iter/sec",
            "range": "stddev: 0.00036828478186799344",
            "extra": "mean: 8.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.9965156794425,
            "unit": "iter/sec",
            "range": "stddev: 0.0002660841619675999",
            "extra": "mean: 4.484375000000001 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.61194029850753,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439077",
            "extra": "mean: 2.09375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.531531531531531,
            "unit": "iter/sec",
            "range": "stddev: 0.007768975984466822",
            "extra": "mean: 86.71875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.851851851851851,
            "unit": "iter/sec",
            "range": "stddev: 0.006162583107395434",
            "extra": "mean: 84.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.91304347826087,
            "unit": "iter/sec",
            "range": "stddev: 0.0003019036822122802",
            "extra": "mean: 5.75 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.530612244898,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439078",
            "extra": "mean: 3.0625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 945.8407079646017,
            "unit": "iter/sec",
            "range": "stddev: 0.00007702775096824142",
            "extra": "mean: 1.0572604790419162 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 800.0000000000001,
            "unit": "iter/sec",
            "range": "stddev: 0",
            "extra": "mean: 1.25 msec\nrounds: 10"
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
        "date": 1644602922803,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.73799126637553,
            "unit": "iter/sec",
            "range": "stddev: 0.00016137430609197551",
            "extra": "mean: 7.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 179.7752808988764,
            "unit": "iter/sec",
            "range": "stddev: 0.00010925092168439089",
            "extra": "mean: 5.5625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 378.69822485207106,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941058844013097",
            "extra": "mean: 2.640625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6635514018693,
            "unit": "iter/sec",
            "range": "stddev: 0.00008436856971381908",
            "extra": "mean: 1.3375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.68724279835394,
            "unit": "iter/sec",
            "range": "stddev: 0.00008068715304598792",
            "extra": "mean: 7.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.76127320954907,
            "unit": "iter/sec",
            "range": "stddev: 0.000105460712142274",
            "extra": "mean: 5.890625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.7267759562842,
            "unit": "iter/sec",
            "range": "stddev: 0.00012863634411696318",
            "extra": "mean: 2.859375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 663.7037037037037,
            "unit": "iter/sec",
            "range": "stddev: 0.00011004612691777555",
            "extra": "mean: 1.5066964285714286 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.414414414414415,
            "unit": "iter/sec",
            "range": "stddev: 0.0008068715304598757",
            "extra": "mean: 69.375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.678899082568806,
            "unit": "iter/sec",
            "range": "stddev: 0.0021092142428454767",
            "extra": "mean: 68.125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 278.2608695652174,
            "unit": "iter/sec",
            "range": "stddev: 0.00007365695637359866",
            "extra": "mean: 3.59375 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.203007518797,
            "unit": "iter/sec",
            "range": "stddev: 0.000105460712142274",
            "extra": "mean: 2.078125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1316.8724279835392,
            "unit": "iter/sec",
            "range": "stddev: 0.000025727268823392643",
            "extra": "mean: 759.3750000000001 usec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1032.2580645161288,
            "unit": "iter/sec",
            "range": "stddev: 0.000091702171154474",
            "extra": "mean: 968.75 usec\nrounds: 10"
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
          "id": "0ae7dba7d77af17af5e1f3dbb92be48a22eaae2a",
          "message": "Merge pull request #447 from TeoZosa/dependabot/pip/docs/orjson-3.6.7",
          "timestamp": "2022-02-15T14:18:27Z",
          "tree_id": "b46a944ccecf07e135f14fc357aba558d4f4b371"
        },
        "date": 1644937711769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 87.27272727272727,
            "unit": "iter/sec",
            "range": "stddev: 0.0006944444444444449",
            "extra": "mean: 11.458333333333332 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 112.28070175438597,
            "unit": "iter/sec",
            "range": "stddev: 0.0004034357652299387",
            "extra": "mean: 8.906250000000002 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.68965517241378,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666647",
            "extra": "mean: 4.53125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.3076923076922,
            "unit": "iter/sec",
            "range": "stddev: 0.00010416666666666677",
            "extra": "mean: 2.03125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 82.05128205128204,
            "unit": "iter/sec",
            "range": "stddev: 0.0007030714142818265",
            "extra": "mean: 12.1875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 108.47457627118644,
            "unit": "iter/sec",
            "range": "stddev: 0.0006162583107395431",
            "extra": "mean: 9.21875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.46905537459284,
            "unit": "iter/sec",
            "range": "stddev: 0.00019557274328665212",
            "extra": "mean: 4.796875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 463.7681159420289,
            "unit": "iter/sec",
            "range": "stddev: 0.0000658807845868413",
            "extra": "mean: 2.15625 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.327433628318584,
            "unit": "iter/sec",
            "range": "stddev: 0.0037737960276534996",
            "extra": "mean: 88.28125 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.428571428571429,
            "unit": "iter/sec",
            "range": "stddev: 0.0032940392293420617",
            "extra": "mean: 87.5 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.53926701570683,
            "unit": "iter/sec",
            "range": "stddev: 0.00009882117688026194",
            "extra": "mean: 5.96875 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.6923076923077,
            "unit": "iter/sec",
            "range": "stddev: 0.00014358384116760643",
            "extra": "mean: 3.25 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 863.3962264150942,
            "unit": "iter/sec",
            "range": "stddev: 0.0000763992459331404",
            "extra": "mean: 1.1582167832167831 msec\nrounds: 10"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 753.8983050847459,
            "unit": "iter/sec",
            "range": "stddev: 0.00008867026053806385",
            "extra": "mean: 1.3264388489208634 msec\nrounds: 10"
          }
        ]
      }
    ]
  }
}