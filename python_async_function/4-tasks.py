#!/usr/bin/env python3
""" alter it into a new function task_wait_n"""
import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """Is nearly identical to wait_n except task_wait_random is being called"""
    result = []
    tasks = [task_wait_random(max_delay) for _ in range(n)]

    for task in asyncio.as_completed(tasks):
        delay = await task
        result.append(delay)

    return result
