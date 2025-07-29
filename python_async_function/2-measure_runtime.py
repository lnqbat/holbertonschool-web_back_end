#!/usr/bin/env python3
"""Measure the runtime"""
import asyncio
import time
from typing import Callable

wait_n = __import__('1-concurrent_coroutines').wait_n

def measure_time(n: int, max_delay: int) -> float:
    """A measure_time function with integers"""
    start = time.perf_counter()
    asyncio.run(wait_n(n, max_delay))
    end = time.perf_counter()
    total_time = end - start
    return total_time / n
