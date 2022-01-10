from typing import Generator

import pytest
from pytest_benchmark.fixture import BenchmarkFixture

import structlog_sentry_logger
from tests.benchmarks import utils
from tests.benchmarks.utils import TestCases

TEST_CASES = TestCases()


def test_logging_orjson_serializer_non_str_keys(benchmark: BenchmarkFixture) -> None:
    _benchmark_runner(benchmark, test_cases=TEST_CASES.non_str_keys)


def test_logging_orjson_serializer(benchmark: BenchmarkFixture) -> None:
    _benchmark_runner(benchmark, test_cases=TEST_CASES.basic)


@pytest.mark.usefixtures("temporarily_set_stlib_json_as_default_serializer")
def test_logging_stdlib_json_serializer(benchmark: BenchmarkFixture) -> None:
    test_cases = TEST_CASES.basic.copy()
    test_cases["uuid"] = str(test_cases["uuid"])
    _benchmark_runner(benchmark, test_cases=test_cases)


def _benchmark_runner(benchmark: BenchmarkFixture, test_cases: dict) -> None:
    logger = structlog_sentry_logger.get_logger()
    benchmark(utils.lots_of_logging, logger=logger, test_cases=test_cases)


@pytest.fixture(scope="function")
def temporarily_set_stlib_json_as_default_serializer() -> Generator:
    # pylint: disable=protected-access
    # Setup
    structlog_sentry_logger._config._toggle_json_library(use_orjson=False)

    # Pass control back to calling function
    yield

    # Teardown
    structlog_sentry_logger._config._toggle_json_library(use_orjson=True)
    # pylint: enable=protected-access
