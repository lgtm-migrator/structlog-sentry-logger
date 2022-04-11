window.BENCHMARK_DATA = {
  "lastUpdate": 1649688267714,
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
        "date": 1643746344028,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.26948405260205,
            "unit": "iter/sec",
            "range": "stddev: 0.0004107943660035037",
            "extra": "mean: 5.228225531914879 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 248.4000560377732,
            "unit": "iter/sec",
            "range": "stddev: 0.0003260400440310332",
            "extra": "mean: 4.025763987138288 msec\nrounds: 311"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.9764912853751,
            "unit": "iter/sec",
            "range": "stddev: 0.0002209175747726906",
            "extra": "mean: 2.6739648702594967 msec\nrounds: 501"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 783.3143796727096,
            "unit": "iter/sec",
            "range": "stddev: 0.00014906829700099693",
            "extra": "mean: 1.2766266341463406 msec\nrounds: 1025"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.52985182080204,
            "unit": "iter/sec",
            "range": "stddev: 0.00041148920546837085",
            "extra": "mean: 5.729678846153761 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 220.68458936960664,
            "unit": "iter/sec",
            "range": "stddev: 0.00024310956830186738",
            "extra": "mean: 4.531354014598552 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 368.0435763594461,
            "unit": "iter/sec",
            "range": "stddev: 0.00023987952042790926",
            "extra": "mean: 2.7170695652173533 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 688.5618836932,
            "unit": "iter/sec",
            "range": "stddev: 0.00009258556085090453",
            "extra": "mean: 1.4523022892820572 msec\nrounds: 961"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.105335804064275,
            "unit": "iter/sec",
            "range": "stddev: 0.0013536268360904496",
            "extra": "mean: 43.28004615384547 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.150902999641914,
            "unit": "iter/sec",
            "range": "stddev: 0.0016595133533612852",
            "extra": "mean: 39.76000384615365 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 271.913954204043,
            "unit": "iter/sec",
            "range": "stddev: 0.0002572278817535941",
            "extra": "mean: 3.677633988763977 msec\nrounds: 356"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 476.1698021514308,
            "unit": "iter/sec",
            "range": "stddev: 0.00021103792017485587",
            "extra": "mean: 2.1000911764706607 msec\nrounds: 612"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1383.6501439507724,
            "unit": "iter/sec",
            "range": "stddev: 0.0000661011810919274",
            "extra": "mean: 722.7260477454755 usec\nrounds: 1885"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1266.3547913298137,
            "unit": "iter/sec",
            "range": "stddev: 0.00009036009914990436",
            "extra": "mean: 789.6681142177292 usec\nrounds: 1681"
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
        "date": 1643755001885,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.14719736455658,
            "unit": "iter/sec",
            "range": "stddev: 0.00004125759723483159",
            "extra": "mean: 4.996322772277234 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.74139811587645,
            "unit": "iter/sec",
            "range": "stddev: 0.000023540463521627",
            "extra": "mean: 3.820564905660382 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.6277426376629,
            "unit": "iter/sec",
            "range": "stddev: 0.000020690246176208846",
            "extra": "mean: 2.527628606965143 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.3861432992421,
            "unit": "iter/sec",
            "range": "stddev: 0.0000091575553236602",
            "extra": "mean: 1.2324588092345525 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.64967511307046,
            "unit": "iter/sec",
            "range": "stddev: 0.0000348399149297511",
            "extra": "mean: 5.386489361702073 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 245.25803964260183,
            "unit": "iter/sec",
            "range": "stddev: 0.000011780998577571205",
            "extra": "mean: 4.077338306451577 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.1471119138039,
            "unit": "iter/sec",
            "range": "stddev: 0.000012417748568301275",
            "extra": "mean: 2.5964104859334904 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 755.5324823948154,
            "unit": "iter/sec",
            "range": "stddev: 0.000009923058169503939",
            "extra": "mean: 1.3235698309492858 msec\nrounds: 769"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.127592891182903,
            "unit": "iter/sec",
            "range": "stddev: 0.00005227887017401077",
            "extra": "mean: 39.79688799999991 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.605255168539212,
            "unit": "iter/sec",
            "range": "stddev: 0.00006986745285651653",
            "extra": "mean: 37.58655925925877 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.1345526943925,
            "unit": "iter/sec",
            "range": "stddev: 0.000012860028362140479",
            "extra": "mean: 3.4114026845635976 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.7050852849062,
            "unit": "iter/sec",
            "range": "stddev: 0.00017908798989579871",
            "extra": "mean: 2.0462238476954213 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1481.8924817768736,
            "unit": "iter/sec",
            "range": "stddev: 0.000006122724941814385",
            "extra": "mean: 674.8127899272038 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1319.9916690345053,
            "unit": "iter/sec",
            "range": "stddev: 0.00000623458362414724",
            "extra": "mean: 757.5805389222191 usec\nrounds: 1336"
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
        "date": 1643755295055,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 177.87897114803042,
            "unit": "iter/sec",
            "range": "stddev: 0.00020994361785622883",
            "extra": "mean: 5.621800000000015 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.51778654182607,
            "unit": "iter/sec",
            "range": "stddev: 0.000245036944023199",
            "extra": "mean: 4.192559450171829 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 352.70438226241004,
            "unit": "iter/sec",
            "range": "stddev: 0.00008500453342667489",
            "extra": "mean: 2.8352355408388594 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 727.6451224375779,
            "unit": "iter/sec",
            "range": "stddev: 0.00006326552603418042",
            "extra": "mean: 1.3742963007159943 msec\nrounds: 838"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.7153399399967,
            "unit": "iter/sec",
            "range": "stddev: 0.00014353855465609774",
            "extra": "mean: 6.222181407035268 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 213.6381768481297,
            "unit": "iter/sec",
            "range": "stddev: 0.00012586142089354355",
            "extra": "mean: 4.680811336032306 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.8617865621105,
            "unit": "iter/sec",
            "range": "stddev: 0.00011272428419962805",
            "extra": "mean: 2.916627163461527 msec\nrounds: 416"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 664.8358880311695,
            "unit": "iter/sec",
            "range": "stddev: 0.00005716420969218131",
            "extra": "mean: 1.5041305952381396 msec\nrounds: 840"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.310509867659817,
            "unit": "iter/sec",
            "range": "stddev: 0.0008335703252722585",
            "extra": "mean: 44.82192499999963 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.303224133762292,
            "unit": "iter/sec",
            "range": "stddev: 0.001478460327637998",
            "extra": "mean: 41.14680400000054 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 270.18305408506643,
            "unit": "iter/sec",
            "range": "stddev: 0.0001817913419443679",
            "extra": "mean: 3.7011943750001164 msec\nrounds: 320"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 447.71413715705773,
            "unit": "iter/sec",
            "range": "stddev: 0.00009602369879070699",
            "extra": "mean: 2.2335680672267912 msec\nrounds: 595"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1393.8529627859918,
            "unit": "iter/sec",
            "range": "stddev: 0.000051703180362676464",
            "extra": "mean: 717.4357889236966 usec\nrounds: 1914"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1210.0576225616571,
            "unit": "iter/sec",
            "range": "stddev: 0.00006108796100186426",
            "extra": "mean: 826.4069258809583 usec\nrounds: 1646"
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
        "date": 1643757256268,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 189.13100124344203,
            "unit": "iter/sec",
            "range": "stddev: 0.00034303603389344807",
            "extra": "mean: 5.287340485829921 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 251.9949146498636,
            "unit": "iter/sec",
            "range": "stddev: 0.0003093791402249004",
            "extra": "mean: 3.9683340490797527 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.8347515325148,
            "unit": "iter/sec",
            "range": "stddev: 0.000227260649953128",
            "extra": "mean: 2.5327051282051336 msec\nrounds: 507"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.8748890662222,
            "unit": "iter/sec",
            "range": "stddev: 0.00006762903515848683",
            "extra": "mean: 1.3317797872340444 msec\nrounds: 1034"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.51036589538458,
            "unit": "iter/sec",
            "range": "stddev: 0.00043948545098821377",
            "extra": "mean: 5.53984805825253 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 235.60602691103117,
            "unit": "iter/sec",
            "range": "stddev: 0.000326802379116011",
            "extra": "mean: 4.244373597359702 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.7363951323441,
            "unit": "iter/sec",
            "range": "stddev: 0.00023416997851189627",
            "extra": "mean: 2.5924439918533104 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 757.3488171885385,
            "unit": "iter/sec",
            "range": "stddev: 0.0001353753317535658",
            "extra": "mean: 1.3203955394189975 msec\nrounds: 964"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.211929627467747,
            "unit": "iter/sec",
            "range": "stddev: 0.0015330064138761078",
            "extra": "mean: 41.30195384615394 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.561372713878175,
            "unit": "iter/sec",
            "range": "stddev: 0.0019102185957911898",
            "extra": "mean: 39.12152962962997 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 284.1139180135054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002543674321234503",
            "extra": "mean: 3.5197149333334132 msec\nrounds: 375"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 482.00247351064246,
            "unit": "iter/sec",
            "range": "stddev: 0.00018412983226193233",
            "extra": "mean: 2.0746781499201585 msec\nrounds: 627"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1388.3994049124435,
            "unit": "iter/sec",
            "range": "stddev: 0.00005785838915774515",
            "extra": "mean: 720.2538379531089 usec\nrounds: 1876"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1254.4345128541247,
            "unit": "iter/sec",
            "range": "stddev: 0.00007148190078702866",
            "extra": "mean: 797.1719446117373 usec\nrounds: 1661"
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
        "date": 1643757687073,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.80456146680982,
            "unit": "iter/sec",
            "range": "stddev: 0.00001647569014247694",
            "extra": "mean: 5.030065671641789 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.60149589207003,
            "unit": "iter/sec",
            "range": "stddev: 0.000011175927143005961",
            "extra": "mean: 3.8372765151515367 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.35929781711576,
            "unit": "iter/sec",
            "range": "stddev: 0.000011809704980514315",
            "extra": "mean: 2.497756403940943 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.3177761157601,
            "unit": "iter/sec",
            "range": "stddev: 0.000010578810731859274",
            "extra": "mean: 1.2495036719706167 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.88295553295225,
            "unit": "iter/sec",
            "range": "stddev: 0.0001005428641386585",
            "extra": "mean: 5.43824193548378 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.91876974085673,
            "unit": "iter/sec",
            "range": "stddev: 0.000021889639571160054",
            "extra": "mean: 4.116602439024327 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 387.80886805400615,
            "unit": "iter/sec",
            "range": "stddev: 0.00001084025463874093",
            "extra": "mean: 2.578589821882929 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.2960596494254,
            "unit": "iter/sec",
            "range": "stddev: 0.000009816327008404371",
            "extra": "mean: 1.3310332020996176 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.7080692205453,
            "unit": "iter/sec",
            "range": "stddev: 0.000046556327174251686",
            "extra": "mean: 40.47260800000018 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.24307384720169,
            "unit": "iter/sec",
            "range": "stddev: 0.00008851259310727791",
            "extra": "mean: 38.10529230769323 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.40963104959525,
            "unit": "iter/sec",
            "range": "stddev: 0.00005839730113457665",
            "extra": "mean: 3.3623658940393986 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 484.6217287543253,
            "unit": "iter/sec",
            "range": "stddev: 0.00021203312334515127",
            "extra": "mean: 2.0634650505052803 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1452.059767328091,
            "unit": "iter/sec",
            "range": "stddev: 0.000006088638215275055",
            "extra": "mean: 688.6768867923955 usec\nrounds: 1484"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1308.1103134944133,
            "unit": "iter/sec",
            "range": "stddev: 0.000006302671275436111",
            "extra": "mean: 764.4615210843003 usec\nrounds: 1328"
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
        "date": 1643758453344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.12883541464075,
            "unit": "iter/sec",
            "range": "stddev: 0.000014464554121826455",
            "extra": "mean: 4.996781188118798 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.0888592197011,
            "unit": "iter/sec",
            "range": "stddev: 0.00004943503440910497",
            "extra": "mean: 3.8301136363636252 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.1716268061375,
            "unit": "iter/sec",
            "range": "stddev: 0.000023026546650769423",
            "extra": "mean: 2.5178032178217693 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.9493896650348,
            "unit": "iter/sec",
            "range": "stddev: 0.00000926440053093989",
            "extra": "mean: 1.2423141291108153 msec\nrounds: 821"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.7096556824346,
            "unit": "iter/sec",
            "range": "stddev: 0.000015321816469139186",
            "extra": "mean: 5.413902139037431 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.69385197063755,
            "unit": "iter/sec",
            "range": "stddev: 0.000009652063012252365",
            "extra": "mean: 4.103509349593641 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.96710474426203,
            "unit": "iter/sec",
            "range": "stddev: 0.000010114963226875259",
            "extra": "mean: 2.590894373401562 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.030520099032,
            "unit": "iter/sec",
            "range": "stddev: 0.000009391290292091337",
            "extra": "mean: 1.3226979247729453 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.063013428361682,
            "unit": "iter/sec",
            "range": "stddev: 0.00022859571066238796",
            "extra": "mean: 39.89943199999985 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.610315873318637,
            "unit": "iter/sec",
            "range": "stddev: 0.00004292901415617134",
            "extra": "mean: 37.57941111111236 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.59818490812506,
            "unit": "iter/sec",
            "range": "stddev: 0.000011268544661400387",
            "extra": "mean: 3.360235548172854 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.31486214858114,
            "unit": "iter/sec",
            "range": "stddev: 0.000009650132635331384",
            "extra": "mean: 2.0148499999998615 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1483.7492583712979,
            "unit": "iter/sec",
            "range": "stddev: 0.00000559677613341655",
            "extra": "mean: 673.9683233929253 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1321.3142961680246,
            "unit": "iter/sec",
            "range": "stddev: 0.000005875808813387665",
            "extra": "mean: 756.8222056630462 usec\nrounds: 1342"
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
        "date": 1643759038432,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.1026795540751,
            "unit": "iter/sec",
            "range": "stddev: 0.000012351492447133516",
            "extra": "mean: 4.9974343283582225 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.1976533310009,
            "unit": "iter/sec",
            "range": "stddev: 0.00000944648458293387",
            "extra": "mean: 3.813916666666693 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.5432015910138,
            "unit": "iter/sec",
            "range": "stddev: 0.000010518672316534466",
            "extra": "mean: 2.5091382716050012 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.619197905319,
            "unit": "iter/sec",
            "range": "stddev: 0.000008181167990242807",
            "extra": "mean: 1.2490332515337206 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.40486891128202,
            "unit": "iter/sec",
            "range": "stddev: 0.000018350684428949255",
            "extra": "mean: 5.393601612903216 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.5812331825496,
            "unit": "iter/sec",
            "range": "stddev: 0.000009300140459973057",
            "extra": "mean: 4.088621138211466 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.29634080111896,
            "unit": "iter/sec",
            "range": "stddev: 0.000009955817658731304",
            "extra": "mean: 2.5954048717949716 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.4802039178911,
            "unit": "iter/sec",
            "range": "stddev: 0.000008489159104713507",
            "extra": "mean: 1.332480183727016 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.76509563834186,
            "unit": "iter/sec",
            "range": "stddev: 0.000040487460198663594",
            "extra": "mean: 40.37941199999963 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.20353860647972,
            "unit": "iter/sec",
            "range": "stddev: 0.000042354963744353434",
            "extra": "mean: 38.162784615384574 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.4324441689633,
            "unit": "iter/sec",
            "range": "stddev: 0.000010217792338236834",
            "extra": "mean: 3.362107999999916 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.75894262731066,
            "unit": "iter/sec",
            "range": "stddev: 0.000008919608985065748",
            "extra": "mean: 2.041820808080609 msec\nrounds: 495"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1428.0547565863455,
            "unit": "iter/sec",
            "range": "stddev: 0.00001549075214451807",
            "extra": "mean: 700.2532608696481 usec\nrounds: 1472"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.1170090447379,
            "unit": "iter/sec",
            "range": "stddev: 0.000006869023925950974",
            "extra": "mean: 780.5688262195878 usec\nrounds: 1312"
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
        "date": 1643759973474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.2154525430508,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049370766380715",
            "extra": "mean: 5.04501534653464 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.63661192031356,
            "unit": "iter/sec",
            "range": "stddev: 0.000009617665769551566",
            "extra": "mean: 3.8075422641509307 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 396.5655249864945,
            "unit": "iter/sec",
            "range": "stddev: 0.000010520121404433264",
            "extra": "mean: 2.521651371571082 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 796.4110516558592,
            "unit": "iter/sec",
            "range": "stddev: 0.000008110116536056367",
            "extra": "mean: 1.25563300248138 msec\nrounds: 806"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.15317117876236,
            "unit": "iter/sec",
            "range": "stddev: 0.000030997847458510114",
            "extra": "mean: 5.400933689839513 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.34975808878409,
            "unit": "iter/sec",
            "range": "stddev: 0.00001021788485925877",
            "extra": "mean: 4.092494331983957 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 386.1358703773252,
            "unit": "iter/sec",
            "range": "stddev: 0.000016201026430850296",
            "extra": "mean: 2.5897619897960205 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 746.3225130700074,
            "unit": "iter/sec",
            "range": "stddev: 0.00000732697070154559",
            "extra": "mean: 1.3399033025099123 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.31668130308363,
            "unit": "iter/sec",
            "range": "stddev: 0.00007603529947728809",
            "extra": "mean: 39.499648000000604 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.718181960319008,
            "unit": "iter/sec",
            "range": "stddev: 0.00003360112728801006",
            "extra": "mean: 37.42769629629621 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.6252569737035,
            "unit": "iter/sec",
            "range": "stddev: 0.000010198233653789172",
            "extra": "mean: 3.359929900332197 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.65776697224345,
            "unit": "iter/sec",
            "range": "stddev: 0.000010757871867005704",
            "extra": "mean: 2.029806626506186 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1460.0226512921297,
            "unit": "iter/sec",
            "range": "stddev: 0.000006142364024366127",
            "extra": "mean: 684.9208805870193 usec\nrounds: 1499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1320.5623945098912,
            "unit": "iter/sec",
            "range": "stddev: 0.000005606715131002828",
            "extra": "mean: 757.2531249999258 usec\nrounds: 1344"
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
        "date": 1643761403769,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.22452277198332,
            "unit": "iter/sec",
            "range": "stddev: 0.00001550013161720195",
            "extra": "mean: 5.0447845000000076 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.93429143615526,
            "unit": "iter/sec",
            "range": "stddev: 0.00010670278260490392",
            "extra": "mean: 3.861983650190138 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.1857853554855,
            "unit": "iter/sec",
            "range": "stddev: 0.000011714148331928281",
            "extra": "mean: 2.5304553884711716 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.0072871191164,
            "unit": "iter/sec",
            "range": "stddev: 0.000008286553440919094",
            "extra": "mean: 1.2468714637146148 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.369922135772,
            "unit": "iter/sec",
            "range": "stddev: 0.00024286360501035034",
            "extra": "mean: 5.54416162162147 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.10883943342304,
            "unit": "iter/sec",
            "range": "stddev: 0.000009912562618276424",
            "extra": "mean: 4.130373770491712 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.7761296507803,
            "unit": "iter/sec",
            "range": "stddev: 0.00001142406179532932",
            "extra": "mean: 2.619336103896081 msec\nrounds: 385"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.0178122538388,
            "unit": "iter/sec",
            "range": "stddev: 0.000009055217753743895",
            "extra": "mean: 1.3350817345597445 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.912482449156073,
            "unit": "iter/sec",
            "range": "stddev: 0.0000609054800487252",
            "extra": "mean: 40.140520000000066 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.226275055927513,
            "unit": "iter/sec",
            "range": "stddev: 0.00006351774555265413",
            "extra": "mean: 38.12970000000003 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.18371124771005,
            "unit": "iter/sec",
            "range": "stddev: 0.000014452438076610003",
            "extra": "mean: 3.3877208053693297 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.8365438646378,
            "unit": "iter/sec",
            "range": "stddev: 0.000010736689830681273",
            "extra": "mean: 2.0249615230461826 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1466.6066196106797,
            "unit": "iter/sec",
            "range": "stddev: 0.00000565911275641425",
            "extra": "mean: 681.8460973982625 usec\nrounds: 1499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.6534941237326,
            "unit": "iter/sec",
            "range": "stddev: 0.000006717573981341718",
            "extra": "mean: 774.2014437691028 usec\nrounds: 1316"
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
        "date": 1643775001737,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 163.19763774967169,
            "unit": "iter/sec",
            "range": "stddev: 0.000449629654042553",
            "extra": "mean: 6.12753967391303 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 216.4221482329636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004925763485723914",
            "extra": "mean: 4.620599176954701 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 349.1101564825601,
            "unit": "iter/sec",
            "range": "stddev: 0.00006043405482906866",
            "extra": "mean: 2.86442540106952 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 705.6908478169904,
            "unit": "iter/sec",
            "range": "stddev: 0.00003017215941236294",
            "extra": "mean: 1.4170511111110995 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.416701053977,
            "unit": "iter/sec",
            "range": "stddev: 0.00011809815770942545",
            "extra": "mean: 6.272868484848456 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.98682304915152,
            "unit": "iter/sec",
            "range": "stddev: 0.00011754527243485874",
            "extra": "mean: 4.7172743362833405 msec\nrounds: 226"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 340.43032631691216,
            "unit": "iter/sec",
            "range": "stddev: 0.0000851386300880358",
            "extra": "mean: 2.9374586301370917 msec\nrounds: 365"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 668.5490098140314,
            "unit": "iter/sec",
            "range": "stddev: 0.00004743418616895726",
            "extra": "mean: 1.4957766526019798 msec\nrounds: 711"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.012386324183865,
            "unit": "iter/sec",
            "range": "stddev: 0.0006375320368657309",
            "extra": "mean: 47.590977272727294 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.62776330235984,
            "unit": "iter/sec",
            "range": "stddev: 0.0005219383192480076",
            "extra": "mean: 42.32309200000003 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.9702822042596,
            "unit": "iter/sec",
            "range": "stddev: 0.0000747114725412906",
            "extra": "mean: 3.8764154981549575 msec\nrounds: 271"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 423.1956763172204,
            "unit": "iter/sec",
            "range": "stddev: 0.00007431509774721432",
            "extra": "mean: 2.362973101952055 msec\nrounds: 461"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1340.918337235106,
            "unit": "iter/sec",
            "range": "stddev: 0.00003731090249633556",
            "extra": "mean: 745.7575694444903 usec\nrounds: 1440"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1183.1433124991781,
            "unit": "iter/sec",
            "range": "stddev: 0.000028367876988656308",
            "extra": "mean: 845.2061465721167 usec\nrounds: 1269"
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
        "date": 1643775285145,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.22420180246377,
            "unit": "iter/sec",
            "range": "stddev: 0.000013970873917906139",
            "extra": "mean: 4.440020175438628 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.8048461168182,
            "unit": "iter/sec",
            "range": "stddev: 0.0000111977971280209",
            "extra": "mean: 3.392074496644278 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 452.7201064860892,
            "unit": "iter/sec",
            "range": "stddev: 0.000010212027507528197",
            "extra": "mean: 2.2088703056768852 msec\nrounds: 458"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 905.3549972883462,
            "unit": "iter/sec",
            "range": "stddev: 0.000009166000072322473",
            "extra": "mean: 1.1045391067538453 msec\nrounds: 918"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 208.73712260130884,
            "unit": "iter/sec",
            "range": "stddev: 0.00001242110424790823",
            "extra": "mean: 4.790714691943013 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 275.56674152402474,
            "unit": "iter/sec",
            "range": "stddev: 0.000011763860151530567",
            "extra": "mean: 3.6288849462365795 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.3384099855883,
            "unit": "iter/sec",
            "range": "stddev: 0.000009856500121064354",
            "extra": "mean: 2.2709806306307203 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 850.9821744379647,
            "unit": "iter/sec",
            "range": "stddev: 0.000009267564360703364",
            "extra": "mean: 1.1751127462340265 msec\nrounds: 863"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.32597769553905,
            "unit": "iter/sec",
            "range": "stddev: 0.000048186987491992734",
            "extra": "mean: 35.30328275862076 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.88728012301649,
            "unit": "iter/sec",
            "range": "stddev: 0.00016075648053658482",
            "extra": "mean: 33.4590499999995 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 338.835446348817,
            "unit": "iter/sec",
            "range": "stddev: 0.000012723688157044669",
            "extra": "mean: 2.951285087719369 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 556.3222522292023,
            "unit": "iter/sec",
            "range": "stddev: 0.000009882003606710628",
            "extra": "mean: 1.7975193262411593 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1656.0545926961809,
            "unit": "iter/sec",
            "range": "stddev: 0.0000051624542581570425",
            "extra": "mean: 603.8448275862241 usec\nrounds: 1682"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1478.619360540906,
            "unit": "iter/sec",
            "range": "stddev: 0.000005194856350109416",
            "extra": "mean: 676.3065780730625 usec\nrounds: 1505"
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
        "date": 1643781756858,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.71709725407885,
            "unit": "iter/sec",
            "range": "stddev: 0.000018605814824253428",
            "extra": "mean: 5.007082587064673 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.0624730379116,
            "unit": "iter/sec",
            "range": "stddev: 0.000012805727862764218",
            "extra": "mean: 3.8305007547169736 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.095272713797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000133498491111416",
            "extra": "mean: 2.518287344913172 msec\nrounds: 403"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.3376722088816,
            "unit": "iter/sec",
            "range": "stddev: 0.00000880649507241133",
            "extra": "mean: 1.23253243902441 msec\nrounds: 820"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.74676888894854,
            "unit": "iter/sec",
            "range": "stddev: 0.00001890736871305255",
            "extra": "mean: 5.472052972973106 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.68827554288904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010091288908308729",
            "extra": "mean: 4.103603252032536 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.9330698855377,
            "unit": "iter/sec",
            "range": "stddev: 0.000012059715791301754",
            "extra": "mean: 2.597854219948825 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.5063281253537,
            "unit": "iter/sec",
            "range": "stddev: 0.000012043365335212628",
            "extra": "mean: 1.3306607843137108 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.08848457625173,
            "unit": "iter/sec",
            "range": "stddev: 0.00011534767473458365",
            "extra": "mean: 39.8589240000004 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.447084037568143,
            "unit": "iter/sec",
            "range": "stddev: 0.00017174426061478123",
            "extra": "mean: 37.811351851852464 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.9503397417545,
            "unit": "iter/sec",
            "range": "stddev: 0.000014089614508410838",
            "extra": "mean: 3.367566445182918 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 486.77189928279637,
            "unit": "iter/sec",
            "range": "stddev: 0.000018137223391623057",
            "extra": "mean: 2.0543503054991206 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1501.8543923323687,
            "unit": "iter/sec",
            "range": "stddev: 0.00000600649479480553",
            "extra": "mean: 665.8435099337477 usec\nrounds: 1510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1312.966524928075,
            "unit": "iter/sec",
            "range": "stddev: 0.000006000784063727738",
            "extra": "mean: 761.6340409400617 usec\nrounds: 1319"
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
        "date": 1643823741545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.86585256025717,
            "unit": "iter/sec",
            "range": "stddev: 0.0003765795370785741",
            "extra": "mean: 5.105535175879394 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.09454734614354,
            "unit": "iter/sec",
            "range": "stddev: 0.000014219859084558535",
            "extra": "mean: 3.8447557251908195 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.41531229525634,
            "unit": "iter/sec",
            "range": "stddev: 0.00002031783866963546",
            "extra": "mean: 2.528986533665901 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.3105235182359,
            "unit": "iter/sec",
            "range": "stddev: 0.000011145478834388377",
            "extra": "mean: 1.2542164821647788 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.34777667626142,
            "unit": "iter/sec",
            "range": "stddev: 0.000036328911583594303",
            "extra": "mean: 5.514266666666561 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.07606078159867,
            "unit": "iter/sec",
            "range": "stddev: 0.00006898814376003718",
            "extra": "mean: 4.148068442622943 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.0463039197928,
            "unit": "iter/sec",
            "range": "stddev: 0.000017976013384712018",
            "extra": "mean: 2.624352971576105 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.0274742543329,
            "unit": "iter/sec",
            "range": "stddev: 0.000008227781144545526",
            "extra": "mean: 1.347658994708929 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.916976633856248,
            "unit": "iter/sec",
            "range": "stddev: 0.0005360865687247245",
            "extra": "mean: 40.13327999999959 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.404166225374446,
            "unit": "iter/sec",
            "range": "stddev: 0.000046125809006100666",
            "extra": "mean: 37.87281111111164 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 294.29303994016453,
            "unit": "iter/sec",
            "range": "stddev: 0.00026557616208156665",
            "extra": "mean: 3.3979736666668003 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.3062992585722,
            "unit": "iter/sec",
            "range": "stddev: 0.000010728813171152511",
            "extra": "mean: 2.043709638554139 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.8196307109713,
            "unit": "iter/sec",
            "range": "stddev: 0.0000056546152355934045",
            "extra": "mean: 680.8187874749177 usec\nrounds: 1501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1306.9026289688188,
            "unit": "iter/sec",
            "range": "stddev: 0.000005997255552796337",
            "extra": "mean: 765.1679458239569 usec\nrounds: 1329"
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
        "date": 1643830173658,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.06097654803625,
            "unit": "iter/sec",
            "range": "stddev: 0.000012208383523714957",
            "extra": "mean: 5.100454040404075 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.2020192731089,
            "unit": "iter/sec",
            "range": "stddev: 0.000011252420678091032",
            "extra": "mean: 3.857994636015344 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.53945615386294,
            "unit": "iter/sec",
            "range": "stddev: 0.00000986064114705889",
            "extra": "mean: 2.534600746268629 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.420540141625,
            "unit": "iter/sec",
            "range": "stddev: 0.000007155028545292278",
            "extra": "mean: 1.2477843403206044 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.44431610678174,
            "unit": "iter/sec",
            "range": "stddev: 0.000014424409034438045",
            "extra": "mean: 5.392454301075394 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.0809713598812,
            "unit": "iter/sec",
            "range": "stddev: 0.000012579687714808262",
            "extra": "mean: 4.147983950617233 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.984226843724,
            "unit": "iter/sec",
            "range": "stddev: 0.000010524154854871704",
            "extra": "mean: 2.611073589743549 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 744.3483950612413,
            "unit": "iter/sec",
            "range": "stddev: 0.000006350684128390586",
            "extra": "mean: 1.3434569169961401 msec\nrounds: 759"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.24560863129604,
            "unit": "iter/sec",
            "range": "stddev: 0.007334572434869243",
            "extra": "mean: 44.95269230769253 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.89887494797539,
            "unit": "iter/sec",
            "range": "stddev: 0.00004562620542751593",
            "extra": "mean: 35.84373928571516 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 301.06647616893537,
            "unit": "iter/sec",
            "range": "stddev: 0.000009625070150831",
            "extra": "mean: 3.3215255737702156 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 520.2425794220767,
            "unit": "iter/sec",
            "range": "stddev: 0.000010886361442977372",
            "extra": "mean: 1.922180228136791 msec\nrounds: 526"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1427.790831693615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000054736053686795885",
            "extra": "mean: 700.3827015850924 usec\nrounds: 1451"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1281.1209342494199,
            "unit": "iter/sec",
            "range": "stddev: 0.000005550904541073831",
            "extra": "mean: 780.566434648012 usec\nrounds: 1293"
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
        "date": 1643842688279,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 130.5266116670756,
            "unit": "iter/sec",
            "range": "stddev: 0.0008935342085555441",
            "extra": "mean: 7.6612729559748685 msec\nrounds: 159"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 193.3739430072862,
            "unit": "iter/sec",
            "range": "stddev: 0.0003896584678390844",
            "extra": "mean: 5.171327555555512 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 275.05513732829394,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591186165386346",
            "extra": "mean: 3.635634693877553 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 566.9974695601975,
            "unit": "iter/sec",
            "range": "stddev: 0.0002334877324553657",
            "extra": "mean: 1.763676301369862 msec\nrounds: 730"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.51330699973764,
            "unit": "iter/sec",
            "range": "stddev: 0.0005786215263118937",
            "extra": "mean: 7.781295364238362 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 174.7534092334203,
            "unit": "iter/sec",
            "range": "stddev: 0.00044846132481106383",
            "extra": "mean: 5.722349019607895 msec\nrounds: 204"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 272.77462487614,
            "unit": "iter/sec",
            "range": "stddev: 0.0005612610655086173",
            "extra": "mean: 3.6660301538461444 msec\nrounds: 325"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.5401408848377,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743904287424425",
            "extra": "mean: 1.8197032857142303 msec\nrounds: 700"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.768731576732492,
            "unit": "iter/sec",
            "range": "stddev: 0.0025658739813621016",
            "extra": "mean: 43.919881818182006 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.741359017929746,
            "unit": "iter/sec",
            "range": "stddev: 0.0022222776269613088",
            "extra": "mean: 43.97274583333299 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 201.2527123992188,
            "unit": "iter/sec",
            "range": "stddev: 0.0006490196313378729",
            "extra": "mean: 4.96887713004499 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 353.64036739302895,
            "unit": "iter/sec",
            "range": "stddev: 0.00030465139132513367",
            "extra": "mean: 2.8277314814816363 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1017.8184915392793,
            "unit": "iter/sec",
            "range": "stddev: 0.0001797992660609951",
            "extra": "mean: 982.4934487952445 usec\nrounds: 1328"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 986.6191599009867,
            "unit": "iter/sec",
            "range": "stddev: 0.0002385448441675122",
            "extra": "mean: 1.0135623152710274 msec\nrounds: 1218"
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
        "date": 1643898390147,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.30197184265802,
            "unit": "iter/sec",
            "range": "stddev: 0.0002951411120093808",
            "extra": "mean: 5.017511822660064 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.260193979515,
            "unit": "iter/sec",
            "range": "stddev: 0.000008995027325212672",
            "extra": "mean: 3.8130071698113266 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.05923209138786,
            "unit": "iter/sec",
            "range": "stddev: 0.000010540270138195176",
            "extra": "mean: 2.4933972839506504 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 811.0293687235117,
            "unit": "iter/sec",
            "range": "stddev: 0.00000773153866006302",
            "extra": "mean: 1.2330009720534676 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.81739892736823,
            "unit": "iter/sec",
            "range": "stddev: 0.00001698462057214369",
            "extra": "mean: 5.410745989304784 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.82623680236844,
            "unit": "iter/sec",
            "range": "stddev: 0.000008665405081974435",
            "extra": "mean: 4.118171138211397 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.27018475824553,
            "unit": "iter/sec",
            "range": "stddev: 0.000019788894836313586",
            "extra": "mean: 2.5955810741687504 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.0908783075434,
            "unit": "iter/sec",
            "range": "stddev: 0.000007964006261890165",
            "extra": "mean: 1.334951511169576 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.307505661094257,
            "unit": "iter/sec",
            "range": "stddev: 0.000045019584797774256",
            "extra": "mean: 39.51396923076936 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.676509969506636,
            "unit": "iter/sec",
            "range": "stddev: 0.00004886998566184964",
            "extra": "mean: 37.486162962961764 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.97799728497,
            "unit": "iter/sec",
            "range": "stddev: 0.00001569590712075255",
            "extra": "mean: 3.3672528239202646 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.64648722066465,
            "unit": "iter/sec",
            "range": "stddev: 0.000009498548108704051",
            "extra": "mean: 2.0506658536586375 msec\nrounds: 492"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1469.9895416264549,
            "unit": "iter/sec",
            "range": "stddev: 0.0000072854614324406806",
            "extra": "mean: 680.2769487009821 usec\nrounds: 1501"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1295.4773283107352,
            "unit": "iter/sec",
            "range": "stddev: 0.000005619314571468723",
            "extra": "mean: 771.9162490508197 usec\nrounds: 1317"
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
        "date": 1643987854330,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 139.49020575151965,
            "unit": "iter/sec",
            "range": "stddev: 0.0007616160010090159",
            "extra": "mean: 7.168962111801212 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 181.6440121529416,
            "unit": "iter/sec",
            "range": "stddev: 0.0009107786573325616",
            "extra": "mean: 5.505273684210491 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 289.193392956064,
            "unit": "iter/sec",
            "range": "stddev: 0.00044884546977776304",
            "extra": "mean: 3.4578936599423837 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 604.7428820024567,
            "unit": "iter/sec",
            "range": "stddev: 0.00028123974854700316",
            "extra": "mean: 1.6535953208556122 msec\nrounds: 748"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 132.1077328131527,
            "unit": "iter/sec",
            "range": "stddev: 0.0006186550313861046",
            "extra": "mean: 7.569579605263195 msec\nrounds: 152"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 178.65473350273848,
            "unit": "iter/sec",
            "range": "stddev: 0.00047830725655003585",
            "extra": "mean: 5.597388775510231 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 273.01058748581437,
            "unit": "iter/sec",
            "range": "stddev: 0.00047664694743263967",
            "extra": "mean: 3.662861609907198 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 587.9347710342944,
            "unit": "iter/sec",
            "range": "stddev: 0.0002096464034828554",
            "extra": "mean: 1.700868955650983 msec\nrounds: 699"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.68061097073663,
            "unit": "iter/sec",
            "range": "stddev: 0.0031029105208525832",
            "extra": "mean: 48.35447083333344 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.54441111045309,
            "unit": "iter/sec",
            "range": "stddev: 0.0015193472156817044",
            "extra": "mean: 46.41574999999939 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.57469588328337,
            "unit": "iter/sec",
            "range": "stddev: 0.0006354576347285703",
            "extra": "mean: 5.035888362068911 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 355.01426493229974,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907778570091891",
            "extra": "mean: 2.8167882217090554 msec\nrounds: 433"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1133.5849844200652,
            "unit": "iter/sec",
            "range": "stddev: 0.00018978073666041855",
            "extra": "mean: 882.1570625440081 usec\nrounds: 1423"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1004.0051687375279,
            "unit": "iter/sec",
            "range": "stddev: 0.00024799366162276147",
            "extra": "mean: 996.0108086469673 usec\nrounds: 1249"
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
        "date": 1643988153564,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.017364429114,
            "unit": "iter/sec",
            "range": "stddev: 0.0003136238499550517",
            "extra": "mean: 5.127748510638321 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.2691947901505,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669853842050271",
            "extra": "mean: 3.8569950464396223 msec\nrounds: 323"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.21054276233764,
            "unit": "iter/sec",
            "range": "stddev: 0.00023108559451635342",
            "extra": "mean: 2.4986847999999924 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.3573842315719,
            "unit": "iter/sec",
            "range": "stddev: 0.00013277732841566933",
            "extra": "mean: 1.2355481268011532 msec\nrounds: 1041"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 180.84072941632039,
            "unit": "iter/sec",
            "range": "stddev: 0.0003872793463519556",
            "extra": "mean: 5.529727751196257 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.77338488329008,
            "unit": "iter/sec",
            "range": "stddev: 0.0003066142035533013",
            "extra": "mean: 4.11906766666674 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 375.5432627384234,
            "unit": "iter/sec",
            "range": "stddev: 0.0002241870761523137",
            "extra": "mean: 2.662809053497862 msec\nrounds: 486"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.7443760139565,
            "unit": "iter/sec",
            "range": "stddev: 0.00015100550353198445",
            "extra": "mean: 1.337355427974941 msec\nrounds: 958"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.0332362569158,
            "unit": "iter/sec",
            "range": "stddev: 0.0013902608047862315",
            "extra": "mean: 39.946892592592185 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.015031935627086,
            "unit": "iter/sec",
            "range": "stddev: 0.001531346676974384",
            "extra": "mean: 37.016428571428506 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.86590451824145,
            "unit": "iter/sec",
            "range": "stddev: 0.0002787653482550571",
            "extra": "mean: 3.3799095628416542 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 477.80532797490713,
            "unit": "iter/sec",
            "range": "stddev: 0.00019787287114061587",
            "extra": "mean: 2.0929025723474495 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1449.297769822634,
            "unit": "iter/sec",
            "range": "stddev: 0.0000692086860740295",
            "extra": "mean: 689.9893319523844 usec\nrounds: 1931"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1322.5678053162699,
            "unit": "iter/sec",
            "range": "stddev: 0.00009712781108673244",
            "extra": "mean: 756.104901374691 usec\nrounds: 1673"
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
        "date": 1644011177260,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 195.33072747674137,
            "unit": "iter/sec",
            "range": "stddev: 0.00013388480771607016",
            "extra": "mean: 5.11952222222217 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.9726057318712,
            "unit": "iter/sec",
            "range": "stddev: 0.000009384726040918372",
            "extra": "mean: 3.8914653846154086 msec\nrounds: 260"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 371.51769833770845,
            "unit": "iter/sec",
            "range": "stddev: 0.0001711635812176663",
            "extra": "mean: 2.69166180904524 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 792.5883829582376,
            "unit": "iter/sec",
            "range": "stddev: 0.000008414417826944907",
            "extra": "mean: 1.2616889440993626 msec\nrounds: 805"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.6462630599189,
            "unit": "iter/sec",
            "range": "stddev: 0.000014281455457133487",
            "extra": "mean: 5.505205464480897 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.73326157758427,
            "unit": "iter/sec",
            "range": "stddev: 0.000008144817673598406",
            "extra": "mean: 4.1539752066114755 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.9560476014444,
            "unit": "iter/sec",
            "range": "stddev: 0.000010391565614127428",
            "extra": "mean: 2.611265721649432 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.4357630617834,
            "unit": "iter/sec",
            "range": "stddev: 0.000008097556248639601",
            "extra": "mean: 1.3414972148540687 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.26351792543782,
            "unit": "iter/sec",
            "range": "stddev: 0.000028946692650491837",
            "extra": "mean: 39.582769230768946 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.568691827480585,
            "unit": "iter/sec",
            "range": "stddev: 0.00006431245664520282",
            "extra": "mean: 37.638285185184685 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.79356814197075,
            "unit": "iter/sec",
            "range": "stddev: 0.000010788001335844838",
            "extra": "mean: 3.38073612040149 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.35448209223165,
            "unit": "iter/sec",
            "range": "stddev: 0.000008604377506498193",
            "extra": "mean: 2.0774710472279168 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1425.525741462668,
            "unit": "iter/sec",
            "range": "stddev: 0.00006283195615889195",
            "extra": "mean: 701.4955752212127 usec\nrounds: 1469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1284.5943472530691,
            "unit": "iter/sec",
            "range": "stddev: 0.000005517460965266752",
            "extra": "mean: 778.4558620691149 usec\nrounds: 1305"
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
        "date": 1644244335977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.68382734980528,
            "unit": "iter/sec",
            "range": "stddev: 0.00003578642581340387",
            "extra": "mean: 5.00791683168314 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.3490066469429,
            "unit": "iter/sec",
            "range": "stddev: 0.000017354345109172986",
            "extra": "mean: 3.8263011320754816 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 401.49422933429094,
            "unit": "iter/sec",
            "range": "stddev: 0.000014154847635200968",
            "extra": "mean: 2.4906958230958356 msec\nrounds: 407"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 803.1529264195842,
            "unit": "iter/sec",
            "range": "stddev: 0.000008440695954115886",
            "extra": "mean: 1.2450928921568527 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.28334535303338,
            "unit": "iter/sec",
            "range": "stddev: 0.000023700320549192485",
            "extra": "mean: 5.426426344086007 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.04167797130143,
            "unit": "iter/sec",
            "range": "stddev: 0.000011616460333684147",
            "extra": "mean: 4.097660728744854 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.2316296864621,
            "unit": "iter/sec",
            "range": "stddev: 0.000013341886564232321",
            "extra": "mean: 2.5757818877550114 msec\nrounds: 392"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 749.6065548033653,
            "unit": "iter/sec",
            "range": "stddev: 0.000008945289460175362",
            "extra": "mean: 1.3340331585845286 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.989159702521054,
            "unit": "iter/sec",
            "range": "stddev: 0.0005225647217650505",
            "extra": "mean: 40.01735199999999 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.36693516018989,
            "unit": "iter/sec",
            "range": "stddev: 0.00008459687816311817",
            "extra": "mean: 37.92628888889027 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.8519394244403,
            "unit": "iter/sec",
            "range": "stddev: 0.000013467738014128005",
            "extra": "mean: 3.368682724252629 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 488.51450308147497,
            "unit": "iter/sec",
            "range": "stddev: 0.000012099341535865897",
            "extra": "mean: 2.04702213279678 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.46050454344,
            "unit": "iter/sec",
            "range": "stddev: 0.000006594357637671792",
            "extra": "mean: 680.9852882702559 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.381043193078,
            "unit": "iter/sec",
            "range": "stddev: 0.000006114803198522363",
            "extra": "mean: 764.8879454131085 usec\nrounds: 1319"
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
        "date": 1644418223957,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 178.33700827633064,
            "unit": "iter/sec",
            "range": "stddev: 0.00021111201032575453",
            "extra": "mean: 5.607361083743842 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.06910441702416,
            "unit": "iter/sec",
            "range": "stddev: 0.0002317617587911832",
            "extra": "mean: 4.200461048689066 msec\nrounds: 267"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 373.5596438330528,
            "unit": "iter/sec",
            "range": "stddev: 0.000177344977861539",
            "extra": "mean: 2.676948692152916 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 764.3881017532037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009776393344418205",
            "extra": "mean: 1.3082359572400406 msec\nrounds: 1029"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.99101552775159,
            "unit": "iter/sec",
            "range": "stddev: 0.00028669628528068506",
            "extra": "mean: 6.135307499999811 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.21740206112221,
            "unit": "iter/sec",
            "range": "stddev: 0.00026941745864487803",
            "extra": "mean: 4.479937454545664 msec\nrounds: 275"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.33989584919766,
            "unit": "iter/sec",
            "range": "stddev: 0.00017106997260125093",
            "extra": "mean: 2.790646566523634 msec\nrounds: 466"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 707.5730801959627,
            "unit": "iter/sec",
            "range": "stddev: 0.00011534018812389225",
            "extra": "mean: 1.413281578947364 msec\nrounds: 950"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.480379515722017,
            "unit": "iter/sec",
            "range": "stddev: 0.001016015637231466",
            "extra": "mean: 44.483234782608264 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.086370255298064,
            "unit": "iter/sec",
            "range": "stddev: 0.0007856080888291151",
            "extra": "mean: 41.5172560000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 267.70457632635316,
            "unit": "iter/sec",
            "range": "stddev: 0.00019619624612220442",
            "extra": "mean: 3.7354609836064983 msec\nrounds: 305"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 461.6132148886516,
            "unit": "iter/sec",
            "range": "stddev: 0.00015580504998203976",
            "extra": "mean: 2.166315798045807 msec\nrounds: 614"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1393.4878229016274,
            "unit": "iter/sec",
            "range": "stddev: 0.00005908200537901399",
            "extra": "mean: 717.6237808219402 usec\nrounds: 1825"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1251.0821521058972,
            "unit": "iter/sec",
            "range": "stddev: 0.00007321237748392242",
            "extra": "mean: 799.3080217128343 usec\nrounds: 1658"
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
        "date": 1644419379698,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 172.67300444881778,
            "unit": "iter/sec",
            "range": "stddev: 0.000027303967812781104",
            "extra": "mean: 5.791293220338975 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.80223405250695,
            "unit": "iter/sec",
            "range": "stddev: 0.00002009868420333997",
            "extra": "mean: 4.370586695279006 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 347.7996071410224,
            "unit": "iter/sec",
            "range": "stddev: 0.00002565931778695042",
            "extra": "mean: 2.8752188888888814 msec\nrounds: 360"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 709.3491132399305,
            "unit": "iter/sec",
            "range": "stddev: 0.000011105881185776622",
            "extra": "mean: 1.409743074792228 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.6456259004887,
            "unit": "iter/sec",
            "range": "stddev: 0.00005890313060386647",
            "extra": "mean: 6.224881595092082 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 212.6373560313465,
            "unit": "iter/sec",
            "range": "stddev: 0.000016804803560617935",
            "extra": "mean: 4.702842523364438 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.30609693801415,
            "unit": "iter/sec",
            "range": "stddev: 0.00018639869598168518",
            "extra": "mean: 3.0274948275861275 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 662.8926731500521,
            "unit": "iter/sec",
            "range": "stddev: 0.00000972131068588271",
            "extra": "mean: 1.5085398293030166 msec\nrounds: 703"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.051076909445356,
            "unit": "iter/sec",
            "range": "stddev: 0.00005532196376974094",
            "extra": "mean: 45.34925909090907 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.34168738808768,
            "unit": "iter/sec",
            "range": "stddev: 0.00007667956180972057",
            "extra": "mean: 42.84180416666642 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.9384586660304,
            "unit": "iter/sec",
            "range": "stddev: 0.0003278831976014004",
            "extra": "mean: 3.9071892720307524 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 435.8595385700467,
            "unit": "iter/sec",
            "range": "stddev: 0.000014809708693239321",
            "extra": "mean: 2.2943171171170564 msec\nrounds: 444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1317.3366336083875,
            "unit": "iter/sec",
            "range": "stddev: 0.000013252168344987672",
            "extra": "mean: 759.1074099722304 usec\nrounds: 1444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1152.3249534313998,
            "unit": "iter/sec",
            "range": "stddev: 0.00000907818503161009",
            "extra": "mean: 867.8107655502854 usec\nrounds: 1254"
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
        "date": 1644539071214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.30814844979193,
            "unit": "iter/sec",
            "range": "stddev: 0.0005440643682763463",
            "extra": "mean: 5.455294859813065 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.48023360842134,
            "unit": "iter/sec",
            "range": "stddev: 0.0005651975025182679",
            "extra": "mean: 4.193219642857175 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 372.58961685885225,
            "unit": "iter/sec",
            "range": "stddev: 0.00015638665642873654",
            "extra": "mean: 2.6839180555555555 msec\nrounds: 432"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 774.9327175807009,
            "unit": "iter/sec",
            "range": "stddev: 0.00009551837110379977",
            "extra": "mean: 1.2904346110484886 msec\nrounds: 887"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.7951650185144,
            "unit": "iter/sec",
            "range": "stddev: 0.00027151678651764357",
            "extra": "mean: 5.753899999999827 msec\nrounds: 195"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 230.87648320448423,
            "unit": "iter/sec",
            "range": "stddev: 0.0002250908189561817",
            "extra": "mean: 4.331320306513476 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.2320365227251,
            "unit": "iter/sec",
            "range": "stddev: 0.00016711465477473842",
            "extra": "mean: 2.701008830548945 msec\nrounds: 419"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 734.1194610798394,
            "unit": "iter/sec",
            "range": "stddev: 0.0001022770301561897",
            "extra": "mean: 1.362176121212028 msec\nrounds: 825"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.63803102009352,
            "unit": "iter/sec",
            "range": "stddev: 0.0013701178379731595",
            "extra": "mean: 42.30470800000006 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 24.878468680496205,
            "unit": "iter/sec",
            "range": "stddev: 0.0013105936062721188",
            "extra": "mean: 40.19539999999931 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 282.5332607394755,
            "unit": "iter/sec",
            "range": "stddev: 0.0001927075161331054",
            "extra": "mean: 3.539406289308012 msec\nrounds: 318"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 469.5647292356068,
            "unit": "iter/sec",
            "range": "stddev: 0.00013565099084119337",
            "extra": "mean: 2.129631843575381 msec\nrounds: 537"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1453.3349621410896,
            "unit": "iter/sec",
            "range": "stddev: 0.00005367656973670749",
            "extra": "mean: 688.0726233453951 usec\nrounds: 1662"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1218.5331304916654,
            "unit": "iter/sec",
            "range": "stddev: 0.000050090649326533",
            "extra": "mean: 820.6588520055343 usec\nrounds: 1446"
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
        "date": 1644540082176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.2053452250472,
            "unit": "iter/sec",
            "range": "stddev: 0.0005597811632210882",
            "extra": "mean: 8.182948120300717 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.446614747171,
            "unit": "iter/sec",
            "range": "stddev: 0.0006828142306761519",
            "extra": "mean: 6.155868508287366 msec\nrounds: 181"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.60028405225324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006936732293379066",
            "extra": "mean: 4.262569433962266 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 510.5003940955684,
            "unit": "iter/sec",
            "range": "stddev: 0.0003384591461014516",
            "extra": "mean: 1.958862346760098 msec\nrounds: 571"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.91171359073911,
            "unit": "iter/sec",
            "range": "stddev: 0.0004945305771136334",
            "extra": "mean: 8.856477049180297 msec\nrounds: 122"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.05927263842247,
            "unit": "iter/sec",
            "range": "stddev: 0.00041867737802953335",
            "extra": "mean: 6.4910081871345895 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.38116104144757,
            "unit": "iter/sec",
            "range": "stddev: 0.000318070105358645",
            "extra": "mean: 4.266554511278156 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 481.95101430743557,
            "unit": "iter/sec",
            "range": "stddev: 0.00048064300629713767",
            "extra": "mean: 2.074899668874028 msec\nrounds: 604"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.790136906816645,
            "unit": "iter/sec",
            "range": "stddev: 0.0025065554991703766",
            "extra": "mean: 53.219409999999634 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.286132086310115,
            "unit": "iter/sec",
            "range": "stddev: 0.002220537764404478",
            "extra": "mean: 51.85072857142934 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.15131921668643,
            "unit": "iter/sec",
            "range": "stddev: 0.0004449412435787326",
            "extra": "mean: 5.70934894736854 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.20547396884217,
            "unit": "iter/sec",
            "range": "stddev: 0.0004109060622445758",
            "extra": "mean: 3.3310518518519365 msec\nrounds: 351"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 974.2409073567375,
            "unit": "iter/sec",
            "range": "stddev: 0.00016921665444232537",
            "extra": "mean: 1.0264401673638925 msec\nrounds: 1195"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 887.4475957113258,
            "unit": "iter/sec",
            "range": "stddev: 0.00018119066000349166",
            "extra": "mean: 1.126827099236726 msec\nrounds: 1048"
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
        "date": 1644597354868,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.31469204349386,
            "unit": "iter/sec",
            "range": "stddev: 0.00001310060300115034",
            "extra": "mean: 5.042490748898637 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.63227326471593,
            "unit": "iter/sec",
            "range": "stddev: 0.000007676261842410849",
            "extra": "mean: 3.866493486590042 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 393.33731928295475,
            "unit": "iter/sec",
            "range": "stddev: 0.000010356775533998195",
            "extra": "mean: 2.542347117794411 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.1196187598224,
            "unit": "iter/sec",
            "range": "stddev: 0.000020716998944909054",
            "extra": "mean: 1.2576724009901015 msec\nrounds: 808"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.62182638208782,
            "unit": "iter/sec",
            "range": "stddev: 0.000020051214391738532",
            "extra": "mean: 5.445975675675717 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.02560215970607,
            "unit": "iter/sec",
            "range": "stddev: 0.00001012857344337737",
            "extra": "mean: 4.131794285714151 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.7521727398991,
            "unit": "iter/sec",
            "range": "stddev: 0.00001111410537467823",
            "extra": "mean: 2.5990756410257414 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 752.5870548927043,
            "unit": "iter/sec",
            "range": "stddev: 0.000008455751202503708",
            "extra": "mean: 1.3287499346405436 msec\nrounds: 765"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.852152062167082,
            "unit": "iter/sec",
            "range": "stddev: 0.00010350613057562217",
            "extra": "mean: 40.237963999999806 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.413532415714513,
            "unit": "iter/sec",
            "range": "stddev: 0.000044895348714414234",
            "extra": "mean: 37.859381481480995 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.21208151005345,
            "unit": "iter/sec",
            "range": "stddev: 0.000012783194758715348",
            "extra": "mean: 3.375959531772373 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.14727850560786,
            "unit": "iter/sec",
            "range": "stddev: 0.00001079294639467192",
            "extra": "mean: 2.0443740442655565 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.7965577072541,
            "unit": "iter/sec",
            "range": "stddev: 0.000007003541100003953",
            "extra": "mean: 675.312212737933 usec\nrounds: 1523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1331.2222269344022,
            "unit": "iter/sec",
            "range": "stddev: 0.000005894114086915158",
            "extra": "mean: 751.189380531036 usec\nrounds: 1356"
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
        "date": 1644600112442,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.60426028088247,
            "unit": "iter/sec",
            "range": "stddev: 0.0007881702547467973",
            "extra": "mean: 6.345006145251397 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.9918894925342,
            "unit": "iter/sec",
            "range": "stddev: 0.0005724599404485371",
            "extra": "mean: 4.484468032786816 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.71340701737324,
            "unit": "iter/sec",
            "range": "stddev: 0.00007222422848109746",
            "extra": "mean: 2.8033709424083866 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.7230113770386,
            "unit": "iter/sec",
            "range": "stddev: 0.00003878769226750715",
            "extra": "mean: 1.3874955901426886 msec\nrounds: 771"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 159.3439483280217,
            "unit": "iter/sec",
            "range": "stddev: 0.00005042707692179477",
            "extra": "mean: 6.275732530120464 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.14595722143738,
            "unit": "iter/sec",
            "range": "stddev: 0.00003351842909131902",
            "extra": "mean: 4.73606036866365 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 341.90590582688304,
            "unit": "iter/sec",
            "range": "stddev: 0.00004716849656155238",
            "extra": "mean: 2.924781300813006 msec\nrounds: 369"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 661.900675790527,
            "unit": "iter/sec",
            "range": "stddev: 0.00001428175553585616",
            "extra": "mean: 1.5108006934811955 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.79744002420086,
            "unit": "iter/sec",
            "range": "stddev: 0.0018578446151283957",
            "extra": "mean: 48.082840909090436 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.05411869775953,
            "unit": "iter/sec",
            "range": "stddev: 0.0016888274551180625",
            "extra": "mean: 45.343004347826856 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 242.06473932664738,
            "unit": "iter/sec",
            "range": "stddev: 0.0005984310688725322",
            "extra": "mean: 4.131126254826311 msec\nrounds: 259"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 440.51941330045463,
            "unit": "iter/sec",
            "range": "stddev: 0.000028701688361728267",
            "extra": "mean: 2.2700475161986873 msec\nrounds: 463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1313.4247855232138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012964437384464083",
            "extra": "mean: 761.3683029452209 usec\nrounds: 1426"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1168.2292004158553,
            "unit": "iter/sec",
            "range": "stddev: 0.000024274884038477732",
            "extra": "mean: 855.9964086191558 usec\nrounds: 1253"
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
        "date": 1644600543759,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.6233164529259,
            "unit": "iter/sec",
            "range": "stddev: 0.000015788256496356956",
            "extra": "mean: 5.06013165829145 msec\nrounds: 199"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 257.8638087847981,
            "unit": "iter/sec",
            "range": "stddev: 0.000008417087111170647",
            "extra": "mean: 3.8780160919540148 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.2553975771451,
            "unit": "iter/sec",
            "range": "stddev: 0.000010133051375309688",
            "extra": "mean: 2.5300097256858387 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.4016195139442,
            "unit": "iter/sec",
            "range": "stddev: 0.00000834046373070944",
            "extra": "mean: 1.2462587009803785 msec\nrounds: 816"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.2605151017136,
            "unit": "iter/sec",
            "range": "stddev: 0.000017011259353076233",
            "extra": "mean: 5.486651891891849 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.80570990489747,
            "unit": "iter/sec",
            "range": "stddev: 0.000009419830528034652",
            "extra": "mean: 4.135551639344255 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.4012737155904,
            "unit": "iter/sec",
            "range": "stddev: 0.000010856442702888963",
            "extra": "mean: 2.6014481958763667 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 754.4754267650425,
            "unit": "iter/sec",
            "range": "stddev: 0.000008113679695642326",
            "extra": "mean: 1.3254242146595696 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.175019251337208,
            "unit": "iter/sec",
            "range": "stddev: 0.00016470466164265036",
            "extra": "mean: 39.72191600000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.606809884882498,
            "unit": "iter/sec",
            "range": "stddev: 0.0000649133632570919",
            "extra": "mean: 37.58436296296392 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.54653869533246,
            "unit": "iter/sec",
            "range": "stddev: 0.00002608353805711135",
            "extra": "mean: 3.3835618729098416 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.0993938099862,
            "unit": "iter/sec",
            "range": "stddev: 0.000010202148784054372",
            "extra": "mean: 2.0157250996017457 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.0814878227466,
            "unit": "iter/sec",
            "range": "stddev: 0.000006101248755969577",
            "extra": "mean: 679.31022044101 usec\nrounds: 1497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1302.1914542554937,
            "unit": "iter/sec",
            "range": "stddev: 0.000005411222423426988",
            "extra": "mean: 767.9362329802213 usec\nrounds: 1322"
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
        "date": 1644601039410,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.438647531456,
            "unit": "iter/sec",
            "range": "stddev: 0.00039543516058971413",
            "extra": "mean: 5.867213888888909 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 227.26326502613148,
            "unit": "iter/sec",
            "range": "stddev: 0.00006938765029013677",
            "extra": "mean: 4.4001831967212865 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.1671355532547,
            "unit": "iter/sec",
            "range": "stddev: 0.000024319797953939177",
            "extra": "mean: 2.888777984084971 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 711.6509556987974,
            "unit": "iter/sec",
            "range": "stddev: 0.00002768409287115064",
            "extra": "mean: 1.4051832460732967 msec\nrounds: 764"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.6333510190644,
            "unit": "iter/sec",
            "range": "stddev: 0.00007189437258543279",
            "extra": "mean: 6.303844642857106 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.42734020753753,
            "unit": "iter/sec",
            "range": "stddev: 0.00006582118985257114",
            "extra": "mean: 4.7297572727273485 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.70398311457734,
            "unit": "iter/sec",
            "range": "stddev: 0.00001366731174274188",
            "extra": "mean: 2.996667857142867 msec\nrounds: 364"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 657.3442524643053,
            "unit": "iter/sec",
            "range": "stddev: 0.00002948215173121112",
            "extra": "mean: 1.5212729041915543 msec\nrounds: 668"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.217933195118526,
            "unit": "iter/sec",
            "range": "stddev: 0.000258070013940101",
            "extra": "mean: 45.00868695652162 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.454855218553487,
            "unit": "iter/sec",
            "range": "stddev: 0.00019399358904569387",
            "extra": "mean: 42.635095833333914 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.90836189224555,
            "unit": "iter/sec",
            "range": "stddev: 0.00013657736323430142",
            "extra": "mean: 3.9229784090908653 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 433.2958388000894,
            "unit": "iter/sec",
            "range": "stddev: 0.000012631284382264478",
            "extra": "mean: 2.3078919999999634 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1347.4770219707098,
            "unit": "iter/sec",
            "range": "stddev: 0.000010912893165404902",
            "extra": "mean: 742.1276828435128 usec\nrounds: 1463"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1193.8276005078737,
            "unit": "iter/sec",
            "range": "stddev: 0.000021355075109376632",
            "extra": "mean: 837.6418836141697 usec\nrounds: 1306"
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
        "date": 1644602722180,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.52877673292747,
            "unit": "iter/sec",
            "range": "stddev: 0.00003501480071474266",
            "extra": "mean: 5.062553499999998 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.898729785517,
            "unit": "iter/sec",
            "range": "stddev: 0.000012350422728107312",
            "extra": "mean: 3.862514122137423 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.22826112732366,
            "unit": "iter/sec",
            "range": "stddev: 0.000010921696986721221",
            "extra": "mean: 2.536601503759343 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.4656168115612,
            "unit": "iter/sec",
            "range": "stddev: 0.000008060812399413523",
            "extra": "mean: 1.253972558714462 msec\nrounds: 809"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.39796221824537,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773200122271856",
            "extra": "mean: 5.482517391304327 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.65643558182805,
            "unit": "iter/sec",
            "range": "stddev: 0.000008943293689882308",
            "extra": "mean: 4.121052868852441 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.3393267560297,
            "unit": "iter/sec",
            "range": "stddev: 0.00001035350404311874",
            "extra": "mean: 2.595115345268486 msec\nrounds: 391"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0596219267826,
            "unit": "iter/sec",
            "range": "stddev: 0.000008445400040667902",
            "extra": "mean: 1.336791842105169 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.11337685113204,
            "unit": "iter/sec",
            "range": "stddev: 0.00010092290655046945",
            "extra": "mean: 39.81941600000013 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.648035413067433,
            "unit": "iter/sec",
            "range": "stddev: 0.00010815758815098587",
            "extra": "mean: 37.52621851851896 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.72259519423784,
            "unit": "iter/sec",
            "range": "stddev: 0.000018257447282726002",
            "extra": "mean: 3.3815474916388295 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.1488177959434,
            "unit": "iter/sec",
            "range": "stddev: 0.000009611172968241875",
            "extra": "mean: 2.036042771084238 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1484.854050246307,
            "unit": "iter/sec",
            "range": "stddev: 0.000005831944802199806",
            "extra": "mean: 673.4668635170711 usec\nrounds: 1524"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1341.2544543003048,
            "unit": "iter/sec",
            "range": "stddev: 0.000005609996347445681",
            "extra": "mean: 745.5706833209902 usec\nrounds: 1361"
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
        "date": 1644937335469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.63506283252892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007487056207590035",
            "extra": "mean: 5.505544933920714 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 297.16632231780926,
            "unit": "iter/sec",
            "range": "stddev: 0.000013441385293010845",
            "extra": "mean: 3.365118874172202 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 453.08350090977785,
            "unit": "iter/sec",
            "range": "stddev: 0.00001346364331279572",
            "extra": "mean: 2.2070986870897538 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 916.3781298682592,
            "unit": "iter/sec",
            "range": "stddev: 0.000007419935953345449",
            "extra": "mean: 1.0912525816649101 msec\nrounds: 949"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.5465059448304,
            "unit": "iter/sec",
            "range": "stddev: 0.000016416009396711792",
            "extra": "mean: 4.772210328638365 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 276.8475644681532,
            "unit": "iter/sec",
            "range": "stddev: 0.000012597602559546114",
            "extra": "mean: 3.6120960714286277 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 440.4520200440125,
            "unit": "iter/sec",
            "range": "stddev: 0.000015220551819138787",
            "extra": "mean: 2.270394854586146 msec\nrounds: 447"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 858.3186802776614,
            "unit": "iter/sec",
            "range": "stddev: 0.000015200393634050514",
            "extra": "mean: 1.1650684331797432 msec\nrounds: 868"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.412926431487413,
            "unit": "iter/sec",
            "range": "stddev: 0.00011078233684869744",
            "extra": "mean: 35.19524827586196 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 30.102810127427787,
            "unit": "iter/sec",
            "range": "stddev: 0.00004046118915130653",
            "extra": "mean: 33.21949000000046 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.7055357146513,
            "unit": "iter/sec",
            "range": "stddev: 0.000015443623096770677",
            "extra": "mean: 2.943725947521763 msec\nrounds: 343"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 554.8579215118425,
            "unit": "iter/sec",
            "range": "stddev: 0.000009057193275663606",
            "extra": "mean: 1.8022631762654875 msec\nrounds: 573"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1660.400932129423,
            "unit": "iter/sec",
            "range": "stddev: 0.000009026934659712768",
            "extra": "mean: 602.2641764706341 usec\nrounds: 1700"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1484.5818458424346,
            "unit": "iter/sec",
            "range": "stddev: 0.000006298936438077755",
            "extra": "mean: 673.5903465346124 usec\nrounds: 1616"
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
        "date": 1644938524725,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 224.77913970713584,
            "unit": "iter/sec",
            "range": "stddev: 0.000017651510318498658",
            "extra": "mean: 4.448811403508784 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 267.15617113214836,
            "unit": "iter/sec",
            "range": "stddev: 0.0005481478008015068",
            "extra": "mean: 3.743128956228945 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 370.2006053379956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004002868248713135",
            "extra": "mean: 2.7012381546134785 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 809.5405783444576,
            "unit": "iter/sec",
            "range": "stddev: 0.000010140666061797289",
            "extra": "mean: 1.2352685297691184 msec\nrounds: 823"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.5121065537434,
            "unit": "iter/sec",
            "range": "stddev: 0.00002087300214995112",
            "extra": "mean: 5.479088586956477 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.94170727724364,
            "unit": "iter/sec",
            "range": "stddev: 0.00001853587616587379",
            "extra": "mean: 4.150381481481465 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.9305427208651,
            "unit": "iter/sec",
            "range": "stddev: 0.000014962023618844067",
            "extra": "mean: 2.604637789203047 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.9484419692125,
            "unit": "iter/sec",
            "range": "stddev: 0.000008968624289493911",
            "extra": "mean: 1.3316493438320471 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.173728938148166,
            "unit": "iter/sec",
            "range": "stddev: 0.00006110471967584663",
            "extra": "mean: 39.723951999999656 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.500796545238902,
            "unit": "iter/sec",
            "range": "stddev: 0.00007898657969650414",
            "extra": "mean: 37.734714814814076 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.36859095692245,
            "unit": "iter/sec",
            "range": "stddev: 0.000014113762581405415",
            "extra": "mean: 3.38560033333349 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.65588018693893,
            "unit": "iter/sec",
            "range": "stddev: 0.000011599985023560638",
            "extra": "mean: 2.0257026000000593 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.5666705800234,
            "unit": "iter/sec",
            "range": "stddev: 0.000006580690780303304",
            "extra": "mean: 679.547872340603 usec\nrounds: 1504"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1305.807373800687,
            "unit": "iter/sec",
            "range": "stddev: 0.000007286572740452325",
            "extra": "mean: 765.8097358490148 usec\nrounds: 1325"
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
        "date": 1644939018942,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.13361805341776,
            "unit": "iter/sec",
            "range": "stddev: 0.0003049867889844196",
            "extra": "mean: 5.072701500000003 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.94413541893516,
            "unit": "iter/sec",
            "range": "stddev: 0.000009031958722974604",
            "extra": "mean: 3.83223787878789 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.53961196383807,
            "unit": "iter/sec",
            "range": "stddev: 0.00001207484585901399",
            "extra": "mean: 2.528191791044747 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.2118679452568,
            "unit": "iter/sec",
            "range": "stddev: 0.000007610775989214694",
            "extra": "mean: 1.2434534229828982 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.090458067584,
            "unit": "iter/sec",
            "range": "stddev: 0.000020879757175078412",
            "extra": "mean: 5.461781081081085 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.3062109547961,
            "unit": "iter/sec",
            "range": "stddev: 0.000013008354145865773",
            "extra": "mean: 4.110047154471491 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.20891483205503,
            "unit": "iter/sec",
            "range": "stddev: 0.000010858572120822526",
            "extra": "mean: 2.60275064267345 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 747.6193914810209,
            "unit": "iter/sec",
            "range": "stddev: 0.000009284639232683146",
            "extra": "mean: 1.3375790026246075 msec\nrounds: 762"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.83488526531372,
            "unit": "iter/sec",
            "range": "stddev: 0.0000614671050241343",
            "extra": "mean: 40.265939999999745 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.310545315286,
            "unit": "iter/sec",
            "range": "stddev: 0.0001173380081132038",
            "extra": "mean: 38.0075740740735 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.22456434809925,
            "unit": "iter/sec",
            "range": "stddev: 0.000013722834050745085",
            "extra": "mean: 3.387252013422908 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.7462402006573,
            "unit": "iter/sec",
            "range": "stddev: 0.000015979320327051458",
            "extra": "mean: 2.021238200000113 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1452.4373616866424,
            "unit": "iter/sec",
            "range": "stddev: 0.000005466738276258662",
            "extra": "mean: 688.4978494623344 usec\nrounds: 1488"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1288.3318174555425,
            "unit": "iter/sec",
            "range": "stddev: 0.00000551699375072985",
            "extra": "mean: 776.197549770215 usec\nrounds: 1306"
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
        "date": 1645453803515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.77546441623926,
            "unit": "iter/sec",
            "range": "stddev: 0.00001708046791276321",
            "extra": "mean: 5.030801980198032 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.5653756400798,
            "unit": "iter/sec",
            "range": "stddev: 0.000011614961530094194",
            "extra": "mean: 3.8231359848484834 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 395.2115379637248,
            "unit": "iter/sec",
            "range": "stddev: 0.00002648132949411623",
            "extra": "mean: 2.5302904999999942 msec\nrounds: 400"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 790.79467550034,
            "unit": "iter/sec",
            "range": "stddev: 0.00000847493392708099",
            "extra": "mean: 1.2645507500000486 msec\nrounds: 800"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.45601947065867,
            "unit": "iter/sec",
            "range": "stddev: 0.00002589174996672789",
            "extra": "mean: 5.421346524064342 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.9911619373067,
            "unit": "iter/sec",
            "range": "stddev: 0.000014712722315902217",
            "extra": "mean: 4.115376016260239 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.78763887560575,
            "unit": "iter/sec",
            "range": "stddev: 0.000012155199528211307",
            "extra": "mean: 2.598836082474261 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 738.7828464421248,
            "unit": "iter/sec",
            "range": "stddev: 0.000008316763793398537",
            "extra": "mean: 1.3535777188328895 msec\nrounds: 754"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.108110502200667,
            "unit": "iter/sec",
            "range": "stddev: 0.00006651576078911088",
            "extra": "mean: 39.82776799999954 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.59504260525805,
            "unit": "iter/sec",
            "range": "stddev: 0.00008095762389052754",
            "extra": "mean: 37.600992592592874 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.50635314436596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001373163702414625",
            "extra": "mean: 3.361272757475356 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.5876743933658,
            "unit": "iter/sec",
            "range": "stddev: 0.000009995648507191207",
            "extra": "mean: 2.0425350806453038 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1495.9987197948012,
            "unit": "iter/sec",
            "range": "stddev: 0.00000560568217488558",
            "extra": "mean: 668.4497698882825 usec\nrounds: 1521"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1313.4484721469048,
            "unit": "iter/sec",
            "range": "stddev: 0.000007060401309435424",
            "extra": "mean: 761.354572490723 usec\nrounds: 1345"
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
        "date": 1645921134469,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.38740686905203,
            "unit": "iter/sec",
            "range": "stddev: 0.00001456874533797074",
            "extra": "mean: 5.015361881188172 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 259.05237851945526,
            "unit": "iter/sec",
            "range": "stddev: 0.00003209589689343328",
            "extra": "mean: 3.860223193916354 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 398.98688933031775,
            "unit": "iter/sec",
            "range": "stddev: 0.000010584729439593489",
            "extra": "mean: 2.5063480198019956 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.7699017569679,
            "unit": "iter/sec",
            "range": "stddev: 0.000007811481208141146",
            "extra": "mean: 1.2456869618696067 msec\nrounds: 813"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.37140225073207,
            "unit": "iter/sec",
            "range": "stddev: 0.00008501607294837325",
            "extra": "mean: 5.4833158469942385 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 241.58614372771058,
            "unit": "iter/sec",
            "range": "stddev: 0.00004657292455918125",
            "extra": "mean: 4.139310245901729 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.85276289782365,
            "unit": "iter/sec",
            "range": "stddev: 0.00001074105646748598",
            "extra": "mean: 2.6119701799484765 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 745.1882659271706,
            "unit": "iter/sec",
            "range": "stddev: 0.000008230866194875898",
            "extra": "mean: 1.341942762284092 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.74012722956819,
            "unit": "iter/sec",
            "range": "stddev: 0.00013913214605796643",
            "extra": "mean: 40.42016399999952 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.160897367076494,
            "unit": "iter/sec",
            "range": "stddev: 0.00004044285179795361",
            "extra": "mean: 38.22498846153881 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.89501881448126,
            "unit": "iter/sec",
            "range": "stddev: 0.000023216067503103943",
            "extra": "mean: 3.3795770000000402 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 494.3831645525459,
            "unit": "iter/sec",
            "range": "stddev: 0.00000993615436496029",
            "extra": "mean: 2.022722600000094 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1472.4382574280953,
            "unit": "iter/sec",
            "range": "stddev: 0.000006489888980799032",
            "extra": "mean: 679.1456245823833 usec\nrounds: 1497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1284.7999264150083,
            "unit": "iter/sec",
            "range": "stddev: 0.000005212115303790718",
            "extra": "mean: 778.3313023610697 usec\nrounds: 1313"
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
        "date": 1646063516713,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 128.82381707942884,
            "unit": "iter/sec",
            "range": "stddev: 0.0007883090852541017",
            "extra": "mean: 7.762539743589732 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 162.76328657053747,
            "unit": "iter/sec",
            "range": "stddev: 0.0013585307110479024",
            "extra": "mean: 6.143891666666644 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.71693679165236,
            "unit": "iter/sec",
            "range": "stddev: 0.0005280033518698198",
            "extra": "mean: 3.895340963855397 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 549.3362372630088,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146489009435285",
            "extra": "mean: 1.8203787264833657 msec\nrounds: 691"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.13513954183715,
            "unit": "iter/sec",
            "range": "stddev: 0.0011111357840058432",
            "extra": "mean: 8.121158620689538 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 161.75011704862817,
            "unit": "iter/sec",
            "range": "stddev: 0.0007961723188791837",
            "extra": "mean: 6.182375742574346 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.96031452639636,
            "unit": "iter/sec",
            "range": "stddev: 0.0004912522407100037",
            "extra": "mean: 3.891651525423684 msec\nrounds: 295"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 512.1734172697326,
            "unit": "iter/sec",
            "range": "stddev: 0.0005146265268807745",
            "extra": "mean: 1.9524636896048766 msec\nrounds: 683"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.11704278373793,
            "unit": "iter/sec",
            "range": "stddev: 0.002958796043676095",
            "extra": "mean: 49.70909545454528 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.115478355114615,
            "unit": "iter/sec",
            "range": "stddev: 0.002545847270601835",
            "extra": "mean: 47.35862399999945 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 191.15201800916782,
            "unit": "iter/sec",
            "range": "stddev: 0.0007650928604151795",
            "extra": "mean: 5.23143836206866 msec\nrounds: 232"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 344.7842210851708,
            "unit": "iter/sec",
            "range": "stddev: 0.0005074599327990845",
            "extra": "mean: 2.9003647465438203 msec\nrounds: 434"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 991.6415634441208,
            "unit": "iter/sec",
            "range": "stddev: 0.0002811996108657079",
            "extra": "mean: 1.0084288888888935 msec\nrounds: 1305"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 921.9525536697502,
            "unit": "iter/sec",
            "range": "stddev: 0.00026307070304349437",
            "extra": "mean: 1.0846545150502476 msec\nrounds: 1196"
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
        "date": 1646086330281,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.15174748253912,
            "unit": "iter/sec",
            "range": "stddev: 0.00003666139072361029",
            "extra": "mean: 5.911851428571413 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.0495157480168,
            "unit": "iter/sec",
            "range": "stddev: 0.000040221894193737874",
            "extra": "mean: 4.483309442060025 msec\nrounds: 233"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.3727440711494,
            "unit": "iter/sec",
            "range": "stddev: 0.000037920168558478166",
            "extra": "mean: 2.912287061994625 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 453.0433807436378,
            "unit": "iter/sec",
            "range": "stddev: 0.001674418083328996",
            "extra": "mean: 2.207294141145099 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.57669158124835,
            "unit": "iter/sec",
            "range": "stddev: 0.00003362686717173284",
            "extra": "mean: 6.306097005988046 msec\nrounds: 167"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 208.75108166539613,
            "unit": "iter/sec",
            "range": "stddev: 0.00003824220722306852",
            "extra": "mean: 4.790394339622559 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.29240347094856,
            "unit": "iter/sec",
            "range": "stddev: 0.000032409933812287506",
            "extra": "mean: 2.9824713881018337 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 652.2202035037354,
            "unit": "iter/sec",
            "range": "stddev: 0.000017321436109984523",
            "extra": "mean: 1.5332245070422337 msec\nrounds: 710"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.8751214939277,
            "unit": "iter/sec",
            "range": "stddev: 0.0001054258366565227",
            "extra": "mean: 45.71403181818164 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.037858400683348,
            "unit": "iter/sec",
            "range": "stddev: 0.00015433722623563452",
            "extra": "mean: 43.40681249999948 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.4438140620635,
            "unit": "iter/sec",
            "range": "stddev: 0.0000357177401466382",
            "extra": "mean: 3.8843427007297375 msec\nrounds: 274"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 432.2958478259618,
            "unit": "iter/sec",
            "range": "stddev: 0.00001940697118353695",
            "extra": "mean: 2.3132306382979424 msec\nrounds: 470"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1244.2025964069035,
            "unit": "iter/sec",
            "range": "stddev: 0.000006819529763958381",
            "extra": "mean: 803.7276267449297 usec\nrounds: 1361"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1130.0964647755993,
            "unit": "iter/sec",
            "range": "stddev: 0.000008223225717264989",
            "extra": "mean: 884.8802125919116 usec\nrounds: 1223"
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
        "date": 1646432254545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 145.16282997325777,
            "unit": "iter/sec",
            "range": "stddev: 0.0005144862225439381",
            "extra": "mean: 6.8888158227848155 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 182.47194577536385,
            "unit": "iter/sec",
            "range": "stddev: 0.0003779363189318658",
            "extra": "mean: 5.480294495412857 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 262.1454069574795,
            "unit": "iter/sec",
            "range": "stddev: 0.0004885786723226665",
            "extra": "mean: 3.8146767918089135 msec\nrounds: 293"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 539.5655394142609,
            "unit": "iter/sec",
            "range": "stddev: 0.00027248611294984306",
            "extra": "mean: 1.8533429712460425 msec\nrounds: 626"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.7705357190641,
            "unit": "iter/sec",
            "range": "stddev: 0.0005033426999073649",
            "extra": "mean: 7.475487741935435 msec\nrounds: 155"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.35195510623524,
            "unit": "iter/sec",
            "range": "stddev: 0.00044538760771827023",
            "extra": "mean: 5.5447139423077285 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.60228264846958,
            "unit": "iter/sec",
            "range": "stddev: 0.0008991434501250884",
            "extra": "mean: 4.1735829431439155 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 548.8974814391572,
            "unit": "iter/sec",
            "range": "stddev: 0.00043019954158624794",
            "extra": "mean: 1.8218338283828426 msec\nrounds: 606"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.025474088753292,
            "unit": "iter/sec",
            "range": "stddev: 0.003131120002813086",
            "extra": "mean: 45.40197391304384 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.145040712126377,
            "unit": "iter/sec",
            "range": "stddev: 0.002876401158809157",
            "extra": "mean: 43.20580000000044 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 206.40233700144697,
            "unit": "iter/sec",
            "range": "stddev: 0.0004712537169381047",
            "extra": "mean: 4.844906382978549 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 377.4761074984588,
            "unit": "iter/sec",
            "range": "stddev: 0.00032775794393179625",
            "extra": "mean: 2.6491742924526234 msec\nrounds: 424"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 961.9549546064129,
            "unit": "iter/sec",
            "range": "stddev: 0.00020776284979566996",
            "extra": "mean: 1.0395497161394145 msec\nrounds: 1233"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 871.8391077213205,
            "unit": "iter/sec",
            "range": "stddev: 0.00022271559137858476",
            "extra": "mean: 1.1470006233302 msec\nrounds: 1123"
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
        "date": 1646433383506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 191.3342538636871,
            "unit": "iter/sec",
            "range": "stddev: 0.00040200361663029387",
            "extra": "mean: 5.226455691056935 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 252.42617560328975,
            "unit": "iter/sec",
            "range": "stddev: 0.00033754262093956715",
            "extra": "mean: 3.9615542944785136 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.8033646874206,
            "unit": "iter/sec",
            "range": "stddev: 0.00024100121867378496",
            "extra": "mean: 2.5138047808765105 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 818.678079777204,
            "unit": "iter/sec",
            "range": "stddev: 0.00014593436040503027",
            "extra": "mean: 1.2214813425469278 msec\nrounds: 1013"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 187.66301639557605,
            "unit": "iter/sec",
            "range": "stddev: 0.0003873533863635451",
            "extra": "mean: 5.32870045045047 msec\nrounds: 222"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 249.374404374121,
            "unit": "iter/sec",
            "range": "stddev: 0.000339776523532204",
            "extra": "mean: 4.010034640522938 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 408.1702782472258,
            "unit": "iter/sec",
            "range": "stddev: 0.0002604474911617187",
            "extra": "mean: 2.4499579055442817 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 793.6155667901713,
            "unit": "iter/sec",
            "range": "stddev: 0.00015355893200235638",
            "extra": "mean: 1.2600559286463642 msec\nrounds: 953"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.151333328026123,
            "unit": "iter/sec",
            "range": "stddev: 0.0015529522643696217",
            "extra": "mean: 41.40558148148128 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.34692954287794,
            "unit": "iter/sec",
            "range": "stddev: 0.0028012018683748526",
            "extra": "mean: 39.452510344827274 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.0212761730597,
            "unit": "iter/sec",
            "range": "stddev: 0.0002897031025136046",
            "extra": "mean: 3.3781355614972113 msec\nrounds: 374"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 467.9327540523591,
            "unit": "iter/sec",
            "range": "stddev: 0.0001424694804100659",
            "extra": "mean: 2.13705920634935 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1544.4288579834176,
            "unit": "iter/sec",
            "range": "stddev: 0.00007863793315495322",
            "extra": "mean: 647.4885488126102 usec\nrounds: 1895"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1384.9450740771101,
            "unit": "iter/sec",
            "range": "stddev: 0.00009244598924981024",
            "extra": "mean: 722.0502955081976 usec\nrounds: 1692"
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
        "date": 1646433581896,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 193.85913309738245,
            "unit": "iter/sec",
            "range": "stddev: 0.00003838208648352061",
            "extra": "mean: 5.158384771573615 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 255.94217373473842,
            "unit": "iter/sec",
            "range": "stddev: 0.00001006422691858455",
            "extra": "mean: 3.9071325581395273 msec\nrounds: 258"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 390.3799370278721,
            "unit": "iter/sec",
            "range": "stddev: 0.00003047003828287369",
            "extra": "mean: 2.5616070528967856 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 435.0057049526375,
            "unit": "iter/sec",
            "range": "stddev: 0.001717791621998627",
            "extra": "mean: 2.2988204260651663 msec\nrounds: 798"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 182.42243233698022,
            "unit": "iter/sec",
            "range": "stddev: 0.00002114079313944263",
            "extra": "mean: 5.481781967213045 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 238.72102585457162,
            "unit": "iter/sec",
            "range": "stddev: 0.000013242988097421487",
            "extra": "mean: 4.188990041493865 msec\nrounds: 241"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.73128347349643,
            "unit": "iter/sec",
            "range": "stddev: 0.000011146853235524753",
            "extra": "mean: 2.612799222797915 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 742.393286154878,
            "unit": "iter/sec",
            "range": "stddev: 0.00001153232100205816",
            "extra": "mean: 1.3469949400800212 msec\nrounds: 751"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.709300027041817,
            "unit": "iter/sec",
            "range": "stddev: 0.00005699967046680315",
            "extra": "mean: 40.47059200000007 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.10080653499967,
            "unit": "iter/sec",
            "range": "stddev: 0.0000701192636756717",
            "extra": "mean: 38.31299230769202 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.82300879699534,
            "unit": "iter/sec",
            "range": "stddev: 0.000011515972270475494",
            "extra": "mean: 3.3803996655521713 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.04403589385646,
            "unit": "iter/sec",
            "range": "stddev: 0.000010486863353981714",
            "extra": "mean: 2.053202434077099 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1413.7764288808903,
            "unit": "iter/sec",
            "range": "stddev: 0.000006335595973156102",
            "extra": "mean: 707.3254155125325 usec\nrounds: 1444"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1286.4414586393852,
            "unit": "iter/sec",
            "range": "stddev: 0.000005920210273875556",
            "extra": "mean: 777.3381316998737 usec\nrounds: 1306"
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
        "date": 1646663595746,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.92475731745876,
            "unit": "iter/sec",
            "range": "stddev: 0.000020870323068019963",
            "extra": "mean: 5.88495764705886 msec\nrounds: 170"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 222.46896855837906,
            "unit": "iter/sec",
            "range": "stddev: 0.000013162819995634045",
            "extra": "mean: 4.4950089285714725 msec\nrounds: 224"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.09584377452444,
            "unit": "iter/sec",
            "range": "stddev: 0.000013375178997101263",
            "extra": "mean: 2.914637463976916 msec\nrounds: 347"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 700.3390188602489,
            "unit": "iter/sec",
            "range": "stddev: 0.000010447526584585517",
            "extra": "mean: 1.427879888268153 msec\nrounds: 716"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 157.29957644600415,
            "unit": "iter/sec",
            "range": "stddev: 0.000025628183844133685",
            "extra": "mean: 6.357296202531528 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 207.5376688316497,
            "unit": "iter/sec",
            "range": "stddev: 0.00001626703083924143",
            "extra": "mean: 4.818402392344397 msec\nrounds: 209"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.48581086983785,
            "unit": "iter/sec",
            "range": "stddev: 0.000022687019426023048",
            "extra": "mean: 3.025848514851522 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 649.3141619164976,
            "unit": "iter/sec",
            "range": "stddev: 0.000009959728354167395",
            "extra": "mean: 1.5400865384614866 msec\nrounds: 676"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.760747113708877,
            "unit": "iter/sec",
            "range": "stddev: 0.0002016143453823196",
            "extra": "mean: 45.9543045454546 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.916309637205035,
            "unit": "iter/sec",
            "range": "stddev: 0.000055607968903202696",
            "extra": "mean: 43.637043478260665 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 253.41266497335957,
            "unit": "iter/sec",
            "range": "stddev: 0.0000362962283599959",
            "extra": "mean: 3.946132684825072 msec\nrounds: 257"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 433.9960843909102,
            "unit": "iter/sec",
            "range": "stddev: 0.000013028976059960837",
            "extra": "mean: 2.30416825396811 msec\nrounds: 441"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1286.9010539837004,
            "unit": "iter/sec",
            "range": "stddev: 0.0000073643602794026055",
            "extra": "mean: 777.0605182927029 usec\nrounds: 1312"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1141.197005663915,
            "unit": "iter/sec",
            "range": "stddev: 0.000007666153004005252",
            "extra": "mean: 876.2728915663683 usec\nrounds: 1162"
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
        "date": 1646751844422,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 116.00627711646776,
            "unit": "iter/sec",
            "range": "stddev: 0.0014490214838387566",
            "extra": "mean: 8.620223188405761 msec\nrounds: 138"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.41183655258547,
            "unit": "iter/sec",
            "range": "stddev: 0.0008492934014302624",
            "extra": "mean: 6.045516577540046 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 248.59893781960784,
            "unit": "iter/sec",
            "range": "stddev: 0.0007006832578382988",
            "extra": "mean: 4.022543333333287 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 550.5794677080123,
            "unit": "iter/sec",
            "range": "stddev: 0.00042337115133353264",
            "extra": "mean: 1.816268238557577 msec\nrounds: 721"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 126.53140081779323,
            "unit": "iter/sec",
            "range": "stddev: 0.0007739415425287606",
            "extra": "mean: 7.9031765517242025 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 169.19781658066995,
            "unit": "iter/sec",
            "range": "stddev: 0.0006277497131350074",
            "extra": "mean: 5.910241752577352 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 255.60340189681793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003963663625069172",
            "extra": "mean: 3.912310996563654 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 526.01965772013,
            "unit": "iter/sec",
            "range": "stddev: 0.00047547052290741276",
            "extra": "mean: 1.9010696374622038 msec\nrounds: 662"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.708844818916567,
            "unit": "iter/sec",
            "range": "stddev: 0.0030038252621244696",
            "extra": "mean: 50.73864090909068 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.65927510582127,
            "unit": "iter/sec",
            "range": "stddev: 0.0038432116032539277",
            "extra": "mean: 53.59265000000042 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 178.0154414381454,
            "unit": "iter/sec",
            "range": "stddev: 0.0011089466353015778",
            "extra": "mean: 5.617490212765996 msec\nrounds: 235"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 301.35910719529085,
            "unit": "iter/sec",
            "range": "stddev: 0.0007533744355722585",
            "extra": "mean: 3.318300247524845 msec\nrounds: 404"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 933.3894980670723,
            "unit": "iter/sec",
            "range": "stddev: 0.00033176799606256545",
            "extra": "mean: 1.0713641004863128 msec\nrounds: 1234"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 794.4500304088224,
            "unit": "iter/sec",
            "range": "stddev: 0.00035671874630679995",
            "extra": "mean: 1.2587324082364273 msec\nrounds: 1117"
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
        "date": 1646752639122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.07024125351558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012217439713995573",
            "extra": "mean: 5.048713999999992 msec\nrounds: 200"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.97153507453163,
            "unit": "iter/sec",
            "range": "stddev: 0.000009151892167152519",
            "extra": "mean: 3.861428244274806 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 397.44618089318885,
            "unit": "iter/sec",
            "range": "stddev: 0.000011746230571655992",
            "extra": "mean: 2.516063930348204 msec\nrounds: 402"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 801.8797241415486,
            "unit": "iter/sec",
            "range": "stddev: 0.000009049690661633825",
            "extra": "mean: 1.2470698159509503 msec\nrounds: 815"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.20572987868096,
            "unit": "iter/sec",
            "range": "stddev: 0.0000208656978637623",
            "extra": "mean: 5.458344565217481 msec\nrounds: 184"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.7168355430926,
            "unit": "iter/sec",
            "range": "stddev: 0.000010863377862726752",
            "extra": "mean: 4.120027346938846 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.3698044614931,
            "unit": "iter/sec",
            "range": "stddev: 0.000011127703407943263",
            "extra": "mean: 2.6016611825192997 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 739.031772703897,
            "unit": "iter/sec",
            "range": "stddev: 0.000009516405380779981",
            "extra": "mean: 1.3531217965653872 msec\nrounds: 757"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.82859332313438,
            "unit": "iter/sec",
            "range": "stddev: 0.00012968657435001303",
            "extra": "mean: 40.276144000000045 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.147098345873864,
            "unit": "iter/sec",
            "range": "stddev: 0.00004122539097982353",
            "extra": "mean: 38.24516153846206 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.2717519450574,
            "unit": "iter/sec",
            "range": "stddev: 0.000026068759463917636",
            "extra": "mean: 3.3752795986619963 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.60845382731907,
            "unit": "iter/sec",
            "range": "stddev: 0.000010220223344988077",
            "extra": "mean: 2.0424483935742903 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1461.9778252625638,
            "unit": "iter/sec",
            "range": "stddev: 0.000005599463192537398",
            "extra": "mean: 684.0049026190976 usec\nrounds: 1489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1291.979325988784,
            "unit": "iter/sec",
            "range": "stddev: 0.00000622897850811419",
            "extra": "mean: 774.0061933535004 usec\nrounds: 1324"
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
        "date": 1646837007637,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.33700471659242,
            "unit": "iter/sec",
            "range": "stddev: 0.000015688775592842185",
            "extra": "mean: 4.99158905472633 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.87460243900875,
            "unit": "iter/sec",
            "range": "stddev: 0.000009565981128404758",
            "extra": "mean: 3.8332593155893564 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.3502517580749,
            "unit": "iter/sec",
            "range": "stddev: 0.00005755557765285827",
            "extra": "mean: 2.5487431077694453 msec\nrounds: 399"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.8035003172647,
            "unit": "iter/sec",
            "range": "stddev: 0.000009000001783131413",
            "extra": "mean: 1.2379248166258876 msec\nrounds: 818"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.37175102966506,
            "unit": "iter/sec",
            "range": "stddev: 0.000018638267616988855",
            "extra": "mean: 5.453402688172097 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.1458186163952,
            "unit": "iter/sec",
            "range": "stddev: 0.000010440325223024945",
            "extra": "mean: 4.112758367346937 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 381.965508318719,
            "unit": "iter/sec",
            "range": "stddev: 0.00001636982249518956",
            "extra": "mean: 2.6180374358974365 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.0216743457876,
            "unit": "iter/sec",
            "range": "stddev: 0.000008680625091964232",
            "extra": "mean: 1.3368596583442454 msec\nrounds: 761"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.035184448223518,
            "unit": "iter/sec",
            "range": "stddev: 0.00008218752277576409",
            "extra": "mean: 39.94378400000002 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.37007945304977,
            "unit": "iter/sec",
            "range": "stddev: 0.000058283346347161865",
            "extra": "mean: 37.92176666666612 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 293.8032265707086,
            "unit": "iter/sec",
            "range": "stddev: 0.00001744405450962393",
            "extra": "mean: 3.4036385906038835 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 491.67439567653344,
            "unit": "iter/sec",
            "range": "stddev: 0.00001027099812032479",
            "extra": "mean: 2.0338663326651805 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1435.7845599893208,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982389339647596",
            "extra": "mean: 696.4833219876929 usec\nrounds: 1469"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1282.3017688716684,
            "unit": "iter/sec",
            "range": "stddev: 0.000006637237111421062",
            "extra": "mean: 779.847633587784 usec\nrounds: 1310"
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
        "date": 1647269864061,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 194.58891736473714,
            "unit": "iter/sec",
            "range": "stddev: 0.0003339607483715268",
            "extra": "mean: 5.139038818565405 msec\nrounds: 237"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 268.9217411655948,
            "unit": "iter/sec",
            "range": "stddev: 0.0003411545976728384",
            "extra": "mean: 3.7185539393939395 msec\nrounds: 330"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.21711942482557,
            "unit": "iter/sec",
            "range": "stddev: 0.0002619788076175353",
            "extra": "mean: 2.6094867617107242 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 832.7566857056211,
            "unit": "iter/sec",
            "range": "stddev: 0.00015427545941041474",
            "extra": "mean: 1.200830947580647 msec\nrounds: 992"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 188.92486010860213,
            "unit": "iter/sec",
            "range": "stddev: 0.0004893810535659104",
            "extra": "mean: 5.29310964912271 msec\nrounds: 228"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 256.65954178664396,
            "unit": "iter/sec",
            "range": "stddev: 0.00036342373432574467",
            "extra": "mean: 3.8962120521171992 msec\nrounds: 307"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 405.34225992662596,
            "unit": "iter/sec",
            "range": "stddev: 0.00026324906933217055",
            "extra": "mean: 2.4670509316768934 msec\nrounds: 483"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 800.6615402229363,
            "unit": "iter/sec",
            "range": "stddev: 0.00015614438118333784",
            "extra": "mean: 1.2489671974521968 msec\nrounds: 942"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 23.666016756942224,
            "unit": "iter/sec",
            "range": "stddev: 0.0017087643126494094",
            "extra": "mean: 42.254681481481605 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 27.952400044313997,
            "unit": "iter/sec",
            "range": "stddev: 0.0016811306688809206",
            "extra": "mean: 35.77510333333318 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.14766166299563,
            "unit": "iter/sec",
            "range": "stddev: 0.00030887504069284906",
            "extra": "mean: 3.388134584450193 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 528.6064616350488,
            "unit": "iter/sec",
            "range": "stddev: 0.00020805992885639652",
            "extra": "mean: 1.891766507936489 msec\nrounds: 630"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.8179059483034,
            "unit": "iter/sec",
            "range": "stddev: 0.00008615486302071682",
            "extra": "mean: 679.4318753417342 usec\nrounds: 1829"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1362.6233401635684,
            "unit": "iter/sec",
            "range": "stddev: 0.00008958990521079564",
            "extra": "mean: 733.878519855649 usec\nrounds: 1662"
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
        "date": 1647612544753,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 222.7329350934445,
            "unit": "iter/sec",
            "range": "stddev: 0.000013147310169104091",
            "extra": "mean: 4.489681777777785 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 293.4472343339189,
            "unit": "iter/sec",
            "range": "stddev: 0.000016254017143456875",
            "extra": "mean: 3.4077676767676808 msec\nrounds: 297"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 445.15446417701,
            "unit": "iter/sec",
            "range": "stddev: 0.000010932814997339608",
            "extra": "mean: 2.2464112582781213 msec\nrounds: 453"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 891.8030475974368,
            "unit": "iter/sec",
            "range": "stddev: 0.000052101393888989664",
            "extra": "mean: 1.1213238199780224 msec\nrounds: 911"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 209.02608308698044,
            "unit": "iter/sec",
            "range": "stddev: 0.00003094280101699127",
            "extra": "mean: 4.784091943127871 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.83766909387646,
            "unit": "iter/sec",
            "range": "stddev: 0.0000179889156859526",
            "extra": "mean: 3.638511428571421 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 433.9312649019134,
            "unit": "iter/sec",
            "range": "stddev: 0.000010296472714421561",
            "extra": "mean: 2.304512444444495 msec\nrounds: 450"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 829.581186426022,
            "unit": "iter/sec",
            "range": "stddev: 0.000007680384803606911",
            "extra": "mean: 1.2054275294117645 msec\nrounds: 850"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 27.97472204116358,
            "unit": "iter/sec",
            "range": "stddev: 0.0002705479137800128",
            "extra": "mean: 35.74655714285718 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.124230118938037,
            "unit": "iter/sec",
            "range": "stddev: 0.00009379974119498932",
            "extra": "mean: 38.27864000000052 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 296.90849962930804,
            "unit": "iter/sec",
            "range": "stddev: 0.000012343544709235513",
            "extra": "mean: 3.3680410000000194 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.9936762341987,
            "unit": "iter/sec",
            "range": "stddev: 0.000010266801556360172",
            "extra": "mean: 2.0492068825909917 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1434.0216670144468,
            "unit": "iter/sec",
            "range": "stddev: 0.0000069478306601045015",
            "extra": "mean: 697.3395332874882 usec\nrounds: 1457"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1267.5409900099573,
            "unit": "iter/sec",
            "range": "stddev: 0.000014351845381151596",
            "extra": "mean: 788.9291217257946 usec\nrounds: 1298"
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
        "date": 1647926021985,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 173.73490561874485,
            "unit": "iter/sec",
            "range": "stddev: 0.00011581244330648995",
            "extra": "mean: 5.755895721925131 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 229.40176477755813,
            "unit": "iter/sec",
            "range": "stddev: 0.00007021272631725296",
            "extra": "mean: 4.359164372469674 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 353.4101769178723,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163803593671353",
            "extra": "mean: 2.829573298429339 msec\nrounds: 382"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 720.2222452767044,
            "unit": "iter/sec",
            "range": "stddev: 0.00004171998982116871",
            "extra": "mean: 1.388460307298349 msec\nrounds: 781"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 162.79038329614454,
            "unit": "iter/sec",
            "range": "stddev: 0.0001449941119640921",
            "extra": "mean: 6.142869005847986 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 217.6967261598126,
            "unit": "iter/sec",
            "range": "stddev: 0.00011453919802626167",
            "extra": "mean: 4.5935463414635525 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 344.34922914964795,
            "unit": "iter/sec",
            "range": "stddev: 0.00007152368303938589",
            "extra": "mean: 2.904028571428624 msec\nrounds: 371"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 674.9540989376528,
            "unit": "iter/sec",
            "range": "stddev: 0.000053417444919922086",
            "extra": "mean: 1.4815822314050018 msec\nrounds: 726"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.786721038315143,
            "unit": "iter/sec",
            "range": "stddev: 0.00045176486084353546",
            "extra": "mean: 43.885208333332905 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.838113653832565,
            "unit": "iter/sec",
            "range": "stddev: 0.0004735333625334572",
            "extra": "mean: 41.94962800000013 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 263.484721402436,
            "unit": "iter/sec",
            "range": "stddev: 0.00009793079095223037",
            "extra": "mean: 3.7952864768680086 msec\nrounds: 281"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 441.36974555640353,
            "unit": "iter/sec",
            "range": "stddev: 0.00006176988669333543",
            "extra": "mean: 2.265674097664694 msec\nrounds: 471"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1346.141635482188,
            "unit": "iter/sec",
            "range": "stddev: 0.000027140366672087896",
            "extra": "mean: 742.8638812154413 usec\nrounds: 1448"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1174.3905741790632,
            "unit": "iter/sec",
            "range": "stddev: 0.000029944001336756203",
            "extra": "mean: 851.5054718478409 usec\nrounds: 1261"
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
        "date": 1647972957471,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 127.33329072565435,
            "unit": "iter/sec",
            "range": "stddev: 0.0010357311629170258",
            "extra": "mean: 7.853405769230827 msec\nrounds: 156"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 166.77231560501232,
            "unit": "iter/sec",
            "range": "stddev: 0.000977619742417594",
            "extra": "mean: 5.996199047619059 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.6207514452386,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736514612250448",
            "extra": "mean: 3.896800996677754 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 553.6030686414341,
            "unit": "iter/sec",
            "range": "stddev: 0.00030333406918656077",
            "extra": "mean: 1.806348368794348 msec\nrounds: 705"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 115.49872306466321,
            "unit": "iter/sec",
            "range": "stddev: 0.0014884290089013455",
            "extra": "mean: 8.65810437956218 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 156.71491924415383,
            "unit": "iter/sec",
            "range": "stddev: 0.0007101477686303867",
            "extra": "mean: 6.381013402061939 msec\nrounds: 194"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 250.91056742732587,
            "unit": "iter/sec",
            "range": "stddev: 0.0005625641483573012",
            "extra": "mean: 3.9854837931034592 msec\nrounds: 290"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.1520656480403,
            "unit": "iter/sec",
            "range": "stddev: 0.0002823357344359787",
            "extra": "mean: 1.9336672256097551 msec\nrounds: 656"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.599400076350836,
            "unit": "iter/sec",
            "range": "stddev: 0.0022550526402705653",
            "extra": "mean: 53.76517499999913 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.92245315040201,
            "unit": "iter/sec",
            "range": "stddev: 0.0037313077277342913",
            "extra": "mean: 50.19462173913163 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.0242056065686,
            "unit": "iter/sec",
            "range": "stddev: 0.000361940901187958",
            "extra": "mean: 5.127568636363768 msec\nrounds: 220"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.7259615258665,
            "unit": "iter/sec",
            "range": "stddev: 0.0004349022420758484",
            "extra": "mean: 3.117926578947523 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1013.4280413382832,
            "unit": "iter/sec",
            "range": "stddev: 0.00019336016779402694",
            "extra": "mean: 986.7498817966881 usec\nrounds: 1269"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 935.3544198321381,
            "unit": "iter/sec",
            "range": "stddev: 0.00019353910457584013",
            "extra": "mean: 1.0691134598791585 msec\nrounds: 1159"
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
        "date": 1647981727894,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 196.71474454504033,
            "unit": "iter/sec",
            "range": "stddev: 0.00001663859774539864",
            "extra": "mean: 5.083503030303035 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 258.94277731704597,
            "unit": "iter/sec",
            "range": "stddev: 0.000010459254162796059",
            "extra": "mean: 3.861857088122654 msec\nrounds: 261"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.5484223805138,
            "unit": "iter/sec",
            "range": "stddev: 0.000012264438627697814",
            "extra": "mean: 2.5474564231738466 msec\nrounds: 397"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.2812570571425,
            "unit": "iter/sec",
            "range": "stddev: 0.000007949441214994007",
            "extra": "mean: 1.2433461444308556 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 181.35735575029415,
            "unit": "iter/sec",
            "range": "stddev: 0.000016773006071091248",
            "extra": "mean: 5.513975409835992 msec\nrounds: 183"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.89350673039038,
            "unit": "iter/sec",
            "range": "stddev: 0.000010407490030055632",
            "extra": "mean: 4.151211934156477 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 380.8450715342403,
            "unit": "iter/sec",
            "range": "stddev: 0.000018508309369357853",
            "extra": "mean: 2.6257396373057538 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 750.4882640908808,
            "unit": "iter/sec",
            "range": "stddev: 0.000008630733588952888",
            "extra": "mean: 1.332465873015843 msec\nrounds: 756"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.02809152993355,
            "unit": "iter/sec",
            "range": "stddev: 0.0004936647078057747",
            "extra": "mean: 39.95510399999944 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.57905422865416,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698400982661012",
            "extra": "mean: 37.62361111111045 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.3474674053438,
            "unit": "iter/sec",
            "range": "stddev: 0.000011067833944250222",
            "extra": "mean: 3.3858424749164 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 490.02595464780524,
            "unit": "iter/sec",
            "range": "stddev: 0.000010204935903291082",
            "extra": "mean: 2.0407082329317165 msec\nrounds: 498"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1486.7089207064314,
            "unit": "iter/sec",
            "range": "stddev: 0.000005906773513777045",
            "extra": "mean: 672.6266225165551 usec\nrounds: 1510"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1314.5296575297393,
            "unit": "iter/sec",
            "range": "stddev: 0.00003418724045699757",
            "extra": "mean: 760.7283671934777 usec\nrounds: 1329"
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
        "date": 1647984070755,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.97798485138756,
            "unit": "iter/sec",
            "range": "stddev: 0.001936417475143232",
            "extra": "mean: 9.092728888888923 msec\nrounds: 135"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.55855397635747,
            "unit": "iter/sec",
            "range": "stddev: 0.0013671470257882504",
            "extra": "mean: 6.73135254237293 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 234.20751213025815,
            "unit": "iter/sec",
            "range": "stddev: 0.00036576182592692774",
            "extra": "mean: 4.269717870722415 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.70974770246323,
            "unit": "iter/sec",
            "range": "stddev: 0.0004989531842778471",
            "extra": "mean: 2.0295924825174727 msec\nrounds: 572"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.43783694344187,
            "unit": "iter/sec",
            "range": "stddev: 0.0011678800141344853",
            "extra": "mean: 8.973612800000154 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 145.29455556803282,
            "unit": "iter/sec",
            "range": "stddev: 0.0012548473539625684",
            "extra": "mean: 6.88257034883705 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 213.53739743532174,
            "unit": "iter/sec",
            "range": "stddev: 0.00117797524222348",
            "extra": "mean: 4.683020454545391 msec\nrounds: 264"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 449.88441038046307,
            "unit": "iter/sec",
            "range": "stddev: 0.00048640185445176723",
            "extra": "mean: 2.2227931818182127 msec\nrounds: 528"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.728433961865875,
            "unit": "iter/sec",
            "range": "stddev: 0.005133608571881514",
            "extra": "mean: 53.394747368421825 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 20.614654388447406,
            "unit": "iter/sec",
            "range": "stddev: 0.0010674713305850276",
            "extra": "mean: 48.50918095238147 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 185.03075045243534,
            "unit": "iter/sec",
            "range": "stddev: 0.0006831170742655644",
            "extra": "mean: 5.404507075471564 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.8282918016869,
            "unit": "iter/sec",
            "range": "stddev: 0.0006745852730199148",
            "extra": "mean: 3.1364845144357707 msec\nrounds: 381"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 893.3609902331817,
            "unit": "iter/sec",
            "range": "stddev: 0.00016910519517226714",
            "extra": "mean: 1.1193683303084274 msec\nrounds: 1102"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 813.5509888674576,
            "unit": "iter/sec",
            "range": "stddev: 0.0002684267028959641",
            "extra": "mean: 1.2291792569659312 msec\nrounds: 969"
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
        "date": 1647985646319,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.35525005117702,
            "unit": "iter/sec",
            "range": "stddev: 0.00037029608565675973",
            "extra": "mean: 8.172922695035433 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 158.9386330369354,
            "unit": "iter/sec",
            "range": "stddev: 0.0004890524591041139",
            "extra": "mean: 6.291736507936444 msec\nrounds: 189"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 233.34255232265681,
            "unit": "iter/sec",
            "range": "stddev: 0.00027656066012549796",
            "extra": "mean: 4.2855449640288485 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 504.6910439779766,
            "unit": "iter/sec",
            "range": "stddev: 0.0002666671077685518",
            "extra": "mean: 1.981410234899348 msec\nrounds: 596"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.69367708719084,
            "unit": "iter/sec",
            "range": "stddev: 0.0005518958562325995",
            "extra": "mean: 8.873612307692314 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 149.57052977205805,
            "unit": "iter/sec",
            "range": "stddev: 0.0005097141335945111",
            "extra": "mean: 6.68580903954794 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.3041284555132,
            "unit": "iter/sec",
            "range": "stddev: 0.00031258735762085813",
            "extra": "mean: 4.3420845588235535 msec\nrounds: 272"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 475.1447658810956,
            "unit": "iter/sec",
            "range": "stddev: 0.0003429249828266655",
            "extra": "mean: 2.1046217317486957 msec\nrounds: 589"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 19.168605133897437,
            "unit": "iter/sec",
            "range": "stddev: 0.0019029617641425733",
            "extra": "mean: 52.16863684210475 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.700219961910516,
            "unit": "iter/sec",
            "range": "stddev: 0.0016898094636823243",
            "extra": "mean: 50.760854545454556 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 179.34240529087768,
            "unit": "iter/sec",
            "range": "stddev: 0.00036478554727812154",
            "extra": "mean: 5.575926108374021 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.8196152268175,
            "unit": "iter/sec",
            "range": "stddev: 0.00020593118162682693",
            "extra": "mean: 3.1170163934427952 msec\nrounds: 366"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 943.6491412458648,
            "unit": "iter/sec",
            "range": "stddev: 0.0000983839310566521",
            "extra": "mean: 1.0597159010601516 msec\nrounds: 1132"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 855.5836947525961,
            "unit": "iter/sec",
            "range": "stddev: 0.0001883390662965047",
            "extra": "mean: 1.16879272727277 msec\nrounds: 1045"
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
        "date": 1648220401031,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 170.4930122645934,
            "unit": "iter/sec",
            "range": "stddev: 0.000031143841123567325",
            "extra": "mean: 5.865343023255809 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 223.53265093180738,
            "unit": "iter/sec",
            "range": "stddev: 0.0001462797751962811",
            "extra": "mean: 4.473619383259888 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 342.3891997065672,
            "unit": "iter/sec",
            "range": "stddev: 0.000017300641084061004",
            "extra": "mean: 2.9206528735632302 msec\nrounds: 348"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 713.6163210844205,
            "unit": "iter/sec",
            "range": "stddev: 0.000011372517814439604",
            "extra": "mean: 1.4013132413793272 msec\nrounds: 725"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 156.5082106881779,
            "unit": "iter/sec",
            "range": "stddev: 0.000049459621476977535",
            "extra": "mean: 6.3894411392407315 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 206.47128190939932,
            "unit": "iter/sec",
            "range": "stddev: 0.00015979984419162095",
            "extra": "mean: 4.843288571428569 msec\nrounds: 210"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 330.56415954309625,
            "unit": "iter/sec",
            "range": "stddev: 0.000016056063910775225",
            "extra": "mean: 3.0251313432835363 msec\nrounds: 335"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.524119314771,
            "unit": "iter/sec",
            "range": "stddev: 0.000015823705511013042",
            "extra": "mean: 1.5348625942685472 msec\nrounds: 663"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.92136805279448,
            "unit": "iter/sec",
            "range": "stddev: 0.00011358891172020089",
            "extra": "mean: 45.61759090909121 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.220778029583396,
            "unit": "iter/sec",
            "range": "stddev: 0.00006153926974765711",
            "extra": "mean: 43.06487916666679 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 252.38668728518755,
            "unit": "iter/sec",
            "range": "stddev: 0.00002123982750267958",
            "extra": "mean: 3.962174117646852 msec\nrounds: 255"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 423.09671174151924,
            "unit": "iter/sec",
            "range": "stddev: 0.000012466584096458697",
            "extra": "mean: 2.3635258139536806 msec\nrounds: 430"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1313.439186729513,
            "unit": "iter/sec",
            "range": "stddev: 0.000006243820138439752",
            "extra": "mean: 761.3599549211089 usec\nrounds: 1331"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1136.465750093765,
            "unit": "iter/sec",
            "range": "stddev: 0.00000731227955142212",
            "extra": "mean: 879.9209302326042 usec\nrounds: 1161"
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
        "date": 1648484468214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 197.3675275506023,
            "unit": "iter/sec",
            "range": "stddev: 0.00004698782779650525",
            "extra": "mean: 5.066689603960377 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.151538874714,
            "unit": "iter/sec",
            "range": "stddev: 0.000016625091464285663",
            "extra": "mean: 3.829194360902252 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 399.46367316809295,
            "unit": "iter/sec",
            "range": "stddev: 0.000016461997578079828",
            "extra": "mean: 2.503356543209884 msec\nrounds: 405"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 802.1434214765162,
            "unit": "iter/sec",
            "range": "stddev: 0.000007609767264636664",
            "extra": "mean: 1.246659853121137 msec\nrounds: 817"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 184.72149727540705,
            "unit": "iter/sec",
            "range": "stddev: 0.000032764479083867135",
            "extra": "mean: 5.413555080213912 msec\nrounds: 187"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.90109030699963,
            "unit": "iter/sec",
            "range": "stddev: 0.00001054635394114912",
            "extra": "mean: 4.100022672064707 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 388.3838252071185,
            "unit": "iter/sec",
            "range": "stddev: 0.00001609311102500226",
            "extra": "mean: 2.574772519083968 msec\nrounds: 393"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 748.1287675297519,
            "unit": "iter/sec",
            "range": "stddev: 0.000007937305870090215",
            "extra": "mean: 1.3366682894736188 msec\nrounds: 760"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.982667025617967,
            "unit": "iter/sec",
            "range": "stddev: 0.00022092760526135955",
            "extra": "mean: 40.02775199999945 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.348229125762234,
            "unit": "iter/sec",
            "range": "stddev: 0.00005746638284006398",
            "extra": "mean: 37.953214814814274 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 299.38474465338527,
            "unit": "iter/sec",
            "range": "stddev: 0.000012704140038941276",
            "extra": "mean: 3.340183552631437 msec\nrounds: 304"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 495.0615628855937,
            "unit": "iter/sec",
            "range": "stddev: 0.000009776718662813773",
            "extra": "mean: 2.0199507999999895 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1443.0525082376582,
            "unit": "iter/sec",
            "range": "stddev: 0.00000578644592879704",
            "extra": "mean: 692.9754768392036 usec\nrounds: 1468"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1289.801750058201,
            "unit": "iter/sec",
            "range": "stddev: 0.000006215818872022735",
            "extra": "mean: 775.3129501916679 usec\nrounds: 1305"
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
        "date": 1648486048830,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 133.84303221481684,
            "unit": "iter/sec",
            "range": "stddev: 0.00038547843238163107",
            "extra": "mean: 7.471438620689713 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 180.79443232302182,
            "unit": "iter/sec",
            "range": "stddev: 0.0003418852963694869",
            "extra": "mean: 5.531143781094541 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 257.62674078009314,
            "unit": "iter/sec",
            "range": "stddev: 0.00029067928367876116",
            "extra": "mean: 3.881584640522961 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 525.0356762586092,
            "unit": "iter/sec",
            "range": "stddev: 0.00017541751044119385",
            "extra": "mean: 1.9046324758842568 msec\nrounds: 622"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.84288792067942,
            "unit": "iter/sec",
            "range": "stddev: 0.0003697766497280529",
            "extra": "mean: 8.140479411764623 msec\nrounds: 136"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.14801747349537,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969718403494506",
            "extra": "mean: 6.055174111675243 msec\nrounds: 197"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 254.41789542188397,
            "unit": "iter/sec",
            "range": "stddev: 0.0002669311849358784",
            "extra": "mean: 3.9305411214952772 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 517.6106867386096,
            "unit": "iter/sec",
            "range": "stddev: 0.0001910823921108479",
            "extra": "mean: 1.9319539291216263 msec\nrounds: 649"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.442669277381338,
            "unit": "iter/sec",
            "range": "stddev: 0.0030704298104434636",
            "extra": "mean: 48.917290909091 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 21.262251264882654,
            "unit": "iter/sec",
            "range": "stddev: 0.0028497434131511744",
            "extra": "mean: 47.03170833333292 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 196.61354179970212,
            "unit": "iter/sec",
            "range": "stddev: 0.0003041879100006436",
            "extra": "mean: 5.086119658119679 msec\nrounds: 234"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 338.2525297201336,
            "unit": "iter/sec",
            "range": "stddev: 0.0003815653346121257",
            "extra": "mean: 2.9563710900473943 msec\nrounds: 422"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 964.9636102223157,
            "unit": "iter/sec",
            "range": "stddev: 0.00011453149667329984",
            "extra": "mean: 1.0363085088458541 msec\nrounds: 1187"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 933.9096935335463,
            "unit": "iter/sec",
            "range": "stddev: 0.00014018868904276294",
            "extra": "mean: 1.07076734177198 msec\nrounds: 1185"
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
        "date": 1648486580240,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 200.13095135682897,
            "unit": "iter/sec",
            "range": "stddev: 0.000013606907870307623",
            "extra": "mean: 4.996728358208934 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.52598140384833,
            "unit": "iter/sec",
            "range": "stddev: 0.000011238293534453317",
            "extra": "mean: 3.8091467924528297 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.762631985832,
            "unit": "iter/sec",
            "range": "stddev: 0.00001072181129898626",
            "extra": "mean: 2.5331678304239547 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 807.2808482930806,
            "unit": "iter/sec",
            "range": "stddev: 0.000008390564592939882",
            "extra": "mean: 1.2387262773722503 msec\nrounds: 822"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.75233998672329,
            "unit": "iter/sec",
            "range": "stddev: 0.000016328074882662896",
            "extra": "mean: 5.442107567567593 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 244.37850292342813,
            "unit": "iter/sec",
            "range": "stddev: 0.000010323813844006346",
            "extra": "mean: 4.09201295546578 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 384.52721785463893,
            "unit": "iter/sec",
            "range": "stddev: 0.000010758768207385",
            "extra": "mean: 2.6005961439588536 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.1170295172428,
            "unit": "iter/sec",
            "range": "stddev: 0.000007986094094008958",
            "extra": "mean: 1.331350456323323 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.976324941587695,
            "unit": "iter/sec",
            "range": "stddev: 0.00012866831609459226",
            "extra": "mean: 40.03791600000028 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.48432373260224,
            "unit": "iter/sec",
            "range": "stddev: 0.00006454124920518209",
            "extra": "mean: 37.75818518518555 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.1950729019359,
            "unit": "iter/sec",
            "range": "stddev: 0.000027475940625573458",
            "extra": "mean: 3.364793333333509 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.40346291404074,
            "unit": "iter/sec",
            "range": "stddev: 0.000010535371529767903",
            "extra": "mean: 2.030854929577477 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1487.6374383062869,
            "unit": "iter/sec",
            "range": "stddev: 0.000006585075795357228",
            "extra": "mean: 672.2067986797412 usec\nrounds: 1515"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1327.2996871236298,
            "unit": "iter/sec",
            "range": "stddev: 0.00000589204277028744",
            "extra": "mean: 753.4093541203827 usec\nrounds: 1347"
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
        "date": 1648604753677,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 225.0117734684534,
            "unit": "iter/sec",
            "range": "stddev: 0.00003342717469879263",
            "extra": "mean: 4.444211894273167 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 294.6674908188994,
            "unit": "iter/sec",
            "range": "stddev: 0.000013920858530662666",
            "extra": "mean: 3.393655666666646 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 451.2982262987797,
            "unit": "iter/sec",
            "range": "stddev: 0.00002184744107691768",
            "extra": "mean: 2.2158296703296925 msec\nrounds: 455"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 904.9576135559482,
            "unit": "iter/sec",
            "range": "stddev: 0.000007135836112418495",
            "extra": "mean: 1.105024130434785 msec\nrounds: 920"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 210.43628328433604,
            "unit": "iter/sec",
            "range": "stddev: 0.00001867092989407303",
            "extra": "mean: 4.752032227488193 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 274.4108162872962,
            "unit": "iter/sec",
            "range": "stddev: 0.000009496248505731674",
            "extra": "mean: 3.6441712230214844 msec\nrounds: 278"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 437.45387231600176,
            "unit": "iter/sec",
            "range": "stddev: 0.000009645913845830996",
            "extra": "mean: 2.285955304740414 msec\nrounds: 443"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 855.2742752142595,
            "unit": "iter/sec",
            "range": "stddev: 0.00000710368604438317",
            "extra": "mean: 1.1692155709342298 msec\nrounds: 867"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 28.172401007968276,
            "unit": "iter/sec",
            "range": "stddev: 0.00006163456854472698",
            "extra": "mean: 35.49573214285712 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 29.632052873063913,
            "unit": "iter/sec",
            "range": "stddev: 0.00025593537654165386",
            "extra": "mean: 33.74724000000076 msec\nrounds: 30"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 334.2187665907935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000464255051891966",
            "extra": "mean: 2.9920522123892797 msec\nrounds: 339"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 559.6327935688091,
            "unit": "iter/sec",
            "range": "stddev: 0.000009202374331089545",
            "extra": "mean: 1.7868859929078584 msec\nrounds: 564"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1655.3730156458741,
            "unit": "iter/sec",
            "range": "stddev: 0.0000048657294821778005",
            "extra": "mean: 604.0934523810826 usec\nrounds: 1680"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1489.3746994140627,
            "unit": "iter/sec",
            "range": "stddev: 0.0000050780056685630975",
            "extra": "mean: 671.4227120907933 usec\nrounds: 1497"
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
        "date": 1648607765068,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 198.9832254171067,
            "unit": "iter/sec",
            "range": "stddev: 0.000015408598636471847",
            "extra": "mean: 5.025549253731362 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.5165665666576,
            "unit": "iter/sec",
            "range": "stddev: 0.000007786185363750079",
            "extra": "mean: 3.8385274809160093 msec\nrounds: 262"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.8270859594398,
            "unit": "iter/sec",
            "range": "stddev: 0.000011360651697087122",
            "extra": "mean: 2.494841379310358 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 797.6409426156326,
            "unit": "iter/sec",
            "range": "stddev: 0.0000075795512368245865",
            "extra": "mean: 1.2536969287468986 msec\nrounds: 814"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.8101047925119,
            "unit": "iter/sec",
            "range": "stddev: 0.000016368005814770465",
            "extra": "mean: 5.440397311827975 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.1593468049363,
            "unit": "iter/sec",
            "range": "stddev: 0.000009162641790695022",
            "extra": "mean: 4.129512295081957 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 385.55716727479205,
            "unit": "iter/sec",
            "range": "stddev: 0.000010365572002945877",
            "extra": "mean: 2.5936491002572537 msec\nrounds: 389"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 743.4711416998955,
            "unit": "iter/sec",
            "range": "stddev: 0.000007716197835152408",
            "extra": "mean: 1.3450421192052848 msec\nrounds: 755"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.967764119744743,
            "unit": "iter/sec",
            "range": "stddev: 0.0000456158422770048",
            "extra": "mean: 40.05164400000041 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.301416867442978,
            "unit": "iter/sec",
            "range": "stddev: 0.0000488231006168114",
            "extra": "mean: 38.02076538461481 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.4730700396535,
            "unit": "iter/sec",
            "range": "stddev: 0.000010197763168660426",
            "extra": "mean: 3.361648837209697 msec\nrounds: 301"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 492.14996056860974,
            "unit": "iter/sec",
            "range": "stddev: 0.000009507771598142966",
            "extra": "mean: 2.03190100603613 msec\nrounds: 497"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1480.2112238855239,
            "unit": "iter/sec",
            "range": "stddev: 0.000005196296679566423",
            "extra": "mean: 675.5792577866155 usec\nrounds: 1509"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1307.8476953877316,
            "unit": "iter/sec",
            "range": "stddev: 0.000005791197590273114",
            "extra": "mean: 764.6150262959592 usec\nrounds: 1331"
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
          "id": "e8e06d28d983e649f4d4ea96d546b24db26f45d8",
          "message": "Merge pull request #480 from TeoZosa/dependabot/pip/black-22.3.0",
          "timestamp": "2022-03-30T03:05:27Z",
          "tree_id": "769177298e6972d60a88a8c6bf6c5ac109f562d4"
        },
        "date": 1648613736107,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.9001294974902,
            "unit": "iter/sec",
            "range": "stddev: 0.000015803338128996066",
            "extra": "mean: 5.002498009950289 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 262.5796718744968,
            "unit": "iter/sec",
            "range": "stddev: 0.000013108567253838664",
            "extra": "mean: 3.8083679245283024 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 400.7408375444022,
            "unit": "iter/sec",
            "range": "stddev: 0.000010760761970041076",
            "extra": "mean: 2.495378325123153 msec\nrounds: 406"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 817.9331145543009,
            "unit": "iter/sec",
            "range": "stddev: 0.00000887915917340692",
            "extra": "mean: 1.2225938554216733 msec\nrounds: 830"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.34521773731578,
            "unit": "iter/sec",
            "range": "stddev: 0.000017687037417366296",
            "extra": "mean: 5.454191891891776 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 242.97914247206032,
            "unit": "iter/sec",
            "range": "stddev: 0.00001000389636358846",
            "extra": "mean: 4.1155795918367275 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 383.8047768145669,
            "unit": "iter/sec",
            "range": "stddev: 0.000012935925777918394",
            "extra": "mean: 2.6054912820513025 msec\nrounds: 390"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 756.6528479693378,
            "unit": "iter/sec",
            "range": "stddev: 0.000008039407891188796",
            "extra": "mean: 1.3216100391133707 msec\nrounds: 767"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 25.010929776312288,
            "unit": "iter/sec",
            "range": "stddev: 0.00007812570533037078",
            "extra": "mean: 39.98251999999994 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.477025786661752,
            "unit": "iter/sec",
            "range": "stddev: 0.000042111180005395806",
            "extra": "mean: 37.76859259259274 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.11720659083846,
            "unit": "iter/sec",
            "range": "stddev: 0.0000120421560134126",
            "extra": "mean: 3.3884842281881498 msec\nrounds: 298"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 493.90838098319097,
            "unit": "iter/sec",
            "range": "stddev: 0.000010200688166761957",
            "extra": "mean: 2.024666999999809 msec\nrounds: 500"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1496.2260264568235,
            "unit": "iter/sec",
            "range": "stddev: 0.000005057195324308888",
            "extra": "mean: 668.3482189974169 usec\nrounds: 1516"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1301.226590196798,
            "unit": "iter/sec",
            "range": "stddev: 0.000005515493663659942",
            "extra": "mean: 768.5056603775364 usec\nrounds: 1325"
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
          "id": "88cb9ce56e1a1b3c1b9de28ae63af134eff121c1",
          "message": "Merge pull request #482 from TeoZosa/dependabot/pip/pylint-2.13.4",
          "timestamp": "2022-03-31T13:33:50Z",
          "tree_id": "7b282787a6efcee7886052d4f3e84a4bcceb98a1"
        },
        "date": 1648734242017,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 175.81377511916426,
            "unit": "iter/sec",
            "range": "stddev: 0.00015577151486019254",
            "extra": "mean: 5.687836458333331 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.61738720104495,
            "unit": "iter/sec",
            "range": "stddev: 0.0001235539832590954",
            "extra": "mean: 4.452015102040809 msec\nrounds: 245"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 346.4099905738109,
            "unit": "iter/sec",
            "range": "stddev: 0.00003085174673655528",
            "extra": "mean: 2.8867527704485365 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 719.8077888263923,
            "unit": "iter/sec",
            "range": "stddev: 0.000047480969999269464",
            "extra": "mean: 1.3892597656249954 msec\nrounds: 768"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 160.16308326599753,
            "unit": "iter/sec",
            "range": "stddev: 0.000088935395979212",
            "extra": "mean: 6.243636046511469 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 209.44400880716228,
            "unit": "iter/sec",
            "range": "stddev: 0.00005787260603325664",
            "extra": "mean: 4.774545739910434 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 337.1739583553944,
            "unit": "iter/sec",
            "range": "stddev: 0.00006807792198939614",
            "extra": "mean: 2.965828099173547 msec\nrounds: 363"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 659.8912905239796,
            "unit": "iter/sec",
            "range": "stddev: 0.000027886864750964815",
            "extra": "mean: 1.5154011188812035 msec\nrounds: 715"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.443467101926796,
            "unit": "iter/sec",
            "range": "stddev: 0.0006477474602443981",
            "extra": "mean: 44.55639565217395 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.835042438292817,
            "unit": "iter/sec",
            "range": "stddev: 0.0005349378067598776",
            "extra": "mean: 41.95503333333376 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.62724278666974,
            "unit": "iter/sec",
            "range": "stddev: 0.00012346445927732748",
            "extra": "mean: 3.7505544802865733 msec\nrounds: 279"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 451.45125724164,
            "unit": "iter/sec",
            "range": "stddev: 0.00008695761090844066",
            "extra": "mean: 2.2150785582257186 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1365.11383588579,
            "unit": "iter/sec",
            "range": "stddev: 0.00004319639307841492",
            "extra": "mean: 732.5396415392155 usec\nrounds: 1897"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1180.9515484112894,
            "unit": "iter/sec",
            "range": "stddev: 0.000037278853067753384",
            "extra": "mean: 846.774790502862 usec\nrounds: 1432"
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
          "id": "52c41779ef071a620510015333cfa37477586514",
          "message": "Merge pull request #476 from TeoZosa/dependabot/pip/xdoctest-1.0.0\n\n⬆️ Bump xdoctest from 0.15.10 to 1.0.0",
          "timestamp": "2022-03-31T22:18:00Z",
          "tree_id": "bae1bbe388c703b3a9445760b70cfcf73b3d8278"
        },
        "date": 1648765233272,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 137.4097477353337,
            "unit": "iter/sec",
            "range": "stddev: 0.00023066669480616204",
            "extra": "mean: 7.277504081632623 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 183.626012273526,
            "unit": "iter/sec",
            "range": "stddev: 0.0003812432632749062",
            "extra": "mean: 5.445851530612222 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 266.34264111465967,
            "unit": "iter/sec",
            "range": "stddev: 0.00040903480951121806",
            "extra": "mean: 3.754562152777869 msec\nrounds: 288"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 582.5485891020314,
            "unit": "iter/sec",
            "range": "stddev: 0.0001712442111784736",
            "extra": "mean: 1.7165950080515144 msec\nrounds: 621"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 129.9843667707217,
            "unit": "iter/sec",
            "range": "stddev: 0.000247574948874679",
            "extra": "mean: 7.6932328467152615 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 165.98823586043082,
            "unit": "iter/sec",
            "range": "stddev: 0.0005374303764289081",
            "extra": "mean: 6.02452333333332 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 261.6537707647576,
            "unit": "iter/sec",
            "range": "stddev: 0.00042082933985666083",
            "extra": "mean: 3.82184440559452 msec\nrounds: 286"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 557.0044832876622,
            "unit": "iter/sec",
            "range": "stddev: 0.0001697067736063417",
            "extra": "mean: 1.7953176859503932 msec\nrounds: 605"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.959472361617113,
            "unit": "iter/sec",
            "range": "stddev: 0.0006206595711665224",
            "extra": "mean: 45.53843478260874 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.16105784657516,
            "unit": "iter/sec",
            "range": "stddev: 0.0008898510564084118",
            "extra": "mean: 43.17592083333407 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 202.8732106300993,
            "unit": "iter/sec",
            "range": "stddev: 0.00021778249063355648",
            "extra": "mean: 4.9291870370371855 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 353.75072371893964,
            "unit": "iter/sec",
            "range": "stddev: 0.0002579324947949477",
            "extra": "mean: 2.8268493403691672 msec\nrounds: 379"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1066.1714729095706,
            "unit": "iter/sec",
            "range": "stddev: 0.00027338547045565025",
            "extra": "mean: 937.9354310343817 usec\nrounds: 1160"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1000.523385709198,
            "unit": "iter/sec",
            "range": "stddev: 0.00028293739547256185",
            "extra": "mean: 999.4768880801051 usec\nrounds: 1099"
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
          "id": "6de7c1554b72ef904e2de836358946b4357f6199",
          "message": ":rewind: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:38:04Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648767323399,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.57131685947812,
            "unit": "iter/sec",
            "range": "stddev: 0.000016373055343608616",
            "extra": "mean: 5.0107400990099125 msec\nrounds: 202"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 261.02544690434615,
            "unit": "iter/sec",
            "range": "stddev: 0.000008583280473279635",
            "extra": "mean: 3.8310441064638963 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 394.4904732518418,
            "unit": "iter/sec",
            "range": "stddev: 0.000017024560503880253",
            "extra": "mean: 2.534915461346521 msec\nrounds: 401"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 795.452994276603,
            "unit": "iter/sec",
            "range": "stddev: 0.000008025385185903078",
            "extra": "mean: 1.2571453086419206 msec\nrounds: 810"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.23499719684594,
            "unit": "iter/sec",
            "range": "stddev: 0.000039690719368470304",
            "extra": "mean: 5.398547872340332 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 243.95545809678393,
            "unit": "iter/sec",
            "range": "stddev: 0.000009329444353219013",
            "extra": "mean: 4.099108943089407 msec\nrounds: 246"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 382.95366635694796,
            "unit": "iter/sec",
            "range": "stddev: 0.000011515085455834368",
            "extra": "mean: 2.611281958762887 msec\nrounds: 388"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 751.8962962554166,
            "unit": "iter/sec",
            "range": "stddev: 0.00000783031513740607",
            "extra": "mean: 1.329970642201838 msec\nrounds: 763"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.4474342026645,
            "unit": "iter/sec",
            "range": "stddev: 0.00008411968319009033",
            "extra": "mean: 40.90408800000006 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.866845240753843,
            "unit": "iter/sec",
            "range": "stddev: 0.00006952240247751608",
            "extra": "mean: 38.65952692307741 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 295.4805021903752,
            "unit": "iter/sec",
            "range": "stddev: 0.00001026547979483575",
            "extra": "mean: 3.384318060200499 msec\nrounds: 299"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.93805670935717,
            "unit": "iter/sec",
            "range": "stddev: 0.000009261256221147199",
            "extra": "mean: 2.041074348697153 msec\nrounds: 499"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1468.505015942055,
            "unit": "iter/sec",
            "range": "stddev: 0.000009040971688065996",
            "extra": "mean: 680.9646471370708 usec\nrounds: 1502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1299.1087001631797,
            "unit": "iter/sec",
            "range": "stddev: 0.000005661680368565532",
            "extra": "mean: 769.758527422987 usec\nrounds: 1331"
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
          "id": "2057ecff40015f036a2659f489accf7fbf93bf38",
          "message": ":construction_worker: Only push-trigger CI job on master\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence.\n\nReverts 24a56b6afb135be630c7d2c8c046fc79f6f9eeee.",
          "timestamp": "2022-03-31T22:39:06Z",
          "tree_id": "995c65d894aff6c30591110d1e9c4b1cf75cdffa"
        },
        "date": 1648768227840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.06693185692218,
            "unit": "iter/sec",
            "range": "stddev: 0.000962905845676648",
            "extra": "mean: 8.328687878787896 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 160.19244217338863,
            "unit": "iter/sec",
            "range": "stddev: 0.0006644954076043583",
            "extra": "mean: 6.242491758241771 msec\nrounds: 182"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 235.10004311359546,
            "unit": "iter/sec",
            "range": "stddev: 0.0004464216621806179",
            "extra": "mean: 4.253508365018976 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 489.8309626118525,
            "unit": "iter/sec",
            "range": "stddev: 0.00041589459819279823",
            "extra": "mean: 2.0415205985915006 msec\nrounds: 568"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.94843330519274,
            "unit": "iter/sec",
            "range": "stddev: 0.001270102524270161",
            "extra": "mean: 9.095172799999972 msec\nrounds: 125"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 150.5054965708595,
            "unit": "iter/sec",
            "range": "stddev: 0.0005198434074178011",
            "extra": "mean: 6.644275609756153 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 230.60885158265725,
            "unit": "iter/sec",
            "range": "stddev: 0.00045839797936005804",
            "extra": "mean: 4.336346992481204 msec\nrounds: 266"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 478.0765650837335,
            "unit": "iter/sec",
            "range": "stddev: 0.00034878071177360466",
            "extra": "mean: 2.0917151624548955 msec\nrounds: 554"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 17.97631195145635,
            "unit": "iter/sec",
            "range": "stddev: 0.0020196426373142785",
            "extra": "mean: 55.62876315789485 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.401299188598784,
            "unit": "iter/sec",
            "range": "stddev: 0.0009445454035507608",
            "extra": "mean: 51.542940000000215 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 184.82595695738885,
            "unit": "iter/sec",
            "range": "stddev: 0.00035620842103681414",
            "extra": "mean: 5.410495454545638 msec\nrounds: 198"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.5971461353072,
            "unit": "iter/sec",
            "range": "stddev: 0.00025164474463571635",
            "extra": "mean: 3.1191793565684227 msec\nrounds: 373"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 917.3542058462466,
            "unit": "iter/sec",
            "range": "stddev: 0.000134983288230821",
            "extra": "mean: 1.090091475710316 msec\nrounds: 1091"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 809.7016474119943,
            "unit": "iter/sec",
            "range": "stddev: 0.00030686740979862375",
            "extra": "mean: 1.2350228052471501 msec\nrounds: 991"
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
          "id": "d9f3b993432075dc1a154f5184a442dbeda48fef",
          "message": ":construction_worker: Restrict job CI jobs to trunk pushes & PRs\n\nCI has gotten fairly expensive, redundant runs slow down CI pipelines\nfor all concurrent users which slows down development cadence in\ngeneral (even for a one-man team with only Dependabot updates).\n\nReverts:\n- 042f0d81968505024e25f6ce047af3a5628f36d5\n- 6fb732b27234875e033857e11474816550f67d81\n- 24a56b6afb135be630c7d2c8c046fc79f6f9eeee\n- a28ff70c3b73f406cbfc92d5c3b06e2232a4cc80\n- e9328e969e69abe1d3a590a7031e3981b1ead8a5\n- 3f2ce37baca3510a175d7e3537f5c7de20729efe\n- bbaefaee2af60b92f9e67a91037df6d1b0ea9883\n- 3919b79fbefdde2ff81ecf5ea9c3c6f60e81599b",
          "timestamp": "2022-03-31T23:34:27Z",
          "tree_id": "0dd96960a0428c4ecc4c50cb79b149edd6c0602d"
        },
        "date": 1648769830226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 169.72850192331626,
            "unit": "iter/sec",
            "range": "stddev: 0.000188690692082849",
            "extra": "mean: 5.891762365591387 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 224.25944111396532,
            "unit": "iter/sec",
            "range": "stddev: 0.00023567114230082644",
            "extra": "mean: 4.459121074380163 msec\nrounds: 242"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 343.67062607197255,
            "unit": "iter/sec",
            "range": "stddev: 0.00025823572917837843",
            "extra": "mean: 2.909762790697675 msec\nrounds: 387"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 708.5109836137159,
            "unit": "iter/sec",
            "range": "stddev: 0.000331324579216554",
            "extra": "mean: 1.411410723514211 msec\nrounds: 774"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 153.73191076412076,
            "unit": "iter/sec",
            "range": "stddev: 0.00036997140312835977",
            "extra": "mean: 6.504830357142666 msec\nrounds: 168"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 207.07853329128088,
            "unit": "iter/sec",
            "range": "stddev: 0.00019469531410013557",
            "extra": "mean: 4.829085777777746 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 333.93389256825276,
            "unit": "iter/sec",
            "range": "stddev: 0.00015420766094257452",
            "extra": "mean: 2.994604687499967 msec\nrounds: 384"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 651.5353336035516,
            "unit": "iter/sec",
            "range": "stddev: 0.0001176598248263897",
            "extra": "mean: 1.53483617606606 msec\nrounds: 727"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 21.945156858495217,
            "unit": "iter/sec",
            "range": "stddev: 0.0008427927100160788",
            "extra": "mean: 45.56814090909033 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.544219231997808,
            "unit": "iter/sec",
            "range": "stddev: 0.001076529555918566",
            "extra": "mean: 42.473270833332556 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 256.24094186068567,
            "unit": "iter/sec",
            "range": "stddev: 0.00021273677563921097",
            "extra": "mean: 3.9025769759451046 msec\nrounds: 291"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 425.77329705012875,
            "unit": "iter/sec",
            "range": "stddev: 0.00042700016273503744",
            "extra": "mean: 2.348667722772347 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1208.9640414094388,
            "unit": "iter/sec",
            "range": "stddev: 0.00021493361526904548",
            "extra": "mean: 827.1544609665781 usec\nrounds: 1614"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1133.5461927592883,
            "unit": "iter/sec",
            "range": "stddev: 0.00014814855796874357",
            "extra": "mean: 882.1872512895051 usec\nrounds: 1357"
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
          "id": "b84fdf60255c81445e322622dfdbac2bf2794b91",
          "message": "Merge pull request #473 from TeoZosa/dependabot/pip/mypy-0.942\n\n⬆️ Bump mypy from 0.941 to 0.942",
          "timestamp": "2022-03-31T23:38:01Z",
          "tree_id": "6c2d1b391b7d9940f0b4cc87cab325ed4cbe0949"
        },
        "date": 1648770334531,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 164.75427644040496,
            "unit": "iter/sec",
            "range": "stddev: 0.000028729221861287194",
            "extra": "mean: 6.069645180722946 msec\nrounds: 166"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.4888180485466,
            "unit": "iter/sec",
            "range": "stddev: 0.000015570242777545692",
            "extra": "mean: 4.662247706421991 msec\nrounds: 218"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 335.8297998770471,
            "unit": "iter/sec",
            "range": "stddev: 0.000013129942758495295",
            "extra": "mean: 2.9776988235294093 msec\nrounds: 340"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 681.7269955479858,
            "unit": "iter/sec",
            "range": "stddev: 0.000009263882481999703",
            "extra": "mean: 1.4668628447024898 msec\nrounds: 689"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 151.51693706828385,
            "unit": "iter/sec",
            "range": "stddev: 0.000024001346514320238",
            "extra": "mean: 6.59992222222214 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 199.5845860327683,
            "unit": "iter/sec",
            "range": "stddev: 0.000017689094132861563",
            "extra": "mean: 5.0104069651742416 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 324.7227198617135,
            "unit": "iter/sec",
            "range": "stddev: 0.00001371231892639222",
            "extra": "mean: 3.0795504559270146 msec\nrounds: 329"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 627.617927881497,
            "unit": "iter/sec",
            "range": "stddev: 0.00000954212832173164",
            "extra": "mean: 1.5933260596545833 msec\nrounds: 637"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 20.76091522418693,
            "unit": "iter/sec",
            "range": "stddev: 0.00010917620314562594",
            "extra": "mean: 48.1674333333329 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 22.031507258530276,
            "unit": "iter/sec",
            "range": "stddev: 0.0000957316221782677",
            "extra": "mean: 45.38954090909122 msec\nrounds: 22"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 246.61464451240087,
            "unit": "iter/sec",
            "range": "stddev: 0.00001135830106344714",
            "extra": "mean: 4.054909236948075 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 412.2434327056913,
            "unit": "iter/sec",
            "range": "stddev: 0.00001392306407344676",
            "extra": "mean: 2.425751196172286 msec\nrounds: 418"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1248.4450871625259,
            "unit": "iter/sec",
            "range": "stddev: 0.000005937829181958507",
            "extra": "mean: 800.9963836477635 usec\nrounds: 1272"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1085.6042915732912,
            "unit": "iter/sec",
            "range": "stddev: 0.000006923204943305958",
            "extra": "mean: 921.1459532374998 usec\nrounds: 1112"
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
          "id": "60106608e39f0791b9b05ecc02bbbc7decb8c292",
          "message": "Merge pull request #483 from TeoZosa/compatibility/open-up-dotent-and-importlib-metadata-dependencies\n\n📌  Open `importlib-metadata` & `python-dotenv` version ranges",
          "timestamp": "2022-04-02T02:11:59Z",
          "tree_id": "32b94a9c2faeaaaceb6472b89f883259f9fc9f07"
        },
        "date": 1648865797439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.26358004642482,
            "unit": "iter/sec",
            "range": "stddev: 0.0013663622700361743",
            "extra": "mean: 9.236716535433127 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.95042773886505,
            "unit": "iter/sec",
            "range": "stddev: 0.0008362991489648389",
            "extra": "mean: 6.71364302325581 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 222.8339559016948,
            "unit": "iter/sec",
            "range": "stddev: 0.0005736396935351263",
            "extra": "mean: 4.487646400000003 msec\nrounds: 250"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 476.49424467692984,
            "unit": "iter/sec",
            "range": "stddev: 0.0006954267014225204",
            "extra": "mean: 2.098661234991442 msec\nrounds: 583"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 104.46503940235695,
            "unit": "iter/sec",
            "range": "stddev: 0.0013516906341583884",
            "extra": "mean: 9.57258050847428 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.0407986118864,
            "unit": "iter/sec",
            "range": "stddev: 0.0007420707092115611",
            "extra": "mean: 6.9910124223600505 msec\nrounds: 161"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 218.32444701921852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005127526540245975",
            "extra": "mean: 4.580339094650141 msec\nrounds: 243"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 471.57557398497073,
            "unit": "iter/sec",
            "range": "stddev: 0.0003893046371689942",
            "extra": "mean: 2.120550883392171 msec\nrounds: 566"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 16.980377654323267,
            "unit": "iter/sec",
            "range": "stddev: 0.00591541566675861",
            "extra": "mean: 58.891505263158635 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 18.621473852412223,
            "unit": "iter/sec",
            "range": "stddev: 0.0017231216373247021",
            "extra": "mean: 53.70144210526387 msec\nrounds: 19"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.91677892594512,
            "unit": "iter/sec",
            "range": "stddev: 0.0003817145142203648",
            "extra": "mean: 5.920074999999914 msec\nrounds: 192"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 289.97809569527675,
            "unit": "iter/sec",
            "range": "stddev: 0.0005665363819879997",
            "extra": "mean: 3.448536337209584 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 870.2864988142331,
            "unit": "iter/sec",
            "range": "stddev: 0.0004983593650544623",
            "extra": "mean: 1.1490468958929063 msec\nrounds: 1047"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 777.6951718478917,
            "unit": "iter/sec",
            "range": "stddev: 0.0003969891942435525",
            "extra": "mean: 1.2858508528783672 msec\nrounds: 938"
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
          "id": "5ebb44b3a9a23edc265f6bf776179b27242b5f7e",
          "message": "Merge pull request #486 from TeoZosa/dependabot/pip/rich-12.1.0",
          "timestamp": "2022-04-04T13:19:30Z",
          "tree_id": "d1b718b9bbe316726743e8e929a9145a6446ef8b"
        },
        "date": 1649082190122,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 183.46905499658047,
            "unit": "iter/sec",
            "range": "stddev: 0.0009027314079451291",
            "extra": "mean: 5.450510441767077 msec\nrounds: 249"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 240.47192321672992,
            "unit": "iter/sec",
            "range": "stddev: 0.000534735393321615",
            "extra": "mean: 4.158489634146315 msec\nrounds: 328"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 358.51145757715034,
            "unit": "iter/sec",
            "range": "stddev: 0.0004375650111234502",
            "extra": "mean: 2.789311133200823 msec\nrounds: 503"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 784.7349731175615,
            "unit": "iter/sec",
            "range": "stddev: 0.00023389916694190402",
            "extra": "mean: 1.2743155769230505 msec\nrounds: 1040"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 167.52542682314643,
            "unit": "iter/sec",
            "range": "stddev: 0.0007720658603586244",
            "extra": "mean: 5.969243111111019 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 214.19967977857027,
            "unit": "iter/sec",
            "range": "stddev: 0.0007764081276627774",
            "extra": "mean: 4.668541059602674 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 376.41098765814104,
            "unit": "iter/sec",
            "range": "stddev: 0.00045186173280802315",
            "extra": "mean: 2.656670588235343 msec\nrounds: 493"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 703.4550708742328,
            "unit": "iter/sec",
            "range": "stddev: 0.0003413434559328094",
            "extra": "mean: 1.4215548958332622 msec\nrounds: 960"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.271484394509113,
            "unit": "iter/sec",
            "range": "stddev: 0.0029774424854002715",
            "extra": "mean: 41.20061153846148 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.541468114779903,
            "unit": "iter/sec",
            "range": "stddev: 0.002520011301429071",
            "extra": "mean: 39.152017241379205 msec\nrounds: 29"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 279.01252951278263,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626063534352622",
            "extra": "mean: 3.5840684350133682 msec\nrounds: 377"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 496.17353466537685,
            "unit": "iter/sec",
            "range": "stddev: 0.00035476560370141893",
            "extra": "mean: 2.0154238993710285 msec\nrounds: 636"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1502.0647619224208,
            "unit": "iter/sec",
            "range": "stddev: 0.00013826412985746615",
            "extra": "mean: 665.7502561475098 usec\nrounds: 1952"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1274.654707416455,
            "unit": "iter/sec",
            "range": "stddev: 0.00016052782208669634",
            "extra": "mean: 784.5261890781846 usec\nrounds: 1703"
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
          "id": "61b9f76de1a858ac7f019490cb8750329da0561c",
          "message": "Merge pull request #487 from TeoZosa/dependabot/pip/pre-commit-2.18.1",
          "timestamp": "2022-04-04T13:51:32Z",
          "tree_id": "88a78b8c09562bafca47fb5b3c195fdb2f81e579"
        },
        "date": 1649083663865,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 114.76076028914733,
            "unit": "iter/sec",
            "range": "stddev: 0.0010750417505249563",
            "extra": "mean: 8.713779844961238 msec\nrounds: 129"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 148.8717574191179,
            "unit": "iter/sec",
            "range": "stddev: 0.00113842727871927",
            "extra": "mean: 6.7171908045977125 msec\nrounds: 174"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 239.94607212028762,
            "unit": "iter/sec",
            "range": "stddev: 0.0002926428100342549",
            "extra": "mean: 4.167603125000058 msec\nrounds: 256"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 500.66382370367813,
            "unit": "iter/sec",
            "range": "stddev: 0.0002700050657337986",
            "extra": "mean: 1.9973482258064204 msec\nrounds: 620"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.42212679607074,
            "unit": "iter/sec",
            "range": "stddev: 0.0008523488878534206",
            "extra": "mean: 9.396542148760378 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.29254631103373,
            "unit": "iter/sec",
            "range": "stddev: 0.0011394930767152107",
            "extra": "mean: 6.978730057803422 msec\nrounds: 173"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 228.08416931239958,
            "unit": "iter/sec",
            "range": "stddev: 0.0007807865625001675",
            "extra": "mean: 4.384346370967693 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 470.47614359837485,
            "unit": "iter/sec",
            "range": "stddev: 0.0003138512728649243",
            "extra": "mean: 2.1255062846579884 msec\nrounds: 541"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 18.227026177746186,
            "unit": "iter/sec",
            "range": "stddev: 0.0033732241427344724",
            "extra": "mean: 54.86358499999984 msec\nrounds: 20"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 19.927240898896432,
            "unit": "iter/sec",
            "range": "stddev: 0.0028019899629504246",
            "extra": "mean: 50.18256190476324 msec\nrounds: 21"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 175.1115114713112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006174047846522352",
            "extra": "mean: 5.710646842105704 msec\nrounds: 190"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 340.016667559244,
            "unit": "iter/sec",
            "range": "stddev: 0.0005357594367507608",
            "extra": "mean: 2.9410322946176204 msec\nrounds: 353"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 925.7756193786446,
            "unit": "iter/sec",
            "range": "stddev: 0.00023797623583100358",
            "extra": "mean: 1.0801753460208563 msec\nrounds: 1156"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 873.7903819732182,
            "unit": "iter/sec",
            "range": "stddev: 0.00017783084254134222",
            "extra": "mean: 1.144439239239246 msec\nrounds: 999"
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
          "id": "1c4926428206a7a354321fb9061b2aef3af53791",
          "message": "Merge pull request #488 from TeoZosa/dependabot/pip/rich-12.2.0",
          "timestamp": "2022-04-05T13:24:40Z",
          "tree_id": "d5f5cac46b49725279ae238646c34843a61db390"
        },
        "date": 1649166685241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 227.13826124173386,
            "unit": "iter/sec",
            "range": "stddev: 0.000011198312983106417",
            "extra": "mean: 4.402604803493417 msec\nrounds: 229"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 296.8350697857316,
            "unit": "iter/sec",
            "range": "stddev: 0.000012822731909855434",
            "extra": "mean: 3.368874172185393 msec\nrounds: 302"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 450.91646057218526,
            "unit": "iter/sec",
            "range": "stddev: 0.000021195869405182093",
            "extra": "mean: 2.217705689277924 msec\nrounds: 457"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 892.4334058509604,
            "unit": "iter/sec",
            "range": "stddev: 0.000007637581152468173",
            "extra": "mean: 1.1205317880794385 msec\nrounds: 906"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 211.1731620920565,
            "unit": "iter/sec",
            "range": "stddev: 0.000014251453499069656",
            "extra": "mean: 4.735450234741814 msec\nrounds: 213"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 277.16726737722445,
            "unit": "iter/sec",
            "range": "stddev: 0.000010093076509349644",
            "extra": "mean: 3.607929642857144 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 434.4400364139693,
            "unit": "iter/sec",
            "range": "stddev: 0.000011698248431334771",
            "extra": "mean: 2.3018136363636605 msec\nrounds: 440"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 839.4877142819374,
            "unit": "iter/sec",
            "range": "stddev: 0.000008938466346187271",
            "extra": "mean: 1.1912026620369995 msec\nrounds: 864"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.531750217718834,
            "unit": "iter/sec",
            "range": "stddev: 0.00008580196406305347",
            "extra": "mean: 40.76350000000075 msec\nrounds: 28"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 25.858867473104503,
            "unit": "iter/sec",
            "range": "stddev: 0.00013703620902610374",
            "extra": "mean: 38.67145384615502 msec\nrounds: 26"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 297.1149249443336,
            "unit": "iter/sec",
            "range": "stddev: 0.000011537316176066263",
            "extra": "mean: 3.365700999999769 msec\nrounds: 300"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 487.914293804765,
            "unit": "iter/sec",
            "range": "stddev: 0.00001247565973891935",
            "extra": "mean: 2.0495402834009653 msec\nrounds: 494"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1464.5757953055577,
            "unit": "iter/sec",
            "range": "stddev: 0.000005845367549520146",
            "extra": "mean: 682.7915654521437 usec\nrounds: 1482"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1288.174635811756,
            "unit": "iter/sec",
            "range": "stddev: 0.000006463358962192122",
            "extra": "mean: 776.2922605364296 usec\nrounds: 1305"
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
          "id": "2fae7b08d0af2a2041d1eb477954cb9070a78f06",
          "message": "Merge pull request #490 from TeoZosa/dependabot/pip/pylint-2.13.5",
          "timestamp": "2022-04-07T13:22:51Z",
          "tree_id": "131ec008e5353c7f168464b77fe886490cafc420"
        },
        "date": 1649339162568,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 174.5168924333521,
            "unit": "iter/sec",
            "range": "stddev: 0.00009786423760975144",
            "extra": "mean: 5.730104324324359 msec\nrounds: 185"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 228.44467655089625,
            "unit": "iter/sec",
            "range": "stddev: 0.00007425396100131746",
            "extra": "mean: 4.377427459016343 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 356.02565933140494,
            "unit": "iter/sec",
            "range": "stddev: 0.00007487482903703198",
            "extra": "mean: 2.8087863157895434 msec\nrounds: 380"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 728.418909202359,
            "unit": "iter/sec",
            "range": "stddev: 0.000037973940621635666",
            "extra": "mean: 1.3728364096080794 msec\nrounds: 791"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 158.18987569362528,
            "unit": "iter/sec",
            "range": "stddev: 0.0000960980414562985",
            "extra": "mean: 6.321517073170681 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 211.14684931973582,
            "unit": "iter/sec",
            "range": "stddev: 0.000056925657888353246",
            "extra": "mean: 4.73604035874444 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 339.15408557255273,
            "unit": "iter/sec",
            "range": "stddev: 0.00005244497162653043",
            "extra": "mean: 2.9485123209169695 msec\nrounds: 349"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 667.618161248283,
            "unit": "iter/sec",
            "range": "stddev: 0.00003382110022938232",
            "extra": "mean: 1.4978621883656433 msec\nrounds: 722"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 22.077013068439697,
            "unit": "iter/sec",
            "range": "stddev: 0.00022565096468978992",
            "extra": "mean: 45.29598260869605 msec\nrounds: 23"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 23.317732474877985,
            "unit": "iter/sec",
            "range": "stddev: 0.00013024660445061742",
            "extra": "mean: 42.8858166666668 msec\nrounds: 24"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 258.42515709267315,
            "unit": "iter/sec",
            "range": "stddev: 0.00006720982273068404",
            "extra": "mean: 3.8695923076923693 msec\nrounds: 273"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 439.19258465389896,
            "unit": "iter/sec",
            "range": "stddev: 0.00003171006394856487",
            "extra": "mean: 2.2769054736842596 msec\nrounds: 475"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1371.3241461419252,
            "unit": "iter/sec",
            "range": "stddev: 0.000020127733473230535",
            "extra": "mean: 729.222192151574 usec\nrounds: 1478"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1192.0371915603887,
            "unit": "iter/sec",
            "range": "stddev: 0.000023979273622127176",
            "extra": "mean: 838.8999999999915 usec\nrounds: 1270"
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
          "id": "9964e858621ead3f118be676fc074b501c08be1e",
          "message": "Merge pull request #493 from TeoZosa/dependabot/pip/tox-3.25.0",
          "timestamp": "2022-04-11T14:19:01Z",
          "tree_id": "bbe16aa88c5b5788945ac70fe4f7103c20e99243"
        },
        "date": 1649688265245,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 199.24344982202444,
            "unit": "iter/sec",
            "range": "stddev: 0.00001557856350231159",
            "extra": "mean: 5.018985572139293 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 260.64509760762337,
            "unit": "iter/sec",
            "range": "stddev: 0.000010082619603319972",
            "extra": "mean: 3.8366346007604784 msec\nrounds: 263"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 392.9164082188194,
            "unit": "iter/sec",
            "range": "stddev: 0.000011003027526459505",
            "extra": "mean: 2.5450706030151053 msec\nrounds: 398"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 804.0075463692639,
            "unit": "iter/sec",
            "range": "stddev: 0.000009122183084775791",
            "extra": "mean: 1.2437694204685001 msec\nrounds: 811"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 185.2581153512699,
            "unit": "iter/sec",
            "range": "stddev: 0.000018512633542910023",
            "extra": "mean: 5.397874193548224 msec\nrounds: 186"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 239.54857550043886,
            "unit": "iter/sec",
            "range": "stddev: 0.00001779668428167299",
            "extra": "mean: 4.174518666666703 msec\nrounds: 225"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 379.6753303790064,
            "unit": "iter/sec",
            "range": "stddev: 0.000010741624245050404",
            "extra": "mean: 2.6338292746114473 msec\nrounds: 386"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 736.730558067047,
            "unit": "iter/sec",
            "range": "stddev: 0.000007910915266387991",
            "extra": "mean: 1.3573483399734234 msec\nrounds: 753"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 24.944864366291412,
            "unit": "iter/sec",
            "range": "stddev: 0.00007669352058645809",
            "extra": "mean: 40.088411999999636 msec\nrounds: 25"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 26.399637914299635,
            "unit": "iter/sec",
            "range": "stddev: 0.000054636152626574157",
            "extra": "mean: 37.87930740740727 msec\nrounds: 27"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 298.12101115565133,
            "unit": "iter/sec",
            "range": "stddev: 0.00001583846445430137",
            "extra": "mean: 3.354342574257177 msec\nrounds: 303"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 498.7444971445598,
            "unit": "iter/sec",
            "range": "stddev: 0.00000986598730399001",
            "extra": "mean: 2.0050346534653647 msec\nrounds: 505"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 1471.138757234714,
            "unit": "iter/sec",
            "range": "stddev: 0.000006423798201554281",
            "extra": "mean: 679.745533915299 usec\nrounds: 1489"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 1301.9776852342245,
            "unit": "iter/sec",
            "range": "stddev: 0.000006045529453623673",
            "extra": "mean: 768.0623188408186 usec\nrounds: 1311"
          }
        ]
      }
    ]
  }
}