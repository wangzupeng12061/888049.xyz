---
title: "KV Cache and Agent Memory: Drawing the Boundary Between Facts and Execution"
description: "Why KV cache is better treated as a model-execution-specific materialized view rather than an Agent's factual memory."
published: 2026-06-18
category: "AI Systems"
lang: en
tags: ["Agent Memory", "KV Cache", "LLM Inference"]
---

When discussing Agent memory, text, summaries, vectors, and KV cache often appear in the same architecture diagram. But reducing repeated computation does not give them the same semantics.

## Factual sources and derived views

Textual memory can be audited, edited, and deleted, making it suitable as a factual source. Summaries and vectors depend on a generation model or encoder and are derived representations that can be rebuilt. KV cache has even tighter constraints: it is bound to model weights, tokenizer, prompt layout, positional encoding, and inference implementation.

A safer definition is therefore:

> KV cache is not factual memory. It is a materialized view tied to a specific model execution environment.

This definition directly shapes invalidation. When a factual source changes, a system should not attempt to patch an old cache. It should trace the affected derived views and decide whether to delete, defer rebuilding, or recompute them on demand.

## What a version must explain

Adding one increasing version number to a memory object is not enough. A system should record at least the factual version, derived version, generation configuration, and the source range on which a view depends. Only then can it distinguish a cache that is still correct from one that merely still exists.

## The systems question

The hard part is not caching itself, but deciding what to retain under limited resources. Reuse probability, recomputation cost, latency, GPU memory pressure, and the cost of stale results must enter the same scheduling model. This is where Agent memory becomes a systems problem rather than a data-structure problem.
