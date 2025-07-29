#!/usr/bin/env python3
"""To_kv"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Complex types - string and int/float to tuple"""
    return (k, float(v ** 2))
