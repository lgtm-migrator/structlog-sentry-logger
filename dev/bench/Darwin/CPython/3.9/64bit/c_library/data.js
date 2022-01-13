window.BENCHMARK_DATA = {
  "lastUpdate": 1642060710665,
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
          "id": "579c3b009cdf31b969ff038a94c39d6561e2a00b",
          "message": ":green_heart: Fix benchmark file mapping\n\nPreviously, non-deterministic ordering from `find` mapped benchmarks\nfrom non-identical directories across platforms.",
          "timestamp": "2021-10-10T03:59:04Z",
          "tree_id": "eda9c3ea3aa8215836518e6712a03af8f8c09fd6"
        },
        "date": 1633838754952,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.63615325896481,
            "unit": "iter/sec",
            "range": "stddev: 0.000586306479459654",
            "extra": "mean: 14.56958108108115 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.84517997131307,
            "unit": "iter/sec",
            "range": "stddev: 0.0008237252148316766",
            "extra": "mean: 15.421346666666528 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.951363466704436,
            "unit": "iter/sec",
            "range": "stddev: 0.0028342127247665385",
            "extra": "mean: 83.67246153846143 msec\nrounds: 13"
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
          "id": "d4a9777225fd53e83e0d9cf83d19c066ef6ef752",
          "message": ":arrow_up: Update `poetry.lock` lockfile",
          "timestamp": "2021-10-13T03:08:47Z",
          "tree_id": "3fa70fd16c4aea88e8acde24146228afb636d9e8"
        },
        "date": 1634095128893,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.73421553875615,
            "unit": "iter/sec",
            "range": "stddev: 0.0005833431496311481",
            "extra": "mean: 13.748687499999967 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.99833706691591,
            "unit": "iter/sec",
            "range": "stddev: 0.0005459656388953466",
            "extra": "mean: 14.925743589743583 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.75004895108076,
            "unit": "iter/sec",
            "range": "stddev: 0.0008539437438044652",
            "extra": "mean: 78.43107142857164 msec\nrounds: 14"
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
          "id": "97f8c3fcfa1a906a4b3626c34e132f4ef9b85a36",
          "message": "Merge pull request #312 from TeoZosa/fix-source-build-dependencies-installation\n\n🚑 Fix Source Build `mypyc` Compilation Errors",
          "timestamp": "2021-10-13T03:34:52Z",
          "tree_id": "4592b0c8f2af56637df3c25ea99d744a91bace06"
        },
        "date": 1634096763470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.91603942493306,
            "unit": "iter/sec",
            "range": "stddev: 0.0005094670740979187",
            "extra": "mean: 13.905103896103924 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.77726251203939,
            "unit": "iter/sec",
            "range": "stddev: 0.0008586858380229324",
            "extra": "mean: 14.754210526315788 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.505002000800324,
            "unit": "iter/sec",
            "range": "stddev: 0.0013667900350825032",
            "extra": "mean: 79.96799999999998 msec\nrounds: 13"
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
          "id": "517775d778bf4dff722d354f4af11cd4ddbef359",
          "message": "Merge pull request #307 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3\n\n⬆️ Bump pip from 21.2.4 to 21.3 in /.github/workflows",
          "timestamp": "2021-10-13T03:36:04Z",
          "tree_id": "d4f8eecaa51b5570a5891ed3989da8e6910af976"
        },
        "date": 1634097190136,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.45898587044627,
            "unit": "iter/sec",
            "range": "stddev: 0.0004329730936214464",
            "extra": "mean: 13.613038461538524 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.01535570499097,
            "unit": "iter/sec",
            "range": "stddev: 0.0002203273062472014",
            "extra": "mean: 14.081461538461602 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.605999486063165,
            "unit": "iter/sec",
            "range": "stddev: 0.0009379333118277041",
            "extra": "mean: 79.32730769230727 msec\nrounds: 13"
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
          "id": "265cecd2c68891c84bb78acf5f47cdfa83a0847a",
          "message": ":bookmark: Bump version number to `0.12.1`",
          "timestamp": "2021-10-13T03:36:33Z",
          "tree_id": "905d167fd5ebf18bf6e0ba5b949fb7ccd3571b71"
        },
        "date": 1634098650664,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.4859520801343,
            "unit": "iter/sec",
            "range": "stddev: 0.0004991749554125887",
            "extra": "mean: 13.074296296296351 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.5730808049261,
            "unit": "iter/sec",
            "range": "stddev: 0.0011812401449062732",
            "extra": "mean: 15.021086419753082 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.253496841661189,
            "unit": "iter/sec",
            "range": "stddev: 0.0036026357788356157",
            "extra": "mean: 81.60935714285714 msec\nrounds: 14"
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
          "id": "12d53604da3df3930da58293d0fa06bd271ede12",
          "message": "Merge pull request #313 from TeoZosa/dependabot/pip/emoji-1.6.1",
          "timestamp": "2021-10-13T13:14:51Z",
          "tree_id": "977898b0ecbd954e84587c6dd8be594bc4328938"
        },
        "date": 1634132568818,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.44602051337831,
            "unit": "iter/sec",
            "range": "stddev: 0.0005561917383682594",
            "extra": "mean: 13.615441558441526 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.85510439307996,
            "unit": "iter/sec",
            "range": "stddev: 0.0004188476407404078",
            "extra": "mean: 14.315346153846171 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.525979362967226,
            "unit": "iter/sec",
            "range": "stddev: 0.0014175302149357569",
            "extra": "mean: 79.83407692307696 msec\nrounds: 13"
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
          "id": "d5da6e730f3c9758110d5925960e5cfd204ccada",
          "message": "Merge pull request #314 from TeoZosa/fix-gratuitous-env-var-loading\n\n🐛 Fix Gratuitous Global `.env` Loading",
          "timestamp": "2021-10-14T05:46:35Z",
          "tree_id": "02e2d0f8ef540539e5676260c20731a2b3213f3b"
        },
        "date": 1634190732450,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.65490254468001,
            "unit": "iter/sec",
            "range": "stddev: 0.00048161894260747266",
            "extra": "mean: 13.955779220779144 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.74531634246027,
            "unit": "iter/sec",
            "range": "stddev: 0.0011143252081482183",
            "extra": "mean: 14.982324675324769 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.636318501552513,
            "unit": "iter/sec",
            "range": "stddev: 0.0024936419817873866",
            "extra": "mean: 85.93783333333309 msec\nrounds: 12"
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
          "id": "e87f42e723ef448c4ef625e2e00d4ce935d85593",
          "message": ":memo: Add `json` to JSON-formatted fenced code blocks",
          "timestamp": "2021-10-14T05:51:48Z",
          "tree_id": "0e4a45d936d7ad69c605a49f513b3dbbe07dbb18"
        },
        "date": 1634191178097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.794840393159,
            "unit": "iter/sec",
            "range": "stddev: 0.0004813169931842247",
            "extra": "mean: 14.327706666666664 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 59.49977350419557,
            "unit": "iter/sec",
            "range": "stddev: 0.0017926519257365579",
            "extra": "mean: 16.806786666666653 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.778956109646403,
            "unit": "iter/sec",
            "range": "stddev: 0.001950109919201338",
            "extra": "mean: 84.89716666666646 msec\nrounds: 12"
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
          "id": "a3b03becb1ba35b9dfba52df72310cb647e89d9c",
          "message": ":bookmark: Bump version number to `0.12.2`",
          "timestamp": "2021-10-14T05:55:57Z",
          "tree_id": "ea139dbfc74a98f3757dc9bbc914ff629106daf0"
        },
        "date": 1634191643484,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.17069234788586,
            "unit": "iter/sec",
            "range": "stddev: 0.0004889737305716493",
            "extra": "mean: 13.856039999999995 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.2797614410186,
            "unit": "iter/sec",
            "range": "stddev: 0.000686668507501249",
            "extra": "mean: 14.645628205128101 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.95497755452957,
            "unit": "iter/sec",
            "range": "stddev: 0.0016192701966307908",
            "extra": "mean: 83.64716666666716 msec\nrounds: 12"
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
          "id": "c0de823f8580f5aab3807353204471dfe332a701",
          "message": "Merge pull request #315 from TeoZosa/migrate-to-github-md-footnote-syntax\n\n📝 Migrate Footnotes to GitHub Markdown Syntax",
          "timestamp": "2021-10-14T18:39:41Z",
          "tree_id": "2358815771dfe3fa4282d363aae3fbbdcb790d48"
        },
        "date": 1634237932699,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.87057994165352,
            "unit": "iter/sec",
            "range": "stddev: 0.0006633961703020097",
            "extra": "mean: 13.00887804878046 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.4479249198955,
            "unit": "iter/sec",
            "range": "stddev: 0.0008840916358444134",
            "extra": "mean: 14.826253012048177 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.834993325803456,
            "unit": "iter/sec",
            "range": "stddev: 0.00134386228213008",
            "extra": "mean: 77.91200000000008 msec\nrounds: 13"
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
          "id": "f7cc5406ca9c3896cccf9b4efe34187cee73156e",
          "message": "Merge pull request #316 from TeoZosa/write-local-logfiles-as-json-lines\n\n💥  Write Local Log Files as JSON Lines Format",
          "timestamp": "2021-10-14T22:20:07Z",
          "tree_id": "2f095cebc7ab2a12cd5dede5ab10d7431fa2acc0"
        },
        "date": 1634250543774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.0797366237709,
            "unit": "iter/sec",
            "range": "stddev: 0.0012165622147906245",
            "extra": "mean: 14.90763157894738 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.93933811202764,
            "unit": "iter/sec",
            "range": "stddev: 0.0006613432402375757",
            "extra": "mean: 14.719012987012968 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309218942183632,
            "unit": "iter/sec",
            "range": "stddev: 0.001946466048233027",
            "extra": "mean: 81.23992307692286 msec\nrounds: 13"
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
          "id": "f5a5d969b2598480158a4aa744d7a730400bf380",
          "message": ":bookmark: Bump version number to `0.13.0`",
          "timestamp": "2021-10-14T22:57:23Z",
          "tree_id": "dc42413898cb8d56b3a24cd66460fce7285b5826"
        },
        "date": 1634252736760,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.60005982244927,
            "unit": "iter/sec",
            "range": "stddev: 0.00032373788919579495",
            "extra": "mean: 13.774093333333338 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.84923357505704,
            "unit": "iter/sec",
            "range": "stddev: 0.000630014805488881",
            "extra": "mean: 14.738560000000108 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.606635066858702,
            "unit": "iter/sec",
            "range": "stddev: 0.0028870093677966506",
            "extra": "mean: 86.15761538461524 msec\nrounds: 13"
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
          "id": "6085bf6ab82764dab475fc7c780cdb77904ba2f0",
          "message": "Merge pull request #318 from TeoZosa/set-default-global-tracked-log-level-to-warning\n\n🐛 Set Default Global Tracked Log Level to `WARNING`",
          "timestamp": "2021-10-23T23:39:09Z",
          "tree_id": "9f5567c16041af9b8b473013c02d5a686f4c525e"
        },
        "date": 1635032944786,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.08571642741995,
            "unit": "iter/sec",
            "range": "stddev: 0.00043508970831207045",
            "extra": "mean: 13.68256410256416 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.30870279146149,
            "unit": "iter/sec",
            "range": "stddev: 0.000755237427520746",
            "extra": "mean: 14.639423076923062 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.41512451852592,
            "unit": "iter/sec",
            "range": "stddev: 0.002634865925805185",
            "extra": "mean: 80.54691666666687 msec\nrounds: 12"
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
          "id": "4ccc2dcccfafccf3b9f0aa60870d37d9967ad5a9",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2021-10-23T23:45:42Z",
          "tree_id": "a3b506a2ff86512c3cd377d5e6abd60d690a51b0"
        },
        "date": 1635033560735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.7862579544982,
            "unit": "iter/sec",
            "range": "stddev: 0.0008455635340938984",
            "extra": "mean: 13.738857142857142 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.6227477681396,
            "unit": "iter/sec",
            "range": "stddev: 0.00047704208847765695",
            "extra": "mean: 14.159743589743687 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.038463467228327,
            "unit": "iter/sec",
            "range": "stddev: 0.0009106809582350576",
            "extra": "mean: 76.69615384615383 msec\nrounds: 13"
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
          "id": "9c11e04c1001f2fb9be87a1eae31b9fe69b044b2",
          "message": ":bookmark: Bump version number to `0.14.0`",
          "timestamp": "2021-10-24T07:44:30Z",
          "tree_id": "ef20c06430186550b1abfa134eb85044e8f79857"
        },
        "date": 1635061916697,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.51838962264081,
            "unit": "iter/sec",
            "range": "stddev: 0.0005711023376252177",
            "extra": "mean: 13.602038961038923 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.46700150855021,
            "unit": "iter/sec",
            "range": "stddev: 0.0001837166979011904",
            "extra": "mean: 14.1910394736842 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.087246926493448,
            "unit": "iter/sec",
            "range": "stddev: 0.01300792621482222",
            "extra": "mean: 99.13507692307701 msec\nrounds: 13"
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
          "id": "ef1b8e434a4083dc584fa4bc5fcc485955f88425",
          "message": "Merge pull request #321 from TeoZosa/performance/elide-processing-of-logs-under-global-logging-level-thresholds\n\n⚡  Elide Log Processing for Logs Under the Global Log Level Threshold",
          "timestamp": "2021-10-25T15:49:45Z",
          "tree_id": "bcaad415753f7f47970e713bdc030718816b991b"
        },
        "date": 1635177384544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.23045779199647,
            "unit": "iter/sec",
            "range": "stddev: 0.0006823747384260377",
            "extra": "mean: 14.038938271604946 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.36350845763819,
            "unit": "iter/sec",
            "range": "stddev: 0.0007399094441171874",
            "extra": "mean: 14.416802469135797 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.412397120323908,
            "unit": "iter/sec",
            "range": "stddev: 0.0010878353535393528",
            "extra": "mean: 80.56461538461512 msec\nrounds: 13"
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
          "id": "d7de46eced36f14e38f711ea2bedc247662fecc0",
          "message": "Merge pull request #322 from TeoZosa/feat/improve-logfile-timestamp-precision\n\n✨  Add Seconds to Log File Timestamp Suffix",
          "timestamp": "2021-10-25T16:05:23Z",
          "tree_id": "8e9e2d75b4ec73d98d3f1525bb3e9262ee728c37"
        },
        "date": 1635178439575,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.18565072216795,
            "unit": "iter/sec",
            "range": "stddev: 0.00023229937222253854",
            "extra": "mean: 13.300410256410231 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.41549984154712,
            "unit": "iter/sec",
            "range": "stddev: 0.0005000102491038124",
            "extra": "mean: 14.002562499999948 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.323010757988383,
            "unit": "iter/sec",
            "range": "stddev: 0.003591431608704265",
            "extra": "mean: 81.14900000000006 msec\nrounds: 13"
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
          "id": "919230def3b78ffdcea00e1b726bfaba03b006b9",
          "message": "Merge pull request #323 from TeoZosa/feat/use-iso-8601-timestamps\n\n✨  Use ISO 8601 Timestamps For Logs and Filenames",
          "timestamp": "2021-10-25T17:23:55Z",
          "tree_id": "9502247c1c55e8c91c2c351bbfbc500657870fa6"
        },
        "date": 1635183019600,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.31802023957253,
            "unit": "iter/sec",
            "range": "stddev: 0.0006619907877870398",
            "extra": "mean: 13.455686746987974 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.6036635983594,
            "unit": "iter/sec",
            "range": "stddev: 0.00033555164031883735",
            "extra": "mean: 13.773409638554336 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.741117393110693,
            "unit": "iter/sec",
            "range": "stddev: 0.0017895400784301786",
            "extra": "mean: 85.17076923076908 msec\nrounds: 13"
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
          "id": "33f30e1c7acf7788b867eac6978bf5bd83bfb332",
          "message": "Merge pull request #324 from TeoZosa/refactor/unify-test-suite-across-python-and-c-extension-environments\n\n✅  Unify Test Suite Across Pure Python and C Extension Environments",
          "timestamp": "2021-10-25T22:51:14Z",
          "tree_id": "e5e9d6ea632907aecaa7aff36dbca8a59001abdd"
        },
        "date": 1635202643708,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.82379045807097,
            "unit": "iter/sec",
            "range": "stddev: 0.0003891526066475501",
            "extra": "mean: 12.849541176470565 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.65086436474792,
            "unit": "iter/sec",
            "range": "stddev: 0.000289260318082238",
            "extra": "mean: 13.577573170731688 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.879360524885023,
            "unit": "iter/sec",
            "range": "stddev: 0.0032724142601056982",
            "extra": "mean: 84.17961538461505 msec\nrounds: 13"
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
          "id": "31d6574baf19c95f88c29af43624f68071c141a0",
          "message": "Merge pull request #320 from TeoZosa/dependabot/github_actions/ahmadnassri/action-dependabot-auto-merge-2.6\n\n⬆️ Bump ahmadnassri/action-dependabot-auto-merge from 2.4 to 2.6",
          "timestamp": "2021-10-25T22:51:25Z",
          "tree_id": "a7ef645b4cefe7faebb60805b9442109b05dce8e"
        },
        "date": 1635203046258,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.86651706930266,
            "unit": "iter/sec",
            "range": "stddev: 0.00022848941972878153",
            "extra": "mean: 12.520891566265108 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.26071490425088,
            "unit": "iter/sec",
            "range": "stddev: 0.00021116281618640965",
            "extra": "mean: 13.2871445783133 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.075544607061797,
            "unit": "iter/sec",
            "range": "stddev: 0.001737789352405594",
            "extra": "mean: 82.81199999999987 msec\nrounds: 13"
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
          "id": "444b87b2e1ba225b0a7cebd882c1760faf0e7273",
          "message": "Merge pull request #319 from TeoZosa/dependabot/pip/dot-github/workflows/pip-21.3.1\n\n⬆️ Bump pip from 21.3 to 21.3.1 in /.github/workflows",
          "timestamp": "2021-10-25T22:51:43Z",
          "tree_id": "e21841ff28fcdb31853a47e11c5d97644aa07332"
        },
        "date": 1635203406544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.73513401410808,
            "unit": "iter/sec",
            "range": "stddev: 0.0004907905968622342",
            "extra": "mean: 13.380587500000008 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.3333380140647,
            "unit": "iter/sec",
            "range": "stddev: 0.0007528990767683996",
            "extra": "mean: 14.423075949367155 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.958894519790594,
            "unit": "iter/sec",
            "range": "stddev: 0.0013382691030986544",
            "extra": "mean: 83.61976923076921 msec\nrounds: 13"
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
          "id": "384982ae333fa792d54e83602a1b54d166043a53",
          "message": ":bookmark: Bump version number to `0.14.1`",
          "timestamp": "2021-10-25T23:30:18Z",
          "tree_id": "bde55008b0149a864a2a23b4e379fe290bcaef6f"
        },
        "date": 1635204982635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.09206025748823,
            "unit": "iter/sec",
            "range": "stddev: 0.0005312965965182825",
            "extra": "mean: 13.141975609756075 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.60078365326774,
            "unit": "iter/sec",
            "range": "stddev: 0.001146735782127937",
            "extra": "mean: 14.367654320987667 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.26223063180671,
            "unit": "iter/sec",
            "range": "stddev: 0.0014802832022875604",
            "extra": "mean: 81.55123076923083 msec\nrounds: 13"
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
          "id": "e7283c51cf0e6d984ece818e3a810455184c6cb7",
          "message": "Merge pull request #325 from TeoZosa/feat/add-pretty-printed-dev-rendered-exceptions-via-rich\n\n✨ Add Pretty-Printed Exceptions for Local Development via `rich`",
          "timestamp": "2021-10-28T19:26:59Z",
          "tree_id": "c81f5ef4064ac8008263ac5794666c64c950c233"
        },
        "date": 1635449824506,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.56418475119558,
            "unit": "iter/sec",
            "range": "stddev: 0.0008537752759388838",
            "extra": "mean: 13.593571428571398 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.10908254175979,
            "unit": "iter/sec",
            "range": "stddev: 0.0006005790007960712",
            "extra": "mean: 14.263487179487191 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.003083869240273,
            "unit": "iter/sec",
            "range": "stddev: 0.0016052762203400866",
            "extra": "mean: 83.31192307692294 msec\nrounds: 13"
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
          "id": "ea2643f471c7d0924fb4abe57336f64d7560c200",
          "message": ":bookmark: Bump version number to `0.15.0`",
          "timestamp": "2021-10-28T20:18:14Z",
          "tree_id": "6a012ebbe706a00bceca39c5743d6d52cd7bd26f"
        },
        "date": 1635452795988,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 81.42932413661029,
            "unit": "iter/sec",
            "range": "stddev: 0.00032439042812630966",
            "extra": "mean: 12.280588235294022 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.123899100664,
            "unit": "iter/sec",
            "range": "stddev: 0.00028077871485345825",
            "extra": "mean: 12.966149425287425 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.547887080598924,
            "unit": "iter/sec",
            "range": "stddev: 0.0007625661047427791",
            "extra": "mean: 79.6946923076924 msec\nrounds: 13"
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
          "id": "193dde657143a4ec5dd7b94b9e7e09b7f13ab38d",
          "message": "Merge pull request #327 from TeoZosa/dependabot/github_actions/actions/checkout-2.4.0",
          "timestamp": "2021-11-03T13:12:11Z",
          "tree_id": "7d1625de75e4a969eeb8f2b878758ad9d21a9458"
        },
        "date": 1635946396515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.36264072121074,
            "unit": "iter/sec",
            "range": "stddev: 0.0004386861279173418",
            "extra": "mean: 12.926135802469151 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.0331759964297,
            "unit": "iter/sec",
            "range": "stddev: 0.0005776610549833573",
            "extra": "mean: 13.692407407407366 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.364301787878045,
            "unit": "iter/sec",
            "range": "stddev: 0.001330066414381874",
            "extra": "mean: 80.87799999999994 msec\nrounds: 13"
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
          "id": "5078378966a6bc30190546533450686662cf2a93",
          "message": "Merge pull request #326 from TeoZosa/dependabot/pip/black-21.10b0\n\n⬆️ Bump black from 21.9b0 to 21.10b0",
          "timestamp": "2021-11-06T02:14:25Z",
          "tree_id": "5cbe2f3189c0ed1b6f892fd72369c7f67afab76c"
        },
        "date": 1636165398934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.2830444077262,
            "unit": "iter/sec",
            "range": "stddev: 0.0005189741643959967",
            "extra": "mean: 12.455930232558087 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.96966753685173,
            "unit": "iter/sec",
            "range": "stddev: 0.00036175052242707543",
            "extra": "mean: 12.992130952380917 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.039521859361379,
            "unit": "iter/sec",
            "range": "stddev: 0.0017273651551196266",
            "extra": "mean: 76.68992857142813 msec\nrounds: 14"
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
          "id": "c601d9874a1c25e852be8afa585dee4141db1e60",
          "message": "Merge pull request #328 from TeoZosa/dependabot/pip/cruft-2.10.0",
          "timestamp": "2021-11-08T14:14:22Z",
          "tree_id": "79e255273ad2b6010e0faa848ef66ac73ae7a8e7"
        },
        "date": 1636384286176,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.80344134311585,
            "unit": "iter/sec",
            "range": "stddev: 0.0008224201798066448",
            "extra": "mean: 13.926909090909122 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 66.49525667169027,
            "unit": "iter/sec",
            "range": "stddev: 0.0012681331474469282",
            "extra": "mean: 15.038666666666774 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.553070361753312,
            "unit": "iter/sec",
            "range": "stddev: 0.0023082271140976427",
            "extra": "mean: 86.55707692307679 msec\nrounds: 13"
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
          "id": "59995fa521c2d9ed8a15c95afda674ce1bddecbc",
          "message": "Merge pull request #329 from TeoZosa/dependabot/pip/rich-10.13.0",
          "timestamp": "2021-11-08T14:35:42Z",
          "tree_id": "e680a15449820239d52246e9cbaedc2f17648590"
        },
        "date": 1636385190703,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.66703869706133,
            "unit": "iter/sec",
            "range": "stddev: 0.0009937462026684866",
            "extra": "mean: 13.761397435897443 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.46899004772945,
            "unit": "iter/sec",
            "range": "stddev: 0.0011281794057253142",
            "extra": "mean: 14.60515189873407 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.660426843378925,
            "unit": "iter/sec",
            "range": "stddev: 0.0028365923760198695",
            "extra": "mean: 85.76015384615395 msec\nrounds: 13"
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
          "id": "348e1a5a97b17602099fef1f40fa74c34d5e3e9d",
          "message": "Merge pull request #330 from TeoZosa/dependabot/pip/importlib-metadata-4.8.2",
          "timestamp": "2021-11-09T14:16:21Z",
          "tree_id": "79d22abb7efe5ce62c340706b8125b34a622f0b1"
        },
        "date": 1636469929638,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.55351774335112,
            "unit": "iter/sec",
            "range": "stddev: 0.00017398532121000272",
            "extra": "mean: 12.414107142857082 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.16267350050343,
            "unit": "iter/sec",
            "range": "stddev: 0.0006591324798038007",
            "extra": "mean: 13.304476190476407 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.561952166018772,
            "unit": "iter/sec",
            "range": "stddev: 0.0008794760386532057",
            "extra": "mean: 79.60546153846146 msec\nrounds: 13"
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
          "id": "6922d1aeea333bc3bd7cd406fce51fcca7d6fe9c",
          "message": "Merge pull request #331 from TeoZosa/dependabot/pip/python-dotenv-0.19.2",
          "timestamp": "2021-11-11T14:15:03Z",
          "tree_id": "d977c5517b84051cecda12fab365855e6ce80cd2"
        },
        "date": 1636642375157,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.39116327131667,
            "unit": "iter/sec",
            "range": "stddev: 0.0024123804052107057",
            "extra": "mean: 14.838740740740775 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.43944239297568,
            "unit": "iter/sec",
            "range": "stddev: 0.00041996547512997964",
            "extra": "mean: 13.80463414634136 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.955353193320777,
            "unit": "iter/sec",
            "range": "stddev: 0.0017593929642249152",
            "extra": "mean: 83.64453846153876 msec\nrounds: 13"
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
          "id": "eebe5ca1a2f138f16dd0e519b94f1c20ac60c6f9",
          "message": "Merge pull request #332 from TeoZosa/dependabot/pip/sphinx-4.3.0",
          "timestamp": "2021-11-11T14:29:04Z",
          "tree_id": "b699f496b26153fffed0688ffec789ac1f968ca6"
        },
        "date": 1636643151195,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.64486627092379,
            "unit": "iter/sec",
            "range": "stddev: 0.0009746877426535348",
            "extra": "mean: 13.578679012345718 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.16145007173805,
            "unit": "iter/sec",
            "range": "stddev: 0.0012039077196906453",
            "extra": "mean: 14.671049382716001 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.693023941916286,
            "unit": "iter/sec",
            "range": "stddev: 0.004166891056522268",
            "extra": "mean: 85.52107692307669 msec\nrounds: 13"
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
          "id": "99a7a5f6c217fd17e1087bb42b2cc448aa149908",
          "message": "Merge pull request #335 from TeoZosa/feat/add-direnv-compatibility\n\n📝 Document library configuration via `direnv`",
          "timestamp": "2021-11-12T19:19:52Z",
          "tree_id": "ecc24346b99da9112be21247329f826e45d02406"
        },
        "date": 1636745311930,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.81818854656336,
            "unit": "iter/sec",
            "range": "stddev: 0.00038552756960514927",
            "extra": "mean: 12.68742682926836 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.44039656103364,
            "unit": "iter/sec",
            "range": "stddev: 0.0002201340053500896",
            "extra": "mean: 13.433566265060135 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.417246217754574,
            "unit": "iter/sec",
            "range": "stddev: 0.0010935781366806238",
            "extra": "mean: 80.53315384615377 msec\nrounds: 13"
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
          "id": "01dfa7a636e3f73dc2a940cecb39c8674ef637f9",
          "message": ":memo: Fix outdated documentation related to `.env` loading",
          "timestamp": "2021-11-12T19:27:43Z",
          "tree_id": "b34666d5d030cd5344a043cace9509631d45b425"
        },
        "date": 1636745931844,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.60170478364181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002472207234661309",
            "extra": "mean: 12.722370370370324 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.42492733091771,
            "unit": "iter/sec",
            "range": "stddev: 0.000493897032499147",
            "extra": "mean: 13.619352941176436 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.605344666138462,
            "unit": "iter/sec",
            "range": "stddev: 0.0042491526886460716",
            "extra": "mean: 79.33142857142846 msec\nrounds: 14"
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
          "id": "11f41937626a24d6491d723ded7a8d21e184e910",
          "message": "Merge pull request #336 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.0",
          "timestamp": "2021-11-17T14:10:25Z",
          "tree_id": "712f1cd3b91bb729cd9c31e2758af53e225aa748"
        },
        "date": 1637161495235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 80.59407202486031,
            "unit": "iter/sec",
            "range": "stddev: 0.0003499112211032017",
            "extra": "mean: 12.4078604651163 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.38533382098414,
            "unit": "iter/sec",
            "range": "stddev: 0.00032229768078158826",
            "extra": "mean: 12.922345238095176 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.279129192647945,
            "unit": "iter/sec",
            "range": "stddev: 0.001197623213968588",
            "extra": "mean: 75.30614285714269 msec\nrounds: 14"
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
          "id": "05ab448d6cef90a852d1e3b64f6cf136e1bc3e9d",
          "message": "Merge pull request #338 from TeoZosa/dependabot/pip/rich-10.14.0",
          "timestamp": "2021-11-17T14:47:54Z",
          "tree_id": "f2c21fbf78fd3f51d63bd6cf795e641f86877c7b"
        },
        "date": 1637162213890,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.42064619803266,
            "unit": "iter/sec",
            "range": "stddev: 0.00047026885277194163",
            "extra": "mean: 12.91645121951218 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.82947339512974,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567126943407611",
            "extra": "mean: 14.742853658536607 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.572351464920699,
            "unit": "iter/sec",
            "range": "stddev: 0.0016814522759838054",
            "extra": "mean: 79.53961538461553 msec\nrounds: 13"
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
          "id": "2888467908462e7a04381b0650f5e792beec8ca1",
          "message": "Merge pull request #339 from TeoZosa/dependabot/pip/sentry-sdk-1.5.0",
          "timestamp": "2021-11-17T14:58:48Z",
          "tree_id": "4c0d611ed5d03e02d55450abb9b9903680608bfa"
        },
        "date": 1637162718975,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.69735874667735,
            "unit": "iter/sec",
            "range": "stddev: 0.00131394027796322",
            "extra": "mean: 14.144799999999975 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.00342807024614,
            "unit": "iter/sec",
            "range": "stddev: 0.0011294930218232323",
            "extra": "mean: 14.70514102564095 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.68211025909872,
            "unit": "iter/sec",
            "range": "stddev: 0.010319445669991281",
            "extra": "mean: 93.61446153846131 msec\nrounds: 13"
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
          "id": "17326e71b6de04298508a50cb6df64249330a9ab",
          "message": ":bug: Fix sample `.envrc` file syntax\n\nFixes #335",
          "timestamp": "2021-11-17T18:49:29Z",
          "tree_id": "3836b554db25a4d02c95ba5c25325cd53194d18e"
        },
        "date": 1637175302902,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.8770246285158,
            "unit": "iter/sec",
            "range": "stddev: 0.00048584387484859273",
            "extra": "mean: 13.007787500000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.9946740922978,
            "unit": "iter/sec",
            "range": "stddev: 0.00040843082169568924",
            "extra": "mean: 13.699629629629612 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.154042200704366,
            "unit": "iter/sec",
            "range": "stddev: 0.002060537666328511",
            "extra": "mean: 82.27715384615391 msec\nrounds: 13"
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
          "id": "dc712043261ac2681163ffb3c642ae1703269422",
          "message": "Merge pull request #340 from TeoZosa/dependabot/pip/black-21.11b1\n\n⬆️ Bump black from 21.10b0 to 21.11b1",
          "timestamp": "2021-11-21T21:19:19Z",
          "tree_id": "7cba80a27ba64c5e670eb72e6bf7e4d7f0e09c94"
        },
        "date": 1637530269128,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 83.14045385131423,
            "unit": "iter/sec",
            "range": "stddev: 0.00031246606787178053",
            "extra": "mean: 12.027839080459778 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.17854905400281,
            "unit": "iter/sec",
            "range": "stddev: 0.0009026471492056473",
            "extra": "mean: 13.301666666666744 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.990314792442561,
            "unit": "iter/sec",
            "range": "stddev: 0.001554088093448575",
            "extra": "mean: 76.98042857142883 msec\nrounds: 14"
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
          "id": "66b5c02dd550bbc44f50e3af87a70790126d317a",
          "message": "Merge pull request #341 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.0",
          "timestamp": "2021-11-22T14:18:12Z",
          "tree_id": "4c45e8a6e5e2c6deec46b5e523ed9613ca520df5"
        },
        "date": 1637592919959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.76494431668776,
            "unit": "iter/sec",
            "range": "stddev: 0.0011070140791873825",
            "extra": "mean: 13.556574999999983 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.90959815089082,
            "unit": "iter/sec",
            "range": "stddev: 0.0008149082901535309",
            "extra": "mean: 14.304187500000065 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.90127172419055,
            "unit": "iter/sec",
            "range": "stddev: 0.0035390431541548087",
            "extra": "mean: 91.73241666666672 msec\nrounds: 12"
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
          "id": "94f833151839d9a0e23af51d8878e2f6e2d9287c",
          "message": "Merge pull request #342 from TeoZosa/dependabot/pip/structlog-21.3.0",
          "timestamp": "2021-11-22T14:32:48Z",
          "tree_id": "0c1c9fb9f81fcf1b31d7fb5393cfe63822b1b896"
        },
        "date": 1637593829683,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.37501276894761,
            "unit": "iter/sec",
            "range": "stddev: 0.0003275179845772038",
            "extra": "mean: 13.093287499999972 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.24333666053379,
            "unit": "iter/sec",
            "range": "stddev: 0.0003748181559102689",
            "extra": "mean: 13.469222222222392 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.556031289629912,
            "unit": "iter/sec",
            "range": "stddev: 0.0009055584832946416",
            "extra": "mean: 79.64300000000038 msec\nrounds: 13"
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
          "id": "6e8819521b7086c43412d1c64ecf0db04870c1d9",
          "message": "Merge pull request #343 from TeoZosa/dependabot/pip/typeguard-2.13.2",
          "timestamp": "2021-11-23T14:19:39Z",
          "tree_id": "1998c03f445fed8ce2a9ba56fc8ee02a3c42cef1"
        },
        "date": 1637679061995,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.66751973090678,
            "unit": "iter/sec",
            "range": "stddev: 0.0002440151470201638",
            "extra": "mean: 12.87539506172827 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.56200511827569,
            "unit": "iter/sec",
            "range": "stddev: 0.0006040505840574487",
            "extra": "mean: 13.781317073170802 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.573907980272484,
            "unit": "iter/sec",
            "range": "stddev: 0.0007903498332852767",
            "extra": "mean: 79.52976923076936 msec\nrounds: 13"
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
          "id": "e7dd04b27da8d5d5415cf85b0f71d30aa3c93944",
          "message": "Merge pull request #344 from TeoZosa/dependabot/pip/pylint-2.12.1",
          "timestamp": "2021-11-26T14:14:23Z",
          "tree_id": "24dccfd376f51a4e59cefde610bbf2c61e524bbe"
        },
        "date": 1637939188728,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.24918187064262,
            "unit": "iter/sec",
            "range": "stddev: 0.000903603471440773",
            "extra": "mean: 13.840987179487154 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.71693138245134,
            "unit": "iter/sec",
            "range": "stddev: 0.0008773422364922923",
            "extra": "mean: 14.34371794871788 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.027159175751079,
            "unit": "iter/sec",
            "range": "stddev: 0.0035457676847697904",
            "extra": "mean: 83.14515384615348 msec\nrounds: 13"
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
          "id": "db924d7b63e99e2534518507d5cb3554c9bdce28",
          "message": "Merge pull request #345 from TeoZosa/dependabot/pip/structlog-21.4.0",
          "timestamp": "2021-11-26T14:32:47Z",
          "tree_id": "89dfa2b08eeed007ff38bc2cd917fd94f1a89d2b"
        },
        "date": 1637940169832,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.57904077919221,
            "unit": "iter/sec",
            "range": "stddev: 0.001024364328560495",
            "extra": "mean: 14.16851219512203 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.32065370728205,
            "unit": "iter/sec",
            "range": "stddev: 0.0003925950407854648",
            "extra": "mean: 13.827308641975243 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.184891671626577,
            "unit": "iter/sec",
            "range": "stddev: 0.0019997063470320094",
            "extra": "mean: 82.06884615384593 msec\nrounds: 13"
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
          "id": "8018973b8fdbcdd7e61898d50ca564d0ee5b1787",
          "message": "Merge pull request #347 from TeoZosa/dependabot/github_actions/actions/setup-python-2.3.1",
          "timestamp": "2021-11-29T14:09:04Z",
          "tree_id": "c5caa99dec53999850ac45a3e484dc73de0933f0"
        },
        "date": 1638204102316,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.53904588157772,
            "unit": "iter/sec",
            "range": "stddev: 0.0007874185622950772",
            "extra": "mean: 13.415787500000043 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.07453141894015,
            "unit": "iter/sec",
            "range": "stddev: 0.000631120276682144",
            "extra": "mean: 14.069737500000134 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.68445509724186,
            "unit": "iter/sec",
            "range": "stddev: 0.006710375324258927",
            "extra": "mean: 93.59391666666698 msec\nrounds: 12"
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
          "id": "15c91bbdabfd87ea54f57cdecd0b9232f6e112aa",
          "message": "Merge pull request #348 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.12",
          "timestamp": "2021-11-29T14:11:55Z",
          "tree_id": "ded0970be8e232325cff9636f97d0f44c9e4d7b8"
        },
        "date": 1638204767474,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.60300574582836,
            "unit": "iter/sec",
            "range": "stddev: 0.0006129811243521367",
            "extra": "mean: 13.226987341772166 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.41720783164926,
            "unit": "iter/sec",
            "range": "stddev: 0.0009460100502582211",
            "extra": "mean: 14.405650000000024 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.74799290059756,
            "unit": "iter/sec",
            "range": "stddev: 0.0033307023148664377",
            "extra": "mean: 85.1209230769228 msec\nrounds: 13"
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
          "id": "8ae69d635bcbac40ff851a7588babca02cd8247c",
          "message": "Merge pull request #351 from TeoZosa/dependabot/pip/sphinx-4.3.1",
          "timestamp": "2021-11-29T15:35:36Z",
          "tree_id": "a9a5167da3a9b9bb00d4ee32f11f57b8bc67afd2"
        },
        "date": 1638206653486,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.52360025818156,
            "unit": "iter/sec",
            "range": "stddev: 0.0012784712616931287",
            "extra": "mean: 14.383604938271587 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.71219768753745,
            "unit": "iter/sec",
            "range": "stddev: 0.001144959836079255",
            "extra": "mean: 14.553456790123496 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.819170330609477,
            "unit": "iter/sec",
            "range": "stddev: 0.003269852223588097",
            "extra": "mean: 84.60830769230763 msec\nrounds: 13"
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
          "id": "97a34ba23d490583cf559674a8375571b8bc7191",
          "message": "Merge pull request #352 from TeoZosa/dependabot/pip/rich-10.15.0",
          "timestamp": "2021-11-29T15:53:50Z",
          "tree_id": "dabd8d728f20508e2db21e4e8d37d83d1c115d13"
        },
        "date": 1638207637430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.21017825472656,
            "unit": "iter/sec",
            "range": "stddev: 0.0005299336488507624",
            "extra": "mean: 13.475240506329177 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.18168959718462,
            "unit": "iter/sec",
            "range": "stddev: 0.0007529970537373852",
            "extra": "mean: 14.248730769230665 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.66857278500426,
            "unit": "iter/sec",
            "range": "stddev: 0.00822203704161146",
            "extra": "mean: 93.73324999999996 msec\nrounds: 12"
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
          "id": "fb8f127b075a04ce667c73fc60dd6ce5e08d8f62",
          "message": "Merge pull request #350 from TeoZosa/dependabot/pip/docs/poetry-1.1.12",
          "timestamp": "2021-11-29T16:25:18Z",
          "tree_id": "db380f56c1d84849a4caea106e3c86c1bfd92929"
        },
        "date": 1638209398535,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.07547115950041,
            "unit": "iter/sec",
            "range": "stddev: 0.00033053912190701945",
            "extra": "mean: 12.97429629629632 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.08643965074583,
            "unit": "iter/sec",
            "range": "stddev: 0.0004935783694512538",
            "extra": "mean: 13.872234567901199 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.803277639075636,
            "unit": "iter/sec",
            "range": "stddev: 0.0009630695717339453",
            "extra": "mean: 78.1049999999998 msec\nrounds: 13"
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
          "id": "031bc2499e113999d96410ea572c6dd9090e08fb",
          "message": "Merge pull request #353 from TeoZosa/dependabot/pip/rich-10.15.1",
          "timestamp": "2021-11-30T14:15:39Z",
          "tree_id": "8fe728f390cb449cf5d14cdbdf03f6532a8be54b"
        },
        "date": 1638282672594,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.481817102911,
            "unit": "iter/sec",
            "range": "stddev: 0.0003462674139319836",
            "extra": "mean: 12.741804878048734 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.2491444589257,
            "unit": "iter/sec",
            "range": "stddev: 0.0004769391980586565",
            "extra": "mean: 13.652036585365824 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.480631020704417,
            "unit": "iter/sec",
            "range": "stddev: 0.0015067825460314687",
            "extra": "mean: 80.12415384615377 msec\nrounds: 13"
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
          "id": "dba01235c6d46692aa2ac9afb59d9631d6abc002",
          "message": "Merge pull request #354 from TeoZosa/dependabot/pip/sphinxcontrib-confluencebuilder-1.7.1",
          "timestamp": "2021-12-01T14:14:32Z",
          "tree_id": "f5d58f6ff20f6a8f8b9511f81e352e145a37bfe5"
        },
        "date": 1638371442840,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.45363753141922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005333839421379376",
            "extra": "mean: 13.431177215189827 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.67536122713922,
            "unit": "iter/sec",
            "range": "stddev: 0.0005921792084033092",
            "extra": "mean: 14.149202531645523 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.0885454472565,
            "unit": "iter/sec",
            "range": "stddev: 0.003829031336299294",
            "extra": "mean: 90.18315384615369 msec\nrounds: 13"
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
          "id": "b42074f33b1f5e40accf7c3f7a1a8ed870a05d2e",
          "message": "Merge pull request #355 from TeoZosa/dependabot/pip/pre-commit-2.16.0",
          "timestamp": "2021-12-01T14:35:32Z",
          "tree_id": "c36e8a46b89ed75e2ae765f7c6c14b7aabff8313"
        },
        "date": 1638372864217,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.83964912215849,
            "unit": "iter/sec",
            "range": "stddev: 0.0006428238989983893",
            "extra": "mean: 13.361901234567927 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.01932278430307,
            "unit": "iter/sec",
            "range": "stddev: 0.000584283168815139",
            "extra": "mean: 13.885162499999993 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.257871675170202,
            "unit": "iter/sec",
            "range": "stddev: 0.0035106248293298855",
            "extra": "mean: 81.58023076923057 msec\nrounds: 13"
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
          "id": "f3c69f53b61b3c5de8251340667a799ea909e33c",
          "message": "Merge pull request #356 from TeoZosa/dependabot/pip/rich-10.15.2",
          "timestamp": "2021-12-02T14:15:52Z",
          "tree_id": "567307a9f558f55ab040a852d58371bfd35fc3d9"
        },
        "date": 1638455670015,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.52827706907216,
            "unit": "iter/sec",
            "range": "stddev: 0.0009783901281704222",
            "extra": "mean: 13.6002098765432 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.36468255852999,
            "unit": "iter/sec",
            "range": "stddev: 0.0009712026053470834",
            "extra": "mean: 14.211675000000046 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309615229834789,
            "unit": "iter/sec",
            "range": "stddev: 0.0017126374584548248",
            "extra": "mean: 81.23730769230725 msec\nrounds: 13"
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
          "id": "c578857c06c79f1b277bf9bcfd45457b6b3b2f54",
          "message": "Merge pull request #357 from TeoZosa/dependabot/pip/docs/orjson-3.6.5",
          "timestamp": "2021-12-06T14:11:10Z",
          "tree_id": "a9b89e231d577b1d3b8e2c03d72cc9308b35ff2f"
        },
        "date": 1638805418981,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.00591291814119,
            "unit": "iter/sec",
            "range": "stddev: 0.00024442243710987206",
            "extra": "mean: 12.65728048780488 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.87646953361387,
            "unit": "iter/sec",
            "range": "stddev: 0.00045307522625319917",
            "extra": "mean: 13.536109756097629 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.458670755666256,
            "unit": "iter/sec",
            "range": "stddev: 0.0013271833921545341",
            "extra": "mean: 80.26538461538489 msec\nrounds: 13"
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
          "id": "fea3ef88803cb4de6c16fb7d6e26540dada7fecf",
          "message": "Merge pull request #359 from TeoZosa/dependabot/pip/pylint-2.12.2",
          "timestamp": "2021-12-06T14:55:17Z",
          "tree_id": "dab268000a4c811157ed9b28c25fe7bed988d349"
        },
        "date": 1638806374053,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.14095887284824,
            "unit": "iter/sec",
            "range": "stddev: 0.0008189776679977652",
            "extra": "mean: 13.308320987654369 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.10938817289646,
            "unit": "iter/sec",
            "range": "stddev: 0.0008136947266806494",
            "extra": "mean: 14.263425000000062 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.212971679058079,
            "unit": "iter/sec",
            "range": "stddev: 0.0012831852845007965",
            "extra": "mean: 81.88015384615423 msec\nrounds: 13"
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
          "id": "61c5baa03b3da2cb3d2152adc06fb25ed2e3c0dc",
          "message": "Merge pull request #358 from TeoZosa/dependabot/pip/orjson-3.6.5",
          "timestamp": "2021-12-06T16:06:31Z",
          "tree_id": "5fe437ca16acbcb8eb8b58fcc4c4fa669f1ffcf6"
        },
        "date": 1638807977626,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.53578645928106,
            "unit": "iter/sec",
            "range": "stddev: 0.0002807435410880623",
            "extra": "mean: 12.733048780487813 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.72211284343432,
            "unit": "iter/sec",
            "range": "stddev: 0.0004751045102858755",
            "extra": "mean: 13.750975609756152 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.097265738775338,
            "unit": "iter/sec",
            "range": "stddev: 0.0023665580626938865",
            "extra": "mean: 82.66330769230788 msec\nrounds: 13"
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
          "id": "a39712f372c20926ed0ac4ceeec9d4acc324fec1",
          "message": "Merge pull request #361 from TeoZosa/dependabot/github_actions/actions/upload-artifact-2.3.0",
          "timestamp": "2021-12-08T14:08:26Z",
          "tree_id": "51a26f108519e75643ce7820550b5b6fabf16f8f"
        },
        "date": 1638974137335,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.52653967079696,
            "unit": "iter/sec",
            "range": "stddev: 0.0004366036152235969",
            "extra": "mean: 12.574418604651187 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.54507536595852,
            "unit": "iter/sec",
            "range": "stddev: 0.0005457211605338964",
            "extra": "mean: 13.4147023809524 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.509382036527386,
            "unit": "iter/sec",
            "range": "stddev: 0.0031893619810479975",
            "extra": "mean: 79.94000000000005 msec\nrounds: 14"
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
          "id": "98a70ab8348e5efb6c282cbd48f66cde8d08519d",
          "message": "Merge pull request #362 from TeoZosa/dependabot/github_actions/actions/download-artifact-2.1.0",
          "timestamp": "2021-12-08T14:12:45Z",
          "tree_id": "cbf9cffe39ecf6f89f00319b049c4fdaf081f175"
        },
        "date": 1638975286155,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.67946799037531,
            "unit": "iter/sec",
            "range": "stddev: 0.0004484718346226902",
            "extra": "mean: 12.873414634146345 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.07387947443841,
            "unit": "iter/sec",
            "range": "stddev: 0.0006275044050682216",
            "extra": "mean: 13.684780487804876 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.675685385185357,
            "unit": "iter/sec",
            "range": "stddev: 0.00506208434444307",
            "extra": "mean: 85.64807692307689 msec\nrounds: 13"
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
          "id": "0065631d956ae0383117c29a432b7a2c0a08fb2a",
          "message": "Merge pull request #365 from TeoZosa/dependabot/pip/pytest-xdist-2.5.0",
          "timestamp": "2021-12-10T14:14:43Z",
          "tree_id": "4cbc8f6721116289fd168bb8dd043bf3709a08a8"
        },
        "date": 1639147197456,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.29560837102692,
            "unit": "iter/sec",
            "range": "stddev: 0.00018085150977128665",
            "extra": "mean: 12.772108433734928 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.35671131893642,
            "unit": "iter/sec",
            "range": "stddev: 0.000523315191947925",
            "extra": "mean: 14.014098765432077 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.75241192252421,
            "unit": "iter/sec",
            "range": "stddev: 0.0012136674870945813",
            "extra": "mean: 78.41653846153835 msec\nrounds: 13"
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
          "id": "b6203d4e78b29a7f72da446f7c991226f2fb3386",
          "message": "Merge pull request #360 from TeoZosa/dependabot/pip/black-21.12b0\n\n⬆️ Bump black from 21.11b1 to 21.12b0",
          "timestamp": "2021-12-11T20:33:24Z",
          "tree_id": "322d10bfd17bcdf9910a49580f9a7ce2315e33a1"
        },
        "date": 1639255285718,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 84.40898840623366,
            "unit": "iter/sec",
            "range": "stddev: 0.0006560244111940978",
            "extra": "mean: 11.847079545454537 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 78.31925087186417,
            "unit": "iter/sec",
            "range": "stddev: 0.00048576880371246586",
            "extra": "mean: 12.768252873563242 msec\nrounds: 87"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.064661676588033,
            "unit": "iter/sec",
            "range": "stddev: 0.0014980561562414805",
            "extra": "mean: 76.54235714285714 msec\nrounds: 14"
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
          "id": "20b9327f3059954e011d4828b5c723ea71556145",
          "message": "Merge pull request #366 from TeoZosa/dependabot/pip/rich-10.16.0",
          "timestamp": "2021-12-13T14:16:20Z",
          "tree_id": "d276269b33de0c6a063ad733e0e5d88656c311a5"
        },
        "date": 1639410126526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.96894229035556,
            "unit": "iter/sec",
            "range": "stddev: 0.000578043362521932",
            "extra": "mean: 13.519187500000053 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.69089880969693,
            "unit": "iter/sec",
            "range": "stddev: 0.0006409032842783797",
            "extra": "mean: 14.349075949367121 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.690931344556038,
            "unit": "iter/sec",
            "range": "stddev: 0.003753854231285925",
            "extra": "mean: 85.53638461538455 msec\nrounds: 13"
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
          "id": "39258623780e14fa587eb1f25665a381e56c8100",
          "message": "Merge pull request #367 from TeoZosa/dependabot/pip/typeguard-2.13.3",
          "timestamp": "2021-12-13T14:32:40Z",
          "tree_id": "2fdaeb668138fe17b833cc78bb6e4224e53e48dc"
        },
        "date": 1639412479650,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.53263691783228,
            "unit": "iter/sec",
            "range": "stddev: 0.000647064328856917",
            "extra": "mean: 13.066320987654326 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.2406522982342,
            "unit": "iter/sec",
            "range": "stddev: 0.0008563935072135031",
            "extra": "mean: 14.442382716049346 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.176012693024914,
            "unit": "iter/sec",
            "range": "stddev: 0.0010705118234298988",
            "extra": "mean: 82.12869230769239 msec\nrounds: 13"
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
          "id": "5fb0cbbcee26ee463c924778575aef4c9529dec5",
          "message": "Merge pull request #369 from TeoZosa/dependabot/pip/sentry-sdk-1.5.1",
          "timestamp": "2021-12-13T15:55:29Z",
          "tree_id": "11192052311043f14a08a2749f5c353a89a605cf"
        },
        "date": 1639413328526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.99062617172851,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335890538986681",
            "extra": "mean: 13.335000000000003 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.39787599551207,
            "unit": "iter/sec",
            "range": "stddev: 0.0003662706065346097",
            "extra": "mean: 14.204974025974177 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.62414143699626,
            "unit": "iter/sec",
            "range": "stddev: 0.0009469879781547623",
            "extra": "mean: 79.21330769230799 msec\nrounds: 13"
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
          "id": "5ae6c73a2f706e1d005d1e5a0d35d7ed493f50ce",
          "message": "Merge pull request #368 from TeoZosa/dependabot/pip/myst-parser-0.16.0",
          "timestamp": "2021-12-13T16:14:12Z",
          "tree_id": "6791d6ed5bc1bce50afaa1bdb3f5a417b5a49e48"
        },
        "date": 1639413775990,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.82568172484233,
            "unit": "iter/sec",
            "range": "stddev: 0.0007575473956886675",
            "extra": "mean: 12.849228915662621 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.56001465358388,
            "unit": "iter/sec",
            "range": "stddev: 0.00055569968550463",
            "extra": "mean: 13.781695121951138 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.559318627981389,
            "unit": "iter/sec",
            "range": "stddev: 0.000905499479675322",
            "extra": "mean: 79.62215384615384 msec\nrounds: 13"
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
          "id": "0262b660b5ffd3b17a2c7b0ebafb54056dcc8a75",
          "message": ":construction_worker: Run CI workflow on PRs\n\ni.e., from forks to upstream (this project).",
          "timestamp": "2021-12-13T18:05:54Z",
          "tree_id": "567a923f6434029c87afcc7ff6a1e76bf521ef36"
        },
        "date": 1639419143824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.98183023355577,
            "unit": "iter/sec",
            "range": "stddev: 0.00045356389153424626",
            "extra": "mean: 12.823499999999969 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.30057787476245,
            "unit": "iter/sec",
            "range": "stddev: 0.0011526339449433219",
            "extra": "mean: 14.641164556962073 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.520224978811877,
            "unit": "iter/sec",
            "range": "stddev: 0.000895287863747953",
            "extra": "mean: 79.87076923076955 msec\nrounds: 13"
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
          "id": "c7ecf7083608f7fef6dc8f2c28dfc038dda1f921",
          "message": "Merge pull request #370 from TeoZosa/dependabot/pip/rich-10.16.1",
          "timestamp": "2021-12-15T14:17:06Z",
          "tree_id": "3db67324511a26828c7f12961e3afe17d5eb4e21"
        },
        "date": 1639579411558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.92213795199993,
            "unit": "iter/sec",
            "range": "stddev: 0.000211751991405542",
            "extra": "mean: 12.670716049382687 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.03611410520377,
            "unit": "iter/sec",
            "range": "stddev: 0.0004080457014164666",
            "extra": "mean: 13.881925925926115 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.413440127113581,
            "unit": "iter/sec",
            "range": "stddev: 0.0016397693357177237",
            "extra": "mean: 80.55784615384646 msec\nrounds: 13"
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
          "id": "0e037d562c48bf42fbdde76c047a9190d2e0f79b",
          "message": "Merge pull request #371 from TeoZosa/dependabot/github_actions/actions/upload-artifact-2.3.1",
          "timestamp": "2021-12-16T14:11:19Z",
          "tree_id": "b06afb97b0a06b0e11b2733c9dc0d45e5ce3cb0a"
        },
        "date": 1639669310299,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.8673061520413,
            "unit": "iter/sec",
            "range": "stddev: 0.0002262938321227226",
            "extra": "mean: 13.009432098765489 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.47010476105638,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410427589694442",
            "extra": "mean: 13.991864197530795 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.474131714623429,
            "unit": "iter/sec",
            "range": "stddev: 0.007212194573366778",
            "extra": "mean: 95.47330769230761 msec\nrounds: 13"
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
          "id": "6c490690942c126caa9aebef65c4d1fc24ee944e",
          "message": "Merge pull request #373 from TeoZosa/dependabot/pip/structlog-21.5.0",
          "timestamp": "2021-12-16T15:18:35Z",
          "tree_id": "4b303928d27aaf57fc909828e19c396401751144"
        },
        "date": 1639670125774,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.5185253951495,
            "unit": "iter/sec",
            "range": "stddev: 0.0009121592967256136",
            "extra": "mean: 14.180670886075895 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.03989435260064,
            "unit": "iter/sec",
            "range": "stddev: 0.0009615909295838573",
            "extra": "mean: 14.69725974025969 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.965483399628816,
            "unit": "iter/sec",
            "range": "stddev: 0.005458012960526202",
            "extra": "mean: 91.19525000000002 msec\nrounds: 12"
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
          "id": "164ba3d0575509667a09dfe646f2ea89088a6e50",
          "message": "Merge pull request #374 from TeoZosa/dependabot/pip/myst-parser-0.16.1",
          "timestamp": "2021-12-16T15:32:28Z",
          "tree_id": "7c9f9a5f0e5e07d19121616ac8b8f9dc6c45fa63"
        },
        "date": 1639670592554,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.9670341522793,
            "unit": "iter/sec",
            "range": "stddev: 0.0003547132468682202",
            "extra": "mean: 12.663512195121946 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.96713363989522,
            "unit": "iter/sec",
            "range": "stddev: 0.00042362850043027275",
            "extra": "mean: 13.519518072289282 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.61167394748302,
            "unit": "iter/sec",
            "range": "stddev: 0.0011854970503591621",
            "extra": "mean: 79.29161538461557 msec\nrounds: 13"
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
          "id": "b3e29692f321a3d9b2f17ee3e08be70efe29d9fd",
          "message": "Merge pull request #375 from TeoZosa/dependabot/pip/importlib-metadata-4.9.0",
          "timestamp": "2021-12-17T14:21:43Z",
          "tree_id": "ef1c3b237ce911788e242f32321e62cacc56918b"
        },
        "date": 1639753146200,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.15194784454843,
            "unit": "iter/sec",
            "range": "stddev: 0.0006406035993646147",
            "extra": "mean: 13.306374999999958 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.46787876189046,
            "unit": "iter/sec",
            "range": "stddev: 0.00047886097451268903",
            "extra": "mean: 13.992300000000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.16925372519583,
            "unit": "iter/sec",
            "range": "stddev: 0.003667541078720614",
            "extra": "mean: 82.17430769230738 msec\nrounds: 13"
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
          "id": "2c37246f9ce8e035080521cf7ef33c651eec098b",
          "message": "Merge pull request #376 from TeoZosa/dependabot/pip/sphinx-4.3.2",
          "timestamp": "2021-12-20T14:18:08Z",
          "tree_id": "e65018616978085691a75d383d5d42b1764679ef"
        },
        "date": 1640012470125,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.72500261987814,
            "unit": "iter/sec",
            "range": "stddev: 0.0005351169734258576",
            "extra": "mean: 13.033560975609756 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.97067209592527,
            "unit": "iter/sec",
            "range": "stddev: 0.00043280058205507433",
            "extra": "mean: 13.704135802469068 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.748130917556146,
            "unit": "iter/sec",
            "range": "stddev: 0.0037466982233591004",
            "extra": "mean: 85.119923076923 msec\nrounds: 13"
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
          "id": "cc3320753e50ec32a162d8aaf393b1d998c7aaf6",
          "message": "Merge pull request #377 from TeoZosa/dependabot/pip/importlib-metadata-4.10.0",
          "timestamp": "2021-12-20T14:35:16Z",
          "tree_id": "7fc66f7b3a652aec942cc99240a827588f3262b5"
        },
        "date": 1640013383852,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.44840691392955,
            "unit": "iter/sec",
            "range": "stddev: 0.0005720535226604676",
            "extra": "mean: 12.911821428571491 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.75164131879544,
            "unit": "iter/sec",
            "range": "stddev: 0.000750631379427169",
            "extra": "mean: 13.936963414634095 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.309114046782176,
            "unit": "iter/sec",
            "range": "stddev: 0.0018297168969752795",
            "extra": "mean: 81.24061538461561 msec\nrounds: 13"
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
          "id": "39a53638dbc917c574694d5d4d952354409ea74e",
          "message": "Merge pull request #379 from TeoZosa/dependabot/pip/mypy-0.930\n\n⬆️ Bump mypy from 0.910 to 0.930",
          "timestamp": "2021-12-28T20:43:24Z",
          "tree_id": "8dee5d8e66b1a635335a594c30b80684cd27f464"
        },
        "date": 1640724914775,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.52058954157074,
            "unit": "iter/sec",
            "range": "stddev: 0.0011256924479385384",
            "extra": "mean: 13.981987654320974 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.11196310803423,
            "unit": "iter/sec",
            "range": "stddev: 0.0007655885958539304",
            "extra": "mean: 14.469274999999971 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.810570263543104,
            "unit": "iter/sec",
            "range": "stddev: 0.001972579596657981",
            "extra": "mean: 84.66991666666617 msec\nrounds: 12"
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
          "id": "2a107adba7ec83f03522e2ab99913f5528731dfa",
          "message": "Merge pull request #381 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.5",
          "timestamp": "2021-12-29T14:17:48Z",
          "tree_id": "bd4877d611fe03354962bc312b4bcd25959deccd"
        },
        "date": 1640791476593,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.13232681059516,
            "unit": "iter/sec",
            "range": "stddev: 0.0007333397005861069",
            "extra": "mean: 13.30985 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.01037398446955,
            "unit": "iter/sec",
            "range": "stddev: 0.0011931496640765356",
            "extra": "mean: 14.490574999999927 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.399604815016993,
            "unit": "iter/sec",
            "range": "stddev: 0.009365111225859573",
            "extra": "mean: 96.15750000000034 msec\nrounds: 12"
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
          "id": "204f35e784bcf406353c67cad1c91d8506064e68",
          "message": "Merge pull request #382 from TeoZosa/dependabot/pip/tox-3.24.5",
          "timestamp": "2021-12-29T15:45:19Z",
          "tree_id": "7363b330650e605f29a0684ada141b65e4eabf4b"
        },
        "date": 1640793786710,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.76364473785202,
            "unit": "iter/sec",
            "range": "stddev: 0.00034610710047612347",
            "extra": "mean: 13.027000000000022 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.85974499089184,
            "unit": "iter/sec",
            "range": "stddev: 0.0004512260519960923",
            "extra": "mean: 13.72500000000013 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.441441484551055,
            "unit": "iter/sec",
            "range": "stddev: 0.0013131805293124827",
            "extra": "mean: 80.37653846153863 msec\nrounds: 13"
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
          "id": "66c65ea53a8d10e44701c909b78ef1ba0f8d47ce",
          "message": "Merge pull request #383 from TeoZosa/dependabot/pip/pygments-2.11.0",
          "timestamp": "2021-12-30T14:24:44Z",
          "tree_id": "8849d828519b3787b9b4e621a7b7e0385bb10922"
        },
        "date": 1640877721328,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 73.08699362133308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009895432493858705",
            "extra": "mean: 13.682324999999917 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.45676781804033,
            "unit": "iter/sec",
            "range": "stddev: 0.0014380362073753976",
            "extra": "mean: 14.607759493670851 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.365454344840202,
            "unit": "iter/sec",
            "range": "stddev: 0.001704030057216194",
            "extra": "mean: 80.87046153846138 msec\nrounds: 13"
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
          "id": "28a4d4846f0f647c05b38bf6f5fd2af0924efa56",
          "message": "Merge pull request #384 from TeoZosa/dependabot/pip/tox-wheel-0.7.0",
          "timestamp": "2021-12-30T14:52:35Z",
          "tree_id": "686324b5e4eea7ddca25c3df554662f8a2c18214"
        },
        "date": 1640879182663,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 78.54965909447948,
            "unit": "iter/sec",
            "range": "stddev: 0.0006748018818488847",
            "extra": "mean: 12.73080000000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.54066180900759,
            "unit": "iter/sec",
            "range": "stddev: 0.000532015349458992",
            "extra": "mean: 13.237903614457855 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.04018325158913,
            "unit": "iter/sec",
            "range": "stddev: 0.007502941312256423",
            "extra": "mean: 83.05521428571402 msec\nrounds: 14"
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
          "id": "deca3932e707eacf37b93abea49a638af757122d",
          "message": "Merge pull request #385 from TeoZosa/dependabot/pip/pygments-2.11.1",
          "timestamp": "2022-01-03T14:17:10Z",
          "tree_id": "3f26ff49051fee3ea98e5b22fb7017b651e4e202"
        },
        "date": 1641223389515,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 72.33122638498484,
            "unit": "iter/sec",
            "range": "stddev: 0.0012049100832437815",
            "extra": "mean: 13.825287499999982 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.04923863883384,
            "unit": "iter/sec",
            "range": "stddev: 0.001166170456850875",
            "extra": "mean: 14.482418918918999 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.823522109001061,
            "unit": "iter/sec",
            "range": "stddev: 0.003291948299420675",
            "extra": "mean: 84.57716666666659 msec\nrounds: 12"
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
          "id": "8bf483f82b536caff4b5dafef92d0006067671ec",
          "message": "Merge pull request #386 from TeoZosa/dependabot/pip/rich-10.16.2",
          "timestamp": "2022-01-03T14:41:31Z",
          "tree_id": "422c7cdfc55674aea165b8cc35a0946359e2e4f4"
        },
        "date": 1641224435934,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.06819675504418,
            "unit": "iter/sec",
            "range": "stddev: 0.001172134980368678",
            "extra": "mean: 14.271810126582293 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.48975693435894,
            "unit": "iter/sec",
            "range": "stddev: 0.0012836521849162225",
            "extra": "mean: 14.817063291139243 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 10.907603508612434,
            "unit": "iter/sec",
            "range": "stddev: 0.0049423257652342805",
            "extra": "mean: 91.6791666666669 msec\nrounds: 12"
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
          "id": "49e12e88993ed6df75664562c09fcf5e31c0804a",
          "message": ":art: Fix test actual to expected comparison order\n\nPer the standard comparison order convention of `actual == expected`.",
          "timestamp": "2022-01-06T04:59:57Z",
          "tree_id": "ba16ee9877581f21ddbb345ce94b87e3a10cca96"
        },
        "date": 1641446921235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 79.46385919004148,
            "unit": "iter/sec",
            "range": "stddev: 0.0006453871908618969",
            "extra": "mean: 12.584337209302332 msec\nrounds: 86"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.7110974243164,
            "unit": "iter/sec",
            "range": "stddev: 0.0007325164446869614",
            "extra": "mean: 13.753058823529393 msec\nrounds: 85"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.580868370245321,
            "unit": "iter/sec",
            "range": "stddev: 0.002468436048521342",
            "extra": "mean: 79.48576923076895 msec\nrounds: 13"
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
          "id": "3152ed1406363d1ba22674da21cda87298ce7788",
          "message": "Merge pull request #388 from TeoZosa/dependabot/pip/pygments-2.11.2",
          "timestamp": "2022-01-06T14:49:17Z",
          "tree_id": "efe3b44513643664ca932877bb5cf6eb80db9b40"
        },
        "date": 1641482276854,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 75.82388265084062,
            "unit": "iter/sec",
            "range": "stddev: 0.0006342739165649662",
            "extra": "mean: 13.188456790123416 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.50764049261575,
            "unit": "iter/sec",
            "range": "stddev: 0.00040865147479007065",
            "extra": "mean: 13.791650000000221 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.072572878872213,
            "unit": "iter/sec",
            "range": "stddev: 0.0017141462665355134",
            "extra": "mean: 82.83238461538426 msec\nrounds: 13"
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
          "id": "ba4c9a5e4a597c86aeb40fa9c52adeffb8ba9ff7",
          "message": ":rotating_light: Explicitly check for `None`\n\nSee first bullet of https://google.github.io/styleguide/pyguide.html#2144-decision",
          "timestamp": "2022-01-06T18:43:06Z",
          "tree_id": "a67b452ba8718aae971ed68d3e4c91ab4ad64ea0"
        },
        "date": 1641495284365,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.10234243009998,
            "unit": "iter/sec",
            "range": "stddev: 0.0005325889335612618",
            "extra": "mean: 13.140200000000002 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.21922547109651,
            "unit": "iter/sec",
            "range": "stddev: 0.000651965720194441",
            "extra": "mean: 13.846728395061767 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.463125924548255,
            "unit": "iter/sec",
            "range": "stddev: 0.0012990784159429183",
            "extra": "mean: 80.2366923076922 msec\nrounds: 13"
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
          "id": "350e4853afb9bfe41d1ffdd51074eca5616d3508",
          "message": "Merge pull request #387 from TeoZosa/feat/add-line-numbers-and-function-names-to-logs\n\n✨ 💥 Add line numbers and function names to logs",
          "timestamp": "2022-01-06T19:39:25Z",
          "tree_id": "35a9f905fd02a774ab3824024228975f2262906f"
        },
        "date": 1641498248025,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 77.04253211884615,
            "unit": "iter/sec",
            "range": "stddev: 0.000558554569291388",
            "extra": "mean: 12.97984337349395 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 70.99882194547237,
            "unit": "iter/sec",
            "range": "stddev: 0.0006870389686505665",
            "extra": "mean: 14.084740740740845 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.773081642800733,
            "unit": "iter/sec",
            "range": "stddev: 0.0029721275624126917",
            "extra": "mean: 78.2896428571431 msec\nrounds: 14"
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
          "id": "d52b3618b95a3b1bd92233e11c9ef0ba022db6ab",
          "message": "Merge pull request #389 from TeoZosa/refactor/leverage-structlog-stack-introspection-for-logger-namespacing-and-remove-now-obsolete-typeguard-compatiblity-in-test-suite\n\n♻️ ✅ Simplify logger name inference and test suite",
          "timestamp": "2022-01-06T22:03:19Z",
          "tree_id": "938ae6323e0ded6254f9c1cb603dbc5983c884e2"
        },
        "date": 1641507056702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 74.22502327966616,
            "unit": "iter/sec",
            "range": "stddev: 0.0003071231342917615",
            "extra": "mean: 13.472545454545497 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.73059218705366,
            "unit": "iter/sec",
            "range": "stddev: 0.0005399310370194313",
            "extra": "mean: 14.340907894736942 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.337629675605774,
            "unit": "iter/sec",
            "range": "stddev: 0.0015846676226767469",
            "extra": "mean: 81.05284615384602 msec\nrounds: 13"
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
          "id": "5d4b6f1b73130c34941f4e3213a7dc8965039296",
          "message": "Merge pull request #392 from TeoZosa/refactor/clean-and-reorganize\n\n♻️  📝  Clean up source code and update features documentation",
          "timestamp": "2022-01-06T23:34:57Z",
          "tree_id": "dbd83ba095d35fb9bc078399665b9c03802e7426"
        },
        "date": 1641512454225,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 76.10994462050164,
            "unit": "iter/sec",
            "range": "stddev: 0.0006741386063720304",
            "extra": "mean: 13.138887499999985 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.34841456776019,
            "unit": "iter/sec",
            "range": "stddev: 0.0005213248270594425",
            "extra": "mean: 14.015728395061837 msec\nrounds: 81"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.723405879583684,
            "unit": "iter/sec",
            "range": "stddev: 0.0015725797480901143",
            "extra": "mean: 78.59530769230798 msec\nrounds: 13"
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
          "id": "99728b92f1dbd308a3fbbeaf428cc72fa9935911",
          "message": "Merge pull request #393 from TeoZosa/feat/remove-automatic-sentry-initialization",
          "timestamp": "2022-01-07T01:41:16Z",
          "tree_id": "be055794c6fd25fcd54a6a8643510de266c6ea4d"
        },
        "date": 1641520131021,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.86750991211618,
            "unit": "iter/sec",
            "range": "stddev: 0.0004192892677960156",
            "extra": "mean: 13.914493506493532 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 68.13579554900609,
            "unit": "iter/sec",
            "range": "stddev: 0.00047492634345935354",
            "extra": "mean: 14.676573333333412 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.832205168628894,
            "unit": "iter/sec",
            "range": "stddev: 0.0019568173714668608",
            "extra": "mean: 77.92892857142876 msec\nrounds: 14"
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
          "id": "0cfeab5d73dcc521fee687b7a4407e01fedcc8ab",
          "message": ":bookmark: Bump version number to `0.16.0`",
          "timestamp": "2022-01-07T02:11:32Z",
          "tree_id": "8e6b8cde9d7c2ca7deb812c178deb9824e924979"
        },
        "date": 1641522476701,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 61.55324988511468,
            "unit": "iter/sec",
            "range": "stddev: 0.0018038013191619855",
            "extra": "mean: 16.246095890410952 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.758620841770146,
            "unit": "iter/sec",
            "range": "stddev: 0.0018000291971982164",
            "extra": "mean: 16.192071428571392 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.801525154012195,
            "unit": "iter/sec",
            "range": "stddev: 0.0019460865167736634",
            "extra": "mean: 78.1156923076923 msec\nrounds: 13"
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
          "id": "0766d7ba31d69b61ed71365c5de6f160fe7d8c6f",
          "message": "Merge pull request #394 from TeoZosa/template-update/20220106\n\n🍪 Fetch Upstream Project Template Updates (2022-01-06)",
          "timestamp": "2022-01-07T02:54:38Z",
          "tree_id": "1c9662cc01e7ce4b31ae7bce52abc23357828489"
        },
        "date": 1641524780052,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.9338662749426,
            "unit": "iter/sec",
            "range": "stddev: 0.0004111031517800846",
            "extra": "mean: 13.90165789473684 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 67.16956770785691,
            "unit": "iter/sec",
            "range": "stddev: 0.00045985272103049395",
            "extra": "mean: 14.8876944444445 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.718625840529926,
            "unit": "iter/sec",
            "range": "stddev: 0.0017383060166990456",
            "extra": "mean: 78.62484615384633 msec\nrounds: 13"
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
          "id": "9b4dea542d679e78e40125800267ed30935234cc",
          "message": "Merge pull request #395 from TeoZosa/dependabot/pip/gitpython-3.1.25",
          "timestamp": "2022-01-07T14:30:38Z",
          "tree_id": "038a86112187c5d257a91937887cd45a8a3c505d"
        },
        "date": 1641569144881,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 68.029846205305,
            "unit": "iter/sec",
            "range": "stddev: 0.0005945428786438053",
            "extra": "mean: 14.699430555555473 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.998008950832315,
            "unit": "iter/sec",
            "range": "stddev: 0.0007470261603929959",
            "extra": "mean: 15.62548611111119 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.32284722228804,
            "unit": "iter/sec",
            "range": "stddev: 0.002449831472487382",
            "extra": "mean: 81.150076923077 msec\nrounds: 13"
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
          "id": "1bede4717bb033962e0794a784e34c85d81613f1",
          "message": "Merge pull request #396 from TeoZosa/dependabot/pip/types-emoji-1.2.7",
          "timestamp": "2022-01-07T15:01:50Z",
          "tree_id": "9b87e8253c7e8a722f46a9ab04bc9d105a68cc25"
        },
        "date": 1641570712210,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 63.716102584719934,
            "unit": "iter/sec",
            "range": "stddev: 0.0014364823340985628",
            "extra": "mean: 15.69461971830987 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.44623135017898,
            "unit": "iter/sec",
            "range": "stddev: 0.0015519739013514478",
            "extra": "mean: 16.54362857142853 msec\nrounds: 70"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.212902837902853,
            "unit": "iter/sec",
            "range": "stddev: 0.004183884250678533",
            "extra": "mean: 81.88061538461528 msec\nrounds: 13"
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
          "id": "cd679fec8ac6339102e7a5e03ebedbfe3b4df298",
          "message": ":recycle: Explicitly specify UTC format\n\nSame as the default value, but now it is explicit to readers.",
          "timestamp": "2022-01-08T22:06:22Z",
          "tree_id": "80a163aca105b9357b1d0a1ac28ed2a5867b9cac"
        },
        "date": 1641680300113,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.30888596884274,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882447847508427",
            "extra": "mean: 14.428164383561755 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.10187925342674,
            "unit": "iter/sec",
            "range": "stddev: 0.0006993522153585243",
            "extra": "mean: 15.600166666666674 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.489120055029032,
            "unit": "iter/sec",
            "range": "stddev: 0.001613302275077538",
            "extra": "mean: 80.06969230769201 msec\nrounds: 13"
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
          "id": "e303fa29243beb9caf7feb64f854497b48036c41",
          "message": "Merge pull request #397 from TeoZosa/warn-on-cloud-logging-field-overwrites\n\n🔊  Warn on cloud logging mode field overwrites",
          "timestamp": "2022-01-09T03:54:43Z",
          "tree_id": "c53a2d4fae8755c4643bc36f52945f5cc3604a8e"
        },
        "date": 1641701232959,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.65315088884762,
            "unit": "iter/sec",
            "range": "stddev: 0.001066448356382483",
            "extra": "mean: 15.003041666666649 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.44852807834138,
            "unit": "iter/sec",
            "range": "stddev: 0.001418411916968151",
            "extra": "mean: 16.542999999999974 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.461286138927976,
            "unit": "iter/sec",
            "range": "stddev: 0.0023694965223080835",
            "extra": "mean: 80.24853846153863 msec\nrounds: 13"
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
          "id": "5693da0e3056522b719d7fb731499ddee8f03eea",
          "message": "Merge pull request #398 from TeoZosa/feat/add-dynamic-log-level-configuration-from-env\n\n✨  Enable dynamic log level configuration via env var",
          "timestamp": "2022-01-09T06:22:19Z",
          "tree_id": "cce6fb32b4e06c0e95372d84a03248d19f192451"
        },
        "date": 1641710665707,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 66.44300555390708,
            "unit": "iter/sec",
            "range": "stddev: 0.001125434139976539",
            "extra": "mean: 15.050493150684941 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.37630093774796,
            "unit": "iter/sec",
            "range": "stddev: 0.0008550916432229714",
            "extra": "mean: 15.533666666666704 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.413400385597368,
            "unit": "iter/sec",
            "range": "stddev: 0.007849803759591595",
            "extra": "mean: 87.61630769230749 msec\nrounds: 13"
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
          "id": "e1d0a65388fe9048bdf0f94beff3a8aaf1d1116e",
          "message": "Merge pull request #399 from TeoZosa/dependabot/github_actions/pypa/gh-action-pypi-publish-1.5.0",
          "timestamp": "2022-01-10T14:10:38Z",
          "tree_id": "d2102bd6ce0fa2f698124dff9002ed7b1c1aa5f8"
        },
        "date": 1641834018994,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 71.78770975762764,
            "unit": "iter/sec",
            "range": "stddev: 0.0007889372338713125",
            "extra": "mean: 13.929961038961093 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.53137131297338,
            "unit": "iter/sec",
            "range": "stddev: 0.00160613057498969",
            "extra": "mean: 15.991972972972848 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.95795975072587,
            "unit": "iter/sec",
            "range": "stddev: 0.0013906032784448928",
            "extra": "mean: 77.1726428571429 msec\nrounds: 14"
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
          "id": "eae2950def2c27a58f471fac8ad19778033c2684",
          "message": "Merge pull request #400 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T14:28:25Z",
          "tree_id": "c28acda022f837d70e8c333cba1d89b7d4ec2959"
        },
        "date": 1641834461241,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.83796654024557,
            "unit": "iter/sec",
            "range": "stddev: 0.00045150901352926907",
            "extra": "mean: 14.116723684210562 msec\nrounds: 76"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.10932207118034,
            "unit": "iter/sec",
            "range": "stddev: 0.0008545613994832161",
            "extra": "mean: 15.35878378378378 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.045293258192451,
            "unit": "iter/sec",
            "range": "stddev: 0.0011563508251260935",
            "extra": "mean: 76.65599999999996 msec\nrounds: 14"
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
          "id": "d1d8d1e36a926a83edc1a7c5e7bec6fcb3dbfde4",
          "message": "Merge pull request #403 from TeoZosa/dependabot/pip/sentry-sdk-1.5.2",
          "timestamp": "2022-01-10T15:37:38Z",
          "tree_id": "08000fef30d0a2183e4550db43926d599bf9dda4"
        },
        "date": 1641835475689,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 70.01832884861453,
            "unit": "iter/sec",
            "range": "stddev: 0.0006626874572658847",
            "extra": "mean: 14.281974683544412 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.52336092389807,
            "unit": "iter/sec",
            "range": "stddev: 0.0007335492963811712",
            "extra": "mean: 15.261732394366147 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.865542218276882,
            "unit": "iter/sec",
            "range": "stddev: 0.0016651239193125544",
            "extra": "mean: 77.72699999999944 msec\nrounds: 13"
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
          "id": "817a97657d51d44c541ee151e71cccb9bb5a837b",
          "message": "Merge pull request #405 from TeoZosa/dependabot/pip/gitpython-3.1.26",
          "timestamp": "2022-01-10T16:06:45Z",
          "tree_id": "d21b281ff8e5a3b0f22fc95ef53c60b456d6fd0d"
        },
        "date": 1641835929835,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 69.14541944748115,
            "unit": "iter/sec",
            "range": "stddev: 0.0007447060430553169",
            "extra": "mean: 14.462273972602656 msec\nrounds: 73"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.027454178251794,
            "unit": "iter/sec",
            "range": "stddev: 0.0013067817449784708",
            "extra": "mean: 16.12189333333339 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.884712196944736,
            "unit": "iter/sec",
            "range": "stddev: 0.0021341801022389437",
            "extra": "mean: 77.61135714285672 msec\nrounds: 14"
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
          "id": "402727a64e3560c9419794a8c99f7b48641eb63c",
          "message": "Merge pull request #401 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.0",
          "timestamp": "2022-01-10T16:43:57Z",
          "tree_id": "21bcf2c6053e9e6fd892df1f531d826865b9ecc1"
        },
        "date": 1641836605159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 67.64698421288523,
            "unit": "iter/sec",
            "range": "stddev: 0.0007766912384787823",
            "extra": "mean: 14.782624999999962 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 60.13118620456963,
            "unit": "iter/sec",
            "range": "stddev: 0.0009417694110718917",
            "extra": "mean: 16.63030555555556 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 9.904988304494584,
            "unit": "iter/sec",
            "range": "stddev: 0.013591921468000975",
            "extra": "mean: 100.95923076923071 msec\nrounds: 13"
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
          "id": "b783c6adc7660887c254d8793538cb1ca89ab4f5",
          "message": "Merge pull request #404 from TeoZosa/dependabot/pip/rich-11.0.0",
          "timestamp": "2022-01-10T20:36:27Z",
          "tree_id": "d6bed994eb145bd468709fa0c86b3cf384120024"
        },
        "date": 1641847514909,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 62.2339716844194,
            "unit": "iter/sec",
            "range": "stddev: 0.0016235748517997109",
            "extra": "mean: 16.068394366197186 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 61.24365447691141,
            "unit": "iter/sec",
            "range": "stddev: 0.001746014223375977",
            "extra": "mean: 16.328222222222152 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.701700562294569,
            "unit": "iter/sec",
            "range": "stddev: 0.002101744812390216",
            "extra": "mean: 78.72961538461503 msec\nrounds: 13"
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
          "id": "dceca5bf914e51f092456ab946d5710daeda830d",
          "message": "Merge pull request #402 from TeoZosa/dependabot/pip/mypy-0.931",
          "timestamp": "2022-01-10T20:50:56Z",
          "tree_id": "c15f74c3f0ca2f5170e9e709a09170a8d914b642"
        },
        "date": 1641849543669,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer_non_str_keys",
            "value": 59.412336678833896,
            "unit": "iter/sec",
            "range": "stddev: 0.0011739890710023373",
            "extra": "mean: 16.831521126760492 msec\nrounds: 71"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 63.05314807172035,
            "unit": "iter/sec",
            "range": "stddev: 0.0008929857202125668",
            "extra": "mean: 15.859636363636298 msec\nrounds: 66"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.593520470589912,
            "unit": "iter/sec",
            "range": "stddev: 0.003871653554179317",
            "extra": "mean: 86.25507692307693 msec\nrounds: 13"
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
          "id": "590e6dcd1d545b7bb26b12bb64eb321af832003d",
          "message": "Merge pull request #406 from TeoZosa/perf/improve-perf-for-default-json-logging\n\n⚡ Improve JSON-only logging performance",
          "timestamp": "2022-01-11T03:31:15Z",
          "tree_id": "a1c0965db83e7a864fc92fbdcd47762b969f04f4"
        },
        "date": 1641872343914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 126.07614999459707,
            "unit": "iter/sec",
            "range": "stddev: 0.0002052059044068837",
            "extra": "mean: 7.931714285714264 msec\nrounds: 133"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 192.3034120501257,
            "unit": "iter/sec",
            "range": "stddev: 0.00021075794676162383",
            "extra": "mean: 5.2001157407406815 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 115.50871565763642,
            "unit": "iter/sec",
            "range": "stddev: 0.0003234967506147804",
            "extra": "mean: 8.657355371900795 msec\nrounds: 121"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 194.13942774824505,
            "unit": "iter/sec",
            "range": "stddev: 0.00047126317644563325",
            "extra": "mean: 5.150937198067639 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 14.411160002305953,
            "unit": "iter/sec",
            "range": "stddev: 0.0009722492821626077",
            "extra": "mean: 69.39066666666587 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 167.36354728441097,
            "unit": "iter/sec",
            "range": "stddev: 0.000281602346829574",
            "extra": "mean: 5.975016759776487 msec\nrounds: 179"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 443.0047917674264,
            "unit": "iter/sec",
            "range": "stddev: 0.00009674968624053963",
            "extra": "mean: 2.2573119266055057 msec\nrounds: 545"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 446.62708973311294,
            "unit": "iter/sec",
            "range": "stddev: 0.00010862864901624392",
            "extra": "mean: 2.2390043572985268 msec\nrounds: 459"
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
          "id": "c45dba8f9e61490723081853b07497d24835b1e1",
          "message": ":bookmark: Bump version number to `0.16.1`",
          "timestamp": "2022-01-11T08:14:18Z",
          "tree_id": "17442a7c1e60c3535f4b5cb02613662b737bb8e6"
        },
        "date": 1641890737001,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)]",
            "value": 123.44893534789361,
            "unit": "iter/sec",
            "range": "stddev: 0.00027962497683224364",
            "extra": "mean: 8.100515384615369 msec\nrounds: 130"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)]",
            "value": 202.39931799824365,
            "unit": "iter/sec",
            "range": "stddev: 0.00020051372630725835",
            "extra": "mean: 4.940728110599057 msec\nrounds: 217"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)]",
            "value": 107.47497089941876,
            "unit": "iter/sec",
            "range": "stddev: 0.000671519191330149",
            "extra": "mean: 9.304491935483819 msec\nrounds: 124"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)]",
            "value": 192.02973557036813,
            "unit": "iter/sec",
            "range": "stddev: 0.0003553388958365069",
            "extra": "mean: 5.207526829268356 msec\nrounds: 205"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)]",
            "value": 13.953534729351235,
            "unit": "iter/sec",
            "range": "stddev: 0.0012128231346921394",
            "extra": "mean: 71.6664285714287 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)]",
            "value": 157.42835008863497,
            "unit": "iter/sec",
            "range": "stddev: 0.0003542738361073062",
            "extra": "mean: 6.35209604519759 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 498.1830131975639,
            "unit": "iter/sec",
            "range": "stddev: 0.00018113773391368948",
            "extra": "mean: 2.007294455066919 msec\nrounds: 523"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 473.0434525519578,
            "unit": "iter/sec",
            "range": "stddev: 0.00011225211490428788",
            "extra": "mean: 2.113970703125127 msec\nrounds: 512"
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
          "id": "20f3d86b28a503cbad7fb04fba8ef61810743b28",
          "message": "Merge pull request #407 from TeoZosa/feat_and_perf/make-sentry-integration-opt-in\n\n💥 ✨ ⚡ Make Sentry integration opt-in",
          "timestamp": "2022-01-11T09:13:35Z",
          "tree_id": "522dbf40e1d8e2775b1ce9487077f9d3c6442d98"
        },
        "date": 1641892942212,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 107.15621923799199,
            "unit": "iter/sec",
            "range": "stddev: 0.0007091119196691214",
            "extra": "mean: 9.332169491525438 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 136.55482133474513,
            "unit": "iter/sec",
            "range": "stddev: 0.000539926521777082",
            "extra": "mean: 7.323066225165637 msec\nrounds: 151"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.29019341617987,
            "unit": "iter/sec",
            "range": "stddev: 0.00046711117240778573",
            "extra": "mean: 5.485758620689692 msec\nrounds: 203"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.7138832271494,
            "unit": "iter/sec",
            "range": "stddev: 0.00025673353750708895",
            "extra": "mean: 3.6668466898954244 msec\nrounds: 287"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 103.68424690675182,
            "unit": "iter/sec",
            "range": "stddev: 0.0009709839427660893",
            "extra": "mean: 9.644666666666804 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.65378867952148,
            "unit": "iter/sec",
            "range": "stddev: 0.0009407746982373007",
            "extra": "mean: 7.895539568345253 msec\nrounds: 139"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 177.89031548090608,
            "unit": "iter/sec",
            "range": "stddev: 0.00043953833556348656",
            "extra": "mean: 5.621441489361659 msec\nrounds: 188"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 259.07066608528106,
            "unit": "iter/sec",
            "range": "stddev: 0.000377593183734018",
            "extra": "mean: 3.8599507042253074 msec\nrounds: 284"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.24960165237716,
            "unit": "iter/sec",
            "range": "stddev: 0.0034487787786553667",
            "extra": "mean: 81.63530769230685 msec\nrounds: 13"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.471382933682037,
            "unit": "iter/sec",
            "range": "stddev: 0.0012344820598299748",
            "extra": "mean: 74.23142857143006 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.95019175538283,
            "unit": "iter/sec",
            "range": "stddev: 0.00022419128040785906",
            "extra": "mean: 6.331109756097657 msec\nrounds: 164"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.47705057170847,
            "unit": "iter/sec",
            "range": "stddev: 0.00020647277510983726",
            "extra": "mean: 4.619427312775346 msec\nrounds: 227"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 446.6529942211002,
            "unit": "iter/sec",
            "range": "stddev: 0.00019633673614308374",
            "extra": "mean: 2.238874501991997 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.6115687516779,
            "unit": "iter/sec",
            "range": "stddev: 0.00010732304657288867",
            "extra": "mean: 2.2094000000000946 msec\nrounds: 480"
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
          "id": "1aaa6b5ba961c55f8fe88b707c1a9bd05359de73",
          "message": "Merge pull request #408 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T14:11:00Z",
          "tree_id": "1dedf895825787161142ea470f987716779393dd"
        },
        "date": 1641913775978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 123.40691792186624,
            "unit": "iter/sec",
            "range": "stddev: 0.0001990311460153144",
            "extra": "mean: 8.103273437499988 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 147.46464136035758,
            "unit": "iter/sec",
            "range": "stddev: 0.00022212525488646604",
            "extra": "mean: 6.781286624203778 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.9123859713545,
            "unit": "iter/sec",
            "range": "stddev: 0.0003996062321251607",
            "extra": "mean: 5.238004830917808 msec\nrounds: 207"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 258.17435840182986,
            "unit": "iter/sec",
            "range": "stddev: 0.0003108484914043633",
            "extra": "mean: 3.873351351351368 msec\nrounds: 296"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 109.51181537260298,
            "unit": "iter/sec",
            "range": "stddev: 0.0005168207828506704",
            "extra": "mean: 9.131434782608618 msec\nrounds: 115"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.21976088159514,
            "unit": "iter/sec",
            "range": "stddev: 0.0002882711870876943",
            "extra": "mean: 7.395368794326206 msec\nrounds: 141"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 181.6803204989161,
            "unit": "iter/sec",
            "range": "stddev: 0.0003530609165282018",
            "extra": "mean: 5.504173469387764 msec\nrounds: 196"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 267.7299369878509,
            "unit": "iter/sec",
            "range": "stddev: 0.0001540553685516795",
            "extra": "mean: 3.7351071428570872 msec\nrounds: 280"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.712826333711646,
            "unit": "iter/sec",
            "range": "stddev: 0.0024552802574977555",
            "extra": "mean: 78.66071428571456 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.823812721038882,
            "unit": "iter/sec",
            "range": "stddev: 0.003771330217561019",
            "extra": "mean: 77.97992857142943 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 150.75252921629277,
            "unit": "iter/sec",
            "range": "stddev: 0.00049065234808503",
            "extra": "mean: 6.6333878787880645 msec\nrounds: 165"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 208.55195114035496,
            "unit": "iter/sec",
            "range": "stddev: 0.00038842036026085413",
            "extra": "mean: 4.7949683257914115 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.5253439557148,
            "unit": "iter/sec",
            "range": "stddev: 0.00020076410694473587",
            "extra": "mean: 2.1298104838709606 msec\nrounds: 496"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 448.90493273882123,
            "unit": "iter/sec",
            "range": "stddev: 0.00016640244169994415",
            "extra": "mean: 2.2276431535267025 msec\nrounds: 482"
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
          "id": "f1fdacf014859d56ff1364cb7ae900ac5f555439",
          "message": "Merge pull request #409 from TeoZosa/dependabot/pip/tox-gh-actions-2.9.1",
          "timestamp": "2022-01-11T15:23:55Z",
          "tree_id": "5d47f0cafda9548c3698d048202d657e1c345529"
        },
        "date": 1641915600691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.06413504662635,
            "unit": "iter/sec",
            "range": "stddev: 0.0004650179312837857",
            "extra": "mean: 8.328881889763789 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.61876464342677,
            "unit": "iter/sec",
            "range": "stddev: 0.00031781619737907165",
            "extra": "mean: 6.820409395973124 msec\nrounds: 149"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 193.879800011157,
            "unit": "iter/sec",
            "range": "stddev: 0.00029704418441741813",
            "extra": "mean: 5.157834905660383 msec\nrounds: 212"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 281.26708631832787,
            "unit": "iter/sec",
            "range": "stddev: 0.00018935832424553796",
            "extra": "mean: 3.555339563862927 msec\nrounds: 321"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 108.7930555674834,
            "unit": "iter/sec",
            "range": "stddev: 0.0005443170650487751",
            "extra": "mean: 9.19176315789484 msec\nrounds: 114"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.44606875213222,
            "unit": "iter/sec",
            "range": "stddev: 0.00045171137807523837",
            "extra": "mean: 7.437926666666783 msec\nrounds: 150"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 183.99793503739153,
            "unit": "iter/sec",
            "range": "stddev: 0.0003867290169693402",
            "extra": "mean: 5.434843601895765 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 272.8177256630555,
            "unit": "iter/sec",
            "range": "stddev: 0.00016565664435430922",
            "extra": "mean: 3.6654509803921376 msec\nrounds: 306"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.722221078703742,
            "unit": "iter/sec",
            "range": "stddev: 0.005039395732243079",
            "extra": "mean: 72.8745000000003 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.55423728047775,
            "unit": "iter/sec",
            "range": "stddev: 0.001636442555695538",
            "extra": "mean: 73.77766666666712 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 153.67304626859905,
            "unit": "iter/sec",
            "range": "stddev: 0.0005973004737417652",
            "extra": "mean: 6.507322033898772 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 216.5764412762862,
            "unit": "iter/sec",
            "range": "stddev: 0.0002809229933201019",
            "extra": "mean: 4.617307377048927 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 460.87556190383407,
            "unit": "iter/sec",
            "range": "stddev: 0.00015075417774488786",
            "extra": "mean: 2.1697830882355595 msec\nrounds: 544"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 452.0291563094785,
            "unit": "iter/sec",
            "range": "stddev: 0.00022828444305812817",
            "extra": "mean: 2.212246679316759 msec\nrounds: 527"
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
          "id": "d50fe8319858673f32ef03adb1309f323b3dd99f",
          "message": "Merge pull request #410 from TeoZosa/perf/make-cloud-logging-mode-a-logger-configuration-time-option\n\n⚡  Make Cloud Logging mode a logger configuration-time option",
          "timestamp": "2022-01-11T22:21:05Z",
          "tree_id": "4cf3b14fb57f6546638edb620383fd7565db1d1b"
        },
        "date": 1641940705133,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 118.55279371454672,
            "unit": "iter/sec",
            "range": "stddev: 0.0005353954771097014",
            "extra": "mean: 8.435060606060585 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 141.1638192635579,
            "unit": "iter/sec",
            "range": "stddev: 0.000532253631708077",
            "extra": "mean: 7.083968152866168 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 207.78101420221688,
            "unit": "iter/sec",
            "range": "stddev: 0.00023188617377556246",
            "extra": "mean: 4.812759259259264 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 318.51016633414105,
            "unit": "iter/sec",
            "range": "stddev: 0.0002335327524965935",
            "extra": "mean: 3.1396172106824527 msec\nrounds: 337"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 96.84639743924784,
            "unit": "iter/sec",
            "range": "stddev: 0.001133763877956517",
            "extra": "mean: 10.32562931034481 msec\nrounds: 116"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 126.26790391796058,
            "unit": "iter/sec",
            "range": "stddev: 0.000965682466324348",
            "extra": "mean: 7.919668965517358 msec\nrounds: 145"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 190.79222459276747,
            "unit": "iter/sec",
            "range": "stddev: 0.00040202741630406344",
            "extra": "mean: 5.2413037383175825 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.8550473712693,
            "unit": "iter/sec",
            "range": "stddev: 0.000248968198803839",
            "extra": "mean: 3.301909638554257 msec\nrounds: 332"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.675534273819363,
            "unit": "iter/sec",
            "range": "stddev: 0.0027429885001741955",
            "extra": "mean: 73.12328571428571 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.794693784593552,
            "unit": "iter/sec",
            "range": "stddev: 0.004149382170878586",
            "extra": "mean: 78.15740000000062 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 162.6677511183447,
            "unit": "iter/sec",
            "range": "stddev: 0.00042170168196451006",
            "extra": "mean: 6.147499999999851 msec\nrounds: 176"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 225.83249446159937,
            "unit": "iter/sec",
            "range": "stddev: 0.00045134987280282",
            "extra": "mean: 4.428060728745306 msec\nrounds: 247"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 437.7646138772051,
            "unit": "iter/sec",
            "range": "stddev: 0.00031509989960353847",
            "extra": "mean: 2.284332648870757 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 423.24113606832765,
            "unit": "iter/sec",
            "range": "stddev: 0.00028142928013023924",
            "extra": "mean: 2.36271929824553 msec\nrounds: 456"
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
          "id": "eed196312eabc3a79c04bec3ada421c6b4a7b9e5",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-11T23:38:54Z",
          "tree_id": "8c11c50884ab7c6dea0427dcbbce38bbc2646540"
        },
        "date": 1641944873526,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 124.56769778925634,
            "unit": "iter/sec",
            "range": "stddev: 0.0003013166448990986",
            "extra": "mean: 8.027763358778614 msec\nrounds: 131"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 154.13842765564885,
            "unit": "iter/sec",
            "range": "stddev: 0.00020076802790799301",
            "extra": "mean: 6.487674846625776 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 209.68532639559402,
            "unit": "iter/sec",
            "range": "stddev: 0.00012243301803890877",
            "extra": "mean: 4.769050925925985 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 322.7604273197914,
            "unit": "iter/sec",
            "range": "stddev: 0.00009504036757744297",
            "extra": "mean: 3.098273255813975 msec\nrounds: 344"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 110.0529178820255,
            "unit": "iter/sec",
            "range": "stddev: 0.0004480068059014875",
            "extra": "mean: 9.086537815126173 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 143.45009671161583,
            "unit": "iter/sec",
            "range": "stddev: 0.00022890769437083745",
            "extra": "mean: 6.971065359477206 msec\nrounds: 153"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.9711382586199,
            "unit": "iter/sec",
            "range": "stddev: 0.00018509331650770475",
            "extra": "mean: 4.975838862559205 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 314.89680707956256,
            "unit": "iter/sec",
            "range": "stddev: 0.00016176162722054393",
            "extra": "mean: 3.1756435045317484 msec\nrounds: 331"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.886135346761359,
            "unit": "iter/sec",
            "range": "stddev: 0.0033123800455159783",
            "extra": "mean: 77.60278571428536 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.796443319982297,
            "unit": "iter/sec",
            "range": "stddev: 0.005053607400485012",
            "extra": "mean: 78.14671428571478 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 160.96082381996072,
            "unit": "iter/sec",
            "range": "stddev: 0.0004331360459707369",
            "extra": "mean: 6.212691860464933 msec\nrounds: 172"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 234.2558919197018,
            "unit": "iter/sec",
            "range": "stddev: 0.00035010792834794317",
            "extra": "mean: 4.26883606557388 msec\nrounds: 244"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.464737732456,
            "unit": "iter/sec",
            "range": "stddev: 0.00014495103691555082",
            "extra": "mean: 2.176445585215497 msec\nrounds: 487"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 421.04727019605195,
            "unit": "iter/sec",
            "range": "stddev: 0.00030293097038905587",
            "extra": "mean: 2.3750302419354736 msec\nrounds: 496"
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
          "id": "66974ac83e46d35a72c4c7efee7045bba6b5cb1f",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2022-01-12T01:22:19Z",
          "tree_id": "0fc04ad99adfb211e92f89623bd4e9213057c9fb"
        },
        "date": 1641951180651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 125.76243476073724,
            "unit": "iter/sec",
            "range": "stddev: 0.0002159578874695831",
            "extra": "mean: 7.9514999999999825 msec\nrounds: 132"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 153.42461627373976,
            "unit": "iter/sec",
            "range": "stddev: 0.0003437205273973873",
            "extra": "mean: 6.517858895705516 msec\nrounds: 163"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 211.42190236100407,
            "unit": "iter/sec",
            "range": "stddev: 0.0003353124247794336",
            "extra": "mean: 4.7298789237668215 msec\nrounds: 223"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 333.8575149239966,
            "unit": "iter/sec",
            "range": "stddev: 0.00021667079840364037",
            "extra": "mean: 2.9952897727273036 msec\nrounds: 352"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 112.77058063096428,
            "unit": "iter/sec",
            "range": "stddev: 0.0008164596116655541",
            "extra": "mean: 8.867560975609825 msec\nrounds: 123"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 134.43981373975112,
            "unit": "iter/sec",
            "range": "stddev: 0.0006253680983765461",
            "extra": "mean: 7.438272727272608 msec\nrounds: 154"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.60992812495002,
            "unit": "iter/sec",
            "range": "stddev: 0.00026079002085040414",
            "extra": "mean: 5.03499502487548 msec\nrounds: 201"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.62171717441555,
            "unit": "iter/sec",
            "range": "stddev: 0.00039098836405615685",
            "extra": "mean: 3.440899082568746 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.853789067485035,
            "unit": "iter/sec",
            "range": "stddev: 0.00238838108878736",
            "extra": "mean: 77.7980714285721 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.23005073724449,
            "unit": "iter/sec",
            "range": "stddev: 0.001020835159600272",
            "extra": "mean: 75.5855000000005 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 167.82373387896433,
            "unit": "iter/sec",
            "range": "stddev: 0.00031946084845078384",
            "extra": "mean: 5.958632768361637 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 236.81791313072745,
            "unit": "iter/sec",
            "range": "stddev: 0.00024562891378594536",
            "extra": "mean: 4.2226535433068495 msec\nrounds: 254"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 458.4043692693412,
            "unit": "iter/sec",
            "range": "stddev: 0.0001364713659861311",
            "extra": "mean: 2.181480079681434 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 433.1488231852541,
            "unit": "iter/sec",
            "range": "stddev: 0.00013869665474072152",
            "extra": "mean: 2.3086753246754372 msec\nrounds: 462"
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
          "id": "307743181ca10a177ae0922b61186eb7acf60f97",
          "message": ":bookmark: Bump version number to `0.17.0`",
          "timestamp": "2022-01-12T03:33:21Z",
          "tree_id": "5983054aa39534315fe2a94c66194c3c7091b6e2"
        },
        "date": 1641959059693,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 120.25695217750321,
            "unit": "iter/sec",
            "range": "stddev: 0.0006283260808823788",
            "extra": "mean: 8.315527559055107 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 152.9065390432736,
            "unit": "iter/sec",
            "range": "stddev: 0.00020337921640902772",
            "extra": "mean: 6.539942675159191 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 192.431506972499,
            "unit": "iter/sec",
            "range": "stddev: 0.0004139031118125088",
            "extra": "mean: 5.1966542056073655 msec\nrounds: 214"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 300.8300870877605,
            "unit": "iter/sec",
            "range": "stddev: 0.00035330293997937786",
            "extra": "mean: 3.324135593220342 msec\nrounds: 354"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 106.37384955340761,
            "unit": "iter/sec",
            "range": "stddev: 0.0010333594898236684",
            "extra": "mean: 9.400806722689165 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 119.53250592986986,
            "unit": "iter/sec",
            "range": "stddev: 0.0019154842232268021",
            "extra": "mean: 8.365925170067994 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 182.0880581301068,
            "unit": "iter/sec",
            "range": "stddev: 0.0005805410741669087",
            "extra": "mean: 5.491848341232093 msec\nrounds: 211"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 290.5308273642731,
            "unit": "iter/sec",
            "range": "stddev: 0.00043551660954668466",
            "extra": "mean: 3.441975535168187 msec\nrounds: 327"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.598436534026119,
            "unit": "iter/sec",
            "range": "stddev: 0.003112683296160831",
            "extra": "mean: 79.37492857142863 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.173764841123687,
            "unit": "iter/sec",
            "range": "stddev: 0.0060976366904560856",
            "extra": "mean: 82.14385714285706 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 149.38574606785892,
            "unit": "iter/sec",
            "range": "stddev: 0.0007063547544702497",
            "extra": "mean: 6.694079096045395 msec\nrounds: 177"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 232.85882088929935,
            "unit": "iter/sec",
            "range": "stddev: 0.0003734265956548646",
            "extra": "mean: 4.294447580645434 msec\nrounds: 248"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 440.9247236947376,
            "unit": "iter/sec",
            "range": "stddev: 0.00031538782453865673",
            "extra": "mean: 2.2679608247423277 msec\nrounds: 485"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 437.1455913391952,
            "unit": "iter/sec",
            "range": "stddev: 0.00012928547486316147",
            "extra": "mean: 2.2875673913043495 msec\nrounds: 460"
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
          "id": "285367a1132fdc775a747d977d8ce5ef2b16694d",
          "message": "Merge pull request #411 from TeoZosa/fix/only-create-logdir-on-local-logfile-configuration\n\n🐛  Fix log output directory creation on library import",
          "timestamp": "2022-01-12T07:19:03Z",
          "tree_id": "2e7522ae348c7406c1ac615ee670e1faeeef17cb"
        },
        "date": 1641973565114,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 122.44103066424728,
            "unit": "iter/sec",
            "range": "stddev: 0.00041972848440976384",
            "extra": "mean: 8.16719685039371 msec\nrounds: 127"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.1955631043371,
            "unit": "iter/sec",
            "range": "stddev: 0.0005084709502531308",
            "extra": "mean: 6.840152866242037 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 198.73896045911772,
            "unit": "iter/sec",
            "range": "stddev: 0.0004892672463553476",
            "extra": "mean: 5.031726027397172 msec\nrounds: 219"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 302.93354293059286,
            "unit": "iter/sec",
            "range": "stddev: 0.00026739002371104945",
            "extra": "mean: 3.3010540540540827 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 113.37857586900898,
            "unit": "iter/sec",
            "range": "stddev: 0.0004667169477630465",
            "extra": "mean: 8.820008474575848 msec\nrounds: 118"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 142.76806890161936,
            "unit": "iter/sec",
            "range": "stddev: 0.0002714074448466117",
            "extra": "mean: 7.004367346938721 msec\nrounds: 147"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 200.04700133428972,
            "unit": "iter/sec",
            "range": "stddev: 0.00021127967488179702",
            "extra": "mean: 4.9988252427185556 msec\nrounds: 206"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 315.42753218213613,
            "unit": "iter/sec",
            "range": "stddev: 0.00006680388421119092",
            "extra": "mean: 3.170300300300272 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 13.854952502253994,
            "unit": "iter/sec",
            "range": "stddev: 0.0009944650364850894",
            "extra": "mean: 72.17635714285667 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.10048162984958,
            "unit": "iter/sec",
            "range": "stddev: 0.002917680492452693",
            "extra": "mean: 76.33307142857174 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 168.88647836949372,
            "unit": "iter/sec",
            "range": "stddev: 0.0002565189906767642",
            "extra": "mean: 5.921137142857447 msec\nrounds: 175"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 228.92916785615114,
            "unit": "iter/sec",
            "range": "stddev: 0.0007527799580299554",
            "extra": "mean: 4.368163346613636 msec\nrounds: 251"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 451.2002646083048,
            "unit": "iter/sec",
            "range": "stddev: 0.00015214483540998075",
            "extra": "mean: 2.216310756972003 msec\nrounds: 502"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 426.5281909058151,
            "unit": "iter/sec",
            "range": "stddev: 0.00020637812614897916",
            "extra": "mean: 2.3445109170306107 msec\nrounds: 458"
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
          "id": "3078127e2fcba3f98928c96cd696d8b15eda4c78",
          "message": "Merge pull request #412 from TeoZosa/feat/make-local-logs-directory-fallback-to-tmp-or-abort\n\n✨ Make local log file output directory fallback to temp or abort",
          "timestamp": "2022-01-13T07:34:05Z",
          "tree_id": "ec8e4052faf4ddf5af3d254cdbccc39c76f4feb2"
        },
        "date": 1642059922473,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 117.88966448417307,
            "unit": "iter/sec",
            "range": "stddev: 0.00081511865708943",
            "extra": "mean: 8.482507812499984 msec\nrounds: 128"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 151.6422471461519,
            "unit": "iter/sec",
            "range": "stddev: 0.00035776406969588394",
            "extra": "mean: 6.594468354430319 msec\nrounds: 158"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.28883761552103,
            "unit": "iter/sec",
            "range": "stddev: 0.0005806455624255875",
            "extra": "mean: 5.120620370370429 msec\nrounds: 216"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 320.5865675190875,
            "unit": "iter/sec",
            "range": "stddev: 0.00015230711152558284",
            "extra": "mean: 3.1192822822823376 msec\nrounds: 333"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 111.51730064408689,
            "unit": "iter/sec",
            "range": "stddev: 0.0006449552889465623",
            "extra": "mean: 8.96721848739462 msec\nrounds: 119"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 135.96442876566138,
            "unit": "iter/sec",
            "range": "stddev: 0.0007085604420102738",
            "extra": "mean: 7.354864864864978 msec\nrounds: 148"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 195.06211509227577,
            "unit": "iter/sec",
            "range": "stddev: 0.0003255342907967041",
            "extra": "mean: 5.126572115384587 msec\nrounds: 208"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 312.3380225554177,
            "unit": "iter/sec",
            "range": "stddev: 0.00018301014016064554",
            "extra": "mean: 3.2016595092023143 msec\nrounds: 326"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 12.678598435279818,
            "unit": "iter/sec",
            "range": "stddev: 0.002560449643934102",
            "extra": "mean: 78.8730714285715 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 12.874001230386778,
            "unit": "iter/sec",
            "range": "stddev: 0.0047643208808843445",
            "extra": "mean: 77.67592857142803 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 157.50386459622445,
            "unit": "iter/sec",
            "range": "stddev: 0.0007567474279742344",
            "extra": "mean: 6.349050561797905 msec\nrounds: 178"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 239.94355613489856,
            "unit": "iter/sec",
            "range": "stddev: 0.00023559212142828227",
            "extra": "mean: 4.167646825396679 msec\nrounds: 252"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 459.5228878117283,
            "unit": "iter/sec",
            "range": "stddev: 0.00010882024982219599",
            "extra": "mean: 2.176170168067257 msec\nrounds: 476"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 441.1061023193754,
            "unit": "iter/sec",
            "range": "stddev: 0.0001082669644122037",
            "extra": "mean: 2.267028260869461 msec\nrounds: 460"
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
          "id": "3120f968e80fd003cdaa66e395c540734077e026",
          "message": ":bookmark: Bump version number to `0.17.1`",
          "timestamp": "2022-01-13T07:40:22Z",
          "tree_id": "85368f943362aedf74cb7e7a68e1545a9bb57e1a"
        },
        "date": 1642060708362,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 131.7505318105411,
            "unit": "iter/sec",
            "range": "stddev: 0.00018705076712073883",
            "extra": "mean: 7.590102189781006 msec\nrounds: 137"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 130.85459529198994,
            "unit": "iter/sec",
            "range": "stddev: 0.0011362187371170287",
            "extra": "mean: 7.642070175438565 msec\nrounds: 171"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 204.33070138131274,
            "unit": "iter/sec",
            "range": "stddev: 0.0003551648902405161",
            "extra": "mean: 4.8940271493212615 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer_non_str_keys[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 328.42457038321334,
            "unit": "iter/sec",
            "range": "stddev: 0.00013497765813795282",
            "extra": "mean: 3.0448391812865188 msec\nrounds: 342"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 119.48790896159348,
            "unit": "iter/sec",
            "range": "stddev: 0.000394912159491548",
            "extra": "mean: 8.369047619047597 msec\nrounds: 126"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 146.54818354926388,
            "unit": "iter/sec",
            "range": "stddev: 0.00042910106786327325",
            "extra": "mean: 6.8236942675160375 msec\nrounds: 157"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 208.59584790436764,
            "unit": "iter/sec",
            "range": "stddev: 0.00019755563811794168",
            "extra": "mean: 4.793959276018081 msec\nrounds: 221"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_orjson_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 321.04857926392054,
            "unit": "iter/sec",
            "range": "stddev: 0.0001805309382245535",
            "extra": "mean: 3.1147934131735933 msec\nrounds: 334"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration enabled]",
            "value": 14.031135088762065,
            "unit": "iter/sec",
            "range": "stddev: 0.0010193111900674214",
            "extra": "mean: 71.2700714285709 msec\nrounds: 14"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[stdlib-based config (Legacy)-Sentry integration disabled]",
            "value": 13.322142733437312,
            "unit": "iter/sec",
            "range": "stddev: 0.0023644182612819068",
            "extra": "mean: 75.06299999999963 msec\nrounds: 15"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration enabled]",
            "value": 170.80959000953735,
            "unit": "iter/sec",
            "range": "stddev: 0.00033972630177512284",
            "extra": "mean: 5.854472222222205 msec\nrounds: 180"
          },
          {
            "name": "tests/benchmarks/test_benchmarks.py::TestStructlogSentryLoggerBenchmarks::test_stdlib_json_serializer[structlog-specific config (Optimized)-Sentry integration disabled]",
            "value": 243.44467788592382,
            "unit": "iter/sec",
            "range": "stddev: 0.0002643059853424605",
            "extra": "mean: 4.107709433962618 msec\nrounds: 265"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog_non_str_keys",
            "value": 469.6092965424615,
            "unit": "iter/sec",
            "range": "stddev: 0.00014242682565095163",
            "extra": "mean: 2.129429735234343 msec\nrounds: 491"
          },
          {
            "name": "tests/benchmarks/test_structlog_benchmarks.py::test_gold_standard_structlog",
            "value": 440.5960610004351,
            "unit": "iter/sec",
            "range": "stddev: 0.00017794705032551927",
            "extra": "mean: 2.269652610441773 msec\nrounds: 498"
          }
        ]
      }
    ]
  }
}