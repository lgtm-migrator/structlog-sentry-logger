window.BENCHMARK_DATA = {
  "lastUpdate": 1648608590649,
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
        "date": 1642086153410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.71788192443324,
            "unit": "iter/sec",
            "range": "stddev: 0.001003962084640299",
            "extra": "mean: 8.215719696969712 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.08675164848128,
            "unit": "iter/sec",
            "range": "stddev: 0.0005022302544552979",
            "extra": "mean: 6.532243902439095 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.2759470996732,
            "unit": "iter/sec",
            "range": "stddev: 0.000248568267507949",
            "extra": "mean: 4.71084931506844 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.78838616105946,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572964064380266",
            "extra": "mean: 3.060084269662951 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.29013372084908,
            "unit": "iter/sec",
            "range": "stddev: 0.0009024133078182519",
            "extra": "mean: 9.234451612903218 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.44457300553057,
            "unit": "iter/sec",
            "range": "stddev: 0.0008456798819153311",
            "extra": "mean: 7.27566013071874 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.62259990620228,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779834735758871",
            "extra": "mean: 5.416454976303287 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 277.5901787240708,
            "unit": "iter/sec",
            "range": "stddev: 0.00041051172110322744",
            "extra": "mean: 3.6024329268292172 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.937722606550532,
            "unit": "iter/sec",
            "range": "stddev: 0.005977630537316534",
            "extra": "mean: 83.76807142857169 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.827126073241152,
            "unit": "iter/sec",
            "range": "stddev: 0.004557386197212537",
            "extra": "mean: 77.95978571428515 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.86330432549826,
            "unit": "iter/sec",
            "range": "stddev: 0.0009490180486284628",
            "extra": "mean: 6.3749772727275715 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.2287046521418,
            "unit": "iter/sec",
            "range": "stddev: 0.0004339468061484904",
            "extra": "mean: 4.420305555555559 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 441.5029962193612,
            "unit": "iter/sec",
            "range": "stddev: 0.0003333112348584656",
            "extra": "mean: 2.2649902912621434 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 411.7096504916066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003207448004127331",
            "extra": "mean: 2.4288961864409506 msec\nrounds: 472"
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
        "date": 1642435861874,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.4775002341461,
            "unit": "iter/sec",
            "range": "stddev: 0.0004190384316071907",
            "extra": "mean: 8.231977099236605 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.66907066926896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003802245138822565",
            "extra": "mean: 6.818070063694257 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4811105926799,
            "unit": "iter/sec",
            "range": "stddev: 0.0003158545980458098",
            "extra": "mean: 4.890427272727256 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.1852876101031,
            "unit": "iter/sec",
            "range": "stddev: 0.00013771477658376636",
            "extra": "mean: 3.20322590361442 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.03976577693224,
            "unit": "iter/sec",
            "range": "stddev: 0.0008123288092595146",
            "extra": "mean: 9.255851239669308 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.07622466765372,
            "unit": "iter/sec",
            "range": "stddev: 0.0011868947698222526",
            "extra": "mean: 7.687800000000091 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.9911513185443,
            "unit": "iter/sec",
            "range": "stddev: 0.0004306979894108163",
            "extra": "mean: 5.050730769230785 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.6294825224392,
            "unit": "iter/sec",
            "range": "stddev: 0.00024153972812939533",
            "extra": "mean: 3.304370716510915 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.273149083062474,
            "unit": "iter/sec",
            "range": "stddev: 0.001899265544858845",
            "extra": "mean: 75.34007142857112 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.091440909443534,
            "unit": "iter/sec",
            "range": "stddev: 0.0029680798812222677",
            "extra": "mean: 76.38578571428667 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.65289582179705,
            "unit": "iter/sec",
            "range": "stddev: 0.00044995677094454876",
            "extra": "mean: 6.263588235293834 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.50744600937514,
            "unit": "iter/sec",
            "range": "stddev: 0.0001844485509388254",
            "extra": "mean: 4.175235537190174 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.3263692697896,
            "unit": "iter/sec",
            "range": "stddev: 0.0001346337843496333",
            "extra": "mean: 2.191414012738719 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.4184727643763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002478335316571828",
            "extra": "mean: 2.367320712694771 msec\nrounds: 449"
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
        "date": 1643747055936,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.3005257508907,
            "unit": "iter/sec",
            "range": "stddev: 0.00040069449521311666",
            "extra": "mean: 8.312515625000051 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.25859884369726,
            "unit": "iter/sec",
            "range": "stddev: 0.000655503831261696",
            "extra": "mean: 7.448312500000031 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.33171619608143,
            "unit": "iter/sec",
            "range": "stddev: 0.0003701638017670306",
            "extra": "mean: 5.093420560747682 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 283.5333864683693,
            "unit": "iter/sec",
            "range": "stddev: 0.0003700159671946475",
            "extra": "mean: 3.5269215116279047 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.11281770896811,
            "unit": "iter/sec",
            "range": "stddev: 0.0008235415363120435",
            "extra": "mean: 9.423932203390025 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 128.06651792364855,
            "unit": "iter/sec",
            "range": "stddev: 0.001061529473772615",
            "extra": "mean: 7.808442176870819 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.04059224962248,
            "unit": "iter/sec",
            "range": "stddev: 0.0012839387763252605",
            "extra": "mean: 5.585325581395404 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 299.2042833455265,
            "unit": "iter/sec",
            "range": "stddev: 0.00021482184818179807",
            "extra": "mean: 3.3421981424148997 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.509914347142935,
            "unit": "iter/sec",
            "range": "stddev: 0.0031173446399776505",
            "extra": "mean: 74.01971428571485 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.209852478818268,
            "unit": "iter/sec",
            "range": "stddev: 0.008550764369470117",
            "extra": "mean: 81.9010714285702 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.85808588846112,
            "unit": "iter/sec",
            "range": "stddev: 0.0007774764530300033",
            "extra": "mean: 6.416093167701571 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 213.40964769041182,
            "unit": "iter/sec",
            "range": "stddev: 0.0005039765305058508",
            "extra": "mean: 4.6858237704917425 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.06215253922716,
            "unit": "iter/sec",
            "range": "stddev: 0.0002336363078419547",
            "extra": "mean: 2.2468771929823026 msec\nrounds: 513"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 399.4479716822169,
            "unit": "iter/sec",
            "range": "stddev: 0.000429067113308876",
            "extra": "mean: 2.5034549450549113 msec\nrounds: 455"
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
        "date": 1643756496624,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.41818054884268,
            "unit": "iter/sec",
            "range": "stddev: 0.0009136129489083071",
            "extra": "mean: 8.444649253731278 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.4951606097918,
            "unit": "iter/sec",
            "range": "stddev: 0.0006680655615184877",
            "extra": "mean: 7.067379518072349 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.96404375867976,
            "unit": "iter/sec",
            "range": "stddev: 0.0006315519423991279",
            "extra": "mean: 5.102976958525369 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.8098163150276,
            "unit": "iter/sec",
            "range": "stddev: 0.00047380070645818055",
            "extra": "mean: 3.438673469387715 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.7167432484451,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964252265341561",
            "extra": "mean: 9.831223140495965 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.49159285536723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005979751242794838",
            "extra": "mean: 7.117863636363468 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.4194669306797,
            "unit": "iter/sec",
            "range": "stddev: 0.0005191810440277945",
            "extra": "mean: 5.4224210526315195 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 292.5270909253099,
            "unit": "iter/sec",
            "range": "stddev: 0.0004595723177765789",
            "extra": "mean: 3.4184868035190874 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.5961006383369,
            "unit": "iter/sec",
            "range": "stddev: 0.001436378927398914",
            "extra": "mean: 73.55050000000014 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.53869081737945,
            "unit": "iter/sec",
            "range": "stddev: 0.0061877875237895535",
            "extra": "mean: 79.75314285714218 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 138.26881300833617,
            "unit": "iter/sec",
            "range": "stddev: 0.0010566768531310373",
            "extra": "mean: 7.232288888888563 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 221.76937033215623,
            "unit": "iter/sec",
            "range": "stddev: 0.000557128610158798",
            "extra": "mean: 4.509188976377778 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.8507246990719,
            "unit": "iter/sec",
            "range": "stddev: 0.00016988835513822662",
            "extra": "mean: 2.268341513292527 msec\nrounds: 489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 417.96464875028016,
            "unit": "iter/sec",
            "range": "stddev: 0.00029546365658813877",
            "extra": "mean: 2.3925468409589503 msec\nrounds: 459"
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
        "date": 1643756795516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.84894534859517,
            "unit": "iter/sec",
            "range": "stddev: 0.00026837546001320917",
            "extra": "mean: 7.883392307692331 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.51365729762188,
            "unit": "iter/sec",
            "range": "stddev: 0.0005977363165071295",
            "extra": "mean: 6.600065088757486 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.73565490938273,
            "unit": "iter/sec",
            "range": "stddev: 0.0004233857738459288",
            "extra": "mean: 4.722870129870067 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.5146635915351,
            "unit": "iter/sec",
            "range": "stddev: 0.00013192535113512623",
            "extra": "mean: 2.9367310924370393 msec\nrounds: 357"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.33394221017878,
            "unit": "iter/sec",
            "range": "stddev: 0.0003685794153300651",
            "extra": "mean: 8.595943548386893 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.47095150061088,
            "unit": "iter/sec",
            "range": "stddev: 0.00032047716363033183",
            "extra": "mean: 6.690263157894683 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.17368127003306,
            "unit": "iter/sec",
            "range": "stddev: 0.00031055137577313445",
            "extra": "mean: 4.897790909090945 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.6374257522493,
            "unit": "iter/sec",
            "range": "stddev: 0.00010000275362776814",
            "extra": "mean: 3.0614985337243272 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.129539619229128,
            "unit": "iter/sec",
            "range": "stddev: 0.0012502116392257203",
            "extra": "mean: 70.7737142857141 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.088263912630355,
            "unit": "iter/sec",
            "range": "stddev: 0.0016937896844763604",
            "extra": "mean: 70.981066666666 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.32124760125447,
            "unit": "iter/sec",
            "range": "stddev: 0.0002437886493656915",
            "extra": "mean: 5.7038152173909396 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.79716769692152,
            "unit": "iter/sec",
            "range": "stddev: 0.00024951110713227414",
            "extra": "mean: 3.971450549450426 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 457.8128124441129,
            "unit": "iter/sec",
            "range": "stddev: 0.00017682380800499456",
            "extra": "mean: 2.184298850574598 msec\nrounds: 522"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 430.18462089978067,
            "unit": "iter/sec",
            "range": "stddev: 0.0003075654549859087",
            "extra": "mean: 2.3245833333334533 msec\nrounds: 468"
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
        "date": 1643758889976,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.83441657115903,
            "unit": "iter/sec",
            "range": "stddev: 0.000443103713848174",
            "extra": "mean: 8.275787878787852 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9130475855923,
            "unit": "iter/sec",
            "range": "stddev: 0.0005300335514184938",
            "extra": "mean: 6.900689873417741 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.0432900553699,
            "unit": "iter/sec",
            "range": "stddev: 0.00031298646846384976",
            "extra": "mean: 5.02403271028036 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 327.0984115048428,
            "unit": "iter/sec",
            "range": "stddev: 0.0001089191095282248",
            "extra": "mean: 3.0571839080459573 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 102.58838383838543,
            "unit": "iter/sec",
            "range": "stddev: 0.0006981068668997191",
            "extra": "mean: 9.747692307692157 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.52662751880058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004818787398648226",
            "extra": "mean: 7.433472602739903 msec\nrounds: 146"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.6217331919433,
            "unit": "iter/sec",
            "range": "stddev: 0.00026766321437504556",
            "extra": "mean: 5.085907766990306 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.7950308200856,
            "unit": "iter/sec",
            "range": "stddev: 0.00018546808902758405",
            "extra": "mean: 3.3807194029849676 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.934208301729202,
            "unit": "iter/sec",
            "range": "stddev: 0.0017251990122506588",
            "extra": "mean: 77.3143571428572 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.007368674354034,
            "unit": "iter/sec",
            "range": "stddev: 0.001889490519445459",
            "extra": "mean: 76.87949999999992 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.79243704042602,
            "unit": "iter/sec",
            "range": "stddev: 0.00036313434719934933",
            "extra": "mean: 6.180758620689647 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.65118924237865,
            "unit": "iter/sec",
            "range": "stddev: 0.00026316907984000716",
            "extra": "mean: 4.225628458498038 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.87351042161015,
            "unit": "iter/sec",
            "range": "stddev: 0.00011280569573742401",
            "extra": "mean: 2.2377696969698064 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 421.6525472774744,
            "unit": "iter/sec",
            "range": "stddev: 0.0001517190292649757",
            "extra": "mean: 2.3716209150325276 msec\nrounds: 459"
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
        "date": 1643759148965,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.71379725047635,
            "unit": "iter/sec",
            "range": "stddev: 0.00036906658610653503",
            "extra": "mean: 7.830007575757601 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.9584107013213,
            "unit": "iter/sec",
            "range": "stddev: 0.000481373250254515",
            "extra": "mean: 6.495260606060659 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.26990960286892,
            "unit": "iter/sec",
            "range": "stddev: 0.00028466178443590443",
            "extra": "mean: 4.778517857142949 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.8231406221443,
            "unit": "iter/sec",
            "range": "stddev: 0.00016815065638743791",
            "extra": "mean: 3.069149717514066 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.89691016953245,
            "unit": "iter/sec",
            "range": "stddev: 0.0003427277543586623",
            "extra": "mean: 8.628357723577043 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.06422758036908,
            "unit": "iter/sec",
            "range": "stddev: 0.00035549207503268086",
            "extra": "mean: 7.295849673202581 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.03222314577414,
            "unit": "iter/sec",
            "range": "stddev: 0.00021803028829636318",
            "extra": "mean: 4.974326923076764 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.5023779691842,
            "unit": "iter/sec",
            "range": "stddev: 0.0001510602799061053",
            "extra": "mean: 3.159533923303931 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.82494047853519,
            "unit": "iter/sec",
            "range": "stddev: 0.0037345865483094554",
            "extra": "mean: 77.97307142857132 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.904467041778316,
            "unit": "iter/sec",
            "range": "stddev: 0.0013367160007522782",
            "extra": "mean: 71.9193333333332 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.8445719315868,
            "unit": "iter/sec",
            "range": "stddev: 0.00042801152679898546",
            "extra": "mean: 5.922606741572862 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.809801260619,
            "unit": "iter/sec",
            "range": "stddev: 0.0002668403066031855",
            "extra": "mean: 4.084803773585121 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.7180821687352,
            "unit": "iter/sec",
            "range": "stddev: 0.00009521764402042521",
            "extra": "mean: 2.115425742574098 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.82752457549077,
            "unit": "iter/sec",
            "range": "stddev: 0.00010366351687640573",
            "extra": "mean: 2.238000000000116 msec\nrounds: 466"
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
        "date": 1643760158947,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.58715686009282,
            "unit": "iter/sec",
            "range": "stddev: 0.001427204684296173",
            "extra": "mean: 8.882007751937964 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.9950104841605,
            "unit": "iter/sec",
            "range": "stddev: 0.00037582989600175114",
            "extra": "mean: 6.71163414634149 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1889219676097,
            "unit": "iter/sec",
            "range": "stddev: 0.00038343167758718655",
            "extra": "mean: 5.230428571428502 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.138841504121,
            "unit": "iter/sec",
            "range": "stddev: 0.0002383400775470224",
            "extra": "mean: 3.1631671554251732 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.9148336888016,
            "unit": "iter/sec",
            "range": "stddev: 0.00047587381042903695",
            "extra": "mean: 9.015926605504742 msec\nrounds: 109"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.9753358014063,
            "unit": "iter/sec",
            "range": "stddev: 0.0003466116637659084",
            "extra": "mean: 6.994213333333287 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.89302737515786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966619445380967",
            "extra": "mean: 5.322177272727335 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.437513087519,
            "unit": "iter/sec",
            "range": "stddev: 0.00019361364692180866",
            "extra": "mean: 3.25269349845192 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.705026710118197,
            "unit": "iter/sec",
            "range": "stddev: 0.0020003375278367305",
            "extra": "mean: 72.96592857142821 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.327583433052158,
            "unit": "iter/sec",
            "range": "stddev: 0.0037109827561547445",
            "extra": "mean: 75.03235714285746 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.51234802794667,
            "unit": "iter/sec",
            "range": "stddev: 0.000511110605662741",
            "extra": "mean: 6.430357541899457 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.70654544256493,
            "unit": "iter/sec",
            "range": "stddev: 0.00024260612847979985",
            "extra": "mean: 4.315803846153662 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.6494708851905,
            "unit": "iter/sec",
            "range": "stddev: 0.000058375008983884616",
            "extra": "mean: 2.1157328244273144 msec\nrounds: 524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.0704637164397,
            "unit": "iter/sec",
            "range": "stddev: 0.00020218023352026987",
            "extra": "mean: 2.363672451193009 msec\nrounds: 461"
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
        "date": 1643760578528,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.73321648130404,
            "unit": "iter/sec",
            "range": "stddev: 0.0006740776177579218",
            "extra": "mean: 8.56654198473285 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.66788686096032,
            "unit": "iter/sec",
            "range": "stddev: 0.00031819033299308497",
            "extra": "mean: 6.423932515337486 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.15037540168507,
            "unit": "iter/sec",
            "range": "stddev: 0.00035783059178982305",
            "extra": "mean: 4.781248888888886 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 336.5028698887611,
            "unit": "iter/sec",
            "range": "stddev: 0.00014276801927274184",
            "extra": "mean: 2.9717428571428632 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.85366210133624,
            "unit": "iter/sec",
            "range": "stddev: 0.00035994005319104776",
            "extra": "mean: 8.861032786885165 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.75901111384812,
            "unit": "iter/sec",
            "range": "stddev: 0.0005954153466472467",
            "extra": "mean: 7.365993548386969 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.30242024774202,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236345092472135",
            "extra": "mean: 4.943094594594507 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.68038555971907,
            "unit": "iter/sec",
            "range": "stddev: 0.00011628729412623862",
            "extra": "mean: 3.099041791044743 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.667523815660221,
            "unit": "iter/sec",
            "range": "stddev: 0.001215546085393512",
            "extra": "mean: 73.166142857143 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.796554172629893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008454578528545152",
            "extra": "mean: 72.4818666666664 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 155.1868415276519,
            "unit": "iter/sec",
            "range": "stddev: 0.0004898733150778913",
            "extra": "mean: 6.443845303867566 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.68495301723803,
            "unit": "iter/sec",
            "range": "stddev: 0.00030421618087591917",
            "extra": "mean: 4.279265682657085 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.3002853843903,
            "unit": "iter/sec",
            "range": "stddev: 0.00007547786365924641",
            "extra": "mean: 2.117297047970512 msec\nrounds: 542"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.66993298469487,
            "unit": "iter/sec",
            "range": "stddev: 0.00008610488584212108",
            "extra": "mean: 2.264134199134295 msec\nrounds: 462"
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
        "date": 1643761603368,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.32386756011535,
            "unit": "iter/sec",
            "range": "stddev: 0.0003611072865222032",
            "extra": "mean: 8.043507812499975 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.28650323393796,
            "unit": "iter/sec",
            "range": "stddev: 0.0004216324955452397",
            "extra": "mean: 6.882951807228895 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.45541635681292,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906754028607564",
            "extra": "mean: 4.891041860465134 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.74273500168044,
            "unit": "iter/sec",
            "range": "stddev: 0.00013384298629452382",
            "extra": "mean: 3.0888724035608375 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.8104071761513,
            "unit": "iter/sec",
            "range": "stddev: 0.0005839950041362348",
            "extra": "mean: 9.275542372881509 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.95204689103747,
            "unit": "iter/sec",
            "range": "stddev: 0.001726129366769533",
            "extra": "mean: 7.6363831168830805 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.06742242240915,
            "unit": "iter/sec",
            "range": "stddev: 0.0003829987607056515",
            "extra": "mean: 5.179537735849168 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.0576045744215,
            "unit": "iter/sec",
            "range": "stddev: 0.0003450211612582707",
            "extra": "mean: 3.44759104477616 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.780761859576142,
            "unit": "iter/sec",
            "range": "stddev: 0.0024850484738895054",
            "extra": "mean: 72.56492857142786 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.354802768641543,
            "unit": "iter/sec",
            "range": "stddev: 0.001616691717641158",
            "extra": "mean: 74.87942857142775 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 148.20494010947777,
            "unit": "iter/sec",
            "range": "stddev: 0.00054388372129655",
            "extra": "mean: 6.74741340782101 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.69916543034526,
            "unit": "iter/sec",
            "range": "stddev: 0.00033483978975641697",
            "extra": "mean: 4.1545636363636875 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.27147093211653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000754080391611996",
            "extra": "mean: 2.117426229508024 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.948062048989,
            "unit": "iter/sec",
            "range": "stddev: 0.0001884558529510583",
            "extra": "mean: 2.415762004175428 msec\nrounds: 479"
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
        "date": 1643775559083,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.82545032859475,
            "unit": "iter/sec",
            "range": "stddev: 0.0004842677272007776",
            "extra": "mean: 8.559778688524645 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.9125569464288,
            "unit": "iter/sec",
            "range": "stddev: 0.0003527106344542233",
            "extra": "mean: 6.853419753086405 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.27020175023497,
            "unit": "iter/sec",
            "range": "stddev: 0.00023677854972774273",
            "extra": "mean: 4.89547663551397 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.35702988937516,
            "unit": "iter/sec",
            "range": "stddev: 0.00018094428217256135",
            "extra": "mean: 3.171009063444035 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.0499531091509,
            "unit": "iter/sec",
            "range": "stddev: 0.0004587091686999289",
            "extra": "mean: 9.08678260869561 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.1506282512668,
            "unit": "iter/sec",
            "range": "stddev: 0.00033072088403157896",
            "extra": "mean: 7.186456953642222 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.4328607408675,
            "unit": "iter/sec",
            "range": "stddev: 0.00024452326368883966",
            "extra": "mean: 5.196617647058797 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.85166194396766,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395343382372954",
            "extra": "mean: 3.2695588235292994 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.443556710092734,
            "unit": "iter/sec",
            "range": "stddev: 0.0011217740014176983",
            "extra": "mean: 74.3850769230773 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.242314491726846,
            "unit": "iter/sec",
            "range": "stddev: 0.0018981424421715683",
            "extra": "mean: 75.5155000000001 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.49287420695185,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049657776326419",
            "extra": "mean: 6.079290697674111 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.81844834656806,
            "unit": "iter/sec",
            "range": "stddev: 0.0001839302001797328",
            "extra": "mean: 4.22264400000023 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.479487570522,
            "unit": "iter/sec",
            "range": "stddev: 0.00011848111455531904",
            "extra": "mean: 2.1811226611227243 msec\nrounds: 481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 427.85441979100517,
            "unit": "iter/sec",
            "range": "stddev: 0.00013368972540289735",
            "extra": "mean: 2.3372435897436135 msec\nrounds: 468"
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
        "date": 1643776327546,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.50324124204047,
            "unit": "iter/sec",
            "range": "stddev: 0.00037681879474062835",
            "extra": "mean: 8.096953488372096 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.23173487418546,
            "unit": "iter/sec",
            "range": "stddev: 0.00031499213787673227",
            "extra": "mean: 6.526063291139225 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.91659188631692,
            "unit": "iter/sec",
            "range": "stddev: 0.0005158123605244066",
            "extra": "mean: 5.078292237442927 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.6519323085531,
            "unit": "iter/sec",
            "range": "stddev: 0.00018046628299752283",
            "extra": "mean: 3.0613625730993905 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.65273023490707,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409421832605162",
            "extra": "mean: 8.956341666666745 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.5413706264655,
            "unit": "iter/sec",
            "range": "stddev: 0.0006486628199542242",
            "extra": "mean: 7.602171052631594 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.65370124315356,
            "unit": "iter/sec",
            "range": "stddev: 0.00038972800725221244",
            "extra": "mean: 5.386372549019555 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.4628777198541,
            "unit": "iter/sec",
            "range": "stddev: 0.00044608729867531697",
            "extra": "mean: 3.3281981707316977 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.578496317317828,
            "unit": "iter/sec",
            "range": "stddev: 0.0015792059765859258",
            "extra": "mean: 73.6458571428571 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.44675422160384,
            "unit": "iter/sec",
            "range": "stddev: 0.001872033615876467",
            "extra": "mean: 80.34223076923134 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.2988346432092,
            "unit": "iter/sec",
            "range": "stddev: 0.0002836301794573235",
            "extra": "mean: 6.049649425287597 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.03086111071332,
            "unit": "iter/sec",
            "range": "stddev: 0.0002249616406306506",
            "extra": "mean: 4.166130952380968 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.40631264124227,
            "unit": "iter/sec",
            "range": "stddev: 0.00011668463219037643",
            "extra": "mean: 2.1532868369351994 msec\nrounds: 509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 445.60224857750416,
            "unit": "iter/sec",
            "range": "stddev: 0.00015084375769557483",
            "extra": "mean: 2.244153846153828 msec\nrounds: 468"
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
        "date": 1643782596500,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.02719366106376,
            "unit": "iter/sec",
            "range": "stddev: 0.0002834385547320103",
            "extra": "mean: 8.331445312500005 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.6543128683761,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853697572205628",
            "extra": "mean: 6.550748427672889 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.77381487433863,
            "unit": "iter/sec",
            "range": "stddev: 0.00027453560822648736",
            "extra": "mean: 4.9074018691590515 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.18483384592093,
            "unit": "iter/sec",
            "range": "stddev: 0.00020709506244680174",
            "extra": "mean: 3.255369047619012 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.92624694093011,
            "unit": "iter/sec",
            "range": "stddev: 0.0005812335614184814",
            "extra": "mean: 9.097008474576224 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.03555944237058,
            "unit": "iter/sec",
            "range": "stddev: 0.0004175274488054437",
            "extra": "mean: 7.244510067114241 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.02576082176998,
            "unit": "iter/sec",
            "range": "stddev: 0.00019296389678941922",
            "extra": "mean: 5.049848039215638 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.41884436170534,
            "unit": "iter/sec",
            "range": "stddev: 0.0001337224195977487",
            "extra": "mean: 3.1804709480122844 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.097625961740022,
            "unit": "iter/sec",
            "range": "stddev: 0.0009674806639746842",
            "extra": "mean: 76.34971428571394 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.487553877960883,
            "unit": "iter/sec",
            "range": "stddev: 0.0010056547591025958",
            "extra": "mean: 74.1424285714279 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.814190031911,
            "unit": "iter/sec",
            "range": "stddev: 0.00026650510484591564",
            "extra": "mean: 6.104477272727105 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.7132020311438,
            "unit": "iter/sec",
            "range": "stddev: 0.0001747974273224343",
            "extra": "mean: 4.137134387351974 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.77369338293806,
            "unit": "iter/sec",
            "range": "stddev: 0.00026711919925733124",
            "extra": "mean: 2.2534008097165126 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 413.1151708602195,
            "unit": "iter/sec",
            "range": "stddev: 0.00016345486241720167",
            "extra": "mean: 2.42063247863235 msec\nrounds: 468"
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
        "date": 1643824430596,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.28037260625632,
            "unit": "iter/sec",
            "range": "stddev: 0.00032051966440157674",
            "extra": "mean: 8.04632283464573 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.98349425786034,
            "unit": "iter/sec",
            "range": "stddev: 0.00014959491633646248",
            "extra": "mean: 6.45230000000005 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.06997728236777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010076358712420957",
            "extra": "mean: 4.715424657534225 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.4014327290262,
            "unit": "iter/sec",
            "range": "stddev: 0.00009469506784482266",
            "extra": "mean: 3.0731272189349483 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.34013374135792,
            "unit": "iter/sec",
            "range": "stddev: 0.000553749883371259",
            "extra": "mean: 8.822999999999992 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.9281000995994,
            "unit": "iter/sec",
            "range": "stddev: 0.00021956021603113115",
            "extra": "mean: 6.899973154362521 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.92963368408454,
            "unit": "iter/sec",
            "range": "stddev: 0.00024280732021329904",
            "extra": "mean: 4.927816513761482 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.74618833910006,
            "unit": "iter/sec",
            "range": "stddev: 0.00007126915382604756",
            "extra": "mean: 3.127480597014877 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.408189338957108,
            "unit": "iter/sec",
            "range": "stddev: 0.0011582815141125168",
            "extra": "mean: 74.58128571428573 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.76293256897058,
            "unit": "iter/sec",
            "range": "stddev: 0.0017555562596940986",
            "extra": "mean: 72.65893333333366 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.51388591404,
            "unit": "iter/sec",
            "range": "stddev: 0.00018767960533883543",
            "extra": "mean: 5.796634831460922 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.18092661481683,
            "unit": "iter/sec",
            "range": "stddev: 0.00015488096481683887",
            "extra": "mean: 4.078620689655097 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.8873538585144,
            "unit": "iter/sec",
            "range": "stddev: 0.0000710850513505103",
            "extra": "mean: 2.1418442622950975 msec\nrounds: 488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.2983539608646,
            "unit": "iter/sec",
            "range": "stddev: 0.000056440247288229954",
            "extra": "mean: 2.2011966173360706 msec\nrounds: 473"
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
        "date": 1643831012677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.47321348410254,
            "unit": "iter/sec",
            "range": "stddev: 0.0007964860692450624",
            "extra": "mean: 8.440726562500021 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.9945725325111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005425564895438349",
            "extra": "mean: 6.6227546012270535 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.61487110185146,
            "unit": "iter/sec",
            "range": "stddev: 0.00023337653304274269",
            "extra": "mean: 4.793522123893903 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 317.06302653443703,
            "unit": "iter/sec",
            "range": "stddev: 0.00017525897438769005",
            "extra": "mean: 3.1539470588236105 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.77847244155373,
            "unit": "iter/sec",
            "range": "stddev: 0.000655978992828984",
            "extra": "mean: 9.109254098360696 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1848263786497,
            "unit": "iter/sec",
            "range": "stddev: 0.0005863586911546067",
            "extra": "mean: 7.236684563758337 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.41395529835543,
            "unit": "iter/sec",
            "range": "stddev: 0.0002688907814638218",
            "extra": "mean: 5.014694174757422 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.23924284056534,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630348067592734",
            "extra": "mean: 3.1422900302116106 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.135120989620294,
            "unit": "iter/sec",
            "range": "stddev: 0.0020977518980186505",
            "extra": "mean: 76.13176923076882 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.304468807292567,
            "unit": "iter/sec",
            "range": "stddev: 0.004540845438539768",
            "extra": "mean: 81.27128571428648 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.02470213510392,
            "unit": "iter/sec",
            "range": "stddev: 0.000403671613636225",
            "extra": "mean: 6.0596988636362505 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.4981896860996,
            "unit": "iter/sec",
            "range": "stddev: 0.0001814649630859176",
            "extra": "mean: 4.040433593749892 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 449.21582541779776,
            "unit": "iter/sec",
            "range": "stddev: 0.0001778018386744701",
            "extra": "mean: 2.226101449275389 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 425.46579923432563,
            "unit": "iter/sec",
            "range": "stddev: 0.00022780812750028255",
            "extra": "mean: 2.350365180467183 msec\nrounds: 471"
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
        "date": 1643842986881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.54827661040011,
            "unit": "iter/sec",
            "range": "stddev: 0.00048529548698950553",
            "extra": "mean: 8.02901515151513 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.88662669911685,
            "unit": "iter/sec",
            "range": "stddev: 0.00032012035783966585",
            "extra": "mean: 6.456335329341265 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.9406007921374,
            "unit": "iter/sec",
            "range": "stddev: 0.00024077900673331428",
            "extra": "mean: 4.740671052631581 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.1955861070292,
            "unit": "iter/sec",
            "range": "stddev: 0.00033319252811911355",
            "extra": "mean: 3.387584527220639 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.59932841121824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008517962852466246",
            "extra": "mean: 9.842584745762784 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.30061462757956,
            "unit": "iter/sec",
            "range": "stddev: 0.0006441607917378462",
            "extra": "mean: 7.283288590604242 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.95242675839862,
            "unit": "iter/sec",
            "range": "stddev: 0.0005431978377836123",
            "extra": "mean: 5.32049528301882 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 295.3238280128173,
            "unit": "iter/sec",
            "range": "stddev: 0.00036375483206142837",
            "extra": "mean: 3.386113496932592 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.013217972117337,
            "unit": "iter/sec",
            "range": "stddev: 0.004304010305376245",
            "extra": "mean: 83.24164285714275 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.970481038083339,
            "unit": "iter/sec",
            "range": "stddev: 0.002930055128311552",
            "extra": "mean: 77.09814285714194 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.01794376081565,
            "unit": "iter/sec",
            "range": "stddev: 0.0008267860771504544",
            "extra": "mean: 6.3686988636362045 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 231.19075163599223,
            "unit": "iter/sec",
            "range": "stddev: 0.00041500205852297356",
            "extra": "mean: 4.325432539682604 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.19067202014327,
            "unit": "iter/sec",
            "range": "stddev: 0.0001639833997801181",
            "extra": "mean: 2.17301232032845 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 407.74719673802736,
            "unit": "iter/sec",
            "range": "stddev: 0.0002453631694981098",
            "extra": "mean: 2.4524999999999704 msec\nrounds: 466"
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
        "date": 1643898715106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.11225648073741,
            "unit": "iter/sec",
            "range": "stddev: 0.0003550008738367398",
            "extra": "mean: 7.805654411764709 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.30454924281602,
            "unit": "iter/sec",
            "range": "stddev: 0.00036870177470367234",
            "extra": "mean: 6.522963636363588 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.10864976508634,
            "unit": "iter/sec",
            "range": "stddev: 0.00029762490848473007",
            "extra": "mean: 4.828383561643868 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.75864079958427,
            "unit": "iter/sec",
            "range": "stddev: 0.0002113025194300223",
            "extra": "mean: 3.107919642857007 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.56342637523912,
            "unit": "iter/sec",
            "range": "stddev: 0.0007262602906532036",
            "extra": "mean: 9.384082644628235 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.89178894119775,
            "unit": "iter/sec",
            "range": "stddev: 0.0004170130025277885",
            "extra": "mean: 7.047624161074016 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.68066260310525,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667834897687769",
            "extra": "mean: 5.0843839285713885 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 307.8486138734907,
            "unit": "iter/sec",
            "range": "stddev: 0.00019440736167471626",
            "extra": "mean: 3.2483498542272025 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.858216586107568,
            "unit": "iter/sec",
            "range": "stddev: 0.0012151693523718683",
            "extra": "mean: 72.15935714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.239632044146155,
            "unit": "iter/sec",
            "range": "stddev: 0.00964364627395455",
            "extra": "mean: 75.53080000000041 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.2662448185912,
            "unit": "iter/sec",
            "range": "stddev: 0.0003563287947896763",
            "extra": "mean: 6.050842391304262 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 237.6909704148169,
            "unit": "iter/sec",
            "range": "stddev: 0.00030644695171799834",
            "extra": "mean: 4.2071434108532015 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 445.77643322302515,
            "unit": "iter/sec",
            "range": "stddev: 0.000141466672115954",
            "extra": "mean: 2.243276955602749 msec\nrounds: 473"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.8239797295307,
            "unit": "iter/sec",
            "range": "stddev: 0.00015507535244291097",
            "extra": "mean: 2.3104080338268096 msec\nrounds: 473"
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
        "date": 1643988701230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.68181083147816,
            "unit": "iter/sec",
            "range": "stddev: 0.0006469405081008488",
            "extra": "mean: 8.355488549618308 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.88631564851352,
            "unit": "iter/sec",
            "range": "stddev: 0.00035324000779259074",
            "extra": "mean: 6.627506250000026 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 197.6144849604479,
            "unit": "iter/sec",
            "range": "stddev: 0.0003722967951091796",
            "extra": "mean: 5.060357798165189 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.6546188314236,
            "unit": "iter/sec",
            "range": "stddev: 0.00016898932550654447",
            "extra": "mean: 3.219008955223836 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.3161174564518,
            "unit": "iter/sec",
            "range": "stddev: 0.0005592314172874365",
            "extra": "mean: 8.903441666666662 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.16514240239982,
            "unit": "iter/sec",
            "range": "stddev: 0.000997337468614235",
            "extra": "mean: 7.742026845637732 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.24204712949881,
            "unit": "iter/sec",
            "range": "stddev: 0.00045556705064960537",
            "extra": "mean: 5.228975609756226 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.95093210452586,
            "unit": "iter/sec",
            "range": "stddev: 0.00018546831896138142",
            "extra": "mean: 3.257849693251527 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.31920229394716,
            "unit": "iter/sec",
            "range": "stddev: 0.002550660117100929",
            "extra": "mean: 75.07957142857157 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.283413002184354,
            "unit": "iter/sec",
            "range": "stddev: 0.003283718409578986",
            "extra": "mean: 75.28185714285611 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 154.09885129549838,
            "unit": "iter/sec",
            "range": "stddev: 0.0006653731899114352",
            "extra": "mean: 6.489341040462464 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.4325997267649,
            "unit": "iter/sec",
            "range": "stddev: 0.00023583686978251441",
            "extra": "mean: 4.435915662650601 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.76689896334074,
            "unit": "iter/sec",
            "range": "stddev: 0.00009753256632035458",
            "extra": "mean: 2.1655948103794014 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.3725670002384,
            "unit": "iter/sec",
            "range": "stddev: 0.00008992439133280857",
            "extra": "mean: 2.2863802521008476 msec\nrounds: 476"
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
        "date": 1643989226600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.45136070252093,
            "unit": "iter/sec",
            "range": "stddev: 0.0010366414230391177",
            "extra": "mean: 8.661656250000044 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 129.5947410454094,
            "unit": "iter/sec",
            "range": "stddev: 0.0010534683566482013",
            "extra": "mean: 7.71636249999994 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.2157452304784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007401977665245949",
            "extra": "mean: 5.175561643835728 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.15966761221614,
            "unit": "iter/sec",
            "range": "stddev: 0.00031997306721628856",
            "extra": "mean: 3.2241458333334037 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.57105751256177,
            "unit": "iter/sec",
            "range": "stddev: 0.001264485590663499",
            "extra": "mean: 9.472293103448463 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 131.65940330898079,
            "unit": "iter/sec",
            "range": "stddev: 0.001228631847712667",
            "extra": "mean: 7.595355704697985 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.02954421592804,
            "unit": "iter/sec",
            "range": "stddev: 0.0005554712253700424",
            "extra": "mean: 5.26233962264159 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 287.8981866763152,
            "unit": "iter/sec",
            "range": "stddev: 0.00045241043957992735",
            "extra": "mean: 3.473450151057405 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.654433594588177,
            "unit": "iter/sec",
            "range": "stddev: 0.0021465530303461855",
            "extra": "mean: 73.23628571428564 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.936598654039425,
            "unit": "iter/sec",
            "range": "stddev: 0.0029595991013426095",
            "extra": "mean: 77.30007142857076 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.43379198894291,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492134625623491",
            "extra": "mean: 6.782705555555385 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 219.68214147874562,
            "unit": "iter/sec",
            "range": "stddev: 0.0005418112077451315",
            "extra": "mean: 4.55203137254901 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 410.8636146956175,
            "unit": "iter/sec",
            "range": "stddev: 0.0003601069784558188",
            "extra": "mean: 2.4338976833975328 msec\nrounds: 518"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 416.85754354186076,
            "unit": "iter/sec",
            "range": "stddev: 0.0003220123380942052",
            "extra": "mean: 2.3989010526316172 msec\nrounds: 475"
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
        "date": 1644011698062,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.74592092777631,
            "unit": "iter/sec",
            "range": "stddev: 0.0008711997429609064",
            "extra": "mean: 8.35101515151519 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.05916938600075,
            "unit": "iter/sec",
            "range": "stddev: 0.00026901582188109134",
            "extra": "mean: 6.846540372670684 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 188.16101133563578,
            "unit": "iter/sec",
            "range": "stddev: 0.0005044155806402819",
            "extra": "mean: 5.314597285067898 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.38875177678364,
            "unit": "iter/sec",
            "range": "stddev: 0.000242991972478452",
            "extra": "mean: 3.1606686217009163 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.26944651811625,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586891640595013",
            "extra": "mean: 9.151689075630173 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.9044046666858,
            "unit": "iter/sec",
            "range": "stddev: 0.0006911454455075849",
            "extra": "mean: 7.251399999999961 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.74321333795288,
            "unit": "iter/sec",
            "range": "stddev: 0.00041078223318112935",
            "extra": "mean: 5.242650485436832 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.47297248285344,
            "unit": "iter/sec",
            "range": "stddev: 0.00023797468358348426",
            "extra": "mean: 3.200276785714239 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.713230386436802,
            "unit": "iter/sec",
            "range": "stddev: 0.004383953224388812",
            "extra": "mean: 78.65821428571428 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.553178801279556,
            "unit": "iter/sec",
            "range": "stddev: 0.0031621672148236576",
            "extra": "mean: 73.78342857142783 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.34700641030034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005797434228031375",
            "extra": "mean: 6.197821839080372 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.4615616868899,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907778885600988",
            "extra": "mean: 4.176035573122833 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.4241614300908,
            "unit": "iter/sec",
            "range": "stddev: 0.00019068803199386275",
            "extra": "mean: 2.1532040816324516 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.1672453107073,
            "unit": "iter/sec",
            "range": "stddev: 0.0002516902059578407",
            "extra": "mean: 2.330093945720445 msec\nrounds: 479"
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
        "date": 1644244713130,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.79100780022402,
            "unit": "iter/sec",
            "range": "stddev: 0.0005436280292527734",
            "extra": "mean: 8.562303030303003 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.97796481559908,
            "unit": "iter/sec",
            "range": "stddev: 0.0005200000924326533",
            "extra": "mean: 6.803740963855474 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.7869857198587,
            "unit": "iter/sec",
            "range": "stddev: 0.00028237765353310344",
            "extra": "mean: 4.835894273127679 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2645773340019,
            "unit": "iter/sec",
            "range": "stddev: 0.00015009158153947807",
            "extra": "mean: 3.064997150997134 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.94755775540106,
            "unit": "iter/sec",
            "range": "stddev: 0.0005796460404688218",
            "extra": "mean: 8.77596694214888 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.39548036789034,
            "unit": "iter/sec",
            "range": "stddev: 0.00048527930851845766",
            "extra": "mean: 7.072361842105182 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.2438089429622,
            "unit": "iter/sec",
            "range": "stddev: 0.0002271403738801362",
            "extra": "mean: 5.018976525821544 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.9733557578265,
            "unit": "iter/sec",
            "range": "stddev: 0.00013093311637922916",
            "extra": "mean: 3.105847058823569 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.54803747000075,
            "unit": "iter/sec",
            "range": "stddev: 0.0011097440255294793",
            "extra": "mean: 73.8114285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.927447284612102,
            "unit": "iter/sec",
            "range": "stddev: 0.0006414620205505259",
            "extra": "mean: 71.80066666666627 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 171.0812431774088,
            "unit": "iter/sec",
            "range": "stddev: 0.0002024425638443297",
            "extra": "mean: 5.845176136363554 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.89932259916878,
            "unit": "iter/sec",
            "range": "stddev: 0.00012076232670866333",
            "extra": "mean: 4.0667049808431655 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 473.99617410643566,
            "unit": "iter/sec",
            "range": "stddev: 0.00008175647730471074",
            "extra": "mean: 2.109721669980084 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 455.41730192297666,
            "unit": "iter/sec",
            "range": "stddev: 0.00007740095272489604",
            "extra": "mean: 2.195788336933073 msec\nrounds: 463"
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
        "date": 1644419255902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.92442549068599,
            "unit": "iter/sec",
            "range": "stddev: 0.00042724860024604175",
            "extra": "mean: 8.004839694656486 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 144.54838444873377,
            "unit": "iter/sec",
            "range": "stddev: 0.0006737828889852097",
            "extra": "mean: 6.9180987654321715 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.93206282778806,
            "unit": "iter/sec",
            "range": "stddev: 0.00017383923136852082",
            "extra": "mean: 4.71849321266967 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.4094260207563,
            "unit": "iter/sec",
            "range": "stddev: 0.00010915417575710343",
            "extra": "mean: 3.0449795918366775 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.94003804326819,
            "unit": "iter/sec",
            "range": "stddev: 0.0003590195862880506",
            "extra": "mean: 8.700188524590175 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.5974050412384,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012059390536738",
            "extra": "mean: 7.062276315789566 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.42968780274336,
            "unit": "iter/sec",
            "range": "stddev: 0.00025772277639782764",
            "extra": "mean: 5.014298578199168 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.0833361795412,
            "unit": "iter/sec",
            "range": "stddev: 0.0002853810551410396",
            "extra": "mean: 3.2145727002967837 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.693217162687088,
            "unit": "iter/sec",
            "range": "stddev: 0.002405977679324661",
            "extra": "mean: 73.02885714285752 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.551555537888419,
            "unit": "iter/sec",
            "range": "stddev: 0.0017377264484167352",
            "extra": "mean: 73.79226666666625 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.09699885168808,
            "unit": "iter/sec",
            "range": "stddev: 0.0006215487279927399",
            "extra": "mean: 6.020578378378309 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.8263678937788,
            "unit": "iter/sec",
            "range": "stddev: 0.00036117836187705185",
            "extra": "mean: 4.1523692307690725 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.0687053494317,
            "unit": "iter/sec",
            "range": "stddev: 0.00011044746394818691",
            "extra": "mean: 2.087383268482549 msec\nrounds: 514"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.1396288618014,
            "unit": "iter/sec",
            "range": "stddev: 0.00017976581511470013",
            "extra": "mean: 2.266855967078116 msec\nrounds: 486"
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
        "date": 1644421185041,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.09968965676056,
            "unit": "iter/sec",
            "range": "stddev: 0.0004980512160625661",
            "extra": "mean: 8.058037878787903 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.421494585093,
            "unit": "iter/sec",
            "range": "stddev: 0.0002654596678376407",
            "extra": "mean: 6.3523726708074015 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.67318449017316,
            "unit": "iter/sec",
            "range": "stddev: 0.00020922140480885996",
            "extra": "mean: 4.680044444444501 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.6661581118894,
            "unit": "iter/sec",
            "range": "stddev: 0.0001286511883044667",
            "extra": "mean: 3.0150800000000135 msec\nrounds: 350"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.84811308965239,
            "unit": "iter/sec",
            "range": "stddev: 0.0004342090144062005",
            "extra": "mean: 8.631992125984143 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.37965266973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005701345747691847",
            "extra": "mean: 6.974490322580603 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.35310821804325,
            "unit": "iter/sec",
            "range": "stddev: 0.0005112425047888528",
            "extra": "mean: 5.171884792626687 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.99837977347863,
            "unit": "iter/sec",
            "range": "stddev: 0.0001461597605637654",
            "extra": "mean: 3.076938416422237 msec\nrounds: 341"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 11.756348008054843,
            "unit": "iter/sec",
            "range": "stddev: 0.004383504160517755",
            "extra": "mean: 85.0604285714281 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.800315984943039,
            "unit": "iter/sec",
            "range": "stddev: 0.003811904015747013",
            "extra": "mean: 78.12307142857223 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.95121217733043,
            "unit": "iter/sec",
            "range": "stddev: 0.00043356813393643443",
            "extra": "mean: 6.02586740331508 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.56653914949788,
            "unit": "iter/sec",
            "range": "stddev: 0.00041053552455615975",
            "extra": "mean: 4.12258015267177 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 494.01787482135876,
            "unit": "iter/sec",
            "range": "stddev: 0.00015223345831041684",
            "extra": "mean: 2.0242182539682574 msec\nrounds: 504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 457.84263403844943,
            "unit": "iter/sec",
            "range": "stddev: 0.00008818999621640526",
            "extra": "mean: 2.1841565762004165 msec\nrounds: 479"
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
        "date": 1644539848271,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.50221398376587,
            "unit": "iter/sec",
            "range": "stddev: 0.0004942654824250614",
            "extra": "mean: 8.368045801526723 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.36507648193432,
            "unit": "iter/sec",
            "range": "stddev: 0.0002260950111098832",
            "extra": "mean: 6.606543750000032 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.80715048303688,
            "unit": "iter/sec",
            "range": "stddev: 0.00024211293981774438",
            "extra": "mean: 4.955225806451572 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.5996746168,
            "unit": "iter/sec",
            "range": "stddev: 0.0001263536304813054",
            "extra": "mean: 3.1094558823529392 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.48778017901945,
            "unit": "iter/sec",
            "range": "stddev: 0.0002667156757574317",
            "extra": "mean: 8.811521367521387 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.74467177470132,
            "unit": "iter/sec",
            "range": "stddev: 0.00026784663386899654",
            "extra": "mean: 7.155907894736886 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.47560844721374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001527949213949335",
            "extra": "mean: 5.142033018867909 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.32754001543225,
            "unit": "iter/sec",
            "range": "stddev: 0.00012155460933213768",
            "extra": "mean: 3.2120512048193066 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.579681692261143,
            "unit": "iter/sec",
            "range": "stddev: 0.0010086344702151513",
            "extra": "mean: 73.63942857142851 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.837889128855522,
            "unit": "iter/sec",
            "range": "stddev: 0.0024100650360575873",
            "extra": "mean: 72.2653571428568 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.46636469351654,
            "unit": "iter/sec",
            "range": "stddev: 0.00018559272635717433",
            "extra": "mean: 6.0802705882354875 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.07977836937323,
            "unit": "iter/sec",
            "range": "stddev: 0.00014846495206396568",
            "extra": "mean: 4.20027272727267 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.34787161895184,
            "unit": "iter/sec",
            "range": "stddev: 0.0001086397250737776",
            "extra": "mean: 2.191310756972249 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.6982045885465,
            "unit": "iter/sec",
            "range": "stddev: 0.00006307469243219391",
            "extra": "mean: 2.3272147505422804 msec\nrounds: 461"
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
        "date": 1644540595207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.6258066850822,
            "unit": "iter/sec",
            "range": "stddev: 0.0007679913481626849",
            "extra": "mean: 8.290100000000002 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.94221411534693,
            "unit": "iter/sec",
            "range": "stddev: 0.00048445983431143886",
            "extra": "mean: 6.538417177914096 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.1801809534294,
            "unit": "iter/sec",
            "range": "stddev: 0.0003731873551671428",
            "extra": "mean: 4.850126696832579 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.49523174946825,
            "unit": "iter/sec",
            "range": "stddev: 0.00022761226298153239",
            "extra": "mean: 3.159605263157903 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.56433755418587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005448075490264773",
            "extra": "mean: 8.883808333333132 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.3829630094151,
            "unit": "iter/sec",
            "range": "stddev: 0.0008264418194067506",
            "extra": "mean: 7.553842105263045 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 199.42554102448605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003690400982101898",
            "extra": "mean: 5.014402843601748 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.7907668334392,
            "unit": "iter/sec",
            "range": "stddev: 0.00023539397232667463",
            "extra": "mean: 3.156657657657603 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.473127093146662,
            "unit": "iter/sec",
            "range": "stddev: 0.00645855388204307",
            "extra": "mean: 80.17235714285701 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.08953146022143,
            "unit": "iter/sec",
            "range": "stddev: 0.002869694662510871",
            "extra": "mean: 76.39692857142829 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.20333301548143,
            "unit": "iter/sec",
            "range": "stddev: 0.0005012707755315532",
            "extra": "mean: 6.12732584269673 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 229.12252195685065,
            "unit": "iter/sec",
            "range": "stddev: 0.0004385971775422138",
            "extra": "mean: 4.364477099236558 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 462.8006184612337,
            "unit": "iter/sec",
            "range": "stddev: 0.00011104604954983161",
            "extra": "mean: 2.1607577002055467 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.1478821644995,
            "unit": "iter/sec",
            "range": "stddev: 0.00013224521689973555",
            "extra": "mean: 2.2719636752137387 msec\nrounds: 468"
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
        "date": 1644599039884,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.29250661608738,
            "unit": "iter/sec",
            "range": "stddev: 0.000547228288543269",
            "extra": "mean: 8.313069767441894 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.6506448072289,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847052579507286",
            "extra": "mean: 6.727182389937201 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.8694825781752,
            "unit": "iter/sec",
            "range": "stddev: 0.00028938847168854447",
            "extra": "mean: 4.85744651162791 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.8049849955779,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564365476160564",
            "extra": "mean: 3.1269056047197874 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.2136890023634,
            "unit": "iter/sec",
            "range": "stddev: 0.0009372650713676358",
            "extra": "mean: 9.504466666666705 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.4614251228178,
            "unit": "iter/sec",
            "range": "stddev: 0.00045151242826770775",
            "extra": "mean: 7.069064935064757 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.49148910757373,
            "unit": "iter/sec",
            "range": "stddev: 0.0005861858836138026",
            "extra": "mean: 5.391082926829387 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.22618044261657,
            "unit": "iter/sec",
            "range": "stddev: 0.0005502219576189976",
            "extra": "mean: 3.555856707316932 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.626166132164165,
            "unit": "iter/sec",
            "range": "stddev: 0.0015646985543338184",
            "extra": "mean: 73.38821428571381 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.691735866845494,
            "unit": "iter/sec",
            "range": "stddev: 0.0036744775392992517",
            "extra": "mean: 78.79142857142897 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.15109029153405,
            "unit": "iter/sec",
            "range": "stddev: 0.00046825872439470783",
            "extra": "mean: 6.091948571428857 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.03387765622023,
            "unit": "iter/sec",
            "range": "stddev: 0.0003202111905854796",
            "extra": "mean: 4.201082677165169 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 456.53589972402585,
            "unit": "iter/sec",
            "range": "stddev: 0.00016661406367062554",
            "extra": "mean: 2.1904082474225928 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 403.27430435186807,
            "unit": "iter/sec",
            "range": "stddev: 0.00022579182008843307",
            "extra": "mean: 2.4797017543857 msec\nrounds: 456"
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
        "date": 1644601248909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.99787118717181,
            "unit": "iter/sec",
            "range": "stddev: 0.0007593851302344176",
            "extra": "mean: 8.547164062500007 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.81325174239382,
            "unit": "iter/sec",
            "range": "stddev: 0.0006637227973164915",
            "extra": "mean: 6.811374233128848 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.4667986435459,
            "unit": "iter/sec",
            "range": "stddev: 0.00035250435037555784",
            "extra": "mean: 4.890769585253471 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.4592467348016,
            "unit": "iter/sec",
            "range": "stddev: 0.00025704475297875357",
            "extra": "mean: 3.1800623145400695 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 99.22231384768348,
            "unit": "iter/sec",
            "range": "stddev: 0.0013139574264419034",
            "extra": "mean: 10.078378151260447 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.5651094756937,
            "unit": "iter/sec",
            "range": "stddev: 0.0004627425736425153",
            "extra": "mean: 7.1141409395972355 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.6948527491897,
            "unit": "iter/sec",
            "range": "stddev: 0.00035633222743302473",
            "extra": "mean: 5.162759803921446 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.6512243517347,
            "unit": "iter/sec",
            "range": "stddev: 0.000278275127333645",
            "extra": "mean: 3.3150868263474007 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.246059123973543,
            "unit": "iter/sec",
            "range": "stddev: 0.002466554765306508",
            "extra": "mean: 81.65892307692246 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.707541381200638,
            "unit": "iter/sec",
            "range": "stddev: 0.0036476715589811664",
            "extra": "mean: 78.69342857142973 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.3271206476646,
            "unit": "iter/sec",
            "range": "stddev: 0.0005771614232162563",
            "extra": "mean: 6.3968426966286565 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 215.60647266093264,
            "unit": "iter/sec",
            "range": "stddev: 0.0009836405977926342",
            "extra": "mean: 4.638079681274789 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.75566061354795,
            "unit": "iter/sec",
            "range": "stddev: 0.00011882845016724817",
            "extra": "mean: 2.2135859872610317 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 428.3682109088187,
            "unit": "iter/sec",
            "range": "stddev: 0.00010178900165781308",
            "extra": "mean: 2.334440265486594 msec\nrounds: 452"
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
        "date": 1644601882660,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.31614348719997,
            "unit": "iter/sec",
            "range": "stddev: 0.0005221220280316293",
            "extra": "mean: 8.044007575757556 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.5420278929508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003493517765430467",
            "extra": "mean: 6.470731707317097 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.94128716597507,
            "unit": "iter/sec",
            "range": "stddev: 0.00033641868160005824",
            "extra": "mean: 4.809049773755693 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 329.83054502685184,
            "unit": "iter/sec",
            "range": "stddev: 0.0002278862135379273",
            "extra": "mean: 3.0318598901099016 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.58425202671773,
            "unit": "iter/sec",
            "range": "stddev: 0.0004322183602251759",
            "extra": "mean: 8.577487804878047 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.66710836693207,
            "unit": "iter/sec",
            "range": "stddev: 0.00046426972986575915",
            "extra": "mean: 6.864967741935422 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.23499336969408,
            "unit": "iter/sec",
            "range": "stddev: 0.0001879335439202312",
            "extra": "mean: 4.896320574162623 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 325.46378589490587,
            "unit": "iter/sec",
            "range": "stddev: 0.00012579522713174123",
            "extra": "mean: 3.072538461538408 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.1538521525809,
            "unit": "iter/sec",
            "range": "stddev: 0.0030142837293623058",
            "extra": "mean: 76.02335714285731 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.585835795766087,
            "unit": "iter/sec",
            "range": "stddev: 0.0014814365410898277",
            "extra": "mean: 73.60607142857134 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.5732532770765,
            "unit": "iter/sec",
            "range": "stddev: 0.0002781035861099423",
            "extra": "mean: 5.897156424580925 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 235.1163139617061,
            "unit": "iter/sec",
            "range": "stddev: 0.00036667926651317065",
            "extra": "mean: 4.253214007782004 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.02588130473515,
            "unit": "iter/sec",
            "range": "stddev: 0.00010281475538137054",
            "extra": "mean: 2.0788902195607415 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 453.7511343778045,
            "unit": "iter/sec",
            "range": "stddev: 0.00013466585661709788",
            "extra": "mean: 2.203851239669574 msec\nrounds: 484"
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
        "date": 1644602221753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.66821044366107,
            "unit": "iter/sec",
            "range": "stddev: 0.00042788231508010874",
            "extra": "mean: 8.021291044776094 msec\nrounds: 134"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.52700887349496,
            "unit": "iter/sec",
            "range": "stddev: 0.000395174864471648",
            "extra": "mean: 6.51351190476193 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.72634525151076,
            "unit": "iter/sec",
            "range": "stddev: 0.00022596976125417706",
            "extra": "mean: 4.768118181818155 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.5191902002009,
            "unit": "iter/sec",
            "range": "stddev: 0.00019850292834578127",
            "extra": "mean: 3.0439622093022813 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.324884144169,
            "unit": "iter/sec",
            "range": "stddev: 0.0004219429643899488",
            "extra": "mean: 8.596612903225719 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.828894378829,
            "unit": "iter/sec",
            "range": "stddev: 0.0004990383104474057",
            "extra": "mean: 6.952705882352912 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.63169120868866,
            "unit": "iter/sec",
            "range": "stddev: 0.00021594980488050123",
            "extra": "mean: 4.935062200957049 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.3462115528835,
            "unit": "iter/sec",
            "range": "stddev: 0.00011868146709887025",
            "extra": "mean: 3.1022545454545902 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.519242227159856,
            "unit": "iter/sec",
            "range": "stddev: 0.0011691849631354067",
            "extra": "mean: 73.96864285714345 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.56007062859625,
            "unit": "iter/sec",
            "range": "stddev: 0.002321626799144976",
            "extra": "mean: 73.74592857142963 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.96031402609702,
            "unit": "iter/sec",
            "range": "stddev: 0.00030268677469881544",
            "extra": "mean: 5.849310734462914 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.36463767952057,
            "unit": "iter/sec",
            "range": "stddev: 0.00017836367295440028",
            "extra": "mean: 4.0922451361865235 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.2116844200709,
            "unit": "iter/sec",
            "range": "stddev: 0.00013543964017899494",
            "extra": "mean: 2.140357429718941 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 436.91224357633155,
            "unit": "iter/sec",
            "range": "stddev: 0.00009808206477270081",
            "extra": "mean: 2.2887891440499155 msec\nrounds: 479"
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
        "date": 1644603707281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.76145836613182,
            "unit": "iter/sec",
            "range": "stddev: 0.00021088967871951832",
            "extra": "mean: 7.706448529411746 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.94312974842111,
            "unit": "iter/sec",
            "range": "stddev: 0.0005817376100281565",
            "extra": "mean: 6.625011695906353 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.9367714522768,
            "unit": "iter/sec",
            "range": "stddev: 0.00014925802212037643",
            "extra": "mean: 4.674278260869575 msec\nrounds: 230"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 294.9827926704271,
            "unit": "iter/sec",
            "range": "stddev: 0.0010007121426269289",
            "extra": "mean: 3.390028248587576 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 101.51760061400724,
            "unit": "iter/sec",
            "range": "stddev: 0.0007707649672292001",
            "extra": "mean: 9.85050862068958 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.09910634138566,
            "unit": "iter/sec",
            "range": "stddev: 0.0005569594361175894",
            "extra": "mean: 7.087217105263061 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.01413159701661,
            "unit": "iter/sec",
            "range": "stddev: 0.00037843274823065327",
            "extra": "mean: 5.10167298578191 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.8572682389626,
            "unit": "iter/sec",
            "range": "stddev: 0.0002712132305488332",
            "extra": "mean: 3.1861616766466803 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.813918111740975,
            "unit": "iter/sec",
            "range": "stddev: 0.0027788046643540637",
            "extra": "mean: 78.04014285714318 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.089176559902691,
            "unit": "iter/sec",
            "range": "stddev: 0.0029810786122325887",
            "extra": "mean: 76.39899999999956 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.71529370702987,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299852653786576",
            "extra": "mean: 6.108164835165063 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.74409707242825,
            "unit": "iter/sec",
            "range": "stddev: 0.00024228412603932053",
            "extra": "mean: 4.085900383142093 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 471.2787618656397,
            "unit": "iter/sec",
            "range": "stddev: 0.00011669007000142647",
            "extra": "mean: 2.121886409736192 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.6407437038715,
            "unit": "iter/sec",
            "range": "stddev: 0.00012395656587253854",
            "extra": "mean: 2.2289549356222915 msec\nrounds: 466"
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
        "date": 1644938674561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.76017374979241,
            "unit": "iter/sec",
            "range": "stddev: 0.00032783568579309344",
            "extra": "mean: 7.706524822695067 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 164.00395871624528,
            "unit": "iter/sec",
            "range": "stddev: 0.0004299014956866804",
            "extra": "mean: 6.097413793103433 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.02217423143543,
            "unit": "iter/sec",
            "range": "stddev: 0.0001885086293329918",
            "extra": "mean: 4.504054621848726 msec\nrounds: 238"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.84903166484787,
            "unit": "iter/sec",
            "range": "stddev: 0.00023828076189774834",
            "extra": "mean: 3.059516483516474 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.75039870852643,
            "unit": "iter/sec",
            "range": "stddev: 0.000629915893383563",
            "extra": "mean: 8.281546153846264 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.60939406783234,
            "unit": "iter/sec",
            "range": "stddev: 0.0003475482087697496",
            "extra": "mean: 6.510018518518536 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.93996963749285,
            "unit": "iter/sec",
            "range": "stddev: 0.00012078605313823794",
            "extra": "mean: 4.718317180616868 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.1097772610556,
            "unit": "iter/sec",
            "range": "stddev: 0.00017852798857735555",
            "extra": "mean: 2.940227146814533 msec\nrounds: 361"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.791835233541674,
            "unit": "iter/sec",
            "range": "stddev: 0.0013439530533182263",
            "extra": "mean: 72.50666666666703 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.077065363568495,
            "unit": "iter/sec",
            "range": "stddev: 0.0005567853993713926",
            "extra": "mean: 71.03753333333268 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.9824145635992,
            "unit": "iter/sec",
            "range": "stddev: 0.00017408800306385814",
            "extra": "mean: 5.61853260869582 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.93138933328794,
            "unit": "iter/sec",
            "range": "stddev: 0.00016171936130033213",
            "extra": "mean: 3.847169064748025 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 490.5583388117217,
            "unit": "iter/sec",
            "range": "stddev: 0.00013672854444296017",
            "extra": "mean: 2.0384935304989367 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.4674279234908,
            "unit": "iter/sec",
            "range": "stddev: 0.0001680233152185146",
            "extra": "mean: 2.3123128712872987 msec\nrounds: 505"
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
          "id": "7542bc8e10651c93e7480dd6551a0d3538733113",
          "message": "Merge pull request #449 from TeoZosa/dependabot/pip/importlib-metadata-4.11.1",
          "timestamp": "2022-02-15T14:58:31Z",
          "tree_id": "d7c609f609e357ac01dcfecf231e51591c7839d9"
        },
        "date": 1644939203388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.69935175230985,
            "unit": "iter/sec",
            "range": "stddev: 0.0005504598012834693",
            "extra": "mean: 8.019287878787843 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.69124385427867,
            "unit": "iter/sec",
            "range": "stddev: 0.00026103158897120997",
            "extra": "mean: 6.301544910179603 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.0254706826061,
            "unit": "iter/sec",
            "range": "stddev: 0.00027686510948391",
            "extra": "mean: 4.694274336283167 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.4055667320057,
            "unit": "iter/sec",
            "range": "stddev: 0.0002251905664786671",
            "extra": "mean: 3.063673239436652 msec\nrounds: 355"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.3219946626453,
            "unit": "iter/sec",
            "range": "stddev: 0.0005466301107340116",
            "extra": "mean: 8.596826446281117 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1967062659271,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084475629231068",
            "extra": "mean: 7.082318181818063 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.79130898722715,
            "unit": "iter/sec",
            "range": "stddev: 0.00024303731667771973",
            "extra": "mean: 4.980295238095254 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.49809195795154,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530956314430831",
            "extra": "mean: 3.21029253731348 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.18344385453763,
            "unit": "iter/sec",
            "range": "stddev: 0.0040249416322292834",
            "extra": "mean: 75.85271428571438 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.80280031212739,
            "unit": "iter/sec",
            "range": "stddev: 0.0017149417094068768",
            "extra": "mean: 72.44906666666633 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.89515453259938,
            "unit": "iter/sec",
            "range": "stddev: 0.00040392238051856964",
            "extra": "mean: 5.8859830508475195 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 250.02012472596232,
            "unit": "iter/sec",
            "range": "stddev: 0.00022143767744191463",
            "extra": "mean: 3.9996780303028103 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 481.0093977333296,
            "unit": "iter/sec",
            "range": "stddev: 0.0001851516971317283",
            "extra": "mean: 2.0789614604461377 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 465.56158366024164,
            "unit": "iter/sec",
            "range": "stddev: 0.00008766546167347581",
            "extra": "mean: 2.147943548387321 msec\nrounds: 496"
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
          "id": "18dd14713220d7c78db0299a886987ca4a4905ce",
          "message": "Merge pull request #448 from TeoZosa/dependabot/pip/orjson-3.6.7",
          "timestamp": "2022-02-15T15:16:00Z",
          "tree_id": "4234ad75866b67826906db4f20bfa05a1b90132c"
        },
        "date": 1644940190213,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.79785647022467,
            "unit": "iter/sec",
            "range": "stddev: 0.00022721105667614542",
            "extra": "mean: 7.587376811594177 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.38813929709832,
            "unit": "iter/sec",
            "range": "stddev: 0.0001676677348549193",
            "extra": "mean: 6.234875000000026 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 220.74675473602207,
            "unit": "iter/sec",
            "range": "stddev: 0.00017730294140880012",
            "extra": "mean: 4.530077922077906 msec\nrounds: 231"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.5640786816219,
            "unit": "iter/sec",
            "range": "stddev: 0.00015812015437579685",
            "extra": "mean: 2.9800567567566874 msec\nrounds: 370"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.73231552606345,
            "unit": "iter/sec",
            "range": "stddev: 0.0008004664972210066",
            "extra": "mean: 9.030787401574985 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.99714547873768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003279266198033384",
            "extra": "mean: 6.7115379746835675 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.16508109466886,
            "unit": "iter/sec",
            "range": "stddev: 0.000504128567142636",
            "extra": "mean: 4.9710416666667765 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 296.226427761033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003478771143504645",
            "extra": "mean: 3.3757960339943196 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.429106289892644,
            "unit": "iter/sec",
            "range": "stddev: 0.003764435756405318",
            "extra": "mean: 80.45630769230773 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.345000676782467,
            "unit": "iter/sec",
            "range": "stddev: 0.0018068330012785433",
            "extra": "mean: 74.93442857142695 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.0476804564273,
            "unit": "iter/sec",
            "range": "stddev: 0.0006620745141258944",
            "extra": "mean: 6.40829775280913 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 242.52532290847472,
            "unit": "iter/sec",
            "range": "stddev: 0.0004162045759596288",
            "extra": "mean: 4.123280769230784 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 447.4357520071335,
            "unit": "iter/sec",
            "range": "stddev: 0.00022671280909520528",
            "extra": "mean: 2.234957746479 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.08777939726156,
            "unit": "iter/sec",
            "range": "stddev: 0.00019296536727465315",
            "extra": "mean: 2.28264755838622 msec\nrounds: 471"
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
          "id": "73222b50963d58d273b6f979c4439836d148b879",
          "message": "Merge pull request #450 from TeoZosa/dependabot/pip/gitpython-3.1.27",
          "timestamp": "2022-02-21T14:27:35Z",
          "tree_id": "223e242c51d598441e0d8fc22d94661027c05280"
        },
        "date": 1645454558808,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.29691901941618,
            "unit": "iter/sec",
            "range": "stddev: 0.00041178106363085255",
            "extra": "mean: 8.382446153846145 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.4313210152602,
            "unit": "iter/sec",
            "range": "stddev: 0.00018790736470070354",
            "extra": "mean: 6.517574074074096 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.84354873386445,
            "unit": "iter/sec",
            "range": "stddev: 0.00035299781079914855",
            "extra": "mean: 4.929907834101363 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.32091819152225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001492094023240655",
            "extra": "mean: 3.141483775811227 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.81596173670171,
            "unit": "iter/sec",
            "range": "stddev: 0.0002400081377754559",
            "extra": "mean: 8.634388429752194 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.1764753966739,
            "unit": "iter/sec",
            "range": "stddev: 0.0002424070338305258",
            "extra": "mean: 6.84104605263149 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 187.65721747114347,
            "unit": "iter/sec",
            "range": "stddev: 0.0003948589425669241",
            "extra": "mean: 5.328865116279221 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.78684576652597,
            "unit": "iter/sec",
            "range": "stddev: 0.00007282973644947707",
            "extra": "mean: 3.107647230320766 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.037057832678315,
            "unit": "iter/sec",
            "range": "stddev: 0.0010704167412736527",
            "extra": "mean: 71.23999999999978 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.71939716968851,
            "unit": "iter/sec",
            "range": "stddev: 0.002495263752053036",
            "extra": "mean: 72.88949999999923 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.3516057141827,
            "unit": "iter/sec",
            "range": "stddev: 0.00018400396150340507",
            "extra": "mean: 5.8702117647062755 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.08341083050777,
            "unit": "iter/sec",
            "range": "stddev: 0.00011808688456619652",
            "extra": "mean: 4.063662790698067 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 475.2928210901383,
            "unit": "iter/sec",
            "range": "stddev: 0.00005928937837257678",
            "extra": "mean: 2.1039661354581076 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.2339997997688,
            "unit": "iter/sec",
            "range": "stddev: 0.00005776079904930631",
            "extra": "mean: 2.2015084745765634 msec\nrounds: 472"
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
          "id": "74ca5315d14f3eeb750997d86c03aa5a6494cc2e",
          "message": "Merge pull request #452 from TeoZosa/ci/migrate-flakehell-to-flakeheaven\n\n💚 Migrate `flakehell` to `flakeheaven`",
          "timestamp": "2022-02-27T00:01:45Z",
          "tree_id": "7b5929b5f1eeefb65339b51f8c3a00d76bd2c809"
        },
        "date": 1645922684353,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.52054621429171,
            "unit": "iter/sec",
            "range": "stddev: 0.000664490719731798",
            "extra": "mean: 8.509150375939877 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.90125517242654,
            "unit": "iter/sec",
            "range": "stddev: 0.0003660880300153126",
            "extra": "mean: 6.455725609756109 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.9524762648728,
            "unit": "iter/sec",
            "range": "stddev: 0.0002252795957359959",
            "extra": "mean: 4.6958834080717065 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.721250904592,
            "unit": "iter/sec",
            "range": "stddev: 0.00019753830806211432",
            "extra": "mean: 3.0145792507204034 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.84579493759354,
            "unit": "iter/sec",
            "range": "stddev: 0.0006027127563310508",
            "extra": "mean: 8.78381147540993 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.66446537899768,
            "unit": "iter/sec",
            "range": "stddev: 0.0003670274154514892",
            "extra": "mean: 7.009453947368276 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.30764530665553,
            "unit": "iter/sec",
            "range": "stddev: 0.00033700255741857005",
            "extra": "mean: 4.8945794392522615 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.1429526180793,
            "unit": "iter/sec",
            "range": "stddev: 0.00016187196419127213",
            "extra": "mean: 3.1042119402983275 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.165764498328036,
            "unit": "iter/sec",
            "range": "stddev: 0.001151793899452194",
            "extra": "mean: 75.95457142857092 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.101008777675847,
            "unit": "iter/sec",
            "range": "stddev: 0.0023367391151579617",
            "extra": "mean: 76.3300000000002 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 164.8613728877211,
            "unit": "iter/sec",
            "range": "stddev: 0.000517106296753279",
            "extra": "mean: 6.065702247190737 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 244.77806788512476,
            "unit": "iter/sec",
            "range": "stddev: 0.0002581809558552015",
            "extra": "mean: 4.085333333333213 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.88282388053767,
            "unit": "iter/sec",
            "range": "stddev: 0.00016647299551129954",
            "extra": "mean: 2.165051282051229 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.2326625647484,
            "unit": "iter/sec",
            "range": "stddev: 0.0001976744457344003",
            "extra": "mean: 2.29762167689157 msec\nrounds: 489"
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
          "id": "77a09aa2196c24f3e17a2590d683be1f2bfb68f0",
          "message": "Merge pull request #454 from TeoZosa/dependabot/pip/importlib-metadata-4.11.2",
          "timestamp": "2022-02-28T15:41:44Z",
          "tree_id": "9f05778d1e47acd85447aba52865a5c7ae793057"
        },
        "date": 1646063624377,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.35908357833512,
            "unit": "iter/sec",
            "range": "stddev: 0.00031927267975809004",
            "extra": "mean: 7.91395419847327 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 157.0723269586519,
            "unit": "iter/sec",
            "range": "stddev: 0.0001984345957274588",
            "extra": "mean: 6.366493827160544 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.61024217475142,
            "unit": "iter/sec",
            "range": "stddev: 0.00035734373946515993",
            "extra": "mean: 4.840031111111121 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.5668301066106,
            "unit": "iter/sec",
            "range": "stddev: 0.00024468263980229445",
            "extra": "mean: 3.1001327683614988 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.34267495506322,
            "unit": "iter/sec",
            "range": "stddev: 0.000395134379583286",
            "extra": "mean: 8.522048780488031 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.01657251520422,
            "unit": "iter/sec",
            "range": "stddev: 0.00024913717791468534",
            "extra": "mean: 6.80195424836599 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.0167134466963,
            "unit": "iter/sec",
            "range": "stddev: 0.00021175771139010345",
            "extra": "mean: 4.9257028301886985 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.4371259322813,
            "unit": "iter/sec",
            "range": "stddev: 0.00013220914284870297",
            "extra": "mean: 3.140337349397695 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.148688183555619,
            "unit": "iter/sec",
            "range": "stddev: 0.0028178128501103166",
            "extra": "mean: 76.05321428571469 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.63715707095686,
            "unit": "iter/sec",
            "range": "stddev: 0.0030931444580067752",
            "extra": "mean: 73.32906666666663 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.8349628752882,
            "unit": "iter/sec",
            "range": "stddev: 0.00025485052047525023",
            "extra": "mean: 5.922943820224375 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.28008408949017,
            "unit": "iter/sec",
            "range": "stddev: 0.00018390122562950405",
            "extra": "mean: 4.110488549618191 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 479.3947987049133,
            "unit": "iter/sec",
            "range": "stddev: 0.00008721608438452577",
            "extra": "mean: 2.085963391137124 msec\nrounds: 519"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 454.39612051210673,
            "unit": "iter/sec",
            "range": "stddev: 0.00014764910367544865",
            "extra": "mean: 2.200723014256801 msec\nrounds: 491"
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
          "id": "30eb5743cf758c66e3a4488dda16017a313a6909",
          "message": "Merge pull request #453 from TeoZosa/dependabot/github_actions/actions/setup-python-3",
          "timestamp": "2022-02-28T22:09:06Z",
          "tree_id": "6ba38681eabe733854ddd83decdb2aadaf2fd047"
        },
        "date": 1646086975530,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.89516271608466,
            "unit": "iter/sec",
            "range": "stddev: 0.0006023731856950594",
            "extra": "mean: 8.203770992366419 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.62813984517044,
            "unit": "iter/sec",
            "range": "stddev: 0.0003840710418208409",
            "extra": "mean: 6.4255731707316475 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.91132456633466,
            "unit": "iter/sec",
            "range": "stddev: 0.0002906957727344422",
            "extra": "mean: 4.856459459459445 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7127933992165,
            "unit": "iter/sec",
            "range": "stddev: 0.00034592787125551993",
            "extra": "mean: 3.1180545977011316 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.07941125237853,
            "unit": "iter/sec",
            "range": "stddev: 0.0004321906123959161",
            "extra": "mean: 8.541211382113817 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.39691360860002,
            "unit": "iter/sec",
            "range": "stddev: 0.0002758308389265273",
            "extra": "mean: 6.830745098039112 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.45441452411393,
            "unit": "iter/sec",
            "range": "stddev: 0.000700084983542895",
            "extra": "mean: 5.142593457943799 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.31731205811406,
            "unit": "iter/sec",
            "range": "stddev: 0.00013223376939132725",
            "extra": "mean: 3.0834000000000343 msec\nrounds: 345"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.547709711288688,
            "unit": "iter/sec",
            "range": "stddev: 0.0029753951302843723",
            "extra": "mean: 73.81321428571397 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.862191335206571,
            "unit": "iter/sec",
            "range": "stddev: 0.001464607439685472",
            "extra": "mean: 72.13866666666509 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 173.83028725698284,
            "unit": "iter/sec",
            "range": "stddev: 0.0003693957460322086",
            "extra": "mean: 5.752737430167421 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 247.99127070725666,
            "unit": "iter/sec",
            "range": "stddev: 0.0001744443843843064",
            "extra": "mean: 4.032400000000235 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.6115078433158,
            "unit": "iter/sec",
            "range": "stddev: 0.00016611344016113515",
            "extra": "mean: 2.2390824742268594 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.0478006360154,
            "unit": "iter/sec",
            "range": "stddev: 0.0000816708531144264",
            "extra": "mean: 2.1927525987525334 msec\nrounds: 481"
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
          "id": "94e51d27eb7919abe7c0fa531705823d65bd07b4",
          "message": "Merge pull request #457 from TeoZosa/dependabot/github_actions/actions/upload-artifact-3\n\n⬆️ Bump actions/upload-artifact from 2.3.1 to 3",
          "timestamp": "2022-03-04T22:10:46Z",
          "tree_id": "6be20fd43b99440cb37226081ece12eb8cf46c52"
        },
        "date": 1646433173977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.50416504974947,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225887502979843",
            "extra": "mean: 8.230170542635747 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.7372312460629,
            "unit": "iter/sec",
            "range": "stddev: 0.0005742691436088043",
            "extra": "mean: 6.861664596273267 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.19958114526034,
            "unit": "iter/sec",
            "range": "stddev: 0.0005709140778067461",
            "extra": "mean: 5.285423963133605 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.12857626824916,
            "unit": "iter/sec",
            "range": "stddev: 0.00037335078812461445",
            "extra": "mean: 3.309849112426015 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.48239158201953,
            "unit": "iter/sec",
            "range": "stddev: 0.0005734330038998142",
            "extra": "mean: 9.133888888888974 msec\nrounds: 117"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 132.7501892587104,
            "unit": "iter/sec",
            "range": "stddev: 0.0006250826860547212",
            "extra": "mean: 7.53294594594625 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.4519787338282,
            "unit": "iter/sec",
            "range": "stddev: 0.0007511682413376471",
            "extra": "mean: 5.511099999999996 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.0229306497862,
            "unit": "iter/sec",
            "range": "stddev: 0.00022463289868771764",
            "extra": "mean: 3.322006060606102 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.38073938142745,
            "unit": "iter/sec",
            "range": "stddev: 0.0021726244118962105",
            "extra": "mean: 74.73428571428619 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.469918304945455,
            "unit": "iter/sec",
            "range": "stddev: 0.0014567446188740276",
            "extra": "mean: 74.23950000000013 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 159.98938252279387,
            "unit": "iter/sec",
            "range": "stddev: 0.0004674669291379169",
            "extra": "mean: 6.250414772727364 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.9514262179403,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538755389365247",
            "extra": "mean: 4.609326693226907 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 436.7335214138938,
            "unit": "iter/sec",
            "range": "stddev: 0.00022191288276442875",
            "extra": "mean: 2.2897257731959084 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 422.1584660172023,
            "unit": "iter/sec",
            "range": "stddev: 0.00020912476737504438",
            "extra": "mean: 2.368778741865268 msec\nrounds: 461"
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
          "id": "21006934ce6f3b975f1a183c5fe6ba92865b53e6",
          "message": "Merge pull request #456 from TeoZosa/dependabot/github_actions/actions/download-artifact-3\n\n⬆️ Bump actions/download-artifact from 2.1.0 to 3",
          "timestamp": "2022-03-04T22:10:55Z",
          "tree_id": "069042521195e94faa8a114cf3b1790815137406"
        },
        "date": 1646435240018,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.96764241396033,
            "unit": "iter/sec",
            "range": "stddev: 0.0003021048005924736",
            "extra": "mean: 7.464489051094873 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.42142229200758,
            "unit": "iter/sec",
            "range": "stddev: 0.00025567879319101283",
            "extra": "mean: 6.008841807909637 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 221.37316957184956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003362653582880206",
            "extra": "mean: 4.517259259259225 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 350.786079714989,
            "unit": "iter/sec",
            "range": "stddev: 0.0002160908857424655",
            "extra": "mean: 2.8507402597403306 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.97074973030101,
            "unit": "iter/sec",
            "range": "stddev: 0.0003880122368583494",
            "extra": "mean: 8.132015151515269 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.8268312447397,
            "unit": "iter/sec",
            "range": "stddev: 0.00039444501907566395",
            "extra": "mean: 6.6743719512195785 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.51611772950625,
            "unit": "iter/sec",
            "range": "stddev: 0.0003870650789871288",
            "extra": "mean: 4.683487179487097 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.7394543160104,
            "unit": "iter/sec",
            "range": "stddev: 0.0003536508655000212",
            "extra": "mean: 3.19754986522916 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.738491507835601,
            "unit": "iter/sec",
            "range": "stddev: 0.0030662514344018876",
            "extra": "mean: 78.50223076923103 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.872525364426394,
            "unit": "iter/sec",
            "range": "stddev: 0.001814785279279177",
            "extra": "mean: 72.08492857142801 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 172.57040777817494,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910460206148836",
            "extra": "mean: 5.794736263736583 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.4275741870872,
            "unit": "iter/sec",
            "range": "stddev: 0.0003205010008430429",
            "extra": "mean: 4.1592567049811695 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.6196619213585,
            "unit": "iter/sec",
            "range": "stddev: 0.0001002812050179778",
            "extra": "mean: 2.1158662674647566 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 456.762680851178,
            "unit": "iter/sec",
            "range": "stddev: 0.00008857581711913925",
            "extra": "mean: 2.189320717131484 msec\nrounds: 502"
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
          "id": "09d24435df1c81182b4cee0626fa40ae6be1cf95",
          "message": "Merge pull request #455 from TeoZosa/dependabot/github_actions/actions/checkout-3\n\n⬆️ Bump actions/checkout from 2.4.0 to 3",
          "timestamp": "2022-03-04T22:11:00Z",
          "tree_id": "ef1a54d075fd87ecfd00a5c3dae37a3775fad57d"
        },
        "date": 1646435662097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.01678143583565,
            "unit": "iter/sec",
            "range": "stddev: 0.0005231690733954742",
            "extra": "mean: 8.195593984962345 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.44386625906134,
            "unit": "iter/sec",
            "range": "stddev: 0.00018740222048859408",
            "extra": "mean: 6.43319047619035 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.93267543739785,
            "unit": "iter/sec",
            "range": "stddev: 0.0002728607992179053",
            "extra": "mean: 4.855955947136681 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.0420017941907,
            "unit": "iter/sec",
            "range": "stddev: 0.00015013967560745782",
            "extra": "mean: 3.0026242774566554 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.90162172714446,
            "unit": "iter/sec",
            "range": "stddev: 0.000303348255314273",
            "extra": "mean: 8.481647540983488 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.55031208390108,
            "unit": "iter/sec",
            "range": "stddev: 0.0003079366382223533",
            "extra": "mean: 6.966198717948648 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.72051873064814,
            "unit": "iter/sec",
            "range": "stddev: 0.0001769148858305648",
            "extra": "mean: 4.908685714285676 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.06754977030573,
            "unit": "iter/sec",
            "range": "stddev: 0.0001037559790728725",
            "extra": "mean: 3.048152737752159 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.507538557268772,
            "unit": "iter/sec",
            "range": "stddev: 0.0013648103199798652",
            "extra": "mean: 74.03273333333354 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.851656150181663,
            "unit": "iter/sec",
            "range": "stddev: 0.002394010080737125",
            "extra": "mean: 72.19353333333251 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 169.97367317881813,
            "unit": "iter/sec",
            "range": "stddev: 0.0001605589915679499",
            "extra": "mean: 5.8832640449439815 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 246.1619803300385,
            "unit": "iter/sec",
            "range": "stddev: 0.00015967845643023495",
            "extra": "mean: 4.062365758754716 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 474.32262465622824,
            "unit": "iter/sec",
            "range": "stddev: 0.00010400733457079417",
            "extra": "mean: 2.108269662921442 msec\nrounds: 534"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.7446729259558,
            "unit": "iter/sec",
            "range": "stddev: 0.00010987796259986076",
            "extra": "mean: 2.253548179871586 msec\nrounds: 467"
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
          "id": "04375005c5cbc7da9f0e0fd0c04bade462234f09",
          "message": "Merge pull request #458 from TeoZosa/dependabot/pip/dot-github/workflows/pip-22.0.4",
          "timestamp": "2022-03-07T14:14:16Z",
          "tree_id": "02279053bda48fbc360f379f6b5616c98b39b8e3"
        },
        "date": 1646664480771,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.58726649718221,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500055428400546",
            "extra": "mean: 8.2245454545454 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.88316366781763,
            "unit": "iter/sec",
            "range": "stddev: 0.0002601102101274396",
            "extra": "mean: 6.415060975609721 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 212.7404964831356,
            "unit": "iter/sec",
            "range": "stddev: 0.00028269783838062994",
            "extra": "mean: 4.700562499999958 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.4269300518497,
            "unit": "iter/sec",
            "range": "stddev: 0.00009445393705415637",
            "extra": "mean: 2.9374879356568298 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.7179242657482,
            "unit": "iter/sec",
            "range": "stddev: 0.00030279544530300976",
            "extra": "mean: 8.423327868852523 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.19376941816918,
            "unit": "iter/sec",
            "range": "stddev: 0.00020078010812348346",
            "extra": "mean: 6.793765822784635 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.47388430279116,
            "unit": "iter/sec",
            "range": "stddev: 0.0001281571883369546",
            "extra": "mean: 4.7967638888887505 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.11665111520557,
            "unit": "iter/sec",
            "range": "stddev: 0.00027859693062358464",
            "extra": "mean: 3.435049132947958 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.241087093250368,
            "unit": "iter/sec",
            "range": "stddev: 0.003770471542637737",
            "extra": "mean: 75.52249999999994 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.090553411181787,
            "unit": "iter/sec",
            "range": "stddev: 0.0014439699673694175",
            "extra": "mean: 70.9695333333348 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.2456510844068,
            "unit": "iter/sec",
            "range": "stddev: 0.00017702463622621076",
            "extra": "mean: 5.873865168539346 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 241.811345750708,
            "unit": "iter/sec",
            "range": "stddev: 0.00017030764597948862",
            "extra": "mean: 4.135455252918264 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.83251483806777,
            "unit": "iter/sec",
            "range": "stddev: 0.00010799586050203279",
            "extra": "mean: 2.1652871287129485 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 443.8839007294036,
            "unit": "iter/sec",
            "range": "stddev: 0.00012096434293888701",
            "extra": "mean: 2.2528413361168753 msec\nrounds: 479"
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
          "id": "0a6c7a3d50ca6f621172de96b966f5f4d4d603d0",
          "message": "Merge pull request #459 from TeoZosa/dependabot/github_actions/release-drafter/release-drafter-5.19.0",
          "timestamp": "2022-03-08T14:22:12Z",
          "tree_id": "682ef3a619077c29a124e9a22c201ccd9862215e"
        },
        "date": 1646752670835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.59666579496671,
            "unit": "iter/sec",
            "range": "stddev: 0.0002630382796082973",
            "extra": "mean: 7.89910218978104 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.6993559363234,
            "unit": "iter/sec",
            "range": "stddev: 0.00018587960429572038",
            "extra": "mean: 6.422634146341436 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.91527424221565,
            "unit": "iter/sec",
            "range": "stddev: 0.00036466952379044995",
            "extra": "mean: 5.183622727272728 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.6117144492514,
            "unit": "iter/sec",
            "range": "stddev: 0.00012002246174220983",
            "extra": "mean: 3.0806035502958915 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.52176685278056,
            "unit": "iter/sec",
            "range": "stddev: 0.0003332799863475254",
            "extra": "mean: 8.808883333333236 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.96282297899324,
            "unit": "iter/sec",
            "range": "stddev: 0.00019555361521562319",
            "extra": "mean: 6.851059602649083 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.99852898678895,
            "unit": "iter/sec",
            "range": "stddev: 0.000141791390101737",
            "extra": "mean: 4.950531100478468 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.55586803460375,
            "unit": "iter/sec",
            "range": "stddev: 0.0002214338325500148",
            "extra": "mean: 3.3051746987952275 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.365754835777869,
            "unit": "iter/sec",
            "range": "stddev: 0.0013089947678269096",
            "extra": "mean: 74.81807142857123 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.5722830712914,
            "unit": "iter/sec",
            "range": "stddev: 0.0009339151430969239",
            "extra": "mean: 73.67957142857102 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.36657305773974,
            "unit": "iter/sec",
            "range": "stddev: 0.00040097260711739947",
            "extra": "mean: 6.010822857142922 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 245.43729219878176,
            "unit": "iter/sec",
            "range": "stddev: 0.00015203442008346435",
            "extra": "mean: 4.074360465116651 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 461.22983508717516,
            "unit": "iter/sec",
            "range": "stddev: 0.00009641882611900412",
            "extra": "mean: 2.1681164658634757 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 429.5460362643607,
            "unit": "iter/sec",
            "range": "stddev: 0.0001705185107597147",
            "extra": "mean: 2.3280391752574756 msec\nrounds: 485"
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
          "id": "0974d8e55bedbdf93d4c510b09da6e8216af3609",
          "message": "Merge pull request #460 from TeoZosa/dependabot/pip/sentry-sdk-1.5.7",
          "timestamp": "2022-03-08T14:55:44Z",
          "tree_id": "0800f64ce0d632acbeee85eedd5c2a7b46ffa7d8"
        },
        "date": 1646753508848,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.7160846641097,
            "unit": "iter/sec",
            "range": "stddev: 0.00021936769808737834",
            "extra": "mean: 7.65016793893129 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.09675979188455,
            "unit": "iter/sec",
            "range": "stddev: 0.0004197921652813472",
            "extra": "mean: 6.89195266272191 msec\nrounds: 169"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.03605504920947,
            "unit": "iter/sec",
            "range": "stddev: 0.0002890950437758024",
            "extra": "mean: 4.830076576576551 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.815617751925,
            "unit": "iter/sec",
            "range": "stddev: 0.00027098065055549184",
            "extra": "mean: 3.117055232558109 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.49810498917172,
            "unit": "iter/sec",
            "range": "stddev: 0.0007755270141270606",
            "extra": "mean: 8.968762295082202 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6529936820477,
            "unit": "iter/sec",
            "range": "stddev: 0.0003733823511394751",
            "extra": "mean: 6.961219354838755 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.9709751565663,
            "unit": "iter/sec",
            "range": "stddev: 0.00031929761856940595",
            "extra": "mean: 4.878739534883676 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 331.05114546600123,
            "unit": "iter/sec",
            "range": "stddev: 0.00010321688380936778",
            "extra": "mean: 3.0206812865497232 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.022407843210294,
            "unit": "iter/sec",
            "range": "stddev: 0.0040587128582762946",
            "extra": "mean: 76.79071428571379 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 14.022758937755908,
            "unit": "iter/sec",
            "range": "stddev: 0.0016698151259789047",
            "extra": "mean: 71.31264285714322 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.83505687026786,
            "unit": "iter/sec",
            "range": "stddev: 0.0004057040691878161",
            "extra": "mean: 5.958230769230614 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 217.3904024626504,
            "unit": "iter/sec",
            "range": "stddev: 0.00044605099490516414",
            "extra": "mean: 4.6000190839694906 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.2675778350048,
            "unit": "iter/sec",
            "range": "stddev: 0.0002117917903795888",
            "extra": "mean: 2.1446912621358885 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.47485572964786,
            "unit": "iter/sec",
            "range": "stddev: 0.00012907934596282354",
            "extra": "mean: 2.2297794117644485 msec\nrounds: 476"
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
          "id": "2858218eba7d2ac146318094e7fd690fd168381c",
          "message": "Merge pull request #461 from TeoZosa/dependabot/pip/emoji-1.7.0",
          "timestamp": "2022-03-09T14:30:33Z",
          "tree_id": "ae06e54c5b988ddb9315ab2c030f6fd225cc35b1"
        },
        "date": 1646838699303,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.53018744019627,
            "unit": "iter/sec",
            "range": "stddev: 0.000534082447302517",
            "extra": "mean: 8.436669354838777 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.2096552732484,
            "unit": "iter/sec",
            "range": "stddev: 0.00042643826459062405",
            "extra": "mean: 6.839493589743573 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1458313058136,
            "unit": "iter/sec",
            "range": "stddev: 0.0002294052716412742",
            "extra": "mean: 4.9225720930232155 msec\nrounds: 215"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.3899671716806,
            "unit": "iter/sec",
            "range": "stddev: 0.00036616373350728613",
            "extra": "mean: 3.3069880239520453 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.32905188217052,
            "unit": "iter/sec",
            "range": "stddev: 0.0006202796435725224",
            "extra": "mean: 8.982381355932047 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 139.07134171895962,
            "unit": "iter/sec",
            "range": "stddev: 0.0005819224681717068",
            "extra": "mean: 7.190554054054041 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.93926054937987,
            "unit": "iter/sec",
            "range": "stddev: 0.0007005333306725199",
            "extra": "mean: 5.496339805825425 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.57494050285703,
            "unit": "iter/sec",
            "range": "stddev: 0.00029368724563967575",
            "extra": "mean: 3.304966360856171 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.114962954913533,
            "unit": "iter/sec",
            "range": "stddev: 0.002459294338393541",
            "extra": "mean: 76.24878571428592 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.335746468408649,
            "unit": "iter/sec",
            "range": "stddev: 0.0019002137011096178",
            "extra": "mean: 74.98642857142812 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 166.42504571878322,
            "unit": "iter/sec",
            "range": "stddev: 0.0003935343248315248",
            "extra": "mean: 6.008710982659126 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 240.31892647210043,
            "unit": "iter/sec",
            "range": "stddev: 0.0002295919222532845",
            "extra": "mean: 4.161137096774165 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 465.9089515822226,
            "unit": "iter/sec",
            "range": "stddev: 0.00015684444810397155",
            "extra": "mean: 2.1463421052632903 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 450.95302702223546,
            "unit": "iter/sec",
            "range": "stddev: 0.00012571327115120845",
            "extra": "mean: 2.217525862068761 msec\nrounds: 464"
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
          "id": "41ee0d4379033b9cc717a1a72422f65271db6058",
          "message": "Merge pull request #464 from TeoZosa/dependabot/pip/importlib-metadata-4.11.3",
          "timestamp": "2022-03-14T14:24:15Z",
          "tree_id": "18c97bbfc50c9ec2f911ca5cb6a5ce4ec2706217"
        },
        "date": 1647271559540,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.40035538483616,
            "unit": "iter/sec",
            "range": "stddev: 0.0005404631930381548",
            "extra": "mean: 8.591039062499917 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.0590025577931,
            "unit": "iter/sec",
            "range": "stddev: 0.0008173619987846106",
            "extra": "mean: 6.846548192771047 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.44958010780888,
            "unit": "iter/sec",
            "range": "stddev: 0.0004143858418974884",
            "extra": "mean: 4.91522272727275 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 326.2584287356399,
            "unit": "iter/sec",
            "range": "stddev: 0.0002517824915730596",
            "extra": "mean: 3.0650549132947558 msec\nrounds: 346"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.40430415218941,
            "unit": "iter/sec",
            "range": "stddev: 0.001333097628539677",
            "extra": "mean: 9.057617886178845 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.50197919002198,
            "unit": "iter/sec",
            "range": "stddev: 0.0005072411846322228",
            "extra": "mean: 7.067038961038892 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.4387670988933,
            "unit": "iter/sec",
            "range": "stddev: 0.0004966677175337632",
            "extra": "mean: 5.0906448598130805 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 323.3035544048045,
            "unit": "iter/sec",
            "range": "stddev: 0.0001832242993785897",
            "extra": "mean: 3.093068376068368 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.415882396762022,
            "unit": "iter/sec",
            "range": "stddev: 0.00320418005832307",
            "extra": "mean: 80.54199999999945 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.843683201379877,
            "unit": "iter/sec",
            "range": "stddev: 0.0022146328547450298",
            "extra": "mean: 77.85928571428512 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.07571532699185,
            "unit": "iter/sec",
            "range": "stddev: 0.0004976814110698196",
            "extra": "mean: 6.169955801104901 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.1791769019169,
            "unit": "iter/sec",
            "range": "stddev: 0.0002947516944100693",
            "extra": "mean: 4.198519841269768 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.9385828227169,
            "unit": "iter/sec",
            "range": "stddev: 0.00010639628924204177",
            "extra": "mean: 2.1370325865581807 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 444.5251706402905,
            "unit": "iter/sec",
            "range": "stddev: 0.00014905270103017106",
            "extra": "mean: 2.249591397849548 msec\nrounds: 465"
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
          "id": "25ff13935bcb53199910f7601f466aa1c5e403ed",
          "message": "Merge pull request #468 from TeoZosa/dependabot/pip/sentry-sdk-1.5.8",
          "timestamp": "2022-03-18T13:26:32Z",
          "tree_id": "b39d56fd45b1e4e7d18f819f069ccfee424b0891"
        },
        "date": 1647613601288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.24141934859112,
            "unit": "iter/sec",
            "range": "stddev: 0.0003013522825574845",
            "extra": "mean: 8.048845588235304 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.30420328473198,
            "unit": "iter/sec",
            "range": "stddev: 0.00022874055895519998",
            "extra": "mean: 6.438975757575715 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 216.59814319015777,
            "unit": "iter/sec",
            "range": "stddev: 0.00015661116931851244",
            "extra": "mean: 4.616844748858585 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.917876619448,
            "unit": "iter/sec",
            "range": "stddev: 0.00008145348564528556",
            "extra": "mean: 2.9769180790960763 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.54592399596346,
            "unit": "iter/sec",
            "range": "stddev: 0.0007480683066204",
            "extra": "mean: 8.730122950819615 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.8034082413443,
            "unit": "iter/sec",
            "range": "stddev: 0.0002674656581900905",
            "extra": "mean: 7.002633986928059 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.71667212577978,
            "unit": "iter/sec",
            "range": "stddev: 0.000132382336831852",
            "extra": "mean: 4.884799999999956 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 303.4619655053093,
            "unit": "iter/sec",
            "range": "stddev: 0.0003130548416628783",
            "extra": "mean: 3.2953058823528383 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.617604060380406,
            "unit": "iter/sec",
            "range": "stddev: 0.0014373441645106559",
            "extra": "mean: 73.43435714285741 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.71633667772971,
            "unit": "iter/sec",
            "range": "stddev: 0.0020450044950119516",
            "extra": "mean: 78.63900000000105 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 146.49096529316145,
            "unit": "iter/sec",
            "range": "stddev: 0.0005847392339222922",
            "extra": "mean: 6.826359550561869 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.10457552957632,
            "unit": "iter/sec",
            "range": "stddev: 0.0003352140524414683",
            "extra": "mean: 4.199835294117581 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 453.43199727398746,
            "unit": "iter/sec",
            "range": "stddev: 0.00019099350151993691",
            "extra": "mean: 2.20540236686417 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.1245185543909,
            "unit": "iter/sec",
            "range": "stddev: 0.00015086526031988005",
            "extra": "mean: 2.2772584033613645 msec\nrounds: 476"
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
          "id": "14795ab9dc6329b6256d11010f1cf1acc0a27b12",
          "message": "Merge pull request #466 from TeoZosa/dependabot/pip/mypy-0.941\n\n⬆️ Bump mypy from 0.931 to 0.941",
          "timestamp": "2022-03-22T05:07:51Z",
          "tree_id": "73dc8c75e1fbae17bb0859de30ab3c372594435e"
        },
        "date": 1647927135235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.27361976903893,
            "unit": "iter/sec",
            "range": "stddev: 0.0008056219794297052",
            "extra": "mean: 8.600403100775209 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.03283548305953,
            "unit": "iter/sec",
            "range": "stddev: 0.0004861301291996583",
            "extra": "mean: 6.847774999999945 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.4573371598109,
            "unit": "iter/sec",
            "range": "stddev: 0.00046350427064853863",
            "extra": "mean: 5.038866359446989 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.0180209432564,
            "unit": "iter/sec",
            "range": "stddev: 0.0003203151887156232",
            "extra": "mean: 3.2049430894309148 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.74539069359341,
            "unit": "iter/sec",
            "range": "stddev: 0.0006310832353975907",
            "extra": "mean: 9.111999999999789 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 137.84408180219143,
            "unit": "iter/sec",
            "range": "stddev: 0.0006575002727604263",
            "extra": "mean: 7.25457333333336 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.8323409439956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003963966778113026",
            "extra": "mean: 5.240201923076939 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.7738330283027,
            "unit": "iter/sec",
            "range": "stddev: 0.0003646676342244382",
            "extra": "mean: 3.3247573099415884 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.788891933863205,
            "unit": "iter/sec",
            "range": "stddev: 0.0020463115356904537",
            "extra": "mean: 78.19285714285685 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.792966312030968,
            "unit": "iter/sec",
            "range": "stddev: 0.004570219968896115",
            "extra": "mean: 84.79630769230795 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 142.04342561130696,
            "unit": "iter/sec",
            "range": "stddev: 0.0013208457500588975",
            "extra": "mean: 7.040100558658998 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.0168399266271,
            "unit": "iter/sec",
            "range": "stddev: 0.00021251106236614973",
            "extra": "mean: 4.201383399209348 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 427.14540243519934,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669924611976168",
            "extra": "mean: 2.3411231732775266 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 408.02186381309707,
            "unit": "iter/sec",
            "range": "stddev: 0.00024244401212869816",
            "extra": "mean: 2.45084905660367 msec\nrounds: 477"
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
          "id": "45b5c6c2800bc9b0ba2bf84ed91d944e7b3ddf23",
          "message": "Merge pull request #471 from TeoZosa/dependabot/pip/rich-12.0.1\n\n⬆️ Bump rich from 11.2.0 to 12.0.1",
          "timestamp": "2022-03-22T18:02:47Z",
          "tree_id": "2e563f16bf2d6ef234ad4c6c0c097d1dbd2396ea"
        },
        "date": 1647973836878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.06822143983577,
            "unit": "iter/sec",
            "range": "stddev: 0.0006116123014615517",
            "extra": "mean: 8.328598425196827 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5467041881543,
            "unit": "iter/sec",
            "range": "stddev: 0.0005224879108544731",
            "extra": "mean: 6.686874213836473 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 203.1375344557933,
            "unit": "iter/sec",
            "range": "stddev: 0.00037191341755757166",
            "extra": "mean: 4.922773148148156 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.22369584438945,
            "unit": "iter/sec",
            "range": "stddev: 0.00017448976687860717",
            "extra": "mean: 3.202831858407039 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.26192792864062,
            "unit": "iter/sec",
            "range": "stddev: 0.00037147004800988783",
            "extra": "mean: 8.675891666666432 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 138.1492785844679,
            "unit": "iter/sec",
            "range": "stddev: 0.0005811423208961184",
            "extra": "mean: 7.238546666666631 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.1692665993272,
            "unit": "iter/sec",
            "range": "stddev: 0.0004415645480217573",
            "extra": "mean: 5.230966346153883 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 311.25931803547763,
            "unit": "iter/sec",
            "range": "stddev: 0.00019325237081976868",
            "extra": "mean: 3.21275522388062 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.607035986784227,
            "unit": "iter/sec",
            "range": "stddev: 0.0033285329912179687",
            "extra": "mean: 79.32078571428569 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.062144166746902,
            "unit": "iter/sec",
            "range": "stddev: 0.007572813449337687",
            "extra": "mean: 82.90400000000123 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.82312029937296,
            "unit": "iter/sec",
            "range": "stddev: 0.0007125876029108818",
            "extra": "mean: 6.218011428571312 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.82402757022066,
            "unit": "iter/sec",
            "range": "stddev: 0.0003078118426210606",
            "extra": "mean: 4.258507999999978 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.4448043136143,
            "unit": "iter/sec",
            "range": "stddev: 0.0001385667813269264",
            "extra": "mean: 2.2151102204408355 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 430.39383369806643,
            "unit": "iter/sec",
            "range": "stddev: 0.00021592267258810358",
            "extra": "mean: 2.3234533622559486 msec\nrounds: 461"
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
          "id": "5493325a08df9080a9004af4aff59d62b4a40108",
          "message": "Merge pull request #472 from TeoZosa/ci/add-py310-support\n\n🚀 Add Python 3.10 support",
          "timestamp": "2022-03-22T20:39:19Z",
          "tree_id": "7cbb986ac7d1edef643a9277cf4ab0163249570c"
        },
        "date": 1647982472796,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.52531802713662,
            "unit": "iter/sec",
            "range": "stddev: 0.0002137518070342227",
            "extra": "mean: 7.7805681818181665 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.75943287708435,
            "unit": "iter/sec",
            "range": "stddev: 0.00023308911159510522",
            "extra": "mean: 6.298838323353207 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 214.055709843797,
            "unit": "iter/sec",
            "range": "stddev: 0.0002520029409276664",
            "extra": "mean: 4.671681034482708 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.1786575910686,
            "unit": "iter/sec",
            "range": "stddev: 0.00011076603915466561",
            "extra": "mean: 2.9834835164834397 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.71007705445977,
            "unit": "iter/sec",
            "range": "stddev: 0.00043203681139394607",
            "extra": "mean: 8.717629921260011 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.00391818705944,
            "unit": "iter/sec",
            "range": "stddev: 0.0005210128474416762",
            "extra": "mean: 7.042059210526264 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.6341903153162,
            "unit": "iter/sec",
            "range": "stddev: 0.0006457327818887913",
            "extra": "mean: 5.386938679245515 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 306.6350244100059,
            "unit": "iter/sec",
            "range": "stddev: 0.00028911330741148865",
            "extra": "mean: 3.261206060606065 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.395065449246573,
            "unit": "iter/sec",
            "range": "stddev: 0.00409940105582277",
            "extra": "mean: 74.65435714285717 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.156567539239527,
            "unit": "iter/sec",
            "range": "stddev: 0.0022993336198203138",
            "extra": "mean: 76.0076666666663 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.38084448290556,
            "unit": "iter/sec",
            "range": "stddev: 0.0004861438152069637",
            "extra": "mean: 6.120668571428698 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.58606899156473,
            "unit": "iter/sec",
            "range": "stddev: 0.00027600060355024715",
            "extra": "mean: 4.173865384615529 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.37101909050756,
            "unit": "iter/sec",
            "range": "stddev: 0.00017720974419360055",
            "extra": "mean: 2.144215568862207 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.9247487370947,
            "unit": "iter/sec",
            "range": "stddev: 0.00021846315318259696",
            "extra": "mean: 2.2731160337551595 msec\nrounds: 474"
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
          "id": "c66306bfef5e7f33528367159760ead762a87a63",
          "message": ":bookmark: Bump version number to `0.17.4`",
          "timestamp": "2022-03-22T21:18:08Z",
          "tree_id": "4bbf1f0cae4fc4d4ae40425118b939cf456324a9"
        },
        "date": 1647984469340,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.9912666845678,
            "unit": "iter/sec",
            "range": "stddev: 0.0003983831777476975",
            "extra": "mean: 7.874557251908424 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.61614812337586,
            "unit": "iter/sec",
            "range": "stddev: 0.0002329971599671625",
            "extra": "mean: 6.426068322981354 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.84006769987698,
            "unit": "iter/sec",
            "range": "stddev: 0.0002112588087583045",
            "extra": "mean: 4.7429315068493665 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 335.81142410710555,
            "unit": "iter/sec",
            "range": "stddev: 0.0001333783681644388",
            "extra": "mean: 2.9778617647059398 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.9988446998103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005764146868580661",
            "extra": "mean: 8.849648000000116 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.6670357852199,
            "unit": "iter/sec",
            "range": "stddev: 0.0004918101835485451",
            "extra": "mean: 6.960538961038949 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 194.4725957982958,
            "unit": "iter/sec",
            "range": "stddev: 0.0005044880615291162",
            "extra": "mean: 5.142112676056351 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 304.8673240856857,
            "unit": "iter/sec",
            "range": "stddev: 0.00025049871029119184",
            "extra": "mean: 3.280115384615444 msec\nrounds: 338"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.953044289234086,
            "unit": "iter/sec",
            "range": "stddev: 0.006166838929234565",
            "extra": "mean: 77.20192857142852 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.21298194351628,
            "unit": "iter/sec",
            "range": "stddev: 0.0033155760343509286",
            "extra": "mean: 75.6831428571435 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 163.2428777489253,
            "unit": "iter/sec",
            "range": "stddev: 0.00046921737742388546",
            "extra": "mean: 6.125841530054645 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 238.7063773311893,
            "unit": "iter/sec",
            "range": "stddev: 0.0003678247085530995",
            "extra": "mean: 4.189247104247099 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 467.65644480757436,
            "unit": "iter/sec",
            "range": "stddev: 0.0001198864221115075",
            "extra": "mean: 2.138321862348049 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 401.52888530454237,
            "unit": "iter/sec",
            "range": "stddev: 0.00030449737440334034",
            "extra": "mean: 2.4904808510639107 msec\nrounds: 470"
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
          "id": "4ce993d3dd1a522b6763a156dc617de38600d7d8",
          "message": "Merge pull request #470 from TeoZosa/dependabot/github_actions/actions/cache-3\n\n⬆️ Bump actions/cache from 2 to 3",
          "timestamp": "2022-03-22T21:44:41Z",
          "tree_id": "92b10ada6622425beb66f34b8a3d0a979d79488f"
        },
        "date": 1647986085287,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.12012483695402,
            "unit": "iter/sec",
            "range": "stddev: 0.0013596893343249474",
            "extra": "mean: 9.080992248062008 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 155.26288127404362,
            "unit": "iter/sec",
            "range": "stddev: 0.0003617529411770911",
            "extra": "mean: 6.440689440993757 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.30372404926334,
            "unit": "iter/sec",
            "range": "stddev: 0.0002558002914707233",
            "extra": "mean: 4.68815068493153 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 332.19214821981774,
            "unit": "iter/sec",
            "range": "stddev: 0.00008269101436412218",
            "extra": "mean: 3.0103059490084076 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.65576604590443,
            "unit": "iter/sec",
            "range": "stddev: 0.00045792681913602284",
            "extra": "mean: 8.572229508196763 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.93764221142894,
            "unit": "iter/sec",
            "range": "stddev: 0.00019004597088975186",
            "extra": "mean: 6.7142193548385825 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.2901402878136,
            "unit": "iter/sec",
            "range": "stddev: 0.00027683373466007126",
            "extra": "mean: 4.871154545454621 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 319.93543121297995,
            "unit": "iter/sec",
            "range": "stddev: 0.00020870337726733835",
            "extra": "mean: 3.1256306818181177 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.382056764773072,
            "unit": "iter/sec",
            "range": "stddev: 0.0009765297635616338",
            "extra": "mean: 74.72692857142859 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.137013799119277,
            "unit": "iter/sec",
            "range": "stddev: 0.004017540900316411",
            "extra": "mean: 76.12080000000012 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.5548925613616,
            "unit": "iter/sec",
            "range": "stddev: 0.00019744068262387112",
            "extra": "mean: 5.69622404371596 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 251.07684067223028,
            "unit": "iter/sec",
            "range": "stddev: 0.0001231528724293988",
            "extra": "mean: 3.9828444444442246 msec\nrounds: 270"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 472.7590504705537,
            "unit": "iter/sec",
            "range": "stddev: 0.0000842489432061836",
            "extra": "mean: 2.115242424242677 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 435.7829332408457,
            "unit": "iter/sec",
            "range": "stddev: 0.00012232425514353154",
            "extra": "mean: 2.2947204301076347 msec\nrounds: 465"
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
          "id": "47a9426392fe50bc6f0ac78abba8b563823ebe2d",
          "message": "Merge pull request #475 from TeoZosa/dependabot/pip/python-dotenv-0.20.0",
          "timestamp": "2022-03-25T14:49:47Z",
          "tree_id": "76c9f6e593a60fca0d5cb1e66e65d4a16f66e046"
        },
        "date": 1648222119415,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.18423549746205,
            "unit": "iter/sec",
            "range": "stddev: 0.00035116789643448393",
            "extra": "mean: 8.11792187500001 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.5772326518626,
            "unit": "iter/sec",
            "range": "stddev: 0.00036275321785252026",
            "extra": "mean: 6.6855094339622925 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.14768701877907,
            "unit": "iter/sec",
            "range": "stddev: 0.00012265481246565555",
            "extra": "mean: 4.804281105990767 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.4452792029669,
            "unit": "iter/sec",
            "range": "stddev: 0.00019966612534820703",
            "extra": "mean: 3.110949404761923 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.98830036552495,
            "unit": "iter/sec",
            "range": "stddev: 0.0007078799850808779",
            "extra": "mean: 9.009958677686164 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.89304243408742,
            "unit": "iter/sec",
            "range": "stddev: 0.0005743171614856713",
            "extra": "mean: 7.304973154362389 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.7696689005214,
            "unit": "iter/sec",
            "range": "stddev: 0.00037228234977945506",
            "extra": "mean: 5.241923444976252 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.57964052210957,
            "unit": "iter/sec",
            "range": "stddev: 0.00025674166119782967",
            "extra": "mean: 3.2724693251533785 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.142911323838518,
            "unit": "iter/sec",
            "range": "stddev: 0.001889690597676134",
            "extra": "mean: 76.08664285714285 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.306495610187035,
            "unit": "iter/sec",
            "range": "stddev: 0.003505267250187419",
            "extra": "mean: 75.15126666666703 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 161.22964475734557,
            "unit": "iter/sec",
            "range": "stddev: 0.0006209901896506077",
            "extra": "mean: 6.202333333333479 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.28206361896287,
            "unit": "iter/sec",
            "range": "stddev: 0.0002957284008027458",
            "extra": "mean: 4.232229838709368 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.99458329373954,
            "unit": "iter/sec",
            "range": "stddev: 0.0001794810174249999",
            "extra": "mean: 2.1786749482401557 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 432.3091744707211,
            "unit": "iter/sec",
            "range": "stddev: 0.00018442630722369818",
            "extra": "mean: 2.3131593291405546 msec\nrounds: 477"
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
          "id": "d1d8ba4fa07067edf22bda4e4b8a86b699d73a5c",
          "message": "Merge pull request #477 from TeoZosa/dependabot/pip/pylint-2.13.2",
          "timestamp": "2022-03-28T14:52:21Z",
          "tree_id": "fc0eb5a24ee1b51ce1ff7abcbd5d00571f2a6694"
        },
        "date": 1648488397929,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.55320209457221,
            "unit": "iter/sec",
            "range": "stddev: 0.0008622101150003946",
            "extra": "mean: 8.364476923076914 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.65841851699483,
            "unit": "iter/sec",
            "range": "stddev: 0.0004752836666652613",
            "extra": "mean: 6.681882716049433 msec\nrounds: 162"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.62971571486113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006404359388024586",
            "extra": "mean: 5.475560185185279 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 316.5323131446685,
            "unit": "iter/sec",
            "range": "stddev: 0.0002792452857769789",
            "extra": "mean: 3.1592351190475716 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.76860071082318,
            "unit": "iter/sec",
            "range": "stddev: 0.000702070038682611",
            "extra": "mean: 8.867716666666267 msec\nrounds: 120"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 140.93201157897394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005155444202605117",
            "extra": "mean: 7.0956200000000065 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.61264439500502,
            "unit": "iter/sec",
            "range": "stddev: 0.00044103042233644037",
            "extra": "mean: 5.164951923076977 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 308.1325584404623,
            "unit": "iter/sec",
            "range": "stddev: 0.00029760391581385966",
            "extra": "mean: 3.245356495468236 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.70148870520119,
            "unit": "iter/sec",
            "range": "stddev: 0.00489873869895663",
            "extra": "mean: 78.73092857142845 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.478113949752002,
            "unit": "iter/sec",
            "range": "stddev: 0.001647723259397937",
            "extra": "mean: 74.19435714285528 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 165.26613011514576,
            "unit": "iter/sec",
            "range": "stddev: 0.00046346718705203143",
            "extra": "mean: 6.050846590909284 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 233.0901792867309,
            "unit": "iter/sec",
            "range": "stddev: 0.00040290818451712705",
            "extra": "mean: 4.290185039369983 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 464.6534193412512,
            "unit": "iter/sec",
            "range": "stddev: 0.00019918566507234203",
            "extra": "mean: 2.152141700404832 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 439.2520913644445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001960410564220079",
            "extra": "mean: 2.276597014925324 msec\nrounds: 469"
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
          "id": "097533b8084df114473f6349f70824b54d429de4",
          "message": "Merge pull request #478 from TeoZosa/dependabot/pip/sphinx-4.5.0",
          "timestamp": "2022-03-28T15:36:53Z",
          "tree_id": "9f0291af7a09c2fe2b924256eef0466a67f42a33"
        },
        "date": 1648490209639,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 121.85393140766024,
            "unit": "iter/sec",
            "range": "stddev: 0.00044824260267879154",
            "extra": "mean: 8.206546875000011 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.241758590263,
            "unit": "iter/sec",
            "range": "stddev: 0.00037643023504408237",
            "extra": "mean: 6.70053749999997 msec\nrounds: 160"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.5753584376328,
            "unit": "iter/sec",
            "range": "stddev: 0.0004545533504486648",
            "extra": "mean: 5.03587155963298 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.3058324970812,
            "unit": "iter/sec",
            "range": "stddev: 0.00023341905316302992",
            "extra": "mean: 3.1715239520958023 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.99234173507406,
            "unit": "iter/sec",
            "range": "stddev: 0.0009201285547061467",
            "extra": "mean: 9.524504201680616 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.59752625294436,
            "unit": "iter/sec",
            "range": "stddev: 0.00040407168479995577",
            "extra": "mean: 7.06227027027039 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.24681439408263,
            "unit": "iter/sec",
            "range": "stddev: 0.00025195710776915485",
            "extra": "mean: 5.121722488038234 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 310.8693027496218,
            "unit": "iter/sec",
            "range": "stddev: 0.00025638120471819874",
            "extra": "mean: 3.2167859327217423 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.458396144413951,
            "unit": "iter/sec",
            "range": "stddev: 0.005197911453108752",
            "extra": "mean: 80.26715384615348 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.817566658213122,
            "unit": "iter/sec",
            "range": "stddev: 0.002075827970649063",
            "extra": "mean: 78.0179285714289 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 156.6667086845667,
            "unit": "iter/sec",
            "range": "stddev: 0.0007202720901583647",
            "extra": "mean: 6.382977011493894 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.7377033717492,
            "unit": "iter/sec",
            "range": "stddev: 0.0003214742954636749",
            "extra": "mean: 4.1712254098361425 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 448.93441604641276,
            "unit": "iter/sec",
            "range": "stddev: 0.00016910502955121243",
            "extra": "mean: 2.227496855346051 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 420.79075441509445,
            "unit": "iter/sec",
            "range": "stddev: 0.0002031044216934279",
            "extra": "mean: 2.376478070175318 msec\nrounds: 456"
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
          "id": "69ccb94a847cb22d144b8e3b156d890a587e14db",
          "message": "Merge pull request #479 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.8.0",
          "timestamp": "2022-03-28T16:11:43Z",
          "tree_id": "f132adca5011305c7f5c8acb46a5cb14cb10b4a2"
        },
        "date": 1648491258677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 105.46609686850157,
            "unit": "iter/sec",
            "range": "stddev: 0.001227561617926565",
            "extra": "mean: 9.481719999999918 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.8597514626411,
            "unit": "iter/sec",
            "range": "stddev: 0.0006617256312808728",
            "extra": "mean: 7.360531645569669 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.5046486162657,
            "unit": "iter/sec",
            "range": "stddev: 0.0004266751145098843",
            "extra": "mean: 5.114967889908278 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 291.2263550401508,
            "unit": "iter/sec",
            "range": "stddev: 0.0004284338917971625",
            "extra": "mean: 3.4337551622418654 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.51966873706228,
            "unit": "iter/sec",
            "range": "stddev: 0.001205100752867537",
            "extra": "mean: 9.659999999999792 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 133.93426973463244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005500553894243763",
            "extra": "mean: 7.4663489932884755 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.74010925590417,
            "unit": "iter/sec",
            "range": "stddev: 0.0007520378936818568",
            "extra": "mean: 5.690220657276642 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 286.84672619826057,
            "unit": "iter/sec",
            "range": "stddev: 0.00028028395367603093",
            "extra": "mean: 3.4861823708206714 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.200000754285714,
            "unit": "iter/sec",
            "range": "stddev: 0.002997808910477919",
            "extra": "mean: 75.75757142857168 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 11.27283150981866,
            "unit": "iter/sec",
            "range": "stddev: 0.005277429544145644",
            "extra": "mean: 88.70885714285696 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 147.40273075980187,
            "unit": "iter/sec",
            "range": "stddev: 0.0007448796921170499",
            "extra": "mean: 6.784134831460731 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 226.9945745707294,
            "unit": "iter/sec",
            "range": "stddev: 0.0005239688115743497",
            "extra": "mean: 4.405391634981166 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 444.4037913252652,
            "unit": "iter/sec",
            "range": "stddev: 0.00025266542596049226",
            "extra": "mean: 2.2502058252425807 msec\nrounds: 515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.4820036379505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096219406741155",
            "extra": "mean: 2.3069008438818885 msec\nrounds: 474"
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
          "id": "6737c84aa532f5033982cfab767f64fd57b18230",
          "message": ":arrow_up: Auto-update pre-commit hooks",
          "timestamp": "2022-03-30T01:35:57Z",
          "tree_id": "cd230034bed97b16b1125695feeb9eed3de0758b"
        },
        "date": 1648605681600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.32944024765696,
            "unit": "iter/sec",
            "range": "stddev: 0.0004212158016677267",
            "extra": "mean: 8.043147286821679 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.7270370238428,
            "unit": "iter/sec",
            "range": "stddev: 0.00040089767202941247",
            "extra": "mean: 6.505036585365928 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 205.28115693882515,
            "unit": "iter/sec",
            "range": "stddev: 0.00032545567395521325",
            "extra": "mean: 4.871367713004488 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.8967006517513,
            "unit": "iter/sec",
            "range": "stddev: 0.0001656540686647001",
            "extra": "mean: 3.0779013698630173 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.80461596577332,
            "unit": "iter/sec",
            "range": "stddev: 0.0006059738997567473",
            "extra": "mean: 9.276040650406733 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.78954011699625,
            "unit": "iter/sec",
            "range": "stddev: 0.0004715263452358169",
            "extra": "mean: 7.003314102564085 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 189.552311903344,
            "unit": "iter/sec",
            "range": "stddev: 0.0003609276950048363",
            "extra": "mean: 5.275588516746328 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 313.5937654890454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001433707293789963",
            "extra": "mean: 3.188838905775161 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.504896972105698,
            "unit": "iter/sec",
            "range": "stddev: 0.0018867847367566013",
            "extra": "mean: 74.04721428571393 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.39901402398237,
            "unit": "iter/sec",
            "range": "stddev: 0.002387828772599021",
            "extra": "mean: 74.63235714285688 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 152.374650082498,
            "unit": "iter/sec",
            "range": "stddev: 0.000616104049920477",
            "extra": "mean: 6.562771428571515 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.36443471999132,
            "unit": "iter/sec",
            "range": "stddev: 0.0002997179812410335",
            "extra": "mean: 4.230754940711144 msec\nrounds: 253"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 418.5149621283045,
            "unit": "iter/sec",
            "range": "stddev: 0.0003477622758459727",
            "extra": "mean: 2.3894008350732014 msec\nrounds: 479"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 394.811252208265,
            "unit": "iter/sec",
            "range": "stddev: 0.000326942623685045",
            "extra": "mean: 2.532855875831256 msec\nrounds: 451"
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
          "id": "d3469794755a31c2696d4fd03de4affb5d26a183",
          "message": "Merge pull request #481 from TeoZosa/dependabot/pip/pylint-2.13.3",
          "timestamp": "2022-03-30T02:32:14Z",
          "tree_id": "606f53627726dad80da32e23cc74f61664f6a686"
        },
        "date": 1648608587190,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.69020844270763,
            "unit": "iter/sec",
            "range": "stddev: 0.00039126899861660386",
            "extra": "mean: 7.956069230769252 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.903060861061,
            "unit": "iter/sec",
            "range": "stddev: 0.00018278199326738238",
            "extra": "mean: 6.37336196319018 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 210.02831994765242,
            "unit": "iter/sec",
            "range": "stddev: 0.00011996114393386343",
            "extra": "mean: 4.761262672811174 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 324.74153569885436,
            "unit": "iter/sec",
            "range": "stddev: 0.00007528961984751806",
            "extra": "mean: 3.0793720238095426 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.10093693409783,
            "unit": "iter/sec",
            "range": "stddev: 0.00022755196368059452",
            "extra": "mean: 8.467333333333466 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.56910772885257,
            "unit": "iter/sec",
            "range": "stddev: 0.00022180072953040763",
            "extra": "mean: 6.869589403973483 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.74423921210231,
            "unit": "iter/sec",
            "range": "stddev: 0.00017642157390425608",
            "extra": "mean: 4.956771028037423 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 305.07541990997976,
            "unit": "iter/sec",
            "range": "stddev: 0.00021670224428376535",
            "extra": "mean: 3.2778779761905286 msec\nrounds: 336"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.162397662358277,
            "unit": "iter/sec",
            "range": "stddev: 0.0014360528166841677",
            "extra": "mean: 75.97399999999942 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.263819131025311,
            "unit": "iter/sec",
            "range": "stddev: 0.00273676115839445",
            "extra": "mean: 75.39306666666666 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.36026119420728,
            "unit": "iter/sec",
            "range": "stddev: 0.00034355325039143726",
            "extra": "mean: 5.975134078212183 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.46225458956778,
            "unit": "iter/sec",
            "range": "stddev: 0.0001576806224387798",
            "extra": "mean: 4.107412878788191 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 466.9508396062027,
            "unit": "iter/sec",
            "range": "stddev: 0.00010187157720470663",
            "extra": "mean: 2.1415530612244704 msec\nrounds: 490"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 438.07374583875986,
            "unit": "iter/sec",
            "range": "stddev: 0.00009794364777625596",
            "extra": "mean: 2.282720682302806 msec\nrounds: 469"
          }
        ]
      }
    ]
  }
}