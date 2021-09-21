window.BENCHMARK_DATA = {
  "lastUpdate": 1632257205220,
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
          "id": "a830bc4a08c52c80a7d23252aaa468971a09cae7",
          "message": ":memo: Remove year from \"Performance\" section\n\nEasier to maintain; preempt risk of looking dated if the year\naccidentally doesn't get updated.",
          "timestamp": "2021-09-16T00:44:59Z",
          "tree_id": "6e6f16f6f92bbe32b37814f19654a748ccb5504f"
        },
        "date": 1631755536729,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.33908755307922,
            "unit": "iter/sec",
            "range": "stddev: 0.0006182579702986816",
            "extra": "mean: 14.421879999999968 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.464917637984126,
            "unit": "iter/sec",
            "range": "stddev: 0.0009219894429805382",
            "extra": "mean: 74.26707142857155 msec\nrounds: 14"
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
          "id": "4cc61459ec5c5a6f91481c6ff85a23300f099946",
          "message": ":construction_worker: Benchmark based on process time\n\nGiven that benchmarks run automatically on cloud instances during CI,\nresource contention may confound metrics. Benchmarking based on process\ntime will lead to more accurate results within and between environment.\n\nNote: logging is inherently I/O-bound and process time, by definition,\nexcludes time spent waiting on I/O, so these benchmarks are *not*\na good indication of real-world performance. Instead, they are meant to\ncompare performance across different combinations of Python\ninterpreters, platforms, and library types (viz. Python and C).",
          "timestamp": "2021-09-16T01:00:37Z",
          "tree_id": "addd2c89830236692cba95e762cb2fb0018b4598"
        },
        "date": 1631757058977,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.74685812620595,
            "unit": "iter/sec",
            "range": "stddev: 0.0007975034782381188",
            "extra": "mean: 12.862256097560968 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.119454348980215,
            "unit": "iter/sec",
            "range": "stddev: 0.001173538937613683",
            "extra": "mean: 70.82426666666657 msec\nrounds: 15"
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
          "id": "99dd7a9b89d48ea97eacf85123b3fb121a53e9bd",
          "message": ":memo: Fix broken link",
          "timestamp": "2021-09-16T04:36:21Z",
          "tree_id": "27a53814f2e5df6ee6610a9e4460a01f86308d40"
        },
        "date": 1631768399369,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.49735690874316,
            "unit": "iter/sec",
            "range": "stddev: 0.0005878779440603658",
            "extra": "mean: 15.267791666666648 msec\nrounds: 72"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.410572280127614,
            "unit": "iter/sec",
            "range": "stddev: 0.0019594281315130383",
            "extra": "mean: 80.57646153846157 msec\nrounds: 13"
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
          "id": "d23896f21f544a8e0a4c5d0d81f2128223599d91",
          "message": ":rotating_light: Fix `pylint` error: `unspecified-encoding`\n\nError log:\n```\npoetry run tox -e precommit -- pylint\nprecommit recreate: /Users/TeofiloZosa/Developer/personal/structlog-sentry-logger/.tox/precommit\nprecommit installdeps: importlib-metadata, pre-commit, mypy, pylint, emoji, pytest, pytest-benchmark, pytest-mock, sphinx, types-emoji, -rrequirements.txt\nprecommit installed: alabaster==0.7.12,astroid==2.8.0,attrs==21.2.0,Babel==2.9.1,backports.entry-points-selectable==1.1.0,certifi==2021.5.30,cfgv==3.3.1,charset-normalizer==2.0.6,colorama==0.4.4,distlib==0.3.2,docutils==0.17.1,emoji==1.5.0,filelock==3.0.12,gitdb==4.0.7,GitPython==3.1.23,identify==2.2.14,idna==3.2,imagesize==1.2.0,importlib-metadata==4.8.1,iniconfig==1.1.1,isort==5.9.3,Jinja2==3.0.1,lazy-object-proxy==1.6.0,MarkupSafe==2.0.1,mccabe==0.6.1,mypy==0.910,mypy-extensions==0.4.3,nodeenv==1.6.0,orjson==3.6.3,packaging==21.0,platformdirs==2.3.0,pluggy==1.0.0,pre-commit==2.15.0,py==1.10.0,py-cpuinfo==8.0.0,Pygments==2.10.0,pylint==2.11.1,pyparsing==2.4.7,pytest==6.2.5,pytest-benchmark==3.4.1,pytest-mock==3.6.1,python-dotenv==0.19.0,pytz==2021.1,PyYAML==5.4.1,requests==2.26.0,sentry-sdk==1.3.1,six==1.16.0,smmap==4.0.0,snowballstemmer==2.1.0,Sphinx==4.2.0,sphinxcontrib-applehelp==1.0.2,sphinxcontrib-devhelp==1.0.2,sphinxcontrib-htmlhelp==2.0.0,sphinxcontrib-jsmath==1.0.1,sphinxcontrib-qthelp==1.0.3,sphinxcontrib-serializinghtml==1.1.5,structlog==21.1.0,toml==0.10.2,typed-ast==1.4.3,types-emoji==1.2.4,typing-extensions==3.10.0.2,urllib3==1.26.6,virtualenv==20.8.0,wrapt==1.12.1,zipp==3.5.0\nprecommit run-test-pre: PYTHONHASHSEED='3671854975'\nprecommit run-test: commands[0] | pre-commit run pylint -vv --all-files --color always\npylint...................................................................Failed\n- hook id: pylint\n- duration: 10.63s\n- exit code: 4\n\n************* Module conf\ndocs/source/conf.py:60:rotating_light: W1514: Using open without explicitly specifying an encoding (unspecified-encoding)\n\n-------------------------------------------------------------------\nYour code has been rated at 9.92/10 (previous run: 10.00/10, -0.08)\n```",
          "timestamp": "2021-09-17T22:36:47Z",
          "tree_id": "6952d59be8e9966ffdaeee0d5f50753de6746fb8"
        },
        "date": 1631919522470,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.99702993334454,
            "unit": "iter/sec",
            "range": "stddev: 0.0003803832542251736",
            "extra": "mean: 13.69918750000001 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.695134734791994,
            "unit": "iter/sec",
            "range": "stddev: 0.0008677390544783388",
            "extra": "mean: 68.04973333333339 msec\nrounds: 15"
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
          "id": "959344c1be799a11ca12d6c60c83734c0ac4a8f0",
          "message": ":construction_worker: Run benchmarks for 10 rounds minimum",
          "timestamp": "2021-09-17T22:39:13Z",
          "tree_id": "2cfa7f3c76575ff6640fc6d0fbae50ef7482feac"
        },
        "date": 1631920899659,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.08052259339978,
            "unit": "iter/sec",
            "range": "stddev: 0.0011516490734892046",
            "extra": "mean: 13.873373333333287 msec\nrounds: 75"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.776097093932332,
            "unit": "iter/sec",
            "range": "stddev: 0.002311033693127477",
            "extra": "mean: 72.58949999999993 msec\nrounds: 14"
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
          "id": "3f9c5d9e1fcf990601ea83e9094f53ef699f436d",
          "message": "Merge pull request #262 from TeoZosa/dependabot/pip/dot-github/workflows/tox-3.24.4",
          "timestamp": "2021-09-17T23:37:37Z",
          "tree_id": "5a61dcaceaf3d00af9f7d7ac5cc96dc8457f88eb"
        },
        "date": 1631927054512,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.07069131301887,
            "unit": "iter/sec",
            "range": "stddev: 0.000509811194535145",
            "extra": "mean: 13.875265822784744 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.172507764509554,
            "unit": "iter/sec",
            "range": "stddev: 0.0014521093335157277",
            "extra": "mean: 70.55914285714314 msec\nrounds: 14"
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
          "id": "c3eb93104a61ab01094f0acfb85e1ce97bcab5aa",
          "message": "Merge pull request #265 from TeoZosa/dependabot/pip/emoji-1.5.0",
          "timestamp": "2021-09-17T23:51:01Z",
          "tree_id": "429dbf163282c04a49d771a2c8f0bb9a0eeb55bb"
        },
        "date": 1631929173778,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.42597542378859,
            "unit": "iter/sec",
            "range": "stddev: 0.000491400730829263",
            "extra": "mean: 13.619158536585399 msec\nrounds: 82"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.623959505281151,
            "unit": "iter/sec",
            "range": "stddev: 0.0009824890015135079",
            "extra": "mean: 68.38093333333356 msec\nrounds: 15"
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
          "id": "fecaf63d91064bb0453d2246ff3bc30801074690",
          "message": "Merge pull request #264 from TeoZosa/dependabot/pip/pylint-2.11.1",
          "timestamp": "2021-09-18T00:04:26Z",
          "tree_id": "40ef8ad8a56ad319a91e5f5335b1c1c387ae8062"
        },
        "date": 1631929793817,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.44967529019205,
            "unit": "iter/sec",
            "range": "stddev: 0.0005794204077226934",
            "extra": "mean: 13.995864864864833 msec\nrounds: 74"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.463536083830206,
            "unit": "iter/sec",
            "range": "stddev: 0.001695050165659363",
            "extra": "mean: 74.27469230769222 msec\nrounds: 13"
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
          "id": "2cbc574e1735d50fb1a9c8bc047e15b2ce725f8a",
          "message": "Merge pull request #263 from TeoZosa/dependabot/pip/tox-3.24.4",
          "timestamp": "2021-09-18T01:33:51Z",
          "tree_id": "5f076b277ecb6ca479b07bbb00aa9ffb04fd7c0c"
        },
        "date": 1631931444156,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.24468818643905,
            "unit": "iter/sec",
            "range": "stddev: 0.0009104573109665761",
            "extra": "mean: 13.841848101265784 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.597487184368402,
            "unit": "iter/sec",
            "range": "stddev: 0.005683947720757822",
            "extra": "mean: 73.5429999999996 msec\nrounds: 14"
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
          "id": "20bb41230a00c11bac58afbae88b56a1f48cf897",
          "message": ":memo: Note documentation dependency logic and future remediation plan",
          "timestamp": "2021-09-20T00:02:06Z",
          "tree_id": "12049da28a578ef67868b1f8b29cdb4393d5409e"
        },
        "date": 1632097967443,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 71.23059417135373,
            "unit": "iter/sec",
            "range": "stddev: 0.0004615157632631069",
            "extra": "mean: 14.038911392405069 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.462082829169074,
            "unit": "iter/sec",
            "range": "stddev: 0.001239953148116635",
            "extra": "mean: 69.14633333333326 msec\nrounds: 15"
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
          "id": "a5ed13d385ce7ebbf37ca0d0148dcfee66e6eccf",
          "message": "Merge pull request #268 from TeoZosa/dependabot/pip/poetry-1.1.9",
          "timestamp": "2021-09-20T14:22:55Z",
          "tree_id": "f7c8029ca6980f5a60d16dc991f01f3897d87584"
        },
        "date": 1632156843747,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.3160749530699,
            "unit": "iter/sec",
            "range": "stddev: 0.0004605604549596605",
            "extra": "mean: 13.456038961038956 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.249330993909851,
            "unit": "iter/sec",
            "range": "stddev: 0.0010965604971041264",
            "extra": "mean: 70.17873333333326 msec\nrounds: 15"
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
          "id": "4a1735882d9546db6acedc2edb65b34f8d3bf95d",
          "message": "Merge pull request #270 from TeoZosa/dependabot/pip/gitpython-3.1.24",
          "timestamp": "2021-09-20T15:17:46Z",
          "tree_id": "06662ff5700b686ef043e9f6d43ab59e8cbb5f6f"
        },
        "date": 1632159030763,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 65.1431626751675,
            "unit": "iter/sec",
            "range": "stddev: 0.0014000728462154352",
            "extra": "mean: 15.350805194805176 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.120675291037266,
            "unit": "iter/sec",
            "range": "stddev: 0.0007273042805342485",
            "extra": "mean: 70.81814285714253 msec\nrounds: 14"
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
          "id": "08c2314084ac7bcb2b91fba901de670874867f9b",
          "message": "Merge pull request #267 from TeoZosa/dependabot/pip/dot-github/workflows/poetry-1.1.9",
          "timestamp": "2021-09-20T16:26:07Z",
          "tree_id": "93b3d3e711e4554809880c9fc9249a3800273076"
        },
        "date": 1632161456851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.37726320232743,
            "unit": "iter/sec",
            "range": "stddev: 0.0005199867232968432",
            "extra": "mean: 13.26660000000004 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.351979425002336,
            "unit": "iter/sec",
            "range": "stddev: 0.001236832544387879",
            "extra": "mean: 69.67679999999982 msec\nrounds: 15"
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
          "id": "8aa33a82109f519b45fbbc6d5ea038a980113305",
          "message": ":bento: Update `.mutmut-cache`",
          "timestamp": "2021-09-20T22:37:47Z",
          "tree_id": "24e309019fa1e569286d1bfa8170308fde51e30c"
        },
        "date": 1632178783097,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.36154462548174,
            "unit": "iter/sec",
            "range": "stddev: 0.0002696027551225105",
            "extra": "mean: 13.269367088607597 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.915438784242578,
            "unit": "iter/sec",
            "range": "stddev: 0.0009313033787832789",
            "extra": "mean: 67.04462500000002 msec\nrounds: 16"
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
          "id": "3f6fdd33f54576d220f5601bb6e09f9fc4c8a468",
          "message": ":green_heart: Install project directly",
          "timestamp": "2021-09-20T23:10:32Z",
          "tree_id": "ace8007d2305e1458502e5f58792e33d9ae53075"
        },
        "date": 1632180471845,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.54625128240451,
            "unit": "iter/sec",
            "range": "stddev: 0.0004468863501292662",
            "extra": "mean: 13.59688607594938 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.421537701264583,
            "unit": "iter/sec",
            "range": "stddev: 0.0004197784222771946",
            "extra": "mean: 69.3407333333333 msec\nrounds: 15"
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
          "id": "3f6fdd33f54576d220f5601bb6e09f9fc4c8a468",
          "message": ":green_heart: Install project directly",
          "timestamp": "2021-09-20T23:10:32Z",
          "tree_id": "ace8007d2305e1458502e5f58792e33d9ae53075"
        },
        "date": 1632181371439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 74.51266389293302,
            "unit": "iter/sec",
            "range": "stddev: 0.000641190426576138",
            "extra": "mean: 13.42053749999995 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.240024151080961,
            "unit": "iter/sec",
            "range": "stddev: 0.0013108948851835954",
            "extra": "mean: 70.2246 msec\nrounds: 15"
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
          "id": "05efc63e15c973b365bd9fe8035f22673ad07ede",
          "message": ":construction_worker: Disable retries for simple `pip install`s",
          "timestamp": "2021-09-20T23:45:10Z",
          "tree_id": "b43e9b53a969dc66fbbe0a4e53fab8c561850581"
        },
        "date": 1632181982915,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.96123325269781,
            "unit": "iter/sec",
            "range": "stddev: 0.00031710594326443713",
            "extra": "mean: 12.506060240963842 msec\nrounds: 83"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 15.083766755943705,
            "unit": "iter/sec",
            "range": "stddev: 0.0008811765595878052",
            "extra": "mean: 66.29643750000002 msec\nrounds: 16"
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
          "id": "849668599cf92a51dace04fab335022e2cfafad1",
          "message": ":construction_worker: Differentiate `.tox` cache from `.venv` cache",
          "timestamp": "2021-09-21T00:04:44Z",
          "tree_id": "85b7467d729a77c429b9ad02f77e872a46f0cd4d"
        },
        "date": 1632183260293,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 77.19809513700217,
            "unit": "iter/sec",
            "range": "stddev: 0.0002656109553249063",
            "extra": "mean: 12.953687500000056 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.001392671857745,
            "unit": "iter/sec",
            "range": "stddev: 0.0008977118426203437",
            "extra": "mean: 71.42146666666675 msec\nrounds: 15"
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
          "id": "3919b79fbefdde2ff81ecf5ea9c3c6f60e81599b",
          "message": ":fire: Remove redundant PR-triggered workflow trigger",
          "timestamp": "2021-09-21T00:30:02Z",
          "tree_id": "cbb01e6bafef410a4f20e5086374804001801735"
        },
        "date": 1632184762421,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 69.98682975112858,
            "unit": "iter/sec",
            "range": "stddev: 0.0010596782190306817",
            "extra": "mean: 14.28840259740261 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.926270609719912,
            "unit": "iter/sec",
            "range": "stddev: 0.0013867882970921893",
            "extra": "mean: 71.80673333333368 msec\nrounds: 15"
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
          "id": "da76a8646ff9998c52ba6a81d51daa6e0ee069b5",
          "message": ":construction_worker: Streamline performance testing CI job",
          "timestamp": "2021-09-21T01:01:28Z",
          "tree_id": "b18323db408e71aa3a8d85c3997528e6acad7640"
        },
        "date": 1632186669651,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.19635186280442,
            "unit": "iter/sec",
            "range": "stddev: 0.00047249192890156907",
            "extra": "mean: 13.85111538461544 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.272135368349566,
            "unit": "iter/sec",
            "range": "stddev: 0.0030696277066028983",
            "extra": "mean: 70.06659999999988 msec\nrounds: 15"
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
          "id": "77eb8a129cd88614cb31863ea67655674f31b9d0",
          "message": ":alembic: Test fixing erroneous benchmarks publishing",
          "timestamp": "2021-09-21T05:32:34Z",
          "tree_id": "1d2648c09d2e26a853668b7a3c5c060cabb2364c"
        },
        "date": 1632202682173,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.67238728792191,
            "unit": "iter/sec",
            "range": "stddev: 0.0006691071047913107",
            "extra": "mean: 13.760384615384709 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.119361315397285,
            "unit": "iter/sec",
            "range": "stddev: 0.001988545967953945",
            "extra": "mean: 70.82473333333367 msec\nrounds: 15"
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
          "id": "06110252c92f623497e3f44ffd0b8fc9d2d5ce4e",
          "message": ":green_heart: Fix erroneous benchmarks publishing",
          "timestamp": "2021-09-21T06:48:20Z",
          "tree_id": "1d2648c09d2e26a853668b7a3c5c060cabb2364c"
        },
        "date": 1632207216949,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.21179163009789,
            "unit": "iter/sec",
            "range": "stddev: 0.0010185887751723525",
            "extra": "mean: 13.848153846153842 msec\nrounds: 78"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.925681849587656,
            "unit": "iter/sec",
            "range": "stddev: 0.0017502612735363957",
            "extra": "mean: 71.80976923076915 msec\nrounds: 13"
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
          "id": "290ddd4ce36bb4a8507b0f189c7a2010559cdddb",
          "message": "Merge pull request #275 from TeoZosa/dependabot/pip/pytest-xdist-2.4.0",
          "timestamp": "2021-09-21T13:17:57Z",
          "tree_id": "96fae1d78f537c6ea20a044eb769166249c62f50"
        },
        "date": 1632232726734,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 76.4174064296151,
            "unit": "iter/sec",
            "range": "stddev: 0.0007824187701968635",
            "extra": "mean: 13.086023809523798 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.947026802821641,
            "unit": "iter/sec",
            "range": "stddev: 0.0009238994511488354",
            "extra": "mean: 66.90293749999992 msec\nrounds: 16"
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
          "id": "aa7ee9e570c6ee091f255b6cef84d89fdf0abd16",
          "message": "Merge pull request #276 from TeoZosa/dependabot/pip/sentry-sdk-1.4.0",
          "timestamp": "2021-09-21T13:31:33Z",
          "tree_id": "e35f66b1b2ccb595a98807cb7552912be12648bf"
        },
        "date": 1632233446448,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 62.36202402185159,
            "unit": "iter/sec",
            "range": "stddev: 0.0005229874460730891",
            "extra": "mean: 16.035400000000017 msec\nrounds: 65"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 11.631197974620726,
            "unit": "iter/sec",
            "range": "stddev: 0.002015773992261564",
            "extra": "mean: 85.97566666666667 msec\nrounds: 12"
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
          "id": "9bce65619929b63ece96b7e408ebafc8ec14ae85",
          "message": ":bug: Preempt premature brace expansion by the shell\n\nIf multiple commands are passed via brace syntax, quoting the string\nallows direct evaluation by tox as opposed to generating multiple envs\nin the call to tox.\n\nFor example,\n`poetry run tox -e py3{8,9} -- $(POSARGS)`\nbecomes\n`poetry run tox -e py38 py39 -- $(POSARGS)`\nWhereas\n`poetry run tox -e \"py3{8,9}\" -- $(POSARGS)`\npasses \"py3{8,9}\" directly to tox.\nNote: to activate this behavior via the `tox-%` make target, users would\n have to also invoke it with quotes, e.g., `make tox-\"py3{8,9}\"`.\n- If a user were to enter `make tox-py3{8,9}`, this would become\n`make tox-py38 tox-py39\"`, which, while this would still work, leads to\n different semantics as separate make targets are actually invoked.\n\nsee: https://www.gnu.org/software/bash/manual/html_node/Brace-Expansion.html",
          "timestamp": "2021-09-21T18:52:19Z",
          "tree_id": "648410f6afef021ae2b6552a61636df5ec976b9b"
        },
        "date": 1632250634516,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.12132093330713,
            "unit": "iter/sec",
            "range": "stddev: 0.000469859887545255",
            "extra": "mean: 13.31180000000003 msec\nrounds: 80"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.219235972012711,
            "unit": "iter/sec",
            "range": "stddev: 0.0023026901183078284",
            "extra": "mean: 70.32726666666686 msec\nrounds: 15"
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
          "id": "bc817a8e82da08d7c19b19f4074f1b24355230d3",
          "message": ":bug: Fix `test` target help text rendering",
          "timestamp": "2021-09-21T19:02:06Z",
          "tree_id": "af626cf566f0baa9ca47e7f272fa9c0f69d41689"
        },
        "date": 1632251256005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.65413810122499,
            "unit": "iter/sec",
            "range": "stddev: 0.0003359754331509002",
            "extra": "mean: 13.218047619047661 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.61125300261244,
            "unit": "iter/sec",
            "range": "stddev: 0.0007212008636394029",
            "extra": "mean: 68.44040000000025 msec\nrounds: 15"
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
          "id": "4366858835a6c743efd691fefb3df3e67c2f62fa",
          "message": ":memo: Update help text: `bump-commit-and-push-project-version-number-%`\n\nNote: Cannot put the \"Note\" section underneath the help text as the help\n text must directly precede a valid target name (and not other comments)\n to be rendered properly.",
          "timestamp": "2021-09-21T19:23:50Z",
          "tree_id": "07399c0cf318486dadf19ecb850eca1864daf18f"
        },
        "date": 1632252704907,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 75.11933514634,
            "unit": "iter/sec",
            "range": "stddev: 0.00040967548409930933",
            "extra": "mean: 13.31215189873419 msec\nrounds: 79"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.72741472579006,
            "unit": "iter/sec",
            "range": "stddev: 0.0011252517300779632",
            "extra": "mean: 72.8469285714282 msec\nrounds: 14"
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
          "id": "84d84fd9451cd9f82ff8372975b0a7eaedf96fe5",
          "message": "Update help text: `test-mutations`",
          "timestamp": "2021-09-21T19:31:16Z",
          "tree_id": "4cbb2406183f46e03463e8f10e4a00a0ef2d67ae"
        },
        "date": 1632253022983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 64.4151246712731,
            "unit": "iter/sec",
            "range": "stddev: 0.0009630868311037777",
            "extra": "mean: 15.524304347826018 msec\nrounds: 69"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 12.120262841884594,
            "unit": "iter/sec",
            "range": "stddev: 0.006116663082860553",
            "extra": "mean: 82.50646153846188 msec\nrounds: 13"
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
          "id": "4222aae8292928efcdb5e62004dd68604a3a219c",
          "message": ":memo: Document \"*.so\" and \"*.pyd\" cleanup rationale",
          "timestamp": "2021-09-21T19:35:10Z",
          "tree_id": "4cd730a1f49dbf9d89a30be6087da32f6940f0d5"
        },
        "date": 1632253848505,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 73.72985953982973,
            "unit": "iter/sec",
            "range": "stddev: 0.0005363771741980344",
            "extra": "mean: 13.56302597402601 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.452601105265671,
            "unit": "iter/sec",
            "range": "stddev: 0.0017456026984833501",
            "extra": "mean: 74.33506666666686 msec\nrounds: 15"
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
          "id": "3c1c0b28d5995d293a125e9243023a304740dc23",
          "message": ":construction_worker: Namespace CI jobs caches\n\nReduces the size of each cache and ensures cache hits occur if and only\nif jobs had previously succeeded (thus implying that job-specific\ntestenvs had been correctly provisioned in `.tox`).",
          "timestamp": "2021-09-21T20:34:11Z",
          "tree_id": "b3fc8320f3d29c2a91e9e44da4d81b04b187efd8"
        },
        "date": 1632256832007,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 72.82597901287733,
            "unit": "iter/sec",
            "range": "stddev: 0.0005201190124205556",
            "extra": "mean: 13.731363636363568 msec\nrounds: 77"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 13.616412055971288,
            "unit": "iter/sec",
            "range": "stddev: 0.0020755865965504166",
            "extra": "mean: 73.44078571428543 msec\nrounds: 14"
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
          "id": "a4559f8431061ad1283159a520d28aaaa29cf6e8",
          "message": ":construction_worker: Run CI mutation testing on MacOS runner\n\nSince MacOS is the default developer OS, ensure maximal `.mutmut`\ncache-consistency in order to shorten mutation testing job times in CI.",
          "timestamp": "2021-09-21T20:37:13Z",
          "tree_id": "60fb4d43a0269d983444569658694f1610d0734d"
        },
        "date": 1632257203483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_benchmarks.py::test_logging_orjson_serializer",
            "value": 79.20963868146096,
            "unit": "iter/sec",
            "range": "stddev: 0.000241200678893185",
            "extra": "mean: 12.62472619047624 msec\nrounds: 84"
          },
          {
            "name": "tests/test_benchmarks.py::test_logging_stdlib_json_serializer",
            "value": 14.91118895856277,
            "unit": "iter/sec",
            "range": "stddev: 0.0008171566965193699",
            "extra": "mean: 67.06373333333347 msec\nrounds: 15"
          }
        ]
      }
    ]
  }
}