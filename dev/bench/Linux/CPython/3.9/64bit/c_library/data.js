window.BENCHMARK_DATA = {
  "lastUpdate": 1632402967589,
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "a208950b450fd4bf11b08fcb9cd8671f83ca42d5",
          "message": ":construction_worker: Invoke `tox-%` target directly when benchmarking in CI",
          "timestamp": "2021-09-21T20:55:29Z",
          "tree_id": "1c37749a5fb85d6155bbe2f0ae768542dc655be8"
        },
        "date": 1632258834464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.3344077544503,
            "unit": "iter/sec",
            "range": "stddev: 0.0008978685401913809",
            "extra": "mean: 13.274146964285734 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.77562476323809,
            "unit": "iter/sec",
            "range": "stddev: 0.0017060439620432556",
            "extra": "mean: 50.567302523809545 msec\nrounds: 21"
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
            "email": "TeoZosa@users.noreply.github.com",
            "name": "Teofilo Zosa"
          },
          "id": "a208950b450fd4bf11b08fcb9cd8671f83ca42d5",
          "message": ":construction_worker: Invoke `tox-%` target directly when benchmarking in CI",
          "timestamp": "2021-09-21T20:55:29Z",
          "tree_id": "1c37749a5fb85d6155bbe2f0ae768542dc655be8"
        },
        "date": 1632258834464,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.3344077544503,
            "unit": "iter/sec",
            "range": "stddev: 0.0008978685401913809",
            "extra": "mean: 13.274146964285734 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 19.77562476323809,
            "unit": "iter/sec",
            "range": "stddev: 0.0017060439620432556",
            "extra": "mean: 50.567302523809545 msec\nrounds: 21"
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
          "id": "40c233556ac261160dc3947d55e87227944d239b",
          "message": ":memo: Update performance benchmark graph link\n\nAs a consequence of TeoZosa/structlog-sentry-logger#278",
          "timestamp": "2021-09-21T21:15:08Z",
          "tree_id": "971b961ce558994aed2c69c9105a1f945b4f2f00"
        },
        "date": 1632259072967,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.79542388130858,
            "unit": "iter/sec",
            "range": "stddev: 0.0011402857983563277",
            "extra": "mean: 12.225622810526376 msec\nrounds: 95"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.366505880881526,
            "unit": "iter/sec",
            "range": "stddev: 0.003262016903337339",
            "extra": "mean: 49.100223958333544 msec\nrounds: 24"
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
          "id": "65d495f680da879973081307fd6a5770e263da0d",
          "message": ":memo: Finish pretty-logging setup instructions",
          "timestamp": "2021-09-22T02:17:44Z",
          "tree_id": "46c4b206909b80a4e28c6a02f256f62278f0fdbf"
        },
        "date": 1632277213043,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 81.46846297196619,
            "unit": "iter/sec",
            "range": "stddev: 0.0005298691464001909",
            "extra": "mean: 12.274688431818165 msec\nrounds: 88"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 20.678710274630184,
            "unit": "iter/sec",
            "range": "stddev: 0.0015605735199014574",
            "extra": "mean: 48.35891536363643 msec\nrounds: 22"
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
          "id": "8acbaf1c8c2fa7f4a421e26ae615da472fde0871",
          "message": ":memo: Clarify pretty-logging setup instructions context",
          "timestamp": "2021-09-22T02:40:19Z",
          "tree_id": "a4d625c5b322932c250ff081915e481c29da5158"
        },
        "date": 1632278511536,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 118.40566524979813,
            "unit": "iter/sec",
            "range": "stddev: 0.00004807777659274637",
            "extra": "mean: 8.445541840336096 msec\nrounds: 119"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 25.231931746786127,
            "unit": "iter/sec",
            "range": "stddev: 0.00004991546141904132",
            "extra": "mean: 39.6323202692308 msec\nrounds: 26"
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
          "id": "34fdef5ae571860e441c64ed54ef59c083179104",
          "message": "Merge pull request #279 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.10",
          "timestamp": "2021-09-22T13:08:10Z",
          "tree_id": "c99e3009a0f9e338bcd2dde66df63bdc10027c2d"
        },
        "date": 1632322227105,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 85.35645097528834,
            "unit": "iter/sec",
            "range": "stddev: 0.0003451232860153603",
            "extra": "mean: 11.715576134831466 msec\nrounds: 89"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 21.375937312382185,
            "unit": "iter/sec",
            "range": "stddev: 0.00110533962704431",
            "extra": "mean: 46.78157431818168 msec\nrounds: 22"
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
          "id": "da8e12159cc86b460546cc6a6634262a62fc8438",
          "message": "Merge pull request #282 from TeoZosa/dependabot/pip/sentry-sdk-1.4.1",
          "timestamp": "2021-09-22T14:08:59Z",
          "tree_id": "3ab6996b40c8024c951d13f7c8454bd52a5a3bda"
        },
        "date": 1632323128907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 115.22107735977374,
            "unit": "iter/sec",
            "range": "stddev: 0.0001925440041319401",
            "extra": "mean: 8.678967623931648 msec\nrounds: 117"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 24.99680575817938,
            "unit": "iter/sec",
            "range": "stddev: 0.00006417210847090215",
            "extra": "mean: 40.00511144000001 msec\nrounds: 25"
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
          "id": "4ee8a89f671b45495c1a8ac2cf6cfc4ed724c155",
          "message": "Merge pull request #281 from TeoZosa/dependabot/pip/docs/poetry-1.1.10",
          "timestamp": "2021-09-22T14:25:47Z",
          "tree_id": "0dcbdbae8540e49c647ccb9e030c273bd412fdb5"
        },
        "date": 1632323832050,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 102.17665028281604,
            "unit": "iter/sec",
            "range": "stddev: 0.00028000390938510966",
            "extra": "mean: 9.78697184955748 msec\nrounds: 113"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 22.775192854544418,
            "unit": "iter/sec",
            "range": "stddev: 0.0008895218699019977",
            "extra": "mean: 43.907421833333295 msec\nrounds: 24"
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
          "id": "3ee95c4916049e09e5ae4dae49f9b3297c55a527",
          "message": "Merge pull request #283 from TeoZosa/dependabot/pip/dot-github/workflows/tox-gh-actions-2.8.0",
          "timestamp": "2021-09-23T13:07:51Z",
          "tree_id": "913a0e8bbc013100885adde775b4795100542f29"
        },
        "date": 1632402966437,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.86181538127491,
            "unit": "iter/sec",
            "range": "stddev: 0.00106135264026527",
            "extra": "mean: 13.724610000000007 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 17.929784604307304,
            "unit": "iter/sec",
            "range": "stddev: 0.003555090649018362",
            "extra": "mean: 55.773118421052764 msec\nrounds: 19"
          }
        ]
      }
    ]
  }
}