window.BENCHMARK_DATA = {
  "lastUpdate": 1642433743597,
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
        "date": 1642085029671,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.78465051046098,
            "unit": "iter/sec",
            "range": "stddev: 0.00001719165931759307",
            "extra": "mean: 4.980460396039585 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.7262470533433,
            "unit": "iter/sec",
            "range": "stddev: 0.000010017952342187057",
            "extra": "mean: 3.806243233082694 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.8998813078337,
            "unit": "iter/sec",
            "range": "stddev: 0.00001145420435141671",
            "extra": "mean: 2.4943883663366395 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 436.1760060874584,
            "unit": "iter/sec",
            "range": "stddev: 0.002421877978413368",
            "extra": "mean: 2.2926524752475452 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.16588661075153,
            "unit": "iter/sec",
            "range": "stddev: 0.00001561232626841201",
            "extra": "mean: 5.342853968253829 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.76440409812358,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989907803526012",
            "extra": "mean: 4.068937499999964 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.92366843342495,
            "unit": "iter/sec",
            "range": "stddev: 0.0027481452417057444",
            "extra": "mean: 4.256701790281255 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.109923294837,
            "unit": "iter/sec",
            "range": "stddev: 0.000015111457809091082",
            "extra": "mean: 1.3438874670184613 msec\nrounds: 758"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.993016951064224,
            "unit": "iter/sec",
            "range": "stddev: 0.00011181228420878414",
            "extra": "mean: 40.01117599999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.369291378032294,
            "unit": "iter/sec",
            "range": "stddev: 0.00004137937055705491",
            "extra": "mean: 37.92290000000072 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0769800147663,
            "unit": "iter/sec",
            "range": "stddev: 0.000011267486037749372",
            "extra": "mean: 3.3775000000004285 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.41477621944676,
            "unit": "iter/sec",
            "range": "stddev: 0.00000989774746734656",
            "extra": "mean: 2.0349408450702318 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.8732022129907,
            "unit": "iter/sec",
            "range": "stddev: 0.000005708315567960175",
            "extra": "mean: 678.9450704225598 usec\nrounds: 1491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.2023388041698,
            "unit": "iter/sec",
            "range": "stddev: 0.0000057231402649545424",
            "extra": "mean: 764.9925113466375 usec\nrounds: 1322"
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
        "date": 1642431334764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.611549504584,
            "unit": "iter/sec",
            "range": "stddev: 0.000019929311130718454",
            "extra": "mean: 4.492129910714305 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 292.57557840017375,
            "unit": "iter/sec",
            "range": "stddev: 0.000011561725045533555",
            "extra": "mean: 3.417920270270262 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.91322980354266,
            "unit": "iter/sec",
            "range": "stddev: 0.00006864615758215439",
            "extra": "mean: 2.2425887665198294 msec\nrounds: 454"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.7403619080139,
            "unit": "iter/sec",
            "range": "stddev: 0.00222108443766593",
            "extra": "mean: 2.017184955752207 msec\nrounds: 904"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 206.51384575570398,
            "unit": "iter/sec",
            "range": "stddev: 0.000019494617215111967",
            "extra": "mean: 4.842290338164311 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 272.35835998518206,
            "unit": "iter/sec",
            "range": "stddev: 0.000011161243739195387",
            "extra": "mean: 3.67163321167893 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.72106901296564,
            "unit": "iter/sec",
            "range": "stddev: 0.002500578363443218",
            "extra": "mean: 3.880163945578276 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 830.3274327036888,
            "unit": "iter/sec",
            "range": "stddev: 0.000010569211781541084",
            "extra": "mean: 1.2043441666666705 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.99468660848128,
            "unit": "iter/sec",
            "range": "stddev: 0.00021431726605444787",
            "extra": "mean: 35.72106428571483 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.564360281937414,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908135571704646",
            "extra": "mean: 33.824510000000174 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.181312821149,
            "unit": "iter/sec",
            "range": "stddev: 0.00001624625167474034",
            "extra": "mean: 2.983459882005996 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.4399654021362,
            "unit": "iter/sec",
            "range": "stddev: 0.00001350363574672381",
            "extra": "mean: 1.8068807142855825 msec\nrounds: 560"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1629.9361811389958,
            "unit": "iter/sec",
            "range": "stddev: 0.000007367445585188673",
            "extra": "mean: 613.5209535021195 usec\nrounds: 1699"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1472.3128168039677,
            "unit": "iter/sec",
            "range": "stddev: 0.000006939337427709188",
            "extra": "mean: 679.2034875922335 usec\nrounds: 1491"
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
        "date": 1642432578953,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 171.98986194542016,
            "unit": "iter/sec",
            "range": "stddev: 0.00009459213010792456",
            "extra": "mean: 5.8142961956521795 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.75435948076912,
            "unit": "iter/sec",
            "range": "stddev: 0.00007728723033016224",
            "extra": "mean: 4.469186666666695 msec\nrounds: 240"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.9264357783027,
            "unit": "iter/sec",
            "range": "stddev: 0.00005481374683893058",
            "extra": "mean: 2.9246056910568248 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.1448755446767,
            "unit": "iter/sec",
            "range": "stddev: 0.0012837726892714653",
            "extra": "mean: 1.9336941102756977 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.1729826600963,
            "unit": "iter/sec",
            "range": "stddev: 0.00008095356211048116",
            "extra": "mean: 6.282473214285592 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 209.72629240594128,
            "unit": "iter/sec",
            "range": "stddev: 0.00008454504938092772",
            "extra": "mean: 4.768119383259889 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.94700584191054,
            "unit": "iter/sec",
            "range": "stddev: 0.00005846730646012956",
            "extra": "mean: 2.9944870967742614 msec\nrounds: 372"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 645.1758735704051,
            "unit": "iter/sec",
            "range": "stddev: 0.00002983534417837938",
            "extra": "mean: 1.5499649645390443 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.187241410113053,
            "unit": "iter/sec",
            "range": "stddev: 0.0005977098367707706",
            "extra": "mean: 45.07094782608689 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.534273207219712,
            "unit": "iter/sec",
            "range": "stddev: 0.0005219711611050616",
            "extra": "mean: 42.49122083333449 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.27306107955374,
            "unit": "iter/sec",
            "range": "stddev: 0.0000765873068823745",
            "extra": "mean: 3.963958718860799 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 425.3560350396813,
            "unit": "iter/sec",
            "range": "stddev: 0.00005181092256775689",
            "extra": "mean: 2.3509716981133475 msec\nrounds: 477"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1295.256919588651,
            "unit": "iter/sec",
            "range": "stddev: 0.00003134581003496041",
            "extra": "mean: 772.047602970985 usec\nrounds: 1481"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1146.3624782050076,
            "unit": "iter/sec",
            "range": "stddev: 0.000033821775590155746",
            "extra": "mean: 872.3244340357473 usec\nrounds: 1281"
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
        "date": 1642433741588,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.5218977549291,
            "unit": "iter/sec",
            "range": "stddev: 0.0002762094854849768",
            "extra": "mean: 5.448941037735872 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.57625295297592,
            "unit": "iter/sec",
            "range": "stddev: 0.00019892060782850544",
            "extra": "mean: 4.139479720279688 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.1058449030854,
            "unit": "iter/sec",
            "range": "stddev: 0.0001595890417215914",
            "extra": "mean: 2.680204595185988 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.0392516328968,
            "unit": "iter/sec",
            "range": "stddev: 0.00009166509733053074",
            "extra": "mean: 1.3226826488706713 msec\nrounds: 974"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 165.10955501046772,
            "unit": "iter/sec",
            "range": "stddev: 0.00020971464607421266",
            "extra": "mean: 6.056584671532797 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 225.51082538696912,
            "unit": "iter/sec",
            "range": "stddev: 0.00020101865900194453",
            "extra": "mean: 4.434376923076899 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 360.88409237650546,
            "unit": "iter/sec",
            "range": "stddev: 0.00017835765111816026",
            "extra": "mean: 2.770972789115663 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 701.0638717587364,
            "unit": "iter/sec",
            "range": "stddev: 0.00011063646761530519",
            "extra": "mean: 1.4264035564852775 msec\nrounds: 956"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.634920273268577,
            "unit": "iter/sec",
            "range": "stddev: 0.0011699834276896117",
            "extra": "mean: 42.31027600000047 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.036278530524285,
            "unit": "iter/sec",
            "range": "stddev: 0.001133782100785551",
            "extra": "mean: 39.942038461538836 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.0212082510302,
            "unit": "iter/sec",
            "range": "stddev: 0.00018463772994862135",
            "extra": "mean: 3.676183950617434 msec\nrounds: 324"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 413.4283047437546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004445510234313888",
            "extra": "mean: 2.418799072356224 msec\nrounds: 539"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1346.4185056821775,
            "unit": "iter/sec",
            "range": "stddev: 0.00003733600317749428",
            "extra": "mean: 742.7111227153991 usec\nrounds: 1915"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1241.4924447526455,
            "unit": "iter/sec",
            "range": "stddev: 0.000057577587198042226",
            "extra": "mean: 805.4821470937261 usec\nrounds: 1686"
          }
        ]
      }
    ]
  }
}